import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MonitorSmartphone,
  Users,
  CheckCircle2,
  Menu,
  X,
  Phone,
  MapPin,
  Send,
  Star,
  ArrowRight,
  Laptop,
  Languages,
  Palette,
  ShieldCheck,
  Database,
} from "lucide-react";

const langLabels = { en: "EN", uz: "UZ", ru: "RU" };

const data = {
  en: {
    brand: "IT School Namangan",
    tagline: "Learn. Build. Get hired.",
    nav: ["Courses", "About", "Pathway", "Contact"],
    badge: "Practical IT education in Namangan",
    heroTitle: "Learn real skills for IT, design, English, and modern work.",
    heroText:
      "IT School Namangan teaches practical courses for beginners and future professionals: computer literacy, web development, graphic design, AutoCAD & 3D Max, cybersecurity, Python, and English for work communication.",
    primaryBtn: "View Courses",
    secondaryBtn: "Contact Us",
    apply: "Apply Now",
    stats: [
      ["8", "Practical courses"],
      ["1-9", "Month programs"],
      ["100%", "Practice-focused learning"],
      ["0→Skill", "Beginner pathway"],
    ],
    progressTitle: "Student Progress",
    active: "Active",
    progress: ["Computer Skills", "Web Development", "Python", "English Speaking"],
    tasks: "Weekly practice tasks",
    projects: "Projects per module",
    coursesLabel: "Courses",
    coursesTitle: "Our courses",
    coursesText:
      "Students choose a direction, practice consistently, and build useful skills instead of collecting empty certificates like decorative paper trophies.",
    courses: [
      ["Computer Literacy", "1 month", "Basic computer skills", ["Computer basics", "Documents and files", "Office programs and daily digital skills"]],
      ["Front-End Web", "6 months", "Website interface development", ["HTML, CSS, JavaScript", "Responsive websites", "Portfolio projects"]],
      ["Back-End Web", "5 months", "Server-side development", ["Backend logic", "Databases", "Web application basics"]],
      ["Graphic Design", "5 months", "Creative digital design", ["Adobe Photoshop", "Brand and social media design", "Portfolio preparation"]],
      ["AutoCAD & 3D Max", "6 months", "Architecture and 3D design", ["Technical drawings", "3D modeling", "Interior and exterior projects"]],
      ["Cybersecurity", "9 months", "Security fundamentals", ["Network security basics", "Safe systems", "Practical security mindset"]],
      ["Python Programming", "9 months", "Programming from zero", ["Python basics", "Problem solving", "Automation and project practice"]],
      ["English for Work & Communication", "6+2 months", "Speaking and workplace English", ["Speaking practice", "Workplace communication", "Interview and daily conversation skills"]],
    ],
    aboutLabel: "About Us",
    aboutTitle: "A practical school for real-world skills.",
    aboutText:
      "IT School Namangan helps students start from their current level and develop useful skills for study, work, freelancing, and future career opportunities.",
    missionTitle: "Our mission",
    missionText:
      "To teach students practical IT, design, computer, cybersecurity, programming, and English skills, then help motivated learners move closer to real work opportunities.",
    features: [
      ["Beginner-friendly lessons", "Students can start from zero and improve step by step with practice and teacher support."],
      ["Job-focused training", "Lessons are connected to real skills students can use in work, freelancing, and interviews."],
      ["Modern digital skills", "Courses cover web, design, programming, cybersecurity, computer literacy, and English."],
      ["Supportive learning", "Students learn in groups with practice tasks, feedback, and clear progress."],
    ],
    pathwayLabel: "Pathway",
    pathwayTitle: "How students grow with us.",
    steps: [
      ["Choose a course", "Students select the direction that matches their goal and current level."],
      ["Learn step by step", "Each course builds knowledge through lessons, practice, and homework."],
      ["Create real work", "Students prepare examples, tasks, designs, websites, or projects depending on the course."],
      ["Prepare for future work", "Strong students can move toward internships, freelancing, interviews, or junior roles."],
    ],
    ctaTitle: "Ready to start learning?",
    ctaText: "Apply for a course, visit our school, or contact us to choose the right program.",
    contactLabel: "Contact",
    contactTitle: "Visit IT School Namangan.",
    contactText: "Contact us for course information, group schedules, pricing, and student registration.",
    phoneLabel: "Phone / Telegram",
    locationLabel: "Location",
    location: "Amir Temur Street, 101, near Ahmadbek complex, Namangan",
    telegramLabel: "Telegram",
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    courseInterest: "Course interest",
    message: "Message",
    messagePlaceholder: "Write your question...",
    submit: "Send Application",
    note: "This form is visual now. Connect Telegram, Google Forms, or backend before publishing.",
    footer: "All rights reserved.",
  },
  uz: {
    brand: "IT School Namangan",
    tagline: "O‘rganing. Yarating. Ishga kiring.",
    nav: ["Kurslar", "Biz haqimizda", "Yo‘l xaritasi", "Aloqa"],
    badge: "Namanganda amaliy IT ta’lim",
    heroTitle: "IT, dizayn, ingliz tili va zamonaviy ish uchun real ko‘nikmalarni o‘rganing.",
    heroText:
      "IT School Namangan boshlovchilar va kelajak mutaxassislari uchun amaliy kurslar o‘rgatadi: kompyuter savodxonligi, web dasturlash, grafik dizayn, AutoCAD & 3D Max, kiberxavfsizlik, Python va ish uchun ingliz tili.",
    primaryBtn: "Kurslarni ko‘rish",
    secondaryBtn: "Bog‘lanish",
    apply: "Ariza qoldirish",
    stats: [
      ["8", "Amaliy kurs"],
      ["1-9", "Oylik dasturlar"],
      ["100%", "Amaliy ta’lim"],
      ["0→Ko‘nikma", "Boshlang‘ich yo‘l"],
    ],
    progressTitle: "O‘quvchi rivoji",
    active: "Faol",
    progress: ["Kompyuter ko‘nikmalari", "Web dasturlash", "Python", "Inglizcha speaking"],
    tasks: "Haftalik amaliy vazifalar",
    projects: "Har moduldagi loyihalar",
    coursesLabel: "Kurslar",
    coursesTitle: "Bizning kurslarimiz",
    coursesText:
      "O‘quvchilar yo‘nalish tanlaydi, muntazam mashq qiladi va quruq sertifikat o‘rniga foydali ko‘nikma oladi. Nihoyat, ta’lim biroz mantiqli ko‘rinadi.",
    courses: [
      ["Kompyuter savodxonligi", "1 oy", "Asosiy kompyuter ko‘nikmalari", ["Kompyuter asoslari", "Hujjatlar va fayllar", "Office dasturlari va kundalik raqamli ko‘nikmalar"]],
      ["Front-End Web", "6 oy", "Sayt interfeysi yaratish", ["HTML, CSS, JavaScript", "Moslashuvchan saytlar", "Portfolio loyihalar"]],
      ["Back-End Web", "5 oy", "Server tomoni dasturlash", ["Backend logika", "Ma’lumotlar bazasi", "Web ilova asoslari"]],
      ["Grafik dizayn", "5 oy", "Kreativ raqamli dizayn", ["Adobe Photoshop", "Brend va ijtimoiy tarmoq dizayni", "Portfolio tayyorlash"]],
      ["AutoCAD & 3D Max", "6 oy", "Arxitektura va 3D dizayn", ["Texnik chizmalar", "3D modeling", "Interyer va eksteryer loyihalar"]],
      ["Kiberxavfsizlik", "9 oy", "Xavfsizlik asoslari", ["Tarmoq xavfsizligi asoslari", "Xavfsiz tizimlar", "Amaliy xavfsizlik fikrlashi"]],
      ["Python dasturlash", "9 oy", "Noldan dasturlash", ["Python asoslari", "Muammo yechish", "Avtomatlashtirish va loyiha amaliyoti"]],
      ["Ingliz tili ish va muloqot uchun", "6+2 oy", "Speaking va ishdagi ingliz tili", ["Speaking amaliyoti", "Ishdagi muloqot", "Suhbat va kundalik gaplashuv ko‘nikmalari"]],
    ],
    aboutLabel: "Biz haqimizda",
    aboutTitle: "Real hayotda kerak bo‘ladigan ko‘nikmalar maktabi.",
    aboutText:
      "IT School Namangan o‘quvchilarga hozirgi darajasidan boshlab o‘qish, ish, freelancing va kelajak karyerasi uchun foydali ko‘nikmalarni rivojlantirishga yordam beradi.",
    missionTitle: "Maqsadimiz",
    missionText:
      "O‘quvchilarga IT, dizayn, kompyuter, kiberxavfsizlik, dasturlash va ingliz tili bo‘yicha amaliy ko‘nikmalarni o‘rgatish hamda motivatsiyali o‘quvchilarni real ish imkoniyatlariga yaqinlashtirish.",
    features: [
      ["Boshlovchilar uchun qulay darslar", "O‘quvchilar noldan boshlashi va amaliyot hamda o‘qituvchi yordami bilan bosqichma-bosqich rivojlanishi mumkin."],
      ["Ishga yo‘naltirilgan ta’lim", "Darslar o‘quvchilar ishda, freelancingda va suhbatlarda ishlata oladigan real ko‘nikmalar bilan bog‘langan."],
      ["Zamonaviy raqamli ko‘nikmalar", "Kurslar web, dizayn, dasturlash, kiberxavfsizlik, kompyuter savodxonligi va ingliz tilini qamrab oladi."],
      ["Qo‘llab-quvvatlovchi muhit", "O‘quvchilar guruhda amaliy topshiriqlar, fikr-mulohaza va aniq rivojlanish bilan o‘rganadi."],
    ],
    pathwayLabel: "Yo‘l xaritasi",
    pathwayTitle: "O‘quvchilar biz bilan qanday rivojlanadi.",
    steps: [
      ["Kurs tanlash", "O‘quvchilar maqsadi va darajasiga mos yo‘nalishni tanlaydi."],
      ["Bosqichma-bosqich o‘rganish", "Har bir kurs darslar, amaliyot va uy vazifalari orqali bilimni mustahkamlaydi."],
      ["Real ish yaratish", "O‘quvchilar kursga qarab topshiriq, dizayn, sayt yoki loyiha namunalarini tayyorlaydi."],
      ["Kelajak ishga tayyorlanish", "Kuchli o‘quvchilar amaliyot, freelancing, suhbat yoki junior lavozimlarga tayyorlanadi."],
    ],
    ctaTitle: "O‘qishni boshlashga tayyormisiz?",
    ctaText: "Kursga ariza qoldiring, maktabimizga tashrif buyuring yoki mos dastur tanlash uchun biz bilan bog‘laning.",
    contactLabel: "Aloqa",
    contactTitle: "IT School Namanganga tashrif buyuring.",
    contactText: "Kurslar, guruh jadvali, narxlar va ro‘yxatdan o‘tish bo‘yicha biz bilan bog‘laning.",
    phoneLabel: "Telefon / Telegram",
    locationLabel: "Manzil",
    location: "Amir Temur ko‘chasi 101-uy, Ahmadbek majmuasi oldida, Namangan",
    telegramLabel: "Telegram",
    name: "To‘liq ism",
    namePlaceholder: "Ismingiz",
    phone: "Telefon raqam",
    courseInterest: "Qiziqqan kurs",
    message: "Xabar",
    messagePlaceholder: "Savolingizni yozing...",
    submit: "Ariza yuborish",
    note: "Forma hozircha faqat ko‘rinish uchun. Nashr qilishdan oldin Telegram, Google Forms yoki backend ulash kerak.",
    footer: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    brand: "IT School Namangan",
    tagline: "Учись. Создавай. Получай работу.",
    nav: ["Курсы", "О нас", "Путь", "Контакты"],
    badge: "Практическое IT-образование в Намангане",
    heroTitle: "Изучайте реальные навыки для IT, дизайна, английского и современной работы.",
    heroText:
      "IT School Namangan обучает практическим курсам для начинающих и будущих специалистов: компьютерная грамотность, веб-разработка, графический дизайн, AutoCAD & 3D Max, кибербезопасность, Python и английский для работы.",
    primaryBtn: "Смотреть курсы",
    secondaryBtn: "Связаться",
    apply: "Оставить заявку",
    stats: [
      ["8", "Практических курсов"],
      ["1-9", "Месячные программы"],
      ["100%", "Практическое обучение"],
      ["0→Навык", "Путь для новичков"],
    ],
    progressTitle: "Прогресс студента",
    active: "Активно",
    progress: ["Компьютерные навыки", "Веб-разработка", "Python", "Английский speaking"],
    tasks: "Практических заданий в неделю",
    projects: "Проекта в каждом модуле",
    coursesLabel: "Курсы",
    coursesTitle: "Наши курсы",
    coursesText:
      "Студенты выбирают направление, регулярно практикуются и получают полезные навыки вместо пустых сертификатов для украшения стены.",
    courses: [
      ["Компьютерная грамотность", "1 месяц", "Базовые компьютерные навыки", ["Основы компьютера", "Документы и файлы", "Office-программы и повседневные цифровые навыки"]],
      ["Front-End Web", "6 месяцев", "Разработка интерфейсов сайтов", ["HTML, CSS, JavaScript", "Адаптивные сайты", "Проекты для портфолио"]],
      ["Back-End Web", "5 месяцев", "Серверная разработка", ["Backend-логика", "Базы данных", "Основы веб-приложений"]],
      ["Графический дизайн", "5 месяцев", "Креативный цифровой дизайн", ["Adobe Photoshop", "Брендинг и дизайн для соцсетей", "Подготовка портфолио"]],
      ["AutoCAD & 3D Max", "6 месяцев", "Архитектура и 3D-дизайн", ["Технические чертежи", "3D-моделирование", "Интерьерные и экстерьерные проекты"]],
      ["Кибербезопасность", "9 месяцев", "Основы безопасности", ["Основы сетевой безопасности", "Безопасные системы", "Практическое мышление безопасности"]],
      ["Программирование на Python", "9 месяцев", "Программирование с нуля", ["Основы Python", "Решение задач", "Автоматизация и проектная практика"]],
      ["Английский для работы и общения", "6+2 месяцев", "Speaking и рабочий английский", ["Разговорная практика", "Рабочая коммуникация", "Собеседования и ежедневное общение"]],
    ],
    aboutLabel: "О нас",
    aboutTitle: "Школа практических навыков для реальной жизни.",
    aboutText:
      "IT School Namangan помогает студентам развивать полезные навыки для учебы, работы, фриланса и будущей карьеры, начиная с их текущего уровня.",
    missionTitle: "Наша миссия",
    missionText:
      "Обучать студентов практическим навыкам в IT, дизайне, компьютерах, кибербезопасности, программировании и английском, а также приближать мотивированных учеников к реальным рабочим возможностям.",
    features: [
      ["Уроки для начинающих", "Студенты могут начать с нуля и развиваться шаг за шагом через практику и поддержку преподавателя."],
      ["Обучение для работы", "Уроки связаны с реальными навыками, которые студенты могут использовать в работе, фрилансе и на собеседованиях."],
      ["Современные цифровые навыки", "Курсы охватывают веб, дизайн, программирование, кибербезопасность, компьютерную грамотность и английский."],
      ["Поддерживающая среда", "Студенты учатся в группах через практические задания, обратную связь и понятный прогресс."],
    ],
    pathwayLabel: "Путь",
    pathwayTitle: "Как студенты растут вместе с нами.",
    steps: [
      ["Выбор курса", "Студенты выбирают направление, которое подходит их цели и текущему уровню."],
      ["Пошаговое обучение", "Каждый курс закрепляет знания через уроки, практику и домашние задания."],
      ["Создание реальных работ", "Студенты готовят задания, дизайны, сайты или проекты в зависимости от курса."],
      ["Подготовка к будущей работе", "Сильные студенты готовятся к стажировкам, фрилансу, интервью или junior-позициям."],
    ],
    ctaTitle: "Готовы начать обучение?",
    ctaText: "Оставьте заявку, посетите нашу школу или свяжитесь с нами, чтобы выбрать подходящую программу.",
    contactLabel: "Контакты",
    contactTitle: "Посетите IT School Namangan.",
    contactText: "Свяжитесь с нами для информации о курсах, расписании групп, ценах и регистрации студентов.",
    phoneLabel: "Телефон / Telegram",
    locationLabel: "Адрес",
    location: "улица Амира Темура, дом 101, рядом с комплексом Ahmadbek, Наманган",
    telegramLabel: "Telegram",
    name: "Полное имя",
    namePlaceholder: "Ваше имя",
    phone: "Номер телефона",
    courseInterest: "Интересующий курс",
    message: "Сообщение",
    messagePlaceholder: "Напишите ваш вопрос...",
    submit: "Отправить заявку",
    note: "Форма пока только визуальная. Перед публикацией нужно подключить Telegram, Google Forms или backend.",
    footer: "Все права защищены.",
  },
};

