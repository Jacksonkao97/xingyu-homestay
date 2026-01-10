"use client";

import { ChefHat, Flame, Mountain, Wind, Wifi, Sprout } from "lucide-react";

const amenities = [
  {
    icon: Mountain,
    title: "Kinabalu View",
    description:
      "Wake up to breathtaking vistas of Mount Kinabalu from the comfort of your room.",
    bgColor: "bg-secondary/20",
  },
  {
    icon: Wind,
    title: "Natural Air-Con",
    description:
      "Experience the refreshing, crisp mountain air of Kundasang, all year round.",
    bgColor: "bg-primary/10",
  },
  {
    icon: ChefHat,
    title: "Full Kitchen",
    description:
      "Completely equipped for your culinary needs, including a steamboat pot for chilly nights.",
    bgColor: "bg-accent/10",
  },
  {
    icon: Flame,
    title: "BBQ Facilities",
    description:
      "Enjoy an outdoor cookout on the deck with the mountains as your backdrop.",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sprout,
    title: "Vegetable Farm",
    description:
      "Explore the lush vegetable farm located just downhill, offering a true countryside experience.",
    bgColor: "bg-primary/20",
  },
  {
    icon: Wifi,
    title: "Misty Connection",
    description:
      "Stay connected with high-speed internet, even while surrounded by the clouds.",
    bgColor: "bg-accent/20",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-foreground">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Header Card */}
          <div className="lg:col-span-1 space-y-6 self-start lg:sticky lg:top-24">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
              Curated Spaces
            </span>
            <h2 className="text-5xl font-bold leading-[1.1]">
              Crafted for <br />
              <span className="text-accent italic font-light">Serenity</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              Every detail at 星语小屋 is curated to provide a harmonious blend
              of comfort and rustic mountain charm.
            </p>
            <div className="w-16 h-1 bg-accent/30 rounded-full" />
          </div>

          {/* Refined Compact Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/5 shadow-premium transition-all duration-700 hover:-translate-y-2 group bg-white flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 ${item.bgColor} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-8 group-hover:rotate-12 transition-transform duration-500`}
                >
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-sm md:text-2xl font-bold mb-0 md:mb-4">
                  {item.title}
                </h3>
                <p className="hidden md:block text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
