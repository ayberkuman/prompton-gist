import GistListCard from "@/components/GistListCard";
import { Gist } from "@/types/gists";
import { mockData } from "../../../placeholder-data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Gists() {
  const data: Gist[] = mockData;
  return (
    <MaxWidthWrapper>
      <ul role="list" className="divide-y divide-gray-800 my-12 space-y-4">
        {data.map((gist) => (
          <GistListCard key={gist.projectName} {...gist} />
        ))}
      </ul>
    </MaxWidthWrapper>
  );
}
