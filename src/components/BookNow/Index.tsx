import React, { useState } from "react";

export default function FlightBooking() {
  const [form, setForm] = useState({
    departure: "",
    arrival: "",
    date: "",
    passengers: 1,
    classType: "economy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">احجز رحلتك بسهولة وراحة بال</h1>
          <p className="text-gray-600 mb-6">أدخل بياناتك، اختار وجهتك، واخد لك كاسة قهوة... نحنا منجهّزلك كلشي بالسليم.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="مطار المغادرة"
              name="departure"
              value={form.departure}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 text-gray-800"
            />
            <input
              type="text"
              placeholder="مطار الوصول"
              name="arrival"
              value={form.arrival}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 text-gray-800"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 text-gray-800"
            />
            <input
              type="number"
              min="1"
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 text-gray-800"
            />
            <select
              name="classType"
              value={form.classType}
              onChange={handleChange}
              className="col-span-1 sm:col-span-2 border rounded-xl px-4 py-2 text-gray-700"
            >
              <option value="economy">الدرجة الاقتصادية</option>
              <option value="business">درجة رجال الأعمال</option>
              <option value="first">الدرجة الأولى</option>
            </select>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-xl text-lg">
              اعرض الرحلات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
