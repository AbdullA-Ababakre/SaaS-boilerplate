import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-xl font-bold">Test links</h1>
        <div className=" space-x-2">
          <Link href="/dashboard" className="underline">
            /dashboard
          </Link>
          <Link href="/profile" className=" underline">
            /profile
          </Link>
          <Link href="/subscription" className=" underline">
            /subscription
          </Link>
        </div>
      </div>
    </div>
  );
}