"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  if (session) {
    router.push("/");
  }
  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="w-[20rem] h-[20rem] bg-slate-950 shadow-md flex items-center justify-center rounded-md">
          <button
            onClick={() => signIn("github")}
            className="text-xl font-semibold flex flex-col items-center gap-y-2"
          >
            <Image
              src="/github.svg"
              alt="githib picture"
              width={80}
              height={80}
              className="bg-white rounded-full mb-2"
            />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-md text-white">
              Sign in
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
