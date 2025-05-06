export function FlightResults() {
    const flights = [
      {
        id: 1,
        from: "دمشق",
        to: "القامشلي",
        departure: "2025-05-10 08:00",
        arrival: "2025-05-10 10:00",
        price: 250000,
        airline: "الخطوط السورية"
      },
      {
        id: 2,
        from: "دمشق",
        to: "حلب",
        departure: "2025-05-10 14:00",
        arrival: "2025-05-10 15:30",
        price: 180000,
        airline: "أجنحة الشام"
      }
    ];
  
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">نتائج البحث ✈️</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {flights.map((flight) => (
            <div key={flight.id} className="border shadow-lg rounded-2xl p-6 hover:bg-blue-50">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-700">{flight.from} → {flight.to}</p>
                  <p className="text-sm text-gray-500">{flight.departure} → {flight.arrival}</p>
                  <p className="text-sm text-gray-500">شركة الطيران: {flight.airline}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xl text-green-600 font-bold">{flight.price.toLocaleString()} ل.س</p>
                  <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800">
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }