// ============================================================
// 🛍️ PRODUCTS — এখানে আপনার পণ্য যোগ করুন / এডিট করুন
// ============================================================
//
// নতুন পণ্য যোগ করতে নিচের template কপি করে products array তে যোগ করুন:
//
//  {
//    id: (unique number),
//    title: "পণ্যের নাম",
//    desc: "পণ্যের বিবরণ",
//    price: 299,            ← টাকা (সংখ্যা)
//    oldPrice: 499,         ← আগের দাম, না থাকলে null লিখুন
//    type: "python",        ← "python" / "blogger" / "script" / "ebook" / "other"
//    icon: "🤖",            ← যেকোনো emoji
//    bg: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",  ← card color
//    hot: true,             ← HOT badge দেখাতে চাইলে true, না হলে false
//    rating: 4.8,           ← 1.0 থেকে 5.0
//    reviews: 42            ← রিভিউ সংখ্যা
//  },
//
// ⚠️  প্রতিটা id আলাদা হতে হবে।
// ⚠️  শেষ পণ্যের পরে comma দেওয়ার দরকার নেই।
// ============================================================

const products = [
  {
    id: 1,
    title: "Facebook Auto Post Bot",
    desc: "Python দিয়ে তৈরি ফেসবুক অটো পোস্ট স্ক্রিপ্ট। গ্রুপ ও পেজে অটোমেটিক পোস্ট করুন।",
    price: 299,
    oldPrice: 499,
    type: "python",
    icon: "🤖",
    bg: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
    hot: true,
    rating: 4.8, reviews: 42
  },
  {
    id: 2,
    title: "YouTube Thumbnail Downloader",
    desc: "যেকোনো YouTube ভিডিওর থাম্বনেইল HD তে ডাউনলোড করুন সহজেই।",
    price: 149,
    oldPrice: null,
    type: "python",
    icon: "🎬",
    bg: "linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)",
    hot: false,
    rating: 4.5, reviews: 28
  },
  {
    id: 3,
    title: "SEO Pro Blogger থিম",
    desc: "গুগল সার্চে র‍্যাংক করার জন্য অপটিমাইজড প্রিমিয়াম Blogger থিম।",
    price: 399,
    oldPrice: 699,
    type: "blogger",
    icon: "🎨",
    bg: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
    hot: true,
    rating: 5.0, reviews: 65
  },
  {
    id: 4,
    title: "WhatsApp Bulk Message Sender",
    desc: "Python স্ক্রিপ্ট দিয়ে হাজারো কনট্যাক্টে একসাথে WhatsApp মেসেজ পাঠান।",
    price: 499,
    oldPrice: 799,
    type: "python",
    icon: "💬",
    bg: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
    hot: false,
    rating: 4.7, reviews: 33
  },
  {
    id: 5,
    title: "Auto Like & Comment Bot",
    desc: "ইন্সটাগ্রাম ও ফেসবুকে অটো লাইক, কমেন্ট করার জন্য পাওয়ারফুল স্ক্রিপ্ট।",
    price: 349,
    oldPrice: 599,
    type: "script",
    icon: "❤️",
    bg: "linear-gradient(135deg, #880e4f 0%, #c2185b 100%)",
    hot: false,
    rating: 4.3, reviews: 19
  },
  {
    id: 6,
    title: "Magazine Dark Blogger থিম",
    desc: "নিউজ ও ম্যাগাজিন ব্লগের জন্য আধুনিক ডার্ক থিম। মোবাইল ফ্রেন্ডলি।",
    price: 299,
    oldPrice: 449,
    type: "blogger",
    icon: "📰",
    bg: "linear-gradient(135deg, #212121 0%, #424242 100%)",
    hot: false,
    rating: 4.6, reviews: 38
  },
  {
    id: 7,
    title: "PDF to Word Converter Tool",
    desc: "Python বেসড টুল যা যেকোনো PDF ফাইল Word ডকুমেন্টে কনভার্ট করে।",
    price: 199,
    oldPrice: null,
    type: "python",
    icon: "📄",
    bg: "linear-gradient(135deg, #004d40 0%, #00695c 100%)",
    hot: false,
    rating: 4.4, reviews: 22
  },
  {
    id: 8,
    title: "Website Scraper Pro Script",
    desc: "যেকোনো ওয়েবসাইট থেকে ডেটা স্ক্র্যাপ করুন। Excel এ এক্সপোর্ট করুন।",
    price: 449,
    oldPrice: 699,
    type: "script",
    icon: "🕷️",
    bg: "linear-gradient(135deg, #37474f 0%, #546e7a 100%)",
    hot: true,
    rating: 4.9, reviews: 57
  }

  // ✅ নতুন পণ্য এখানে যোগ করুন ↑
  // উপরের শেষ পণ্যের পরে কমা (,) দিয়ে নতুন পণ্য লিখুন
];
