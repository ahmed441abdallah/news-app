import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-[#181817] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-300 sm:text-3xl">
              Blog News
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/archive"
              className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
            >
              Archive
            </Link>

            <Link
              href="/news"
              className="inline-block rounded bg-blue-600 px-5 py-3 text-sm
            font-medium text-white transition hover:bg-blue-700
            focus:outline-none focus:ring"
              type="button"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
