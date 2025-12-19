"use client";

import { postSubscribe } from "@/lib/api";
import { useState } from "react";
import { cn } from "@/utils/utils";

export default function Form() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSubmitting(true);
        setMessage(null);

        try {
            const result = await postSubscribe(email);

            if (result.error) {
                setMessage({ type: "error", text: "There was an error subscribing to the daily forecast. This email is invalid." });
            } else {
                setMessage({ type: "success", text: "Successfully subscribed to daily forecast!" });
                setEmail("");
            }
        } catch (error) {
            console.error("Caught exception:", error);
            setMessage({ type: "error", text: "An unexpected error occurred. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 col-span-full lg:col-span-5 mt-auto md:border-t md:border-t-[#e5e5e5] md:pt-4">
            <h5 className="font-semibold">Want to get a daily forecast?</h5>

            <div className="flex flex-col md:flex-row gap-y-5 gap-x-15">
                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your e-mail address"
                    className="rounded-full border border-black text-black py-4 px-5 placeholder:overflow-visible placeholder:md:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-black border border-black text-white hover:bg-white hover:text-black transition-[color,background-color] duration-400 py-4 px-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>

            <div className={cn("grid auto-rows-max transition-[grid-template-rows] duration-300",
                {
                    "grid-rows-[1fr]": message,
                    "grid-rows-[0fr]": !message,
                },
            )}>
                <p className={`overflow-hidden text-sm! font-medium ${message?.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message?.text}
                </p>
            </div>
        </form>
    );
}
