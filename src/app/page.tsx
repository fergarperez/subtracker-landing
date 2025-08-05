import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SubTracker - Control your subscriptions from your mobile",
  description:
    "The mobile app that helps you manage all your subscriptions, receive smart reminders and save money every month.",
  keywords:
    "subscriptions, mobile app, savings, reminders, financial management",
  authors: [{ name: "SubTracker Team" }],
  openGraph: {
    title: "SubTracker - Control your subscriptions from your mobile",
    description:
      "Never forget a payment again. Manage all your subscriptions and save money with our mobile app.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SubTracker - Control your subscriptions from your mobile",
    description:
      "Never forget a payment again. Manage all your subscriptions and save money with our mobile app.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
