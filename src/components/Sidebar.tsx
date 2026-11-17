"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserRoundPen,
  Settings,
  GraduationCap,
  X,
  LibraryBig,
} from "lucide-react";

const menuItems = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Student List",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    name: "Teacher List",
    href: "/dashboard/teachers",
    icon: UserRoundPen,
  },
  {
    name: "All Courses",
    href: "/dashboard/courses",
    icon: GraduationCap,
  },
  {
    name: "Library",
    href: "/dashboard/library",
    icon: LibraryBig,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  mobileOpen,
  closeMobile,
}: {
  mobileOpen: boolean;
  closeMobile: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white p-5 transition-transform lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={30} />
            <span className="text-xl font-bold">EduPanel</span>
          </div>
          <button
            onClick={closeMobile}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/dashboard"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <Icon size={19} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Student Portal</p>
          <p className="mt-1 text-xs text-blue-700">
            Manage student records easily.
          </p>
        </div>
      </aside>
    </>
  );
}
