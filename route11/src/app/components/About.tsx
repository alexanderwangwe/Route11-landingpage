import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="mx-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-green-800 mb-6 tracking-tight">About Route11</h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Daily campus commutes can be frustrating—overcrowded matatus, unpredictable schedules, fluctuating fares, and long wait times make it a stressful experience for students and staff.
              <br />
              <br />
              Route11 is a smart commuting solution for campus students and staff, offering reliable, affordable, and tech-enabled transportation. Enjoy guaranteed seating, real-time tracking, and harassment-free rides.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mockup.jpg?height=300&width=400"
              alt="Route11 mobile app mockup"
              width={400}
              height={300}
              className="rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
