import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <Hero />
        <Information />
        <Banner />
        <FeaturesOne />
        <div className="mt-60">
          <FeturesTwo />
        </div>
        <TestimonialOne />
        <BannerOne />
        <Team />
        <BrandsOne />
        <FooterOne />
      </main>
    </>
  );
}
