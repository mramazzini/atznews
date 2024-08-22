import { NAVBAR_REM_HEIGHT } from "@/lib/global";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-base-300 rounded-3xl hero-gradient h-[70vh] max-h-[900px]">
      <div className="w-full relative h-full flex items-center flex-row">
        <div className="flex flex-col justify-start text-left text-primary-content w-full xl:w-1/2 h-full p-8">
          <div className="mb-auto font-montserrat">
            {/* phone and address */}
            <p className="font-bold">Andrea Joseph</p>
            <p className="font-bold ">832-324-9903</p>
            <p className=" font-bold">1220 Augusta Rd. Suite 300</p>
          </div>

          {/* <h1 className="text-6xl md:text-8xl text-center md:text-left">
            A to Z{" "}
          </h1> */}
          <Image
            src="/atzlogo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-[275px]"
          />
          <h2 className="text-xl font-bold text-center md:text-left">
            Houston's Real Estate Expert
          </h2>
          <div className="mt-4">
            <Link href="/about" className="btn btn-sm md:btn-lg  mr-4 my-2">
              Learn More -&gt;
            </Link>
            <Link
              href="/contact"
              className="btn btn-sm md:btn-lg border btn-ghost border-white my-2"
            >
              Get A Quote -&gt;
            </Link>
          </div>
          <div className="mt-auto flex justify-start md:hidden"></div>
          <div className="mt-auto flex justify-start hidden md:flex flex-col md:flex-row items-start">
            <Link href="/contact" className="font-bold btn btn-ghost">
              Contact Us -&gt;
            </Link>
            <Link href="/listings" className="font-bold btn btn-ghost">
              View Listings -&gt;
            </Link>
            <Link href="/about" className="font-bold btn btn-ghost">
              About Us -&gt;
            </Link>
          </div>
        </div>
        <Image
          src="/woman.png"
          alt="woman"
          width={1280}
          height={1252}
          className="w-1/2 relative right-0 bottom-0 overflow-hidden h-full object-cover object-top "
        />
      </div>
    </div>
  );
};

export default Hero;
