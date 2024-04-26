import DoctorDetails from "@/components/DoctorDetails";
import FixedBookButton from "@/components/FixedBookButton";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-lg rounded-md">
        <div className="py-8 px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2>Vijal Patel, PA-C</h2>
                <p className="text-gray-500 text-sm uppercase">Adult Health</p>
              </div>
              <div className="py-3">
                <p>In-Person doctor visit</p>
                <p>3250 Lincoln Highway, Kendell park, NJ 08824</p>
              </div>
            </div>
            <Image
              src="/Doctor1.avif"
              width={243}
              height={207}
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div>
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton/>
    </div>
  );
}
