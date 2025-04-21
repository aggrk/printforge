import Image from "next/image";
import { CubeIcon, UserGroupIcon, GiftIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="w-full flex items-center mt-10 justify-center min-h-screen py-12 md:py-16">
      <div className="max-w-7xl w-full px-4 md:0 flex flex-col gap-12 md:gap-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 pb-12 border-b border-[#DDDDDD]">
          <div className="w-full md:w-1/2 aspect-square relative">
            <Image
              src="/hero-image.png"
              alt="3D Printing"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <h3 className="text-[#1E1E1E] text-lg font-medium uppercase tracking-wider">
              ABOUT PRINTFORGE
            </h3>
            <h2 className="text-[#1E1E1E] text-4xl md:text-5xl font-bold leading-tight">
              Empowering makers worldwide
            </h2>
            <div className="space-y-4">
              <p className="text-[#1E1E1E] text-lg md:text-xl leading-relaxed">
                Founded in 2023, PrintForge has quickly become the go-to
                platform for 3D printing enthusiasts, makers, and professional
                designers to share and discover amazing STL files for 3D
                printing.
              </p>
              <p className="text-[#1E1E1E] text-lg md:text-xl leading-relaxed">
                Our mission is to foster a vibrant community where creativity
                meets technology, enabling anyone to bring their ideas to life
                through 3D printing.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#DDDDDD]">
          <div className="flex flex-col gap-4 p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <CubeIcon className="w-6 h-6 text-[#000000]" />
              </div>
              <h3 className="text-[#1E1E1E] font-bold text-2xl">
                100K+ Models
              </h3>
            </div>
            <p className="text-[#1E1E1E] text-lg leading-relaxed">
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 md:p-6 md:border-l md:border-[#DDDDDD]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-[#000000]" />
              </div>
              <h3 className="text-[#1E1E1E] font-bold text-2xl">
                Active Community
              </h3>
            </div>
            <p className="text-[#1E1E1E] text-lg leading-relaxed">
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 md:p-6 md:border-l md:border-[#DDDDDD]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <GiftIcon className="w-6 h-6 text-[#000000]" />
              </div>
              <h3 className="text-[#1E1E1E] font-bold text-2xl">Free to Use</h3>
            </div>
            <p className="text-[#1E1E1E] text-lg leading-relaxed">
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <h2 className="text-[#1E1E1E] text-4xl font-bold self-start md:self-center">
            Our vision
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-[#1E1E1E] text-lg md:text-xl leading-relaxed">
              At PrintForge, we believe that 3D printing is revolutionizing the
              way we create, prototype, and manufacture. Our platform serves as
              a bridge between designers and makers, enabling the sharing of
              knowledge and creativity that pushes the boundaries of what's
              possible with 3D printing.
            </p>
            <div className="border-b border-[#4E4E4E] w-24 mx-auto"></div>
            <p className="text-[#1E1E1E] text-lg md:text-xl leading-relaxed">
              Whether you're a hobbyist looking for your next weekend project,
              an educator seeking teaching materials, or a professional designer
              wanting to share your creations, PrintForge provides the tools and
              community to support your journey in 3D printing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
