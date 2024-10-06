import Link from "next/link";

export default function Hero() {
  return (
    <header className="container">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <Link
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-2"
          >
            Start for free
          </Link>
          <Link href="#" className="py-3 px-4 mx-2 border border-[#D85D15] hover:text-[#D85D15]">
            Documentation
          </Link>
        </div>
        <div className="flex mt-10 justify-center gap-2">
          <video
            autoPlay
            loop
            muted
            className="w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={"/video1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={"/video2.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
}
