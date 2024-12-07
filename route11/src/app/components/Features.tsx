import { CheckCircle, BookUser, CreditCard, Shield } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: "Guaranteed Seating",
    description: "Say goodbye to overcrowded matatus."
  },
  {
    icon: BookUser,
    title: "Priority-Booking",
    description: "Be assured of a seat."
  },
  {
    icon: CreditCard,
    title: "Affordable Pricing",
    description: "Flexible plans designed for students and staff."
  },
  {
    icon: Shield,
    title: "Safety FIRST!",
    description: "You are assured of your safety and harrasment free rides."
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-yellow-50 ">
      <div className='mx-10'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Why Choose Route11?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <feature.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

