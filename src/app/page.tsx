import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 h-[calc(100vh-64px)]">
      <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-24">
        <MaxWidthWrapper>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                  <Link
                    href="#"
                    className="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="ml-4 text-sm">Discover gists</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Create your first</span>
                  <span className="block text-mainBlue">prompt gist</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                    <div className="sm:flex">
                      <div className="mt-3 sm:mt-0">
                        <Button
                          size="lg"
                          type="submit"
                          className="block w-full rounded-md bg-mainBlue font-medium text-white shadow hover:bg-blue-800 "
                        >
                          Create your first gist
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                <Image
                  width={600}
                  height={600}
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
