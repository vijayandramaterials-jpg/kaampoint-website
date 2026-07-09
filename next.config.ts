import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // यह लाइन प्रोजेक्ट को HTML/CSS/JS में बदल देगी
  images: {
    unoptimized: true,   // स्टेटिक एक्सपोर्ट में इमेजेस के लिए यह ज़रूरी है
  },
};

export default nextConfig;