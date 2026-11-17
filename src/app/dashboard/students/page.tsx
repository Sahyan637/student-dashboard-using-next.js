"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import StudentTable from "@/components/StudentTable";
import { students } from "@/lib/students";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const query = search.toLowerCase();

      return (
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Students</h1>

        <p className="text-sm text-gray-500">Manage all registered students.</p>
      </div>

      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or department..."
          className="w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
        />
      </div>

      <StudentTable data={filteredStudents} />

      <p className="text-sm text-gray-500">
        Showing {filteredStudents.length} of {students.length} students.
      </p>
    </div>
  );
}
