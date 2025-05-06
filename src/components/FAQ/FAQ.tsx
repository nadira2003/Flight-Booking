import React, { useState } from "react";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف بقدر احجز تذكرة سفر عن طريق الموقع؟",
      answer:
        "الموضوع كتير بسيط: اختار وجهتك، حدد تاريخ الرحلة، وعدد الركاب، واضغط على 'اعرض الرحلات'. نحنا مناخدك خطوة بخطوة بعد هيك 🛫."
    },
    {
      question: "هل في خيارات لدرجة رجال الأعمال؟",
      answer:
        "يب يب! فيك تختار بين الدرجة الاقتصادية، درجة رجال الأعمال، أو الدرجة الأولى وقت الحجز ✨."
    },
    {
      question: "كيف فيني أدفع؟",
      answer:
        "بتقدر تدفع باستخدام بطاقات الدفع الإلكتروني، أو عبر تحويل بنكي حسب الخطوط الجوية المتوفرة 💳."
    },
    {
      question: "شو بيصير إذا لغيت الحجز؟",
      answer:
        "سياسة الإلغاء بتختلف حسب شركة الطيران، بس بنساعدك تتواصل معهم بكل سهولة ونوضحلك كلشي 🚨."
    },
    {
      question: "هل في عروض أو خصومات؟",
      answer:
        "طبعًا! تابع صفحتنا أول بأول، دايمًا في عروض خاصة ومفاجآت للزبائن الأوفياء 🎁."
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">الأسئلة الشائعة ✨</h2>
        <p className="text-gray-600 mb-8 text-center">كل شي لازم تعرفه قبل ما تحجز رحلتك – إذا بعدك محتار، هالصفحة رح ترتّبلك الأفكار.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-right px-4 py-3 bg-gray-100 hover:bg-gray-200 text-blue-900 font-medium flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-700 bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
