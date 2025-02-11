import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero from "@/components/tours/Hero";
import TourList5 from "@/components/tours/TourList5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-list-6 || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function TourListPage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <Hero />
        <TourList5 />
        <FooterOne />
      </main>
    </>
  );
}
