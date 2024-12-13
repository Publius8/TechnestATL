import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import BookingPages from "@/components/pages/BookingPages";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking-page || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function BookingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <BookingPages />
        <FooterOne />
      </main>
    </>
  );
}
