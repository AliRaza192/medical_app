import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DocterCards({
  isInPerson = false,
}: {
  isInPerson?: boolean;
}) {
  const timeStamps = [
    {
      time: "7:30",
      period: "AM",
    },

    {
      time: "8:30",
      period: "AM",
    },

    {
      time: "9:30",
      period: "AM",
    },

    {
      time: "10:30",
      period: "AM",
    },

    {
      time: "11:30",
      period: "AM",
    },

    {
      time: "12:30",
      period: "PM",
    },
  ];

  return (
    <div className="border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all">
      <Link href="/docters/slug">
        <h2 className="uppercase font-bold text-2xl tracking-widest">
          Vijal Patel, PAC
        </h2>
        {isInPerson && (
          <p className="py-3">3250 Lincoln Highway, Kendall Park, NJ 08824</p>
        )}
        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src="/Doctor1.avif"
              width={243}
              height={207}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover"
            />
            {!isInPerson && (
              <p className="absolute bottom-0 right-2 bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full">
                <Video className="w-6 h-6" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <p className="bg-green-200  py-3 px-6 uppercase">Available today</p>
          </div>
        </div>
      </Link>

      <div className="pt-8 border-t border-gray-400">
        <h3 className="flex gap-4 justify-between items-center">
          <span className="text-gray-500">Tue, Mar 12</span>{" "}
          <span className="font-bold">$137</span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-2">
          {timeStamps.slice(0, 5).map((item, i) => {
            return (
              <Link
                className="bg-blue-600 text-sm text-white p-2 text-center"
                key={i}
                href="#"
              >
                {item.time}
                {item.period}
              </Link>
            );
          })}
          <Link
            className="bg-blue-950 text-[0.7rem] text-center text-white py-2 px-3 truncate"
            href="/docters/slug"
          >
            More Times
          </Link>
        </div>
      </div>
    </div>
  );
}
