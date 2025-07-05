import React from "react";
import { PanoramicBanner, ReachUs } from "../sections";

const Contact = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", isActive: true },
  ];
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <PanoramicBanner
        title="Contact"
        breadcrumbs={breadcrumbs}
        backgroundImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
      />
      <ReachUs />
    </main>
  );
};

export default Contact;
