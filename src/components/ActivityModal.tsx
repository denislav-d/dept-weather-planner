"use client";

import { useEffect } from "react";
import { ActivitiesResponse } from "@/lib/api";
import { IoCloseOutline } from "react-icons/io5";
import ModalCarousel from "@/components/ModalCarousel";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: ActivitiesResponse["activities"][0];
  suitable: boolean;
}

export default function ActivityModal({ isOpen, onClose, activity, suitable }: ActivityModalProps) {
  const images = activity.images.length > 0 ? activity.images : [activity.mainImageUrl];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" />

      <div
        className="relative z-10 w-full md:max-w-3/4 max-h-[90vh] overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:size-10 size-8 flex items-center justify-center rounded-full bg-white cursor-pointer group duration-400 text-black transition-colors shadow-md"
          aria-label="Close modal"
        >
          <IoCloseOutline
            className="text-black size-5 md:size-6 group-hover:text-black/50 duration-400"
          />
        </button>


        <ModalCarousel images={images} activityTitle={activity.title} />


        <div className="py-6 md:py-7.5 px-5 md:px-15 flex flex-col gap-y-5 md:max-w-4/5">
          {activity.title && <h3 className="font-semibold">
            {activity.title}
          </h3>
          }

          <p className="bg-rose px-5 py-1 w-fit font-medium!">{suitable ? "You can do this event" : "You should not do this event"}</p>

          {(activity.minTemp != null && activity.maxTemp != null) && <p className="font-medium!">You can do this activity between {activity.minTemp}° and {activity.maxTemp}°</p>}

          {activity.description && <p className="text-secondary-500">{activity.description}</p>}

          <button className="bg-black text-white px-5 py-4 w-fit font-medium! hover:bg-white hover:text-black transition-[color,background-color] duration-400 border border-black rounded-full cursor-pointer">View event</button>
        </div>
      </div >
    </div >
  );
}
