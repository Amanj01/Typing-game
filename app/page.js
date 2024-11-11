"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Sun, Moon } from 'lucide-react';

const translations = {
  en: {
    title: "Speed Typing Game",
    score: "Score",
    timeLeft: "Time Left",
    startGame: "Start Game",
    placeholder: "Type here...",
    gameOver: "Game Over!",
    finalScore: "Final Score",
    playAgain: "Play Again",
    switchLanguage: "Change Language",
    selectTime: "Select Time",
    seconds: "seconds",
    rating: "Your Rating",
    mistakes: "Mistakes",
    accuracy: "Accuracy",
    gameMode: "Game Mode",
    wordMode: "Single Words",
    sentenceMode: "Sentences",
    sentences: [
      "The quick brown fox jumps over the lazy dog.",
      "Programming is the art of telling computers what to do.",
      "Practice makes perfect when learning to type.",
      "Technology continues to shape our daily lives.",
      "Success comes to those who work hard and never give up.",
      "Innovation drives progress in the modern world.",
      "Knowledge is power in the digital age.",
      "Artificial intelligence is transforming industries.",
      "Cloud computing enables global collaboration.",
      "Cybersecurity protects our digital assets.",
      "Data analysis reveals hidden patterns.",
      "Machine learning algorithms improve over time.",
      "Virtual reality creates immersive experiences.",
      "Blockchain technology ensures transparency.",
      "Internet of things connects our devices.",
      "Mobile applications simplify daily tasks.",
      "Social media connects people worldwide.",
      "Digital transformation reshapes businesses.",
      "Quantum computing promises breakthroughs.",
      "Renewable energy powers the future.",
      "Remote work becomes the new normal.",
      "Education evolves with technology.",
      "Automation increases productivity.",
      "Big data drives decision making.",
      "Smart cities optimize urban living.",
      "The future belongs to the curious minds.",
      "Learning never stops in technology.",
      "Coding skills open new opportunities.",
      "Design thinking solves problems.",
      "User experience matters most.",
      "Every challenge is a learning opportunity.",
      "Time management leads to success.",
      "Communication bridges understanding.",
      "Creativity sparks innovation.",
      "Teamwork makes the dream work.",
      "Quality code is self-documenting.",
      "Testing ensures reliable software.",
      "Security begins with awareness.",
      "Performance optimization is crucial.",
      "Documentation saves time.",
      "Version control prevents disasters.",
      "Clean code is maintainable code.",
      "Debugging requires patience.",
      "Continuous learning brings growth.",
      "Feedback improves products.",
      "Agile methods enhance delivery.",
      "Standards ensure compatibility.",
      "Innovation starts with questions.",
      "Persistence overcomes obstacles.",
      "Excellence requires dedication."
    ],
    words: [
      "hello", "world", "programming", "javascript", "react",
      "nextjs", "development", "computer", "keyboard", "screen",
      "application", "software", "internet", "website", "typescript",
      "python", "java", "database", "server", "client",
      "cloud", "security", "network", "mobile", "desktop",
      "algorithm", "function", "variable", "object", "array",
      "framework", "library", "api", "rest", "graphql",
      "docker", "kubernetes", "devops", "agile", "scrum",
      "git", "github", "gitlab", "bitbucket", "jenkins",
      "testing", "debugging", "deployment", "monitoring", "logging",
      "analytics", "metrics", "dashboard", "interface", "component",
      "module", "package", "dependency", "version", "release",
      "backend", "frontend", "fullstack", "database", "cache",
      "memory", "storage", "processor", "thread", "async",
      "promise", "callback", "event", "listener", "handler",
      "validation", "authentication", "authorization", "encryption", "decryption",
      "protocol", "standard", "pattern", "design", "architecture",
      "scalability", "performance", "optimization", "efficiency", "reliability",
      "maintainability", "readability", "documentation", "comment", "review",
      "bug", "issue", "feature", "release", "update",
      "patch", "hotfix", "backup", "recovery", "restore",
      "sandbox", "production", "development", "staging", "testing",
      "compiler", "interpreter", "runtime", "framework", "library"
    ]
  },
  ku: {
    title: "یاری نووسین",
    score: "خاڵ",
    timeLeft: "کاتی ماوە",
    startGame: "دەستپێکردنی یاری",
    placeholder: "لێرە بنووسە...",
    gameOver: "یاری تەواو بوو!",
    finalScore: "کۆی خاڵ",
    playAgain: "دووبارە یاری بکە",
    switchLanguage: "گۆڕینی زمان",
    selectTime: "کات هەڵبژێرە",
    seconds: "چرکە",
    rating: "هەڵسەنگاندن",
    mistakes: "هەڵەکان",
    accuracy: "وردی",
    gameMode: "جۆری یاری",
    wordMode: "وشەی تاک",
    sentenceMode: "ڕستە",
    sentences: [
      "مرۆڤ بە فێربوون گەورە دەبێت.",
      "ژیان بەردەوام دەبێت بە هەموو جۆرەکانییەوە.",
      "سەرکەوتن بە کارکردن دێتە دی.",
      "زانست کلیلی پێشکەوتنە لە ژیاندا.",
      "خوێندن و نووسین بنەمای زانستە.",
      "تەکنەلۆژیا ژیانمان دەگۆڕێت.",
      "داهێنان کلیلی پێشکەوتنە.",
      "زانیاری هێزە لە سەردەمی دیجیتاڵدا.",
      "کۆمپیوتەر یارمەتی مرۆڤ دەدات.",
      "ئینتەرنێت جیهانی بچووک کردۆتەوە.",
      "فێربوون پرۆسەیەکی بەردەوامە.",
      "داهاتوو بۆ کەسانی داهێنەرە.",
      "پرۆگرامسازی زمانی داهاتووە.",
      "هەوڵدان کلیلی سەرکەوتنە.",
      "کات زێڕە، بەفیڕۆی مەدە.",
      "زانست سنووری نییە.",
      "کارکردن بە گرووپ باشترە.",
      "داهێنان لە بیرکردنەوەوە دەست پێدەکات.",
      "پەیوەندی کردن هونەرە.",
      "ئامانج دیاری بکە و بەرەو پێشەوە بڕۆ.",
      "بەردەوام بوون گرنگە.",
      "هەڵە سەرچاوەی فێربوونە.",
      "کواڵیتی باشتر لە کەمییەتە.",
      "بیرکردنەوە پێش کارکردن.",
      "پلان دانان نیوەی سەرکەوتنە.",
      "گۆڕانکاری بەشێکە لە ژیان.",
      "زانیاری هێزە.",
      "کات باشترین مامۆستایە.",
      "ئەزموون باشترین وانەیە.",
      "یەکگرتن هێزە.",
      "پێشکەوتن بە زانستە.",
      "نوێبوونەوە پێویستە.",
      "کارامەیی کلیلی سەرکەوتنە.",
      "ڕێکخستن گرنگە.",
      "بیرۆکەی نوێ پێویستە.",
      "هاوکاری بنەمای سەرکەوتنە.",
      "پسپۆڕی پێویستە.",
      "چارەسەری کێشەکان دۆزینەوەیە.",
      "داهێنان پێویستی بە بوێرییە.",
      "ئامانج دیاری بکە.",
      "بەردەوام بە لە فێربوون.",
      "هەوڵدان گرنگە.",
      "کات بەفیڕۆ مەدە.",
      "پلان دابنێ.",
      "بیر لە داهاتوو بکەوە.",
      "خۆت پەرەپێبدە.",
      "متمانەت بە خۆت هەبێت.",
      "هەرگیز دەست بەردار مەبە.",
      "سەرکەوتن نزیکە."
    ],
    words: [
      "سڵاو", "جیهان", "پرۆگرام", "کۆمپیوتەر", "مۆبایل",
      "ئینتەرنێت", "پەرەپێدان", "تەکنەلۆژیا", "زانست", "مێشک",
      "بەرنامە", "نەرمەکاڵا", "تۆڕ", "ماڵپەڕ", "زانیاری",
      "داتا", "سیستەم", "پرۆسێس", "ئامێر", "پەیوەندی",
      "تۆڕ", "پاراستن", "هێڵ", "گەڕان", "دۆزینەوە",
      "کۆد", "فەنکشن", "گۆڕاو", "ئۆبجێکت", "ئەرەی",
      "چوارچێوە", "کتێبخانە", "ئەپی", "ڕێست", "گراف",
      "دۆکەر", "کوبەر", "دیڤۆپس", "ئەجایل", "سکرەم",
      "گیت", "گیتهەب", "گیتلاب", "بیتبەکێت", "جێنکینز",
      "تێست", "دیباگ", "دیپلۆی", "چاودێری", "تۆمار",
      "شیکاری", "پێوەر", "داشبۆرد", "ڕووکار", "پێکهاتە",
      "مۆدیول", "پاکێج", "پێویستی", "وەشان", "دەرچوون",
      "باکئێند", "فرۆنتئێند", "فوڵستاک", "داتابەیس", "کاش",
      "میمۆری", "هەڵگرتن", "پرۆسێسەر", "سرێد", "ئەسینک",
      "بەڵێن", "کاڵباک", "ڕووداو", "گوێگر", "چارەسەر",
      "پشتڕاستکردنەوە", "ناسنامە", "دەسەڵات", "شفرە", "کردنەوە",
      "پرۆتۆکۆڵ", "ستاندارد", "نەخشە", "دیزاین", "پێکهاتە",
      "فراوانبوون", "کارایی", "باشترکردن", "کاریگەری", "متمانە",
      "چاککردن", "خوێندنەوە", "بەڵگەنامە", "تێبینی", "پێداچوونەوە",
      "هەڵە", "کێشە", "تایبەتمەندی", "دەرچوون", "نوێکردنەوە",
      "پاتچ", "چاککردن", "پاراستن", "گەڕاندنەوە", "دووبارەکردنەوە",
      "ساندبۆکس", "بەرهەم", "پەرەپێدان", "تاقیکردنەوە", "تێست",
      "کۆمپایلەر", "وەرگێڕ", "کاتی جێبەجێکردن", "چوارچێوە", "کتێبخانە"
    ]
  },
  ar: {
    title: "لعبة الكتابة السريعة",
    score: "النتيجة",
    timeLeft: "الوقت المتبقي",
    startGame: "ابدأ اللعبة",
    placeholder: "اكتب هنا...",
    gameOver: "انتهت اللعبة!",
    finalScore: "النتيجة النهائية",
    playAgain: "العب مرة أخرى",
    switchLanguage: "تغيير اللغة",
    selectTime: "اختر الوقت",
    seconds: "ثانية",
    rating: "تقييمك",
    mistakes: "الأخطاء",
    accuracy: "الدقة",
    gameMode: "نوع اللعبة",
    wordMode: "كلمات مفردة",
    sentenceMode: "جمل",
    sentences: [
      "العلم نور والجهل ظلام.",
      "النجاح يأتي مع العمل الجاد.",
      "التكنولوجيا تغير حياتنا كل يوم.",
      "القراءة غذاء العقل والروح.",
      "الوقت كالسيف إن لم تقطعه قطعك.",
      "المعرفة قوة في العصر الرقمي.",
      "الابتكار يقود التقدم في العالم الحديث.",
      "الذكاء الاصطناعي يغير الصناعات.",
      "الحوسبة السحابية تمكن التعاون العالمي.",
      "أمن المعلومات يحمي أصولنا الرقمية.",
      "تحليل البيانات يكشف الأنماط الخفية.",
      "خوارزميات التعلم الآلي تتحسن مع الوقت.",
      "الواقع الافتراضي يخلق تجارب غامرة.",
      "تقنية البلوكشين تضمن الشفافية.",
      "إنترنت الأشياء يربط أجهزتنا.",
      "التطبيقات المحمولة تبسط المهام اليومية.",
      "وسائل التواصل الاجتماعي تربط العالم.",
      "التحول الرقمي يعيد تشكيل الأعمال.",
      "الحوسبة الكمية تعد باختراقات.",
      "الطاقة المتجددة تغذي المستقبل.",
      "العمل عن بعد يصبح الوضع الطبيعي الجديد.",
      "التعليم يتطور مع التكنولوجيا.",
      "الأتمتة تزيد الإنتاجية.",
      "البيانات الضخمة تقود صنع القرار.",
      "المدن الذكية تحسن الحياة الحضرية.",
      "المستقبل ملك للعقول الفضولية.",
      "التعلم لا يتوقف في التكنولوجيا.",
      "مهارات البرمجة تفتح فرصًا جديدة.",
      "التفكير التصميمي يحل المشكلات.",
      "تجربة المستخدم مهمة للغاية.",
      "كل تحد هو فرصة للتعلم.",
      "إدارة الوقت تقود إلى النجاح.",
      "التواصل يجسر الفهم.",
      "الإبداع يشعل الابتكار.",
      "العمل الجماعي يحقق الأحلام.",
      "الكود النظيف يوثق نفسه.",
      "الاختبار يضمن برمجيات موثوقة.",
      "الأمان يبدأ بالوعي.",
      "تحسين الأداء أمر حاسم.",
      "التوثيق يوفر الوقت.",
      "التحكم بالإصدارات يمنع الكوارث.",
      "الشيفرة النظيفة قابلة للصيانة.",
      "تصحيح الأخطاء يتطلب الصبر.",
      "التعلم المستمر يجلب النمو.",
      "التغذية الراجعة تحسن المنتجات.",
      "الطرق المرنة تعزز التسليم.",
      "المعايير تضمن التوافق.",
      "الابتكار يبدأ بالأسئلة.",
      "المثابرة تتغلب على العقبات.",
      "التميز يتطلب التفاني."
    ],
    words: [
      "مرحبا", "عالم", "برمجة", "حاسوب", "تطوير",
      "انترنت", "تكنولوجيا", "تطبيق", "برنامج", "شبكة",
      "موقع", "معرفة", "تعلم", "مستقبل", "ذكاء",
      "بيانات", "نظام", "معالجة", "جهاز", "اتصال",
      "شبكة", "أمان", "خط", "بحث", "اكتشاف",
      "كود", "دالة", "متغير", "كائن", "مصفوفة",
      "إطار", "مكتبة", "واجهة", "راحة", "رسم",
      "حاوية", "تنسيق", "تطوير", "مرن", "منهجية",
      "مستودع", "منصة", "مختبر", "تحكم", "بناء",
      "اختبار", "تصحيح", "نشر", "مراقبة", "تسجيل",
      "تحليل", "قياس", "لوحة", "واجهة", "مكون",
      "وحدة", "حزمة", "تبعية", "إصدار", "إطلاق",
      "خلفية", "واجهة", "متكامل", "بيانات", "ذاكرة",
      "تخزين", "معالج", "خيط", "تزامن", "وعد",
      "استدعاء", "حدث", "مستمع", "معالج", "تحقق",
      "مصادقة", "تفويض", "تشفير", "فك", "تحليل",
      "بروتوكول", "معيار", "نمط", "تصميم", "هيكل",
      "توسع", "أداء", "تحسين", "كفاءة", "موثوقية",
      "صيانة", "قراءة", "توثيق", "تعليق", "مراجعة",
      "خطأ", "مشكلة", "ميزة", "إصدار", "تحديث",
      "إصلاح", "تصحيح", "نسخة", "استعادة", "استرجاع",
      "تجريب", "إنتاج", "تطوير", "اختبار", "فحص",
      "مترجم", "مفسر", "تشغيل", "إطار", "مكتبة"
    ]
  }
};

