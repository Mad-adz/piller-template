import {
  Achievements,
  NewsLetter,
  PanoramicBanner,
  WhatWeDo,
  WhoWeAre,
} from "../sections";

const About = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", isActive: true },
  ];
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <PanoramicBanner
        title="About"
        breadcrumbs={breadcrumbs}
        backgroundImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
      />
      <WhoWeAre />
      <WhatWeDo />
      <Achievements />
      <NewsLetter />
    </main>
  );
};

export default About;
