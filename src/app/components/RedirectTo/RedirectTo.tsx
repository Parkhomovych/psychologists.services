"use client";
import { redirect } from "next/navigation";
type Props = {
  to: string;
};
export default function RedirectTo({ to }: Props) {
  redirect(to)
  return null;
}
