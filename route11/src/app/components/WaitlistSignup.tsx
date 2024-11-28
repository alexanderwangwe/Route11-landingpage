"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function WaitlistSignup() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //  handle the form submission
    setIsSubmitted(true);
  };

  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white"
      id="waitlist-form"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Waitlist</h2>
        <p className="mb-8 text-lg">
          Be the first to experience a smarter, hassle-free campus commute with
          Route11.
        </p>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-6 bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-left block text-lg font-bold text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="alex@gmail.com"
                required
                className="bg-gray-100 text-gray-800 p-3 rounded-lg w-full"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="instituition"
                className="text-left block text-lg font-bold text-gray-700"
              >
                Instituition
              </Label>
              <Input
                id="institution"
                type="text"
                placeholder="eg. Strathmore"
                required
                className="bg-gray-100 text-gray-800 p-3 rounded-lg w-full"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="route"
                className="text-left block text-lg font-bold text-gray-700"
              >
                What route do you use?
              </Label>
              <Input
                id="route"
                type="text"
                placeholder="eg. Buru - Town - school "
                required
                className="bg-gray-100 text-gray-800 p-3 rounded-lg w-full"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="suggestions"
                className="text-left block text-lg font-bold text-gray-700"
              >
                Any Suggestions you would like to give? (Optional)
              </Label>
              <Textarea
                id="suggestions"
                placeholder="What would you like to see on the app?"
                className="bg-gray-100 text-gray-800 p-3 rounded-lg w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 text-white hover:bg-green-500 transition-colors duration-300 p-3 rounded-lg font-semibold"
            >
              Sign Up & Be the First to Know!
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-xl font-medium">
              Thanks for signing up! We'll notify you when we launch.
            </p>
            <p className="mt-2 text-lg">
              Stay tuned for updates about Route11!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
