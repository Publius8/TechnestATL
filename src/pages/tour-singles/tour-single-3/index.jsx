import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleThree from "@/components/tourSingle/pages/SingleThree";
import SingleTwo from "@/components/tourSingle/pages/SingleTwo";
import { allTour } from "@/data/tours";
import { useParams } from "react-router-dom";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-single-3 || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function TourSinglePage3() {
  let params = useParams();
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <MetaComponent meta={metadata} />

      <main>
        <Header1 />
        <PageHeader />

        <SingleThree tour={tour} />
        <TourSlider />
        <FooterOne />
      </main>
    </>
  );
}
