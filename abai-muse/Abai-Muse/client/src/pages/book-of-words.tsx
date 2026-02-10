import { useState } from "react";
import { Navigation } from "@/components/nav";
import KazakhPattern from "@/assets/kazakh-pattern.png";
import { words } from "@/data/book-of-words";

const VIDEO_IDS = [
  "8O0rq3UZbVI", "Zr5H4DCbiZw", "8Sxdl6A_JC0", "6wa1PXtDcvk", "Jdeu-FmgfoU",
  "HnkkLcvc6YA", "mgtd7b_iJ6I", "wXfCZ-6spoY", "9RdVJpgh_Uc", "iLbvJYXjlcI",
  "Ew0eSXLtVd8", "DA_GtbePA3U", "zOxC-7GIcME", "WPkCgCPv3P8", "OiQIx77CND4",
  "-dRmcxC0YnM", "gZH9Tihq1dY", "Y_D8zl48Mm4", "oXz7hC8QGU8", "ERDSkxIf7s4",
  "JkHS63Cfux8", "xHnyW61R0dM", "d2TzfF3_G0c", "UL5GOle7gxs", "-UOHuoQvY1c",
  "_xWJfhcx8dY", "PYSwmJLjMXY", "NTmYTXJ71AA", "SAMSiph-ZKE", "2BB7BBgHFto",
  "da4kvi1fiGs", "5EC1Rr3BM08", "tObdvBM70q8", "A_XHOLZYpFo", "rzZSJY_nkuA",
  "wnu8qUyEt60", "Jc3_Ds9t-Hg", "DZX9CG5Xhwk", "EN4CUi_acoc", "o0Z-n3WyS4E",
  "nNHUtturxu4", "ojD2lQSbU_I", "EhnVmmFTRJk", "6dTq8mfsfJE", "u8cGski0Ofk"
];

export default function BookOfWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];

  const watchUrl = `https://www.youtube.com/watch?v=${VIDEO_IDS[currentIndex]}`;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/20">
      <Navigation />

      <section className="py-12 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex flex-col items-center">
            <div className="pt-4 flex flex-wrap items-center gap-4 mb-21.5"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 font-bold">Таңдау</span>
            <div className="relative group">
              <select 
                value={currentIndex}
                onChange={(e) => setCurrentIndex(Number(e.target.value))}
                className="appearance-none bg-white text-primary border-2 border-primary/20 px-12 py-4 rounded-2xl font-serif text-2xl md:text-3xl hover:border-primary transition-all cursor-pointer outline-none shadow-sm min-w-[300px] text-center"
              >
                {words.map((_, i) => (
                  <option key={i} value={i}>
                    {i + 1} / 45 Қара сөз
                  </option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <h1 className="mt-10 text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
            {currentWord?.title}
          </h1>

          {/* Ссылка на YouTube вместо iframe */}
          <div className="mt-10">
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary transition-colors"
            >
              Смотреть видео на YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="relative">
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: `url(${KazakhPattern})`, backgroundSize: '300px' }}
            />

            <div className="relative z-10 space-y-8">
              {currentWord?.paragraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-xl md:text-2xl leading-relaxed text-gray-700 font-serif whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-20 flex items-center justify-between border-t border-gray-100 pt-10">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="flex items-center gap-4 text-gray-400 hover:text-primary transition-all disabled:opacity-0 group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary">
                  <span>←</span>
                </div>
                <span className="font-bold uppercase tracking-widest text-[21px]">Артқа</span>
              </button>

              <div className="text-gray-300 font-serif italic text-lg">
                {currentIndex + 1}
              </div>

              <button
                disabled={currentIndex === words.length - 1}
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="flex items-center gap-4 text-primary hover:text-secondary transition-all disabled:opacity-0 group"
              >
                <span className="font-bold uppercase tracking-widest text-[21px]">Алға</span>
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white">
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
  <footer id="legacy" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-8">
          <div className="text-3xl font-serif font-bold tracking-tight text-background">Абай</div>
          <div className="w-12 h-0.5 bg-secondary/50" />
          <p className="max-w-md text-background/60 font-light">
            "Адам болам десеңіз: ақыл, жүрек, қайратты тең ұстаңыз."
          </p>
          <div className="text-sm text-background/40 pt-8">
            © 2026 Абай Құнанбайұлына арналған жоба.
          </div>
        </div>
      </footer>
    </div>
  );
}