const sectionIds = ["courses", "about", "pathway", "contact"];
const courseIcons = [MonitorSmartphone, Code2, Database, Palette, BookOpen, ShieldCheck, Code2, Languages];
const featureIcons = [GraduationCap, BriefcaseBusiness, MonitorSmartphone, Users];
const progressValues = ["82%", "74%", "61%", "68%"];

function App() {
  const [lang, setLang] = useState("uz");
  const [open, setOpen] = useState(false);
  const t = data[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">{t.brand}</p>
              <p className="text-xs text-slate-400">{t.tagline}</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${sectionIds[index]}`} className="text-sm font-medium text-slate-300 transition hover:text-lime-300">
                {item}
              </a>
            ))}
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <a href="#contact" className="rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-lime-400/20 transition hover:bg-lime-300">
              {t.apply}
            </a>
          </div>

          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
            <LanguageSwitcher lang={lang} setLang={setLang} mobile />
            <div className="mt-4 flex flex-col gap-4">
              {t.nav.map((item, index) => (
                <a key={item} href={`#${sectionIds[index]}`} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-green-600/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-200">
                <Star size={16} />
                {t.badge}
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">{t.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-lime-400/20 transition hover:bg-lime-300">
                  {t.primaryBtn} <ArrowRight size={19} />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-bold text-white transition hover:border-lime-300/50 hover:bg-white/5">
                  {t.secondaryBtn}
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-bold text-slate-200">{t.progressTitle}</p>
                  <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-300">{t.active}</span>
                </div>
                <div className="space-y-4">
                  {progressValues.map((value, index) => (
                    <div key={t.progress[index]}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-slate-300">{t.progress[index]}</span>
                        <span className="font-bold text-lime-300">{value}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-800">
                        <div className="h-3 rounded-full bg-lime-400" style={{ width: value }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-2 gap-4">
                  <InfoBox number="12" text={t.tasks} />
                  <InfoBox number="3" text={t.projects} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map(([number, label]) => (
              <InfoBox key={label} number={number} text={label} large />
            ))}
          </div>
        </section>

        <section id="courses" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro label={t.coursesLabel} title={t.coursesTitle} text={t.coursesText} />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.courses.map(([title, duration, level, points], index) => {
                const Icon = courseIcons[index];
                return (
                  <motion.div key={title} whileHover={{ y: -8 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-300/40 hover:bg-white/[0.07]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{level}</p>
                    <p className="mt-1 text-sm font-bold text-lime-300">{duration}</p>
                    <ul className="mt-5 space-y-3">
                      {points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-lime-300" size={17} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white/[0.03] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">{t.aboutLabel}</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">{t.aboutText}</p>
              <div className="mt-8 rounded-3xl border border-lime-300/20 bg-lime-300/10 p-6">
                <p className="text-lg font-bold text-lime-100">{t.missionTitle}</p>
                <p className="mt-3 leading-7 text-slate-300">{t.missionText}</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {t.features.map(([title, text], index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-lime-300">
                      <Icon />
                    </div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pathway" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro label={t.pathwayLabel} title={t.pathwayTitle} />
            <div className="grid gap-6 lg:grid-cols-4">
              {t.steps.map(([title, text], index) => (
                <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-5xl font-black text-lime-300/40">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-lime-400 to-green-500 p-8 text-slate-950 shadow-2xl shadow-lime-400/20 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{t.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-lg font-medium text-slate-800">{t.ctaText}</p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-900">
                {t.submit} <Send size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.03] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">{t.contactLabel}</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{t.contactTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">{t.contactText}</p>
              <div className="mt-8 space-y-4">
                <ContactCard icon={Phone} label={t.phoneLabel} value="+998 99 597 44 11" />
                <ContactCard icon={MapPin} label={t.locationLabel} value={t.location} />
                <ContactCard icon={Send} label={t.telegramLabel} value="@itshool_reception" />
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.name} placeholder={t.namePlaceholder} />
                <Field label={t.phone} placeholder="+998" type="tel" />
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-bold text-slate-300">{t.courseInterest}</span>
                <select className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition focus:border-lime-300">
                  {t.courses.map(([title]) => (
                    <option key={title}>{title}</option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block">
                <span className="text-sm font-bold text-slate-300">{t.message}</span>
                <textarea rows={5} placeholder={t.messagePlaceholder} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-lime-300" />
              </label>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-lime-400/20 transition hover:bg-lime-300">
                {t.submit} <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-center text-xs text-slate-500">{t.note}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {t.brand}. {t.footer}</p>
          <div className="flex flex-wrap gap-5">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${sectionIds[index]}`} className="hover:text-lime-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function LanguageSwitcher({ lang, setLang, mobile = false }) {
  return (
    <div className={`flex rounded-full border border-white/10 bg-white/5 p-1 ${mobile ? "w-full" : ""}`}>
      {Object.keys(data).map((key) => (
        <button
          key={key}
          onClick={() => setLang(key)}
          className={`${mobile ? "flex-1" : ""} rounded-full px-3 py-1.5 text-xs font-bold transition ${lang === key ? "bg-lime-400 text-slate-950" : "text-slate-300 hover:text-white"}`}
        >
          {langLabels[key]}
        </button>
      ))}
    </div>
  );
}

function SectionIntro({ label, title, text }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">{label}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function InfoBox({ number, text, large = false }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
      <p className={`${large ? "text-4xl" : "text-3xl"} font-black text-lime-300`}>{number}</p>
      <p className="mt-2 text-sm text-slate-400">{text}</p>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <Icon className="shrink-0 text-lime-300" />
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-lime-300" />
    </label>
  );
}

export default App;
