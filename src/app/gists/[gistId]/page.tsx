"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Message } from "@/types/gists";
import { useEffect, useState } from "react";
import { mockData } from "../../../../placeholder-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Progress } from "@/components/ui/progress";

export default function Page({ params }: { params: { gistId: string } }) {
  const { gistId } = params;

  const [messages, setMessages] = useState<Message[]>(
    mockData.find((gist) => gist.id === gistId)?.messages || []
  );
  const userMessages = messages.filter((message) => message.role === "user");
  const firstAssistantMessages = messages.filter(
    (message) => message.role === "assistant1"
  );
  const secondAssistantMessages = messages.filter(
    (message) => message.role === "assistant2"
  );

  return (
    <div className="mx-auto w-full grow lg:flex xl:px-2">
      <div className="flex-1 xl:flex">
        <div className="shrink-0 border-r border-gray-200 px-4 py-6 sm:px-6 space-y-4 lg-flex-1 lg:border-t-0 lg:pr-8 xl:pr-6">
          {firstAssistantMessages.map((message, index) => (
            <li
              key={message.id}
              className="overflow-hidden rounded-xl bg-muted p-2 space-y-2"
            >
              {index === 0 ? "Initial Response" : `Response ${index + 1}`}
              <div className="flex items-center gap-x-4 border-b mt-2 border-gray-900/5 bg-background rounded-md p-6">
                <div className="text-sm font-medium leading-6 text-slate-200">
                  {message.content}
                </div>
              </div>
              <dl className="-my-3 divide-y text-center divide-gray-100 px-6 py-4 text-sm leading-6">
                Filled Context Window
                <div className="flex justify-between items-center gap-x-4 py-3">
                  {
                    mockData.find((gist) => gist.id === gistId)
                      ?.currentContextWindowAssistant1
                  }
                  <Progress
                    value={
                      mockData.find((gist) => gist.id === gistId)
                        ?.currentContextWindowAssistant1 ||
                      0 /
                        mockData.find((gist) => gist.id === gistId)!
                          .maxContextWindowAssistant1 ||
                      100
                    }
                  />
                  {
                    mockData.find((gist) => gist.id === gistId)
                      ?.maxContextWindowAssistant1
                  }
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-200">Model</dt>
                  <dd className="flex items-start gap-x-2">
                    <Badge
                      variant="outline"
                      className="font-medium text-gray-200"
                    >
                      {
                        mockData.find((gist) => gist.id === gistId)
                          ?.modelAssistant1
                      }
                    </Badge>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </div>

        <div className="px-4 py-6 sm:px-6 w-full lg:pl-8 xl:pl-6 space-y-4">
          {userMessages.map((message, index) => (
            <div key={message.id} className="bg-muted shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-200">
                  {index === 0 ? "Initial Prompt" : `Prompt ${index + 1}`}
                </h3>
                <div className="mt-2 font-medium text-gray-400">
                  <p>{message.content}</p>
                </div>
                <div className="mt-5 w-min ml-auto">
                  <Button className="ml-auto" size="icon">
                    <Pencil1Icon />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-gray-200 lg-flex-1 px-4 py-6 sm:px-6 space-y-4 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
        {secondAssistantMessages.map((message, index) => (
          <li
            key={message.id}
            className="overflow-hidden rounded-xl bg-muted p-2 space-y-2"
          >
            {index === 0 ? "Initial Response" : `Response ${index + 1}`}
            <div className="flex items-center gap-x-4 border-b mt-2 border-gray-900/5 bg-background rounded-md p-6">
              <div className="text-sm font-medium leading-6 text-slate-200">
                {message.content}
              </div>
            </div>
            <dl className="-my-3 divide-y text-center divide-gray-100 px-6 py-4 text-sm leading-6">
              Filled Context Window
              <div className="flex justify-between items-center gap-x-4 py-3">
                {
                  mockData.find((gist) => gist.id === gistId)
                    ?.currentContextWindowAssistant2
                }
                <Progress
                  value={
                    mockData.find((gist) => gist.id === gistId)
                      ?.currentContextWindowAssistant2 ||
                    0 /
                      mockData.find((gist) => gist.id === gistId)!
                        .maxContextWindowAssistant2 ||
                    100
                  }
                />
                {
                  mockData.find((gist) => gist.id === gistId)
                    ?.maxContextWindowAssistant2
                }
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-200">Model</dt>
                <dd className="flex items-start gap-x-2">
                  <Badge
                    variant="outline"
                    className="font-medium text-gray-200"
                  >
                    {
                      mockData.find((gist) => gist.id === gistId)
                        ?.modelAssistant2
                    }
                  </Badge>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </div>
    </div>
  );
}
