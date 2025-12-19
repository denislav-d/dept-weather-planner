"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";

interface ModalCarouselProps {
    images: string[];
    activityTitle: string;
}

export default function ModalCarousel({ images, activityTitle }: ModalCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <figure className="relative w-full h-64 md:h-80 group">
            <Image
                src={images[currentImageIndex]}
                alt={`${activityTitle} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover origin-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
            />

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 md:size-10 size-8 flex items-center justify-center rounded-full bg-white cursor-pointer transition-all shadow-md group/button"
                        aria-label="Previous image"
                    >
                        <IoChevronBack
                            className="text-black size-4 md:size-5 group-hover/button:text-black/50 duration-400"
                        />
                    </button>

                    <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 md:size-10 size-8 flex items-center justify-center rounded-full bg-white cursor-pointer transition-all shadow-md group/button"
                        aria-label="Next image"
                    >
                        <IoChevronBack
                            className="text-black rotate-180 size-4 md:size-5 group-hover/button:text-black/50 duration-400"
                        />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 backdrop-blur-xl py-2 px-3 shadow-md rounded-full">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`size-1.5 rounded-full transition-all cursor-pointer ${index === currentImageIndex ? "bg-white w-8" : "bg-white/60 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </figure>
    );
}
