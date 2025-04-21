import { getAllModels } from "@/app/lib/models";
import Image from "next/image";
import Link from "next/link";

export default async function Models() {
  const models = await getAllModels();

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 px-4 md:p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {models.map((model) => (
            <Link
              key={model.id}
              href={`/3d-models/${model.id}`}
              className="group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-[#A1A1A1] transition-all duration-200">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/hero-image.png"
                    alt={model.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-[#1E1E1E]">
                    {model.name}
                  </h2>
                  <p className="mt-2 text-[#1E1E1E] line-clamp-2">
                    {model.description}
                  </p>
                  <span className="text-sm self-start text-[#1E1E1E} border border-[#A1A1A1] rounded-full px-2 py-1 mt-4 inline-block">
                    3D-printer
                  </span>
                  <div className="text-xs flex items-center mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-[#A1A1A1] mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <span className="text-[#606060] text-sm">
                      {model.likes}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
