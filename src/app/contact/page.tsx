import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>
      <p className="mb-6">यदि आपके पास Kaam Point ऐप या सेवाओं से संबंधित कोई सवाल है, तो आप हमसे नीचे दिए गए माध्यमों से संपर्क कर सकते हैं:</p>

      <div className="space-y-4 border p-6 rounded-lg bg-gray-50">
        <div>
          <strong className="block text-lg text-gray-700">Business Name:</strong>
          <p>Kaam Point</p>
        </div>
        
        <div>
          <strong className="block text-lg text-gray-700">Email Support:</strong>
          <p>info@kaampoint.in</p>
        </div>

        <div>
          <strong className="block text-lg text-gray-700">Registered Office Address:</strong>
          <p>Indore, Madhya Pradesh, India - [अपना पिनकोड डालें]</p>
        </div>
      </div>
    </div>
  );
}