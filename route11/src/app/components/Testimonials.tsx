export default function Testimonials() {
    return (
      <section className="py-16 bg-yellow-50">
        
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">See what users say about us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="text-gray-600 mb-4">"Finally, a transport solution just for students like me!"</p>
              <p className="font-semibold">- Joan, 3rd Year Student</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="text-gray-600 mb-4">"Route11 has made my daily commute so much more convenient and reliable."</p>
              <p className="font-semibold">- Prof. Johnson, Faculty Member</p>
            </div>
          </div>
        </div>
       
      </section>
    )
  }
  
  