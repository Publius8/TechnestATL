import Invoice from "@/components/Invoice";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Invoice || PlanlaAZ",
  description: "PlanlaAZ",
};

export default function InvoicePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Invoice />
      </main>
    </>
  );
}
