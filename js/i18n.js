/**
 * i18n — minimal, framework-free translation layer.
 *
 * How to add a new string:
 *   1. Add data-i18n="my.key" to the element (or data-i18n-placeholder for
 *      input placeholders).
 *   2. Add "my.key" under each language block below.
 *
 * How to add a new language:
 *   1. Add a new key (e.g. "de") to DICT following the same structure.
 *   2. Add a button in the navbar language menu with data-lang="de".
 */
const DICT = {
  uz: {
    "nav.home": "Bosh sahifa", "nav.about": "Biz haqimizda", "nav.services": "Xizmatlar",
    "nav.projects": "Loyihalar", "nav.tech": "Texnologiyalar", "nav.team": "Jamoa",
    "nav.blog": "Blog", "nav.contact": "Aloqa", "nav.cta": "Loyiha boshlash",
    "hero.title": "G‘oyangizni raqamli mahsulotga aylantiramiz.",
    "hero.subtitle": "DasturLab — zamonaviy texnologiyalar yordamida biznes va yangi g‘oyalar uchun professional raqamli yechimlar yaratadigan dasturchilar jamoasi.",
    "hero.cta1": "Loyiha boshlash", "hero.cta2": "Bizning loyihalar",
    "about.eyebrow": "Biz haqimizda", "about.title": "Zamonaviy raqamli mahsulotlar yaratamiz",
    "about.mission.title": "Vazifamiz", "about.mission.text": "Biznes va yangi g‘oyalarni ishonchli, sifatli dasturiy mahsulotga aylantirish.",
    "about.vision.title": "Vizyonimiz", "about.vision.text": "Markaziy Osiyoda ishonchli texnologik hamkorga aylanish.",
    "about.values.title": "Qadriyatlarimiz",
    "services.eyebrow": "Xizmatlar", "services.title": "Biz nima qila olamiz",
    "services.more": "Batafsil",
    "projects.eyebrow": "Loyihalar", "projects.title": "Bizning ishlarimiz",
    "projects.demo": "Demo", "projects.code": "GitHub",
    "filter.all": "Barchasi", "filter.web": "Web", "filter.mobile": "Mobile", "filter.bot": "Telegram Bot", "filter.ai": "AI", "filter.backend": "Backend",
    "tech.eyebrow": "Texnologiyalar", "tech.title": "Ishlatadigan texnologiyalarimiz",
    "process.eyebrow": "Jarayon", "process.title": "Biz qanday ishlaymiz",
    "team.eyebrow": "Jamoa", "team.title": "Loyihalar ortidagi jamoa",
    "why.eyebrow": "Nega aynan biz", "why.title": "Mijozlar nega DasturLab’ni tanlaydi",
    "testi.eyebrow": "Fikrlar", "testi.title": "Mijozlarimiz fikri",
    "blog.eyebrow": "Blog", "blog.title": "So‘nggi maqolalar", "blog.readmore": "Batafsil o‘qish",
    "contact.title": "Loyihangiz bormi? Birgalikda amalga oshiramiz.",
    "contact.name": "Ism", "contact.telegram": "Telegram username", "contact.email": "Email",
    "contact.phone": "Telefon", "contact.type": "Loyiha turi", "contact.budget": "Budjet",
    "contact.message": "Loyiha haqida", "contact.submit": "So‘rov yuborish", "contact.sending": "Yuborilmoqda...",
    "contact.success": "Rahmat! So‘rovingiz qabul qilindi, tez orada bog‘lanamiz.",
    "contact.error": "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.",
    "contact.required": "Bu maydon majburiy",
    "contact.invalidEmail": "Email manzil noto‘g‘ri",
    "cta.title": "Keyingi loyihangizni bugun boshlang.",
    "cta.text": "G‘oyangiz bor. Biz esa uni ishlaydigan raqamli mahsulotga aylantirishga yordam beramiz.",
    "cta.button": "DasturLab bilan bog‘lanish",
    "footer.rights": "Barcha huquqlar himoyalangan.",
    "footer.nav": "Navigatsiya", "footer.services": "Xizmatlar", "footer.legal": "Huquqiy",
    "footer.privacy": "Maxfiylik siyosati", "footer.terms": "Foydalanish shartlari", "footer.cookies": "Cookie siyosati",
    "404.title": "Bu sahifa topilmadi.", "404.button": "Bosh sahifaga qaytish",
    "cookie.text": "Saytdan qulay foydalanish uchun cookie-fayllardan foydalanamiz.",
    "cookie.accept": "Qabul qilish", "cookie.decline": "Rad etish"
  },
  ru: {
    "nav.home": "Главная", "nav.about": "О нас", "nav.services": "Услуги",
    "nav.projects": "Проекты", "nav.tech": "Технологии", "nav.team": "Команда",
    "nav.blog": "Блог", "nav.contact": "Контакты", "nav.cta": "Начать проект",
    "hero.title": "Превращаем вашу идею в цифровой продукт.",
    "hero.subtitle": "DasturLab — команда разработчиков, создающая профессиональные цифровые решения для бизнеса и новых идей с помощью современных технологий.",
    "hero.cta1": "Начать проект", "hero.cta2": "Наши проекты",
    "about.eyebrow": "О нас", "about.title": "Мы создаём современные цифровые продукты",
    "about.mission.title": "Миссия", "about.mission.text": "Превращать бизнес и новые идеи в надёжный, качественный программный продукт.",
    "about.vision.title": "Видение", "about.vision.text": "Стать надёжным технологическим партнёром в Центральной Азии.",
    "about.values.title": "Наши ценности",
    "services.eyebrow": "Услуги", "services.title": "Что мы умеем",
    "services.more": "Подробнее",
    "projects.eyebrow": "Проекты", "projects.title": "Наши работы",
    "projects.demo": "Демо", "projects.code": "GitHub",
    "filter.all": "Все", "filter.web": "Web", "filter.mobile": "Mobile", "filter.bot": "Telegram-бот", "filter.ai": "AI", "filter.backend": "Backend",
    "tech.eyebrow": "Технологии", "tech.title": "Технологии, которые мы используем",
    "process.eyebrow": "Процесс", "process.title": "Как мы работаем",
    "team.eyebrow": "Команда", "team.title": "Команда за проектами",
    "why.eyebrow": "Почему мы", "why.title": "Почему клиенты выбирают DasturLab",
    "testi.eyebrow": "Отзывы", "testi.title": "Отзывы наших клиентов",
    "blog.eyebrow": "Блог", "blog.title": "Последние статьи", "blog.readmore": "Читать далее",
    "contact.title": "Есть проект? Реализуем его вместе.",
    "contact.name": "Имя", "contact.telegram": "Telegram username", "contact.email": "Email",
    "contact.phone": "Телефон", "contact.type": "Тип проекта", "contact.budget": "Бюджет",
    "contact.message": "О проекте", "contact.submit": "Отправить заявку", "contact.sending": "Отправка...",
    "contact.success": "Спасибо! Заявка принята, скоро свяжемся с вами.",
    "contact.error": "Произошла ошибка. Попробуйте ещё раз.",
    "contact.required": "Обязательное поле",
    "contact.invalidEmail": "Неверный email адрес",
    "cta.title": "Начните свой следующий проект сегодня.",
    "cta.text": "У вас есть идея. Мы поможем превратить её в работающий цифровой продукт.",
    "cta.button": "Связаться с DasturLab",
    "footer.rights": "Все права защищены.",
    "footer.nav": "Навигация", "footer.services": "Услуги", "footer.legal": "Правовая информация",
    "footer.privacy": "Политика конфиденциальности", "footer.terms": "Условия использования", "footer.cookies": "Политика cookie",
    "404.title": "Страница не найдена.", "404.button": "Вернуться на главную",
    "cookie.text": "Мы используем cookie-файлы для удобства использования сайта.",
    "cookie.accept": "Принять", "cookie.decline": "Отклонить"
  },
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.services": "Services",
    "nav.projects": "Projects", "nav.tech": "Technologies", "nav.team": "Team",
    "nav.blog": "Blog", "nav.contact": "Contact", "nav.cta": "Start a project",
    "hero.title": "We turn your idea into a digital product.",
    "hero.subtitle": "DasturLab is a development team building professional digital solutions for businesses and new ideas using modern technology.",
    "hero.cta1": "Start a project", "hero.cta2": "Our projects",
    "about.eyebrow": "About us", "about.title": "We build modern digital products",
    "about.mission.title": "Mission", "about.mission.text": "Turning businesses and new ideas into reliable, high-quality software products.",
    "about.vision.title": "Vision", "about.vision.text": "Becoming a trusted technology partner across Central Asia.",
    "about.values.title": "Our values",
    "services.eyebrow": "Services", "services.title": "What we can do",
    "services.more": "Learn more",
    "projects.eyebrow": "Projects", "projects.title": "Our work",
    "projects.demo": "Demo", "projects.code": "GitHub",
    "filter.all": "All", "filter.web": "Web", "filter.mobile": "Mobile", "filter.bot": "Telegram Bot", "filter.ai": "AI", "filter.backend": "Backend",
    "tech.eyebrow": "Technologies", "tech.title": "Technologies we work with",
    "process.eyebrow": "Process", "process.title": "How we work",
    "team.eyebrow": "Team", "team.title": "The team behind the projects",
    "why.eyebrow": "Why us", "why.title": "Why clients choose DasturLab",
    "testi.eyebrow": "Testimonials", "testi.title": "What clients say",
    "blog.eyebrow": "Blog", "blog.title": "Latest articles", "blog.readmore": "Read more",
    "contact.title": "Have a project? Let's build it together.",
    "contact.name": "Name", "contact.telegram": "Telegram username", "contact.email": "Email",
    "contact.phone": "Phone", "contact.type": "Project type", "contact.budget": "Budget",
    "contact.message": "About the project", "contact.submit": "Send request", "contact.sending": "Sending...",
    "contact.success": "Thanks! Your request was received, we'll be in touch soon.",
    "contact.error": "Something went wrong. Please try again.",
    "contact.required": "This field is required",
    "contact.invalidEmail": "Invalid email address",
    "cta.title": "Start your next project today.",
    "cta.text": "You have the idea. We'll help turn it into a working digital product.",
    "cta.button": "Contact DasturLab",
    "footer.rights": "All rights reserved.",
    "footer.nav": "Navigation", "footer.services": "Services", "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Service", "footer.cookies": "Cookie Policy",
    "404.title": "This page could not be found.", "404.button": "Back to home",
    "cookie.text": "We use cookies to make the site work better for you.",
    "cookie.accept": "Accept", "cookie.decline": "Decline"
  }
};

const I18N = {
  current: localStorage.getItem("dl_lang") || "uz",
  t(key) {
    return (DICT[this.current] && DICT[this.current][key]) || DICT.uz[key] || key;
  },
  apply(root = document) {
    root.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = this.t(el.getAttribute("data-i18n"));
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", this.t(el.getAttribute("data-i18n-placeholder")));
    });
    document.documentElement.lang = this.current;
  },
  setLang(lang) {
    if (!DICT[lang]) return;
    this.current = lang;
    localStorage.setItem("dl_lang", lang);
    this.apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }
};
