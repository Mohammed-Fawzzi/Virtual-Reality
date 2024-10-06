import { communityLinks, platformLinks, resourcesLinks } from "@/constants";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mt-20 border-t pt-10 pb-3 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pb-8">
        <div className="border-b sm:border-b md:border-none pb-5">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Resources
          </h3>
          <ul className="space-y-3">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-[#D85D15] hover:ps-3 transition-all duration-300 flex"
                >
                  <ChevronRight />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b sm:border-b md:border-none pb-5">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Platform
          </h3>
          <ul className="space-y-3">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-[#D85D15] hover:ps-3 transition-all duration-300 flex"
                >
                  <ChevronRight />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b sm:border-b md:border-none pb-5">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Community
          </h3>
          <ul className="space-y-3">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-[#D85D15] hover:ps-3 transition-all duration-300 flex"
                >
                  <ChevronRight />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#D85D15] mb-4">
            Newsletter Subscribe
          </h3>
          <p className="pb-3">
            Stay In the Loop :{" "}
            <span className="text-gray-500 hover:text-[#D85D15] duration-300 cursor-pointer">
              Unlock Exclusive Offers, Culinary Insights, and More.
            </span>
          </p>
          <input
            type="text"
            className="relative w-full md:w-2/2 p-2 mt-2 mb-4 border text-white outline-none"
            placeholder="Enter your email"
          />
          <ul className="flex space-x-4">
            <li>
              <Facebook className="hover:text-[#D85D15] duration-300" />
            </li>
            <li>
              <Twitter className="hover:text-[#D85D15] duration-300" />
            </li>
            <li>
              <Mail className="hover:text-[#D85D15] duration-300" />
            </li>
            <li>
              <Youtube className="hover:text-[#D85D15] duration-300" />
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-700 pt-2 text-center text-md font-md">
        © All Rights Reserved{" "}
        <Link
          href="https://www.linkedin.com/in/mohamed-fawzzi-72b962280/"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"
        >
          Mohamed Fawzzi.
        </Link>
      </p>
    </footer>
  );
}
