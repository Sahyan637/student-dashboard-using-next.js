import { NextResponse } from "next/server";
import { students } from "@/lib/students";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: students.length,
    data: students,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !body.name ||
      !body.email ||
      !body.department ||
      !Number.isInteger(body.semester) ||
      body.semester < 1 ||
      body.semester > 8
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid student information",
        },
        { status: 400 },
      );
    }

    const newStudent = {
      id: Math.max(0, ...students.map((s) => s.id)) + 1,
      name: body.name,
      email: body.email,
      department: body.department,
      semester: body.semester,
      status: "Active" as const,
      attendance: 0,
    };

    students.push(newStudent);

    return NextResponse.json(
      {
        success: true,
        message: "Student added successfully",
        data: newStudent,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body",
      },
      { status: 400 },
    );
  }
}
