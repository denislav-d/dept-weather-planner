"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/utils/utils";

export default function LeftSection() {
    const [readMoreOpen, setReadMoreOpen] = useState(false);

    return (
        <section className="col-span-full md:col-span-6 pt-5 md:pt-7.5 max-md:pb-5 md:min-h-240 lg:min-h-200 xl:min-h-140 content-baseline max-md:px-5 grid grid-cols-6 flex-col bg-purple text-white row-span-1 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-32">
            <Image src="/DEPT-logo.svg" alt="DEPT® Logo" width={100} height={100} className="invert col-span-2 mb-17.5" />

            <h1 className="mb-7.5 col-span-full pr-6">DEPT® weather planner</h1>

            <div className={cn("grid auto-rows-max col-span-full md:col-span-5 transition-[grid_rows] duration-300 gap-y-7.5",
                {
                    "grid-rows-[max-content_1fr]": readMoreOpen,
                    "grid-rows-[max-content_0fr]": !readMoreOpen,
                },
            )}>
                <p>Picture this: an application that doesn&apos;t just tell you the weather, but also helps you plan your activities around it. Imagine knowing exactly the perfect day to plan that hike, or when to avoid the outdoor concert due to an unexpected shower. That&apos;s exactly what the Dept Weather Planner offers you.</p>

                <p className="overflow-hidden">Built with cutting-edge technologies, our weather planner brings you accurate, real-time weather data with a slick and user-friendly interface. But it&apos;s not just a weather app; it&apos;s an intuitive daily planner that syncs with the weather. With a range of activities to choose from, it suggests the best options based on current and forecasted weather conditions.</p>
            </div>

            <button className={cn("underline w-fit cursor-pointer col-span-full", readMoreOpen && "mt-7.5")} onClick={() => setReadMoreOpen(!readMoreOpen)}>Read {readMoreOpen ? "less" : "more"}</button>
        </section>
    );
}