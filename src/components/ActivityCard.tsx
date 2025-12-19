"use client";

import { useState } from "react";
import { ActivitiesResponse } from "@/lib/api";
import Image from "next/image";
import ActivityModal from "@/components/ActivityModal";

export default function ActivityCard({ activity, suitable }: { activity: ActivitiesResponse["activities"][0], suitable: boolean }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id, title, shortDescription, mainImageUrl } = activity;

    return (
        <>
            <li
                key={id}
                className="flex flex-col md:grid md:grid-cols-5 md:gap-x-3 gap-y-5 pt-7.5 cursor-pointer hover:opacity-60 transition-opacity duration-300"
                onClick={() => setIsModalOpen(true)}
            >
                {mainImageUrl && (
                    <figure className="w-full relative max-md:h-32.5 md:h-full md:col-span-1">
                        <Image src={mainImageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" placeholder="blur" blurDataURL={mainImageUrl} />
                    </figure>
                )}
                <div className="flex flex-col max-md:gap-y-1.25 md:col-span-4 md:col-start-2 border-b border-secondary-50 pb-5 md:pb-6">
                    {title && <h4 className="font-semibold">{title}</h4>}
                    {shortDescription && <p>{shortDescription}</p>}
                </div>
            </li>

            <ActivityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                activity={activity}
                suitable={suitable}
            />
        </>
    );
}