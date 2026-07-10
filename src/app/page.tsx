"use client"; // ← यह लाइन लिखना ज़रूरी है ताकि एरर ठीक हो जाए

import React from 'react';

// public/logo.png को यहाँ सेट किया गया है
const Logo = () => (
  <div className="flex items-center gap-2.5">
    <img 
      src="/logo.png" 
      alt="Kaam Point Logo" 
      className="h-9 w-auto object-contain"
      onError={(e) => {
        // अगर logo.png न मिले तो यह इमेज को छुपा देगा
        e.currentTarget.style.display = 'none';
      }}
    />
    <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
      Kaam Point
    </span>
  </div>
);

export default function HomePage() {
  // 📝 अपनी गूगल ड्राइव की लिंक यहाँ नीचे "YOUR_GOOGLE_DRIVE_LINK" की जगह पेस्ट कर दें
  const downloadLink = "YOUR_GOOGLE_DRIVE_LINK_HERE";

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-blue-100 text-base md:text-lg">
      
      {/* मुख्य नेविगेशन बार */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="text-sm md:text-base flex items-center gap-2 text-slate-600 font-medium bg-slate-100 px-4 py-2 rounded-full">
            <span>📧</span> info@kaampoint.in
          </div>
        </div>
      </nav>

      {/* 1. मुख्य हेडर सेक्शन (Hero Banner) */}
      <header className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-left">
            <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1.5 rounded text-sm mb-4 inline-block">
              आसान और सुरक्षित माध्यम
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 leading-tight">
              शहर भर के भरोसेमंद कारीगर, अब सीधे आपके मोबाइल पर।
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-xl text-slate-600 Regal leading-relaxed">
              अपने आस-पास के वेरीफाइड प्लंबर, इलेक्ट्रीशियन, पेंटर और अन्य कुशल कामगारों को खोजें। बिना किसी परेशानी के, सीधे ऐप के ज़रिए।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:bg-blue-700 transition text-sm md:text-base text-center"
              >
                📱 ऐप डाउनलोड करें (Google Drive)
              </a>
              <a 
                href="#join" 
                className="bg-white text-slate-700 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 hover:bg-slate-50 transition text-sm md:text-base text-center"
              >
                कारीगर पंजीकरण
              </a>
            </div>
          </div>
          
          {/* लाइट मॉकअप बॉक्स */}
          <div className="w-full md:w-auto flex justify-center">
            <img 
              src="/app-screen.png" 
              alt="Kaam Point App Screen" 
              className="w-48 h-auto rounded-2xl border-4 border-slate-200 shadow-xl object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </header>

      {/* 2. ग्राहकों के लिए जानकारी अनुभाग */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">यह कैसे काम करता है?</h2>
          <p className="text-sm md:text-base text-slate-500 font-medium"> can ग्राहकों के लिए 3 आसान चरण </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">कारीगर खोजें</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">अपने शहर और इलाके के अनुसार आवश्यक हुनर (Skill) चुनें।</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">नंबर अनलॉक करें (₹29)</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">सुरक्षित भुगतान करके सीधे कामगार का असली फ़ोन नंबर देखें।</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">सीधा संपर्क करें</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">बिना किसी बिचौलिये के सीधे बात करें और अपना काम पूरा करवाएं।</p>
          </div>
        </div>
      </section>

      {/* 3. कारीगरों के लिए जानकारी अनुभाग (लाइट ब्लू बॉक्स) */}
      <section id="join" className="py-12 px-6 max-w-5xl mx-auto bg-sky-50/70 rounded-2xl border border-sky-100 my-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">👷 क्या आप एक हुनरमंद कारीगर हैं?</h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 text-center font-medium">हमारे साथ जुड़कर रोज़ नए ग्राहकों से सीधे काम और पूरा पैसा पाएं।</p>
          
          <div className="bg-white p-6 md:p-8 rounded-xl border border-sky-100/80 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-4 text-base md:text-lg">पंजीकरण फॉर्म भरने की प्रक्रिया:</h4>
            <ul className="space-y-3.5 text-sm md:text-base text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✔</span> <span>नीचे दिए लिंक से हमारा <strong>Kaam Point ऐप</strong> डाउनलोड करें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✔</span> <span>अपने mobile नंबर पर प्राप्त OTP से लॉगिन करें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✔</span> <span><strong>'Join as Labour'</strong> फॉर्म में अपना नाम, कला, शहर और आईडी कार्ड की फोटो अपलोड करें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✔</span> <span>दस्तावेजों की जांच के बाद 24 घंटे में आपका प्रोफाइल लाइव हो जाएगा।</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. लाइट डाउनलोड सेक्शन */}
      <section id="download" className="bg-white border-t border-b border-slate-200 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">आधिकारिक ऐप अभी डाउनलोड करें</h2>
          <p className="text-sm md:text-base text-slate-500 mb-8 max-w-lg mx-auto">
            यह वेबसाइट केवल सूचनात्मक पोस्टर के रूप में है। कारीगरों को खोजने या फॉर्म भरने के लिए कृपया ऐप का उपयोग करें।
          </p>
          <a 
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base px-8 py-4 rounded-lg shadow-md transition cursor-pointer"
          >
            🤖 Download Android APK (Google Drive)
          </a>
        </div>
      </section>

      {/* फुटर */}
<footer className="bg-slate-100 text-slate-500 py-8 text-center text-sm border-t border-slate-200">
  <p className="mb-2 font-semibold text-slate-600">info@kaampoint.in</p>
  
  {/* 🔗 यहाँ प्राइवेसी और टर्म्स के लिंक्स जोड़े गए हैं */}
  <div className="flex justify-center gap-6 mb-3 font-medium text-blue-600">
    <a href="/privacy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms & Conditions</a>
  </div>
  
  <p>© 2026 Kaam Point. सर्वाधिकार सुरक्षित।</p>
</footer>

    </div>
  );
}