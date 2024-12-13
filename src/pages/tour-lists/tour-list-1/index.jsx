import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tours/PageHeader";
import TourList1 from "@/components/tours/TourList1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-list-1 || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function TourListPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <PageHeader />
        <TourList1 />
        <FooterOne />
      </main>
    </>
  );
}
