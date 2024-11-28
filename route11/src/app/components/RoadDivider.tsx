export default function RoadDivider() {
    return (
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gray-300">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-yellow-400 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 right-0 flex justify-center items-center">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-12 h-2 bg-white mx-8 rounded-full"
                style={{
                  animation: `moveRight 3s linear infinite ${index * 0.6}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  