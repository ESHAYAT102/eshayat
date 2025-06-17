import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
      <p className="text-5xl sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem]">
        404
      </p>
      <p className="mb-8 text-xl">Page Not Found</p>
      <div>
        <Link
          href="/"
          className="rounded-2xl bg-slate-950 px-4 py-2 text-xl sm:text-[1rem] md:text-[1.5rem] lg:text-[2.5rem]"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
