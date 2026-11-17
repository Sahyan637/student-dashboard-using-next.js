import { Student } from "@/types/student";

export default function StudentTable({ data }: { data: Student[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="px-5 py-4">Student</th>
            <th className="px-5 py-4">Department</th>
            <th className="px-5 py-4">Semester</th>
            <th className="px-5 py-4">Attendance</th>
            <th className="px-5 py-4">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {data.map((student) => (
            <tr key={student.id}>
              <td className="px-5 py-4">
                <p className="font-semibold">{student.name}</p>
                <p className="text-xs">{student.email}</p>
              </td>
              <td className="px-5 py-4">{student.department}</td>
              <td className="px-5 py-4">{student.semester}</td>
              <td className="px-5 py-4">{student.attendance}</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${student.status === "Active" ? "bg-green-100" : "text-green-700"}`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
