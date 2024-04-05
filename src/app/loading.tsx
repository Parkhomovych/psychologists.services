"use client"
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" h-screen flex items-center justify-center">
      <RotatingLines
        visible={true}
        width="124"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
