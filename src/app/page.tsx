"use client";

import Final from "@/components/Final";
import Name from "@/components/Name";
import Network from "@/components/Network";
import Owner from "@/components/Owner";
import PresaleAmount from "@/components/PresaleAmount";
import PresalePrice from "@/components/PresalePrice";
import Summary from "@/components/Summary";
import Symbol from "@/components/Symbol";
import TotalSupply from "@/components/TotalSupply";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[720px] flex">
      <Welcome index={0} />
      <Network index={1} />
      <Name index={2} />
      <Symbol index={3} />
      <Owner index={4} />
      <TotalSupply index={5} />
      <PresaleAmount index={6} />
      <PresalePrice index={7} />
      <Summary index={8} />
      <Final index={9} />
    </div>
  );
}
