import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Register from "@/components/pages/Register";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function RegisterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <Register />
        <FooterOne />
      </main>
    </>
  );
}
