import { Instagram, Twitter, Linkedin,Phone, Bus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Bus className="w-8 h-8 mr-2 text-black-200" />
            <p className="text-2xl font-semibold tracking-wide">Route11</p>
            <p className="text-sm mt-2 text-gray-300">
              Coming soon. Stay tuned for updates!
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-200">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
        {/* Contact Section */}
        <div className="mt-6 text-center md:text-left text-gray-300">
          <p className="flex items-center justify-center md:justify-start mb-2">
            <Phone className="w-5 h-5 mr-3" /> +254 797873820
          </p>
          {/* Uncomment to enable email */}
          {/* <p className="flex items-center justify-center md:justify-start mb-2">
            <Mail className="w-5 h-5 mr-3" /> contact@route11.com
          </p> */}
          <p className="text-xs mt-4 opacity-75">
            © 2025 Route11. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
