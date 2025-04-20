import Image from "next/image";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12 md:py-4">
      <div className="max-w-7xl flex flex-col px-4 gap-8 mt-8 md:mt-20 md:gap-12">
        <div className="flex pb-8 flex-col md:flex-row gap-4 md:gap-12 border-b border-[#DDDDDD]">
          <div className="">
            <Image
              src="/hero-image.png"
              alt="3D Printing"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center gap-4 md:mb-0">
            <h3 className="text-[#1E1E1E] text-lg">ABOUT PRINTFORGE</h3>
            <h2 className="text-[#1E1E1E] text-4xl md:text-5xl font-bold">
              Empowering makers worldwide
            </h2>
            <p className="text-[#1E1E1E] text-lg md:text-xl">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-[#1E1E1E] text-lg md:text-xl">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-8 gap-4 border-b border-[#DDDDDD] md:gap-12 md:flex-row">
          <div className="flex flex-col justify-center gap-2 md:border-r md:border-[#DDDD]">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10">
                <CubeIcon className="text-[#000000]" />
              </span>
              <h3 className="text-[#1E1E1E] font-bold text-2xl">
                100K+ Models
              </h3>
            </div>
            <p className="text-[#1E1E1E] text-lg md:text-xl">
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 md:border-r md:border-[#DDDD]">
            <h3 className="text-[#1E1E1E] font-bold text-2xl">
              Active Community
            </h3>
            <p className="text-[#1E1E1E] text-lg md:text-xl">
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 ">
            <h3 className="text-[#1E1E1E] font-bold text-2xl">Free to Use</h3>
            <p className="text-[#1E1E1E] text-lg md:text-xl">
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:w-[50%] self-center">
          <h2 className="text-[#1E1E1E] text-4xl font-bold self-start">
            Our vision
          </h2>
          <p className="text-[#1E1E1E] text-lg  md:text-xl">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&apos;s
            possible with 3D printing.
          </p>
          <div className="border-b border-[#4E4E4E] w-[50%]"></div>
          <p className="text-[#1E1E1E] text-lg md:text-xl">
            Whether you&apos;re a hobbyist looking for your next weekend
            project, an educator seeking teaching materials, or a professional
            designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey in 3D printing.
          </p>
        </div>
      </div>
    </section>
  );
}
