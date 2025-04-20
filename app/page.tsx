import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12 md:py-0">
      <div className="max-w-7xl flex flex-col px-4 gap-8 mt-8 md:mt-0 md:gap-12 md:flex-row ">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#1E1E1E] hidden md:block md:text-lg">
            YOUR GO- TO PLATFORM FOR 3D PRINTING FILES
          </h3>
          <h1 className="text-[#1E1E1E] text-4xl md:text-6xl font-bold">
            Discover what&apos;s possible with 3D printing
          </h1>
          <p className="text-[#1E1E1E] text-lg md:text-2xl">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <button className="self-start bg-[#FFFFFF] text-[#000000] border-2 border-[#000000] cursor-pointer px-6 py-2 font-semibold transition-colors">
            BROWSE MODELS
          </button>
        </div>
        <div className="order-1 md:order-2 w-full md:w-auto">
          <Image
            src="/hero.png"
            alt="3D Printing"
            width={900}
            height={627}
            className="object-cover rounded-full w-full max-w-md mx-auto md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
