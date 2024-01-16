import { Gist } from "@/types/gists";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function GistListCard({
  name,
  projectName,
  description,
  isPublic,
  messages,
  modelAssistant1,
  modelAssistant2,
  createdAt,
  id,
}: Gist) {
  return (
    <div className="rounded-md p-5 bg-slate-800">
      <li className="flex justify-between gap-x-6">
        <div className="flex min-w-0 gap-x-4">
          <div className="h-12 w-12 flex-none rounded-full bg-gray-100" />
          <div className="min-w-0">
            <div className="text-sm min-w-0 break-words font-semibold leading-6 text-white">
              {projectName} / {name}
            </div>
            <div className="mt-1 truncate text-xs leading-5 text-gray-400">
              {createdAt.toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <div className="text-sm leading-6 text-gray-300">
            Uses {modelAssistant1} and {modelAssistant2}
          </div>

          <div className="mt-1 text-xs leading-5 text-gray-400">
            Last seen <div>{isPublic}</div>
          </div>
        </div>
      </li>
      <div className="text-sm bg-slate-700 text-blue-400 py-2 px-1 mt-4 rounded-md">
        {description}
      </div>
      <div className="w-min ml-auto">
        <Link
          href={`/gists/${id}`}
          className={cn(
            buttonVariants({
              variant: "link",
            }),
            "text-blue-400"
          )}
        >
          View {name}
        </Link>
      </div>
    </div>
  );
}
