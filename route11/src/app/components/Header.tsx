"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bus } from "lucide-react";
//import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-16 md:py-24 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <div className="flex items-center mb-10">
            <Bus className="w-8 h-8 mr-2 text-black-200" />
            <h1 className="text-4xl md:text-5xl font-bold ">Route11</h1>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-tight">
            Commutes, made <span className="text-yellow-400">Effortless.</span>
          </h1>
          <p className="text-xl mb-6">
            Join Route11 for a CONVENIENT way to move around .
          </p>
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          > */}
            <Button 
              className="bg-green-400 text-blue-800 hover:bg-yellow-300 transition-colors duration-300 text-lg px-8 py-3"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist Now
            </Button>
          {/* </motion.div> */}
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero.jpg?height=600&width=600"
            alt="Students enjoying comfortable campus transport"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
