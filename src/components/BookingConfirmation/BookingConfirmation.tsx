export function BookingConfirmation() {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">تأكيد الحجز ✅</h2>
          <p className="text-gray-700 mb-4">يرجى مراجعة تفاصيل الحجز أدناه قبل تأكيده.</p>
  
          <div className="space-y-3 text-gray-600">
            <p><span className="font-semibold">الاسم:</span> محمد الأحمد</p>
            <p><span className="font-semibold">من:</span> دمشق</p>
            <p><span className="font-semibold">إلى:</span> القامشلي</p>
            <p><span className="font-semibold">الموعد:</span> 2025-05-10 الساعة 08:00</p>
            <p><span className="font-semibold">السعر:</span> 250,000 ل.س</p>
          </div>
  
          <div className="mt-6 text-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
              تأكيد الحجز
            </button>
          </div>
        </div>
      </div>
    );
  }