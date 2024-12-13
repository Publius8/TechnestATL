import React from "react";
import Firstpage from "./(homes)/home-1/page";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home || PlanlaAZ",
  description: "PlanlaAZ - Travel & Tour",
};

export default function page() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Firstpage />
    </>
  );
}
