"use client";

export default function WaitlistSignup() {
  return (
    <section className="py-16 bg-yellow-50 text-black-500" id="waitlist-form">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-green-800 tracking-tight leading-snug">
          Waitlist & Feedback
        </h2>
        <p className="mb-10 text-lg text-gray-700">
          We know matatus can be a struggle—tell us how we can make your commute
          better!😄
        </p>

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md border border-gray-200">
          {/* Embed the MakeForm iframe */}
          <iframe
            src="https://eu.makeforms.co/knvbn6z/" // MakeForms embed URL
            width="100%"
            height="900"
            frameBorder="0"
            className="rounded-md"
            style={{
              overflow: "hidden",
              height: "600px",
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
