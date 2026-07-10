import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen py-12 px-6 text-base md:text-lg">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 border-b pb-4">
          Terms & Conditions (नियम और शर्तें)
        </h1>
        <p className="text-slate-500 text-sm mb-6">आखिरी अपडेट: जुलाई 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">1. सेवाओं का विवरण</h2>
            <p className="leading-relaxed text-slate-600">
              **Kaam Point** केवल ग्राहकों और स्वतंत्र कुशल कारीगरों (जैसे प्लंबर, इलेक्ट्रीशियन आदि) को आपस में मिलाने का एक डिजिटल माध्यम है। हम किसी भी कारीगर के काम की गुणवत्ता, व्यवहार या सीधे तौर पर उनके द्वारा किए गए काम की गारंटी नहीं लेते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">2. भुगतान और अनलॉक शुल्क (₹29)</h2>
            <p className="leading-relaxed text-slate-600">
              ग्राहक द्वारा किसी कारीगर का संपर्क नंबर देखने के लिए दिया जाने वाला ₹29 का शुल्क केवल प्लेटफॉर्म पर नंबर अनलॉक करने के लिए है। कारीगर के काम की मजदूरी ग्राहक और कारीगर को आपस में तय करनी होगी। नंबर अनलॉक होने के बाद यह शुल्क नॉन-रिफंडेबल (Refundable नहीं) होगा।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">3. कारीगरों के लिए नियम</h2>
            <p className="leading-relaxed text-slate-600">
              रजिस्ट्रेशन करने वाले सभी कारीगरों को सही और वैध दस्तावेज प्रदान करने होंगे। यदि किसी कारीगर के खिलाफ ग्राहकों से धोखाधड़ी या दुर्व्यवहार की शिकायत मिलती है, तो Kaam Point बिना किसी पूर्व सूचना के उनका प्रोफाइल ब्लॉक करने का अधिकार रखता है।
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">4. नियमों में बदलाव</h2>
            <p className="leading-relaxed text-slate-600">
              हम समय-समय पर इन नियमों में बदलाव कर सकते हैं। ऐप या वेबसाइट का निरंतर उपयोग यह दर्शाता है कि आप नए नियमों से सहमत हैं।
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