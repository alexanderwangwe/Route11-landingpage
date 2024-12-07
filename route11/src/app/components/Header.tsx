"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bus } from "lucide-react";


export default function Header() {
  return (
    <header className="bg-cyan-600 text-white py-16 mx:10 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <div className="flex items-center mb-10">
            <Bus className="w-8 h-8 mr-2 text-yellow-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight transform transition-transform duration-500 hover:translate-x-2">
              Route11
            </h1>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-tight transform transition-all duration-500 hover:text-yellow-400">
            Commutes, made <span className="text-yellow-400">Effortless.</span>
          </h1>
          <p className="text-xl mb-6 opacity-90 transform transition-all duration-500 hover:opacity-100">
            Join Route11 for a CONVENIENT way to move around.
          </p>
          <Button
            className="bg-green-500 text-blue-800 hover:bg-yellow-300 transition-colors duration-300 text-lg px-8 py-3 shadow-lg hover:shadow-2xl"
            onClick={() =>
              document.getElementById("waitlist-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Join the Waitlist Now
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/hero.jpg?height=600&width=600"
            alt="Students enjoying comfortable campus transport"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
}
