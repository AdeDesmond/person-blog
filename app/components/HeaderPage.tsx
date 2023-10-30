"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const activeLink =
    " bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 border-b border-pink-500 border-opacity-50 hover:border-opacity-100 transition-all duration-200";
  return (
    <header className="w-full h-24 bg-gray-950 flex items-center justify-between px-6">
      <div className="text-white flex gap-x-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={90}
            height={90}
            className="rounded-full"
          />
        </Link>
        <Link href="/" className={`${pathName === "/" ? activeLink : ""}`}>
          Home
        </Link>
        <Link
          href="/blogs"
          className={`${pathName.includes("/blogs") ? activeLink : ""}`}
        >
          Blogs
        </Link>
        <Link
          href="/bookmarks"
          className={`${pathName.includes("/bookmarks") ? activeLink : " "}`}
        >
          Bookmarks
        </Link>
        <Link
          href="/contact"
          className={`${pathName.includes("/contact") ? activeLink : ""}`}
        >
          Contact Us
        </Link>
        <Link
          href="/category"
          className={`${pathName.includes("/category") ? activeLink : ""}`}
        >
          Categories
        </Link>
      </div>
      <div className="text-white flex  gap-x-4">
        {!session && (
          <Link href="/login" className="flex items-center gap-x-1">
            <FaGithubAlt />
            Login
          </Link>
        )}
        {session && (
          <button
            onClick={() => signOut()}
            className="flex items-center gap-x-1"
          >
            {session ? (
              <div>
                <Image
                  src={session?.user?.image!}
                  alt={session?.user?.name!}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            ) : (
              ""
            )}
            <IoMdLogOut />
            SignOut
          </button>
        )}
      </div>
    </header>
  );
}
