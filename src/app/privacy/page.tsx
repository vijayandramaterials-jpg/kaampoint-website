import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen py-12 px-6 text-base md:text-lg">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 border-b pb-4">
          Privacy Policy (गोपनीयता नीति)
        </h1>
        <p className="text-slate-500 text-sm mb-6">आखिरी अपडेट: जुलाई 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">1. हम कौन सी जानकारी एकत्र करते हैं?</h2>
            <p className="leading-relaxed text-slate-600">
              जब आप हमारे **Kaam Point** ऐप या वेबसाइट का उपयोग करते हैं, तो हम आपका नाम, मोबाइल नंबर, वर्तमान लोकेशन (स्थान) और कारीगरों के मामले में पहचान सत्यापन (Verification Documents) के दस्तावेज़ एकत्र करते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">2. जानकारी का उपयोग हम कैसे करते हैं?</h2>
            <p className="leading-relaxed text-slate-600">
              हम आपकी जानकारी का उपयोग ग्राहकों को उनके आस-पास के सही कारीगरों से जोड़ने, सुरक्षा जांच करने, और ऐप की सेवाओं को बेहतर बनाने के लिए करते हैं। हम आपका डेटा किसी भी तीसरे पक्ष (Third-party) को नहीं बेचते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">3. डेटा सुरक्षा (Data Security)</h2>
            <p className="leading-relaxed text-slate-600">
              उपयोगकर्ताओं और कारीगरों द्वारा अपलोड किया गया डेटा (जैसे फोन नंबर और आईडी दस्तावेज) हमारे सुरक्षित क्लाउड सर्वर पर पूरी तरह एन्क्रिप्टेड रूप में स्टोर किया जाता है। कारीगरों के दस्तावेज़ों का उपयोग केवल वेरिफिकेशन के लिए किया जाता है और उन्हें सार्वजनिक रूप से प्रदर्शित नहीं किया जाता।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">4. हमसे संपर्क करें</h2>
            <p className="leading-relaxed text-slate-600">
              यदि इस प्राइवेसी पॉलिसी को लेकर आपका कोई सवाल है, तो आप हमें **info@kaampoint.in** पर ईमेल कर सकते हैं।
            </p>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <a href="/" className="text-blue-600 font-semibold hover:underline">← मुख्य पृष्ठ पर वापस जाएँ</a>
        </div>
      </div>
    </div>
  );
}