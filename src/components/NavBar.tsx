import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function NavBar() {
  return (
    <div className="bg-gray-800">
      <MaxWidthWrapper>
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "flex-shrink-0 text-white text-lg"
              )}
            >
              Prompton Gist
            </Link>
          </div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <Input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pr-3 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <div className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*   {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )} */}
              x
            </div>
          </div>
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <Link
                href="/gists"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "relative flex-shrink-0 p-2 bg-mainBlue text-white hover:bg-blue-800"
                )}
              >
                All Gists
              </Link>

              <div className="relative ml-4 flex-shrink-0">
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "link",
                  })}
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            as="a"
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </Link>
          <Link
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </Link>
          <Link
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
          <Link
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
