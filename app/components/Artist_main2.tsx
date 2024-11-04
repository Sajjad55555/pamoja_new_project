import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});
export default function Artist_main2() {
  return (
    <div>
      <div
        className={`grid grid-cols-2 min-h-screen -mt-32 ${beVietnamPro.className}`}
      >
        <div className="bg-[#EFECE3] relative flex items-center justify-center">
          <div className="absolute h-full w-px  " />

          <div className="absolute w-full h-px " />

          <div className="text-center space-y-4 z-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold ">MEET THE</h1>
            <div className="relative"></div>
            <p className=" text-7xl font-bold   text-[#CB6C2A]">ARTISTS</p>
          </div>
          <div className="absolute grid mt-[390px]">
            <Image
              src={"/images/pamojablack.svg"}
              height={28}
              width={165.62}
              alt="pamoja"
            />
          </div>
        </div>

        <div className="bg-[url('/images/footer.png')] relative ">
          <div className=" flex flex-col place-items-center mt-20">
            <p className="text-4xl sm:text-5xl font-extrabold p-4 text-white place-items-center tracking-wide bg-[#CB6C2A]">
              LAUREN C.
            </p>
          </div>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity">
  <Image
    src="/images/arrow.svg" // Keep the leading slash for relative paths
    alt="arrow"
    className="h-[90px] w-[90px]" // Remove className since it won't apply directly to Image
    width={90} // Specify the width of the image
    height={90} // Specify the height of the image
  />
  <span className="sr-only">Next artist</span>
</button>
        </div>
      </div>
    </div>
  );
}
