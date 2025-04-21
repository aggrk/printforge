import { getModelById } from "@/app/lib/models";
import Image from "next/image";

export default async function Details({ params }) {
  const { id } = await params;
  const model = await getModelById(id);

  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12 md:py-16 bg-white">
      <div className="max-w-7xl px-4 mt-8 flex flex-col items-center justify-center gap-12 md:mt-0 md:flex-row md:gap-16 md:px-8">
        {/* Model Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hero-image.png"
            alt="3D Model"
            className="object-cover"
            width={1000}
            height={500}
          />
        </div>

        {/* Model Details */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-1 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#A1A1A1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span className="text-[#606060] text-base font-medium">
              {model?.likes}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-6">
            {model?.name}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm font-medium text-[#1E1E1E] border border-[#A1A1A1] rounded-full px-4 py-2">
              3D-printer
            </span>
            <span className="text-sm font-medium text-[#1E1E1E] border border-[#A1A1A1] rounded-full px-4 py-2">
              Upgrade
            </span>
          </div>

          {/* Description */}
          <div className="prose max-w-none">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              {model?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
