import Link from "next/link";
import React from "react";

function AuthAction() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3.5 text-[14px] whitespace-nowrap">
      <div className="px-5 py-2.5 text-brand-primary">
        <Link href="/">Login</Link>
      </div>
      <div className="px-5 py-2.5 bg-brand-primary text-white rounded-md">
        <Link href="/">Sign up</Link>
      </div>
    </div>
  );
}

export default AuthAction;
