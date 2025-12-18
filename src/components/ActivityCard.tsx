import { ActivitiesResponse } from "@/lib/api";
import Image from "next/image";

export default function ActivityCard({ id, title, shortDescription, mainImageUrl }: ActivitiesResponse["activities"][0]) {
    return (
        <li key={id} className="flex flex-col md:grid md:grid-cols-5 md:gap-x-3 gap-y-5 pt-7.5">
            <figure className="w-full relative max-md:h-32.5 md:h-full md:col-span-1">
                <Image src={mainImageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </figure>
            <div className="flex flex-col max-md:gap-y-1.25 md:col-span-4 md:col-start-2 border-b border-[#e5e5e5] pb-5 md:pb-6">
                <h5 className="font-semibold">{title}</h5>
                <p>{shortDescription}</p>
            </div>
        </li>
    );
}