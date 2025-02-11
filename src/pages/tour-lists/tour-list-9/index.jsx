import Header1 from "@/components/layout/header/Header1";
import TourList7 from "@/components/tours/TourList7";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-list-9 || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function TourListPage9() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <TourList7 />
      </main>
    </>
  );
}
