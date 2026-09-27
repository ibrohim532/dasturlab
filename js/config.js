/**
 * DasturLab — central configuration & data.
 *
 * This is the ONLY place UI components read content from.
 * Replace placeholder values here; do not edit component/HTML markup
 * to change copy, numbers, links or sample content.
 *
 * When a real backend/admin panel exists, PROJECTS, BLOG_POSTS,
 * TESTIMONIALS, SERVICES and STATS should be fetched from an API
 * instead of read from this file (see api.js for the integration point).
 */

const COMPANY = {
  name: "DasturLab",
  legalName: "DasturLab",
  foundedYear: 2024,
  descriptionShort: {
    uz: "Zamonaviy veb-saytlar, mobil ilovalar, Telegram botlar va AI yechimlar yaratuvchi dasturlash jamoasi.",
    ru: "Команда разработчиков современных веб-сайтов, мобильных приложений, Telegram-ботов и AI-решений.",
    en: "A development team building modern websites, mobile apps, Telegram bots and AI-powered products."
  },
  // Placeholders — replace with real data before launch.
  contact: {
    email: "info@example.com",         // PLACEHOLDER
    phone: "+998 90 000 00 00",        // PLACEHOLDER
    telegram: "https://t.me/example",  // PLACEHOLDER
    instagram: "https://instagram.com/example", // PLACEHOLDER
    github: "https://github.com/example",       // PLACEHOLDER
    linkedin: "https://linkedin.com/company/example", // PLACEHOLDER
    address: { uz: "Toshkent, O‘zbekiston", ru: "Ташкент, Узбекистан", en: "Tashkent, Uzbekistan" }
  }
};

const FOUNDERS = [
  {
    id: "ardosher",
    name: "Abdullayev Ardosher",
    role: { uz: "Founder / Full-Stack Developer", ru: "Основатель / Full-Stack разработчик", en: "Founder / Full-Stack Developer" },
    bio: {
      uz: "Veb va backend arxitekturasi yo‘nalishida ishlaydi, loyihalarning texnik sifatini nazorat qiladi.",
      ru: "Занимается веб- и backend-архитектурой, отвечает за техническое качество проектов.",
      en: "Focuses on web and backend architecture and owns technical quality across projects."
    },
    skills: ["Python", "React", "Node.js", "PostgreSQL", "Docker"],
    social: { github: "#", telegram: "#", linkedin: "#" } // PLACEHOLDERS
  },
  {
    id: "ibrohim",
    name: "Hamidullayev Ibrohim",
    role: { uz: "Co-Founder / Full-Stack Developer", ru: "Со-основатель / Full-Stack разработчик", en: "Co-Founder / Full-Stack Developer" },
    bio: {
      uz: "Mobil va frontend yo‘nalishida ishlaydi, mijozlar bilan muloqot va loyiha jarayonini boshqaradi.",
      ru: "Занимается мобильной и frontend-разработкой, ведёт коммуникацию с клиентами.",
      en: "Focuses on mobile and frontend development and manages client communication and delivery."
    },
    skills: ["Flutter", "TypeScript", "Next.js", "FastAPI", "Git"],
    social: { github: "#", telegram: "#", linkedin: "#" } // PLACEHOLDERS
  }
];

const STATS = [
  { value: 20, suffix: "+", label: { uz: "Loyihalar", ru: "Проектов", en: "Projects" } },
  { value: 10, suffix: "+", label: { uz: "Mijozlar", ru: "Клиентов", en: "Clients" } },
  { value: 2,  suffix: "",  label: { uz: "Asoschilar", ru: "Основателя", en: "Founders" } },
  { value: 24, suffix: "/7", label: { uz: "Qo‘llab-quvvatlash", ru: "Поддержка", en: "Support" } }
];

