import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 bg-gray-50 mx-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-blak-600">About Route11</h2>
          <p className="text-lg mb-4">
            Route11 is a smart commuting solution for campus students and staff, offering reliable, affordable, and tech-enabled transportation. Enjoy guaranteed seating, real-time tracking, and secure payments.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/mockup.jpg?height=300&width=400"
            alt="Route11 mobile app mockup"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </section>
  )
}

