"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();
  const router = useRouter();
  const { name } = user;
  const userId = user._id;

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        {/* Left side - Welcome message */}
        <div className="w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-medium text-gray-900">
            {userId ? `Welcome, ${name}!` : "Welcome to EventEase"}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            {userId ? (
              <>
                You have{" "}
                <span className="font-bold text-[#3aafae]">
                  {activeTasks.length}
                </span>
                &nbsp;active tasks
              </>
            ) : (
              "(Please sign in or create an account to access your tasks.)"
            )}
          </p>
        </div>

        {/* Right side - Actions */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#463aaf] text-white text-sm sm:text-base font-medium rounded-full
            hover:bg-[#e900f1] hover:text-white transition-all duration-200 ease-in-out shadow-sm
            focus:outline-none focus:ring-2 focus:ring-[#463aaf] focus:ring-offset-2"
            onClick={() => {
              if (userId) {
                openModalForAdd();
              } else {
                router.push("/login");
              }
            }}
          >
            {userId ? "Add a new Task" : "Login / Register"}
          </button>

          <div className="flex justify-end">
            <Link
              href="https://github.com/abhiGithub302"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#E6E6E6] text-blue-700
              hover:border-blue-700 hover:bg-blue-50 transition-all duration-200 ease-in-out"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;