const VALUES = [
  { uz: "Sifat", ru: "Качество", en: "Quality" },
  { uz: "Innovatsiya", ru: "Инновации", en: "Innovation" },
  { uz: "Ishonchlilik", ru: "Надёжность", en: "Reliability" },
  { uz: "Tezkorlik", ru: "Скорость", en: "Speed" },
  { uz: "Shaffoflik", ru: "Прозрачность", en: "Transparency" }
];

const TIMELINE = [
  { year: "2024", text: { uz: "Kompaniya asos solindi", ru: "Основание компании", en: "Company founded" } },
  { year: "2025", text: { uz: "Birinchi mahsulotlar ishga tushirildi", ru: "Запущены первые продукты", en: "First products launched" } },
  { year: "2026", text: { uz: "Jamoa va loyihalar soni o‘sdi", ru: "Рост команды и проектов", en: "Team and project growth" } },
  { year: "→", text: { uz: "Xalqaro bozorlarga chiqish", ru: "Выход на международные рынки", en: "International expansion" } }
];

const PROCESS_STEPS = [
  { uz: "G‘oyani o‘rganamiz", ru: "Изучаем идею", en: "We study the idea" },
  { uz: "Reja tuzamiz", ru: "Составляем план", en: "We plan" },
  { uz: "Dizayn qilamiz", ru: "Создаём дизайн", en: "We design" },
  { uz: "Dasturlaymiz", ru: "Разрабатываем", en: "We develop" },
  { uz: "Test qilamiz", ru: "Тестируем", en: "We test" },
  { uz: "Ishga tushiramiz", ru: "Запускаем", en: "We launch" },
  { uz: "Qo‘llab-quvvatlaymiz", ru: "Поддерживаем", en: "We support" }
];

const SERVICES = [
  { icon: "🌐", key: "web", title: { uz: "Veb-saytlar", ru: "Веб-сайты", en: "Web Development" },
    desc: { uz: "Tezkor, zamonaviy va SEO uchun optimallashtirilgan veb-saytlar.", ru: "Быстрые, современные и SEO-оптимизированные сайты.", en: "Fast, modern, SEO-optimized websites." },
    tech: ["React", "Next.js", "TypeScript"] },
  { icon: "📱", key: "mobile", title: { uz: "Mobil ilovalar", ru: "Мобильные приложения", en: "Mobile Applications" },
    desc: { uz: "iOS va Android uchun bitta koddan ishlaydigan ilovalar.", ru: "Кроссплатформенные приложения для iOS и Android.", en: "Cross-platform apps for iOS and Android." },
    tech: ["Flutter", "Dart", "Firebase"] },
  { icon: "🤖", key: "bots", title: { uz: "Telegram botlar", ru: "Telegram-боты", en: "Telegram Bots" },
    desc: { uz: "Biznes jarayonlarini avtomatlashtiruvchi botlar.", ru: "Боты для автоматизации бизнес-процессов.", en: "Bots that automate business workflows." },
    tech: ["Python", "aiogram", "PostgreSQL"] },
  { icon: "🖥️", key: "webapp", title: { uz: "Veb-ilovalar", ru: "Веб-приложения", en: "Web Applications" },
    desc: { uz: "Murakkab ichki tizimlar va boshqaruv panellari.", ru: "Сложные внутренние системы и панели управления.", en: "Complex internal systems and dashboards." },
    tech: ["React", "Node.js", "MongoDB"] },
  { icon: "⚙️", key: "backend", title: { uz: "Backend va API", ru: "Backend и API", en: "Backend & API" },
    desc: { uz: "Barqaror va kengaytiriladigan server tomoni.", ru: "Стабильный и масштабируемый backend.", en: "Stable, scalable backend systems." },
    tech: ["FastAPI", "Django", "PostgreSQL"] },
  { icon: "🔐", key: "security", title: { uz: "Kiberxavfsizlik", ru: "Кибербезопасность", en: "Cybersecurity" },
    desc: { uz: "Ilovalaringizni zaifliklardan himoya qilamiz.", ru: "Защита приложений от уязвимостей.", en: "Protecting your applications from vulnerabilities." },
    tech: ["OWASP", "JWT", "OAuth2"] },
  { icon: "☁️", key: "server", title: { uz: "Server va VPS", ru: "Сервер и VPS", en: "Server & VPS" },
    desc: { uz: "Infratuzilmani sozlash va joylashtirish.", ru: "Настройка и развёртывание инфраструктуры.", en: "Infrastructure setup and deployment." },
    tech: ["Docker", "Linux", "Nginx"] },
  { icon: "🤖", key: "ai", title: { uz: "AI integratsiyasi", ru: "AI-интеграция", en: "AI Integration" },
    desc: { uz: "Biznesingizga sun'iy intellekt yechimlarini qo‘shamiz.", ru: "Внедряем решения на основе ИИ.", en: "Bringing AI-powered features into your product." },
    tech: ["OpenAI", "LangChain", "Python"] }
];

