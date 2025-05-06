import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // هون بتحط API call لو بدك، بس هلأ خلينا نعرض رسالة بسيطة.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">تواصل معنا </h2>
        <p className="text-gray-600 mb-6 text-center">عندك سؤال؟ استفسار؟ ولا حتى شكوى؟ نحنا دايمًا جاهزين نسمعك ونساعدك </p>

        {submitted ? (
          <div className="text-green-600 text-center text-xl font-semibold">
            دوم دوم! تم إرسال رسالتك بنجاح، رح نرد عليك بأقرب وقت 
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border px-4 py-3 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border px-4 py-3 text-gray-800"
            />
            <textarea
              name="message"
              placeholder="شو حابب تخبرنا؟"
              value={form.message}
              onChange={handleChange}
              required
             
              className="w-full rounded-xl border px-4 py-3 text-gray-800"
            ></textarea>
            <div className="text-center">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-xl text-lg">
                أرسل الرسالة
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
