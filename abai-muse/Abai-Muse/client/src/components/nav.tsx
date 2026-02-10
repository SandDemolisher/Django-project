import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react"; 
import Logo from "@/assets/Logo.png";

const NAV_LINKS = [
  { href: "/#biography", label: "Өмірбаяны" },
  { href: "/book-of-words", label: "Қара сөздер" },
  { href: "/#abai_tanu", label: "Абай Тану" },
  { href: "/iran-gaiyp", label: "Иран-Ғайып" },
  { href: "/tolyq_adam", label: "Толық Адам" },
  { href: "/tests", label: "Тест" },
  { href: "/#poetry", label: "Өлеңдер" },
  { href: "/#legacy", label: "Мұрасы" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white border-b border-gray-200 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/">
          <a className="z-[10001]">
            <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
          </a>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary uppercase tracking-tighter">
              {link.label}
            </a>
          ))}
        </div>

        {/* Кнопка бургера */}
        <button 
          className="md:hidden p-2 text-black z-[10001] relative" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 1. ТЕМНЫЙ ФОН (Оверлей) - Полностью перекрывает сайт */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-[9999]`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. МОБИЛЬНОЕ МЕНЮ - Жесткий белый фон */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] transform transition-transform duration-500 ease-in-out md:hidden z-[10000] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: '#ffffff', boxShadown: '-10px 0 30px rgba(0,0,0,0.2)' }} // Форсируем белый цвет
      >
        <div className="flex flex-col h-full items-center justify-center space-y-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold text-black uppercase text-center transition-all transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ 
                transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                display: 'block'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
