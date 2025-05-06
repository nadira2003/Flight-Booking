export function SignupPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">إنشاء حساب جديد 📝</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
            >
              إنشاء حساب
            </button>
          </form>
        </div>
      </div>
    );
  }