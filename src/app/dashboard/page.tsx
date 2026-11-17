import { Users, UserCheck, UserX, GraduationCap } from "lucide-react";

import StatCard from "@/components/StatCard";
import StudentTable from "@/components/StudentTable";
import { students } from "@/lib/students";

export default function DashboardPage() {
  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active",
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive",
  ).length;

  const averageAttendance = Math.round(
    students.reduce((total, student) => total + student.attendance, 0) /
      totalStudents,
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's your student summary.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Students"
          value={totalStudents}
          description="All registered students"
          icon={Users}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Active Students"
          value={activeStudents}
          description="Currently active students"
          icon={UserCheck}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Inactive Students"
          value={inactiveStudents}
          description="Currently inactive students"
          icon={UserX}
          color="bg-red-100 text-red-600"
        />

        <StatCard
          title="Avg. Attendance"
          value={`${averageAttendance}%`}
          description="Average student attendance"
          icon={GraduationCap}
          color="bg-purple-100 text-purple-600"
        />
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">Recent Students</h2>

          <p className="text-sm text-gray-500">
            Overview of registered students.
          </p>
        </div>

        <StudentTable data={students.slice(0, 5)} />
      </section>
    </div>
  );
}
