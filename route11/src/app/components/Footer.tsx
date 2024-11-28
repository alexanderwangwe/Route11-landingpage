import { Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Route11</p>
            <p className="text-sm">Coming soon to your campus. Stay tuned for updates!</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start">
            <Mail className="w-4 h-4 mr-2" /> contact@route11.com
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <Phone className="w-4 h-4 mr-2" /> +254 123 456 789
          </p>
        </div>
      </div>
    </footer>
  )
}

