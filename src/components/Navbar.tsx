"use client";

import { Menu, Bell, Search } from "lucide-react";

export default function Navbar({ openMobile }: { openMobile: () => void }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-5 md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={openMobile}
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <div className="relative hidden sm:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search..."
            className="w-56 rounded-lg border bg-gray-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="relative text-gray-500" aria-label="Notifications">
          <Bell size={21} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            A
          </div>
          <div className="hidden sm-block">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
