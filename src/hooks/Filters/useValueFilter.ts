"use client";

import { usePathname } from "next/navigation";
export default function useValueFilter() {
    let result
    const pathname = usePathname();
    (() => {
        switch (pathname) {
            case "/psychologists/a-to-z":
                result = "A to Z";
                break
            case "/psychologists/z-to-a":
                result = "Z to A";
                break
            case "/psychologists/less-than-10$":
                result = "Less than 10$";
                break
            case "/psychologists/greater-than-10$":
                result = "Greater than 10$";
                break
            case "/psychologists/popular":
                result = "Popular";
                break
            case "/psychologists/not-popular":
                result = "Not popular";
                break
            default:
                result = "Show all";
        }
    })()
    return result
}