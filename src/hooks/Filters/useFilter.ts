"use client"
import { usePathname } from "next/navigation";

export function useFilter(data: any) {
    const pathname = usePathname();

    let cards: any = data;

    if (pathname === "/psychologists/a-to-z") {
        cards = [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (pathname === "/psychologists/z-to-a") {
        cards = [...data].sort((a, b) => b.name.localeCompare(a.name));
    }
    if (pathname === "/psychologists/less-than-10$") {
        cards = [...data].sort((a, b) => a.price_per_hour - b.price_per_hour);
    }
    if (pathname === "/psychologists/greater-than-10$") {
        cards = [...data].sort((a, b) => b.price_per_hour - a.price_per_hour);
    }
    if (pathname === "/psychologists/popular") {
        cards = [...data].sort((a, b) => b.rating - a.rating);
    }
    if (pathname === "/psychologists/not-popular") {
        cards = [...data].sort((a, b) => a.rating - b.rating);
    }
    return cards
}