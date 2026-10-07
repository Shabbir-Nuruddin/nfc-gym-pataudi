import "@fontsource/khand/700.css";
import type { Site } from "./lib";

const DAY: [number, number][] = [[5, 22]];

export const SITE: Site = {
  name: "NFC Gym",
  sub: { en: "Spacious strength gym · Pataudi", hi: "बड़ा और खुला जिम · पटौदी" },
  banner: { en: "Monday to Saturday, 5 am to 10 pm: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार, सुबह 5 से रात 10: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "918059246529",
  phoneDisplay: "+91 80592 46529",
  lat: 28.3386897,
  lon: 76.7665956,
  hours: [[], DAY, DAY, DAY, DAY, DAY, DAY],
  theme: {
    dark: true,
    bg: "#0b0d08",
    bg2: "#11140c",
    panel: "#181c11",
    ink: "#f2f5ea",
    ink2: "#c3c8b5",
    ink3: "#858b78",
    line: "#252b1a",
    accent: "#c6f432",
    onAccent: "#1a2400",
    display: "Khand",
    weight: 700,
    upper: true,
  },
  scene: "dumbbells",
  align: "right",
  hero: {
    title: [
      { en: "Room to train.", hi: "ट्रेनिंग के लिए पूरी जगह।" },
      { en: "Pataudi's big gym.", hi: "पटौदी का बड़ा जिम।" },
    ],
    proof: {
      en: "4.8 on Google from 99 reviews. Latest machines, good flooring, a personal trainer on the floor and coach Nikhil Guruji.",
      hi: "गूगल पर 99 रिव्यू से 4.8। नई मशीनें, अच्छी फ़्लोरिंग, पर्सनल ट्रेनर और कोच निखिल गुरुजी।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Strength", "Machines", "Cardio", "Personal trainer", "Beginners welcome", "Clean floor", "Pataudi"],
  dishes: {
    title: { en: "Why members pick NFC", hi: "मेंबर NFC क्यों चुनते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Space", hi: "जगह" }, quote: "NFC Gym is very spacious & well designed, good flooring", img: "/img/p3.jpg" },
      { name: { en: "Machines", hi: "मशीनें" }, quote: "Latest machines available. A personal trainer is also available.", img: "/img/p4.jpg" },
      { name: { en: "Beginners", hi: "शुरुआत करने वाले" }, quote: "Excellent gym with good equipment ,highly efficient for beginners.", img: "/img/p5.jpg" },
      { name: { en: "Clean", hi: "साफ़-सफ़ाई" }, quote: "Updated Equipments, clean gym and great staff. Would highly recommend!" },
      { name: { en: "Results", hi: "नतीजे" }, quote: "Good facilities, good mentor, good coach, positive results." },
      { name: { en: "Vibe", hi: "माहौल" }, quote: "Motivating place with good vibes." },
    ],
  },
  gallery: {
    title: { en: "Inside NFC", hi: "NFC के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main training floor at NFC Gym", wide: true },
      { src: "/img/p2.jpg", alt: "Wall mural inside the gym" },
      { src: "/img/p8.jpg", alt: "NFC Gym logo" },
      { src: "/img/p5.jpg", alt: "Weights area", wide: true },
      { src: "/img/p4.jpg", alt: "Cable machine" },
      { src: "/img/p3.jpg", alt: "Rows of machines" },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Coached by Nikhil Guruji", hi: "कोच निखिल गुरुजी" },
    body: { en: "Members name him more than any machine.", hi: "मेंबर्स किसी मशीन से ज़्यादा उनका नाम लेते हैं।" },
    img: "/img/p1.jpg",
    hosts: [
      { name: "NIKHIL GURUJI", quote: "Kudos to Nikhil Guruji, he not only makes the workout challenging but fun. He instills a feeling of team and helps achieve higher fitness levels." },
      { name: "NIKHIL", quote: "Excellent gym nd gym trainer mr Nikhil is so polite ... He helps u nd guide u properly." },
      { name: "NIKHIL BHAI", quote: "Great Place fully equipped with excellent assistance of Nikhil Bhai" },
    ],
  },
  reviews: {
    title: { en: "Best Gym in Pataudi, say members", hi: "मेंबर्स कहते हैं, पटौदी का बेस्ट जिम" },
    rating: 4.8,
    dist: [94, 1, 1, 0, 3],
    quotes: [
      { quote: "Best Gym in Pataudi 🚩👍", stars: 5 },
      { quote: "There is no one better than this in Pataudi area Very clean gym.", stars: 5 },
      { quote: "The gym is very spacious and equipments are very good .", stars: 5 },
      { quote: "Best gym I had ever seen mza aata h gym me Sara staff kafi helpful h or upr se itni bdi gym h ki pura space milta h apne workout ko perform krne k lie", stars: 5 },
    ],
  },
  visit: {
    title: { en: "In Pataudi", hi: "पटौदी में" },
    img: "/img/p3.jpg",
    alt: "Training floor at NFC Gym",
    address: { en: "8QQ8+FJH, Pataudi, Haryana 122503", hi: "8QQ8+FJH, पटौदी, हरियाणा 122503" },
    note: { en: "Monday to Saturday, 5 in the morning to 10 at night. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से रात 10। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Space", hi: "जगह" }, title: { en: "No waiting for a bench.", hi: "बेंच के लिए इंतज़ार नहीं।" }, quote: "NFC Gym is very spacious & well designed, good flooring" },
    { kicker: { en: "Coach", hi: "कोच" }, title: { en: "Challenging, but fun.", hi: "मुश्किल, पर मज़ेदार।" }, quote: "he not only makes the workout challenging but fun." },
    { kicker: { en: "First time", hi: "पहली बार" }, title: { en: "Good for beginners.", hi: "शुरुआत के लिए अच्छा।" }, quote: "Excellent gym with good equipment ,highly efficient for beginners." },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Muscle gain", hi: "मसल बनाना" } },
      { name: { en: "Personal training", hi: "पर्सनल ट्रेनिंग" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi NFC Gym, I'd like to visit:", hi: "नमस्ते NFC जिम, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi NFC Gym, I'd like to know about joining. Goal: ",
    hi: "नमस्ते NFC जिम, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
