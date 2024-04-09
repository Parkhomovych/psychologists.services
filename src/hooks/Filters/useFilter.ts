"use client"
import { Therapist } from "@/Types/Therapist";
import { usePathname } from "next/navigation";

export function useFilter(data: Therapist[]) {
    const pathname = usePathname();

    let cards
    switch (pathname) {
        case "/psychologists/a-to-z":
            cards = [...data].sort((a, b) => a.name.localeCompare(b.name))
            break
        case "/psychologists/z-to-a":
            cards = [...data].sort((a, b) => b.name.localeCompare(a.name))
            break
        case "/psychologists/less-than-10$":
            cards = [...data].sort((a, b) => a.price_per_hour - b.price_per_hour);
            break
        case "/psychologists/greater-than-10$":
            cards = [...data].sort((a, b) => b.price_per_hour - a.price_per_hour);
            break
        case "/psychologists/popular":
            cards = [...data].sort((a, b) => b.rating - a.rating);
            break
        case "/psychologists/not-popular":
            cards = [...data].sort((a, b) => a.rating - b.rating);
            break
        default:
            cards = data
    }
    return cards
}