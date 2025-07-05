import { lazy } from "react";

// # Common sections
export const PanoramicBanner = lazy(() => import("./common/PanoramicBanner"));

// # Home page sections
export const Hero = lazy(() => import("./home/Hero"));
export const FeaturedProperties = lazy(() =>
  import("./home/FeaturedProperties")
);
export const AboutUs = lazy(() => import("./home/AboutUs"));
export const WhyChooseUs = lazy(() => import("./home/WhyChooseUs"));
export const Projects = lazy(() => import("./home/Projects"));
export const Testimonials = lazy(() => import("./home/Testimonials"));

// # About page sections
export const Banner = lazy(() => import("./about/Banner"));
export const WhoWeAre = lazy(() => import("./about/WhoWeAre"));
export const WhatWeDo = lazy(() => import("./about/WhatWeDo"));
export const Achievements = lazy(() => import("./about/Achievements"));
export const NewsLetter = lazy(() => import("./about/NewsLetter"));

// # Contact page sections
export const ReachUs = lazy(() => import("./contact/ReachUs"));