const TypingGame = () => {
  const [lang, setLang] = useState('en');
  const [currentText, setCurrentText] = useState('');
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedTime, setSelectedTime] = useState(60);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [totalKeyPresses, setTotalKeyPresses] = useState(0);
  const [mistakeIndices, setMistakeIndices] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gameMode, setGameMode] = useState('word'); 

  const t = translations[lang];

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setGameStarted(false);
    }
  }, [gameStarted, timeLeft]);

  const getRandomText = () => {
    const texts = gameMode === 'word' ? t.words : t.sentences;
    const randomIndex = Math.floor(Math.random() * texts.length);
    setCurrentText(texts[randomIndex]);
  };

  const calculateRating = () => {
    const accuracy = calculateAccuracy();
    if (accuracy >= 95) return 5;
    if (accuracy >= 90) return 4;
    if (accuracy >= 80) return 3;
    if (accuracy >= 70) return 2;
    return 1;
  };

  const calculateAccuracy = () => {
    const correctKeyPresses = totalKeyPresses - mistakeCount;
    return ((correctKeyPresses / totalKeyPresses) * 100) || 0;
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(selectedTime);
    setGameOver(false);
    setMistakeCount(0);
    setTotalKeyPresses(0);
    setMistakeIndices([]);
    getRandomText();
  };

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    setTotalKeyPresses(prev => prev + 1);

    const newMistakeIndices = [];
    for (let i = 0; i < newInput.length; i++) {
      if (newInput[i] !== currentText[i]) {
        newMistakeIndices.push(i);
        if (!mistakeIndices.includes(i)) {
          setMistakeCount(prev => prev + 1);
        }
      }
    }
    setMistakeIndices(newMistakeIndices);

    if (newInput === currentText) {
      setScore(prev => prev + 1);
      setInput('');
      setMistakeIndices([]);
      getRandomText();
    }
  };

  const renderText = () => {
    return currentText.split('').map((letter, index) => (
      <span
        key={index}
        className={`${
          mistakeIndices.includes(index) && index < input.length
            ? 'text-red-500 border-b-2 border-red-500'
            : index < input.length
            ? 'text-green-500'
            : isDarkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-purple-500 to-blue-400'
    } ${
      lang === 'ar' || lang === 'ku' ? 'font-[vazirmatn]' : 'font-sans'
    }`}>
      <div className={`w-full max-w-md rounded-xl shadow-xl p-6 space-y-6 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center">
          <h1 
            className={`text-3xl font-bold transform transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          >
            {t.title}
          </h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full transform transition-transform duration-200 hover:scale-110 active:scale-90"
          >
            {isDarkMode ? (
              <Sun className="text-white" size={24} />
            ) : (
              <Moon className="text-gray-800" size={24} />
            )}
          </button>
        </div>

        <div className={`flex justify-between text-lg font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-700'
        }`}>
          <div>{t.score}: {score}</div>
          <div>{t.timeLeft}: {timeLeft}s</div>
        </div>

        {!gameStarted && !gameOver && (
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className={isDarkMode ? 'text-white' : 'text-gray-700'}>
                {t.gameMode}
              </label>
              <select 
                className={`w-full p-2 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'
                }`}
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}
              >
                <option value="word">{t.wordMode}</option>
                <option value="sentence">{t.sentenceMode}</option>
              </select>

              <label className={isDarkMode ? 'text-white' : 'text-gray-700'}>
                {t.selectTime}
              </label>
              <select 
                className={`w-full p-2 border rounded-lg ${
                  isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'
                }`}
                value={selectedTime}
                onChange={(e) => setSelectedTime(Number(e.target.value))}
              >
                <option value={30}>30 {t.seconds}</option>
                <option value={60}>60 {t.seconds}</option>
              </select>
            </div>
            <button
              className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700 hover:scale-105 active:scale-95"
              onClick={startGame}
            >
              {t.startGame}
            </button>
          </div>
        )}

        {gameStarted && (
          <div className="space-y-4">
            <div
              className={`text-2xl font-bold text-center transition-opacity duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
              dir={lang === 'ar' || lang === 'ku' ? 'rtl' : 'ltr'}
            >
              {renderText()}
            </div>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-purple-500' 
                  : 'bg-white text-gray-800 border-gray-300 focus:border-purple-500'
              }`}
              placeholder={t.placeholder}
              dir={lang === 'ar' || lang === 'ku' ? 'rtl' : 'ltr'}
              autoFocus
            />
          </div>
        )}

        {gameOver && (
          <div 
            className="text-center space-y-4 transform transition-all duration-300"
          >
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {t.gameOver}
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {t.finalScore}: {score}
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {t.mistakes}: {mistakeCount}
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {t.accuracy}: {calculateAccuracy().toFixed(1)}%
            </p>
            
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`transition-colors duration-200 ${i < calculateRating() ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  size={24}
                />
              ))}
            </div>
            
            <button
              className="py-2 px-6 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700 hover:scale-105 active:scale-95"
              onClick={startGame}
            >
              {t.playAgain}
            </button>
          </div>
        )}

        <select
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-gray-700 text-white border-gray-600' 
              : 'bg-gray-200 text-gray-700'
          }`}
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ku">کوردی</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <div className="flex gap-1 pt-10"> Developer:<a href="https://github.com/Amanj01" target="_blank" rel="noopener noreferrer"> Amanj shkur</a></div>
    </div>
  );
};

export default TypingGame;