// Sample/placeholder projects — replace or extend freely, no UI changes needed.
const PROJECTS = [
  { id: 1, name: "ShopEase", category: "web", tags: ["Web"], tech: ["Next.js", "PostgreSQL"], desc: { uz: "Onlayn-do‘kon platformasi.", ru: "Платформа интернет-магазина.", en: "Online store platform." }, demo: "#", github: "#" },
  { id: 2, name: "FitTrack", category: "mobile", tags: ["Mobile"], tech: ["Flutter", "Firebase"], desc: { uz: "Sport va salomatlik ilovasi.", ru: "Приложение для спорта и здоровья.", en: "Fitness and health tracking app." }, demo: "#", github: "#" },
  { id: 3, name: "OrderBot", category: "bot", tags: ["Telegram Bot"], tech: ["Python", "aiogram"], desc: { uz: "Buyurtmalarni qabul qiluvchi Telegram bot.", ru: "Telegram-бот для приёма заказов.", en: "Telegram bot for taking orders." }, demo: "#", github: "#" },
  { id: 4, name: "SupportAI", category: "ai", tags: ["AI"], tech: ["OpenAI", "FastAPI"], desc: { uz: "Mijozlarga AI yordamida javob beruvchi tizim.", ru: "AI-система поддержки клиентов.", en: "AI-powered customer support system." }, demo: "#", github: "#" },
  { id: 5, name: "InvoiceAPI", category: "backend", tags: ["Backend"], tech: ["Django", "PostgreSQL"], desc: { uz: "Hisob-fakturalarni boshqarish uchun API.", ru: "API для управления счетами.", en: "API for invoice management." }, demo: "#", github: "#" },
  { id: 6, name: "TravelMate", category: "mobile", tags: ["Mobile"], tech: ["Flutter", "REST API"], desc: { uz: "Sayohat marshrutlarini rejalashtirish ilovasi.", ru: "Приложение для планирования путешествий.", en: "Travel itinerary planning app." }, demo: "#", github: "#" }
];

const TECHNOLOGIES = ["Python","JavaScript","TypeScript","Java","React","Next.js","Node.js","Flutter","FastAPI","Django","PostgreSQL","MongoDB","Docker","Git","GitHub","Linux","REST API","AI / ML"];

const WHY_US = [
  { uz: "Professional yondashuv", ru: "Профессиональный подход", en: "Professional approach" },
  { uz: "Zamonaviy texnologiyalar", ru: "Современные технологии", en: "Modern technologies" },
  { uz: "Toza arxitektura", ru: "Чистая архитектура", en: "Clean architecture" },
  { uz: "Tezkor aloqa", ru: "Быстрая коммуникация", en: "Fast communication" },
  { uz: "Xavfsizlik", ru: "Безопасность", en: "Security" },
  { uz: "Uzoq muddatli qo‘llab-quvvatlash", ru: "Долгосрочная поддержка", en: "Long-term support" },
  { uz: "Individual yondashuv", ru: "Индивидуальный подход", en: "Individual approach" },
  { uz: "Shaffof jarayon", ru: "Прозрачный процесс", en: "Transparent process" }
];

