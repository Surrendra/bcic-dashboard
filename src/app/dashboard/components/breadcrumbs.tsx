"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BreadCrumbs() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);
    return (
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="flex items-center gap-2">
          {paths.length === 0 && (
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Dashboard
              </Link>
            </li>
          )}

          {paths.map((segment, index) => {
            const href = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                {index != 0 && <span>/</span>}

                {isLast ? (
                  <span className="font-semibold text-gray-800 capitalize">
                    {segment}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {segment}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
}