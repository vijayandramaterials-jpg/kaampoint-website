import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Refund and Cancellation Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: June 2026</p>
      
      <p className="mb-6">
        Kaam Point (kaampoint.in) पर आपका स्वागत है। हमारी रिफंड और कैंसिलेशन पॉलिसी नीचे दी गई है:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Digital Services (डिजिटल सेवाएं)</h2>
      <p className="mb-4">
        Kaam Point एक डिजिटल प्लेटफॉर्म है। जब आप किसी कारीगर का नंबर अनलॉक करने के लिए ₹29 का भुगतान करते हैं, तो वह सेवा तुरंत (Instantly) डिलीवर हो जाती है। 
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. No Refund Policy (कोई रिफंड नहीं)</h2>
      <p className="mb-4">
        चूंकि नंबर अनलॉक करने की सेवा तुरंत पूरी हो जाती है, इसलिए एक बार भुगतान (Payment) सफल होने के बाद किसी भी स्थिति में **रिफंड (Refund) या कैंसिलेशन (Cancellation) स्वीकार नहीं किया जाएगा**।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Payment Failure (भुगतान विफलता)</h2>
      <p className="mb-4">
        यदि आपके बैंक खाते से पैसे कट जाते हैं और ऐप में नंबर अनलॉक नहीं होता है, तो कृपया 48 घंटों का इंतज़ार करें। आमतौर पर पेमेंट गेटवे इसे स्वचालित रूप से ठीक कर देता है। किसी भी समस्या के लिए आप हमें <strong>info@kaampoint.in</strong> पर लिख सकते हैं।
      </p>
    </div>
  );
}