// Placeholder testimonials — clearly NOT real feedback, replace before launch.
const TESTIMONIALS = [
  { name: "Placeholder Client 1", position: { uz: "Loyiha egasi", ru: "Владелец проекта", en: "Project Owner" }, rating: 5,
    text: { uz: "Jamoa bilan ishlash qulay va tushunarli bo‘ldi. (Namunaviy matn)", ru: "Работа с командой была удобной и понятной. (Пример текста)", en: "Working with the team was smooth and clear. (Sample text)" } },
  { name: "Placeholder Client 2", position: { uz: "Startap asoschisi", ru: "Основатель стартапа", en: "Startup Founder" }, rating: 5,
    text: { uz: "Loyiha o‘z vaqtida va sifatli topshirildi. (Namunaviy matn)", ru: "Проект был сдан вовремя и качественно. (Пример текста)", en: "The project was delivered on time and with quality. (Sample text)" } },
  { name: "Placeholder Client 3", position: { uz: "Marketing menejeri", ru: "Менеджер по маркетингу", en: "Marketing Manager" }, rating: 4,
    text: { uz: "Aloqa jarayoni shaffof va tez bo‘ldi. (Namunaviy matn)", ru: "Коммуникация была прозрачной и быстрой. (Пример текста)", en: "Communication was transparent and quick. (Sample text)" } }
];

// Sample blog posts — future admin panel should CRUD this collection via API.
const BLOG_POSTS = [
  { id: 1, category: "ai", title: { uz: "AI yordamida biznesni avtomatlashtirish", ru: "Автоматизация бизнеса с помощью AI", en: "Automating business with AI" },
    excerpt: { uz: "Sun'iy intellekt biznes jarayonlarini qanday soddalashtiradi.", ru: "Как ИИ упрощает бизнес-процессы.", en: "How AI simplifies business workflows." },
    date: "2026-02-10", readTime: 6 },
  { id: 2, category: "web", title: { uz: "Next.js bilan tez veb-sayt qurish", ru: "Быстрая разработка сайтов на Next.js", en: "Building fast websites with Next.js" },
    excerpt: { uz: "Zamonaviy freymvorklar yordamida tezkor saytlar yaratish.", ru: "Создание быстрых сайтов с помощью современных фреймворков.", en: "Building fast sites with modern frameworks." },
    date: "2026-01-22", readTime: 5 },
  { id: 3, category: "bots", title: { uz: "Telegram bot yaratishning asoslari", ru: "Основы создания Telegram-ботов", en: "Basics of building Telegram bots" },
    excerpt: { uz: "aiogram yordamida birinchi botingizni yozing.", ru: "Напишите первого бота с помощью aiogram.", en: "Write your first bot using aiogram." },
    date: "2025-12-15", readTime: 4 },
  { id: 4, category: "devops", title: { uz: "Docker bilan joylashtirish jarayoni", ru: "Развёртывание с помощью Docker", en: "Deployment with Docker" },
    excerpt: { uz: "Ilovangizni konteynerlashtirish nima uchun kerak.", ru: "Зачем контейнеризировать ваше приложение.", en: "Why containerize your application." },
    date: "2025-11-30", readTime: 7 }
];

// Contact request schema (frontend-side shape only — see api.js for backend contract).
function createContactRequest(formData) {
  return {
    id: null,                 // assigned by backend
    name: formData.name,
    telegram: formData.telegram,
    email: formData.email,
    phone: formData.phone,
    projectType: formData.projectType,
    budget: formData.budget,
    message: formData.message,
    createdAt: new Date().toISOString(),
    status: "new"             // new | contacted | completed
  };
}
