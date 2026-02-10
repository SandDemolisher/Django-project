import { useEffect, useState } from "react";
import { Navigation } from "@/components/nav";
import AbaiPortrait from "@/assets/iran_g.png";
import KazakhPattern from "@/assets/kazakh-pattern.png";
import { Card, CardContent } from "@/components/ui/card";
import IranVideo from '@/assets/IranG75YearsVideo.mp4';
import IranG95Ult from '@/assets/IranG95Ult.mp4';
export default function Home() {
  const [activePoemIndex, setActivePoemIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activePoemIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePoemIndex(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePoemIndex]);

  const poems = [
    {
      title: "Хамит Ерғалиевке",
      preview: ["Әкем десем –", "Кім сенеді?!..."],
      full: [
        "Әкем десем –",
        "Кім сенеді?!",
        "Ол – өлген!",
        "Жүрекке ауыр –",
        "Жоқтап сарнау өлеңмен?!",
"Ұлым десем –",
"Қиянат қой?!",
"Ол да өлген!",
"Көңілім сенбес –",
"Көзім жасы көмгенмен!",
"Досым десем –",
"Шын досым жоқ!",
"Жалған дос –",
"Ішірткінің құтысындай",
"Қалған бос...",
"...Пірім дейін –",
"Құран ұстап,",
"Қол берген! –",
"Пірі өлмейді,",
"Пірәдәрі өлгенмен!..",
      ]
    },
   {
      title: "Жарасқанға",
      preview: ["Жанды салып азапқа,", "Басты тығып..."],
      full: [
        "І",
"Жанды салып азапқа,",
"Басты тығып",
"Тозаққа –",
"Үйттік –",
"Білмей дал болдық,",
  "Не керегін Қазаққа?!",
  "Ырысы да бұйырмай,",
  "Ұлысы да бұйырмай:",
"Көткеншектей береді –",
"Өртте қалған сиырдай!",
"Дерті меңдеп талайғы –",
"Бұздық ағза-сарайды:",
"Қос өкпеміз қабынып,",
"Жүрек қаны қарайды.",
"Қиратардайын қалыбын,",
"Өшірердейін жарығын –",
"Өктемсінген өгейлер",
"Басса екен деп шалығын –",
"Халық қамын ойладық –",
"Қазығында байланып:",
"Түк бітірмей таусылып –",
"Жүдеп-жадап, Жайрадық!",
"Бүйректі де шіріттік,",
"Бауырды да іріттік:",
"Елдің жоғын таба алмай –",
"Тән қасқырын ұлыттық!",
"Жанарға жас кептеліп,",
"Шетен шығып шеттедік:",
"Сөзімсіз де өтпеді,",
"Өзіміз де өтпедік.",
"Әдіре қалып жырымыз,",
"Жетпеді зар үніміз:",
"Бұта көрсе саритын –",
"Иттен кейін күніміз...",
"ІІ",
"...Жүрмейді іш-дәрет,",
"Зыр жүгірткен әлек –",
"Опасыз",
"Бұ Фәнидің",
"Атасына – нәлет!",
"Шаршадым мен...",
"Досым,",
"Қалай көңіл-хошың –",
"Ұзатуға Бақиға",
"Түзік пе Өмір-Көшің?!..",
      ]
    },
    {
      title: "Нұрахметке",
      preview: ["Ес көрдік –", "Жалған бәсі артпайтынын..."],
      full: [
        "Ес көрдік –",
"Жалған бәсі артпайтынын,",
"Ішінде Көп қоңырдың –",
"Аласымыз:",
"Жүзге,",
"Руға,",
"Қанға өлсе тартпайтұғын –",
"Бөлінбес",
"Бір Атаның Баласымыз!",
"Ер-көңіл –",
"Тасқа салсаң –",
"Пәті қайтпас,",
"Тасуда",
"Той-Ғұмырдың думаны үдеп:",
"Жақын тұрмақ,",
"Айыр тіл жатың айтпас,",
"Біздерді Бір Анадан тумады деп!",
"Хақ Бұйрығы – Жан-тәнің кемелденсе,",
"Рахман Нұры –",
"Тылсымның Жарығысың:",
"Ақыл-Күшің-Қуатың",
"Өле-өлгенше Етер қызмет –",
"Ел үшін, Халық үшін...",
"...Сен де келдің –",
"Елуге –",
"Мен де келдім,",
"Бүгінгі Күн –",
"Тасын Күн –",
"Тілеулі Күн:",
"Сараланып,",
"Сафтанып,",
"Зерленемін –",
"Қу тірліктің",
"Жасырып жүдеулігін!",
"Төнген қауіп-қатерден арашалап,",
"Табыстырған Тәңірге –",
"Рахмет!",
"Тағдыр сыйын талайлы тамашалап,",
"Жаса!",
"Жаса!",
"Мың жаса,",
"Нұрахмет!",
"Ақын мінез –",
"Адуын –",
"Дәрі кімге?!",
"Жырға – мәдет,",
"Жан-Досым,",
"Өмір-Ортаң:",
"Қара Жерді қам басып,",
"Әлі күнге –",
"Менің тірі жүргенім –",
"Сенің арқаң!..",
      ]
    },
    {
      title: "Анда барсаң",
      preview: ["Анда барсаң –", "Иран-Ғайып налыған..."],
      full: [
        "Анда барсаң –",
"Иран-Ғайып налыған...",
"Мында келсең –",
"Иран-Ғайып арыған...",
"Неге налып,",
"Неден арып барады –",
"Жыр перзенті",
"Уызында жарыған?!",
"Неге?!",
"Неден",
"Сезім – суық,",
"Ой – тарын?!",
"Қыңыр тартпай,",
"Райымнан қайтайын –",
"Сырттағы жау",
"Іштен шықты демессің –",
"Жасырмайын,",
"Жан-сырымды айтайын:",
"Көремін де –",
"Бордай тозған Даламды,",
"Көремін де –",
"Жындай қозған Қаламды –",
"Зар илеймін...",
"О, Ел-Ана,",
"Жазғырма –",
"Рухани қарыны ашқан балаңды?!",
"Қара шашың Қуарғанын сеземін,",
"Ақ мамаңның",
"Суалғанын сеземін...",
"...Сезе-сезе –",
"Көзім жасы көл болып,",
"Өкпем өшіп,",
"Өртенеді өзегім!.",
      ]
    },
    {
      title: "Тауқыметің зор болды",
      preview: ["Тауқыметің зор болды,", "Не көрмедің, Торғайым?!"],
      full: [
        "Тауқыметің зор болды,",
"Не көрмедің, Торғайым?!",
"Көк аттыға қор болды,",
"Көгергенің – әрдайым!",
"Жемітіндей Жебірдің –",
"Жезің, Күміс, Алтының.",
"Көркін ашар Өмірдің –",
"Жаз Күніндей Жарқыным.",
"Сыр Бойының сәлемін",
"Ала келдім Жеріңе.",
"Кеңейіп тар Әлемім –",
"Басымды идім Еліңе.",
"Темір-тәртіп – тізгіннің",
"Тепкісінен қорғайын?!",
"Тырнағынан құзғынның",
"Абай болғын, Торғайым?!",
"Бар ма Ақынның айыбы –",
"Ет-жүрегі езілген?!",
"Барлық пәле дәйімі –",
"Басталады Өзіңнен...",
"...Батырыңды жайратып,",
"Жата көрме, Торғайым?!",
"Ақыныңды айдатып,",
"Ата берме, Торғайым?!",
"Жер-Суыңды сауықтап,",
"Қалың кірме қаптаса,",
"Бір амалын тауып бақ –",
"Халық па амал таппаса?!..",
      ]
    },
    {
      title: "Басым",
      preview: ["Басым –", "Екі Иінде,"],
      full: [
        "Басым –",
"Екі Иінде,",
"Жұмалағым –",
"Дорбада:",
"Басымдағы киімге",
"Қарап –",
"Нахақ қорлама?!",
"Айтшы,",
"Кімдер кимеген",
"Құндыз,",
"Сусар бөрікті:",
"Күйде –",
"Жерге тимеген –",
"Айырғанмен ерікті!",
"Қоғамнан құн сұранып,",
"Жетілердей жетесі:",
"Алтын-Басқа лайық –",
"Айна-Таздың кепеші.",
"Күн кешемін түртініп,",
"Әтектейін сылынған:",
"Жұрт сұрқымнан үркініп,",
"Шошынады жырымнан...",
"...Қормын талыс талайға,",
"Күйтіме –",
"Жан сүйінбес:",
"Ақын басы,",
"Алайда,",
"Кесілгенмен,",
"Иілмес!..",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden section-reveal">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none pattern-drift"
          style={{ backgroundImage: `url(${KazakhPattern})`, backgroundSize: "400px" }}
        />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-8 animate-fade-up">
            <div className="space-y-2">
              <h2 className="text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold">
               ақын, драматург.
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-[0.9]">
                Иран <br /> Ғайып
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6">
              "Әдебиетте поэзия, драматургия жанрында еңбек етіп, Абай тұлғасына арналған «Мен ішпеген у бар ма?» атты драмалық дастан жазған."
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#biography"
                className="group inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Өмір жолын оқу <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative animate-fade-up delay-150">
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
              <img
                src={AbaiPortrait}
                alt="Абай Құнанбайұлының портреті"
                className="w-full h-full object-cover transform transition-transform duration-[20s] hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-24 bg-muted/30 relative section-reveal">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">Ағартушының өмірі</h2>
              <div className="w-24 h-1 bg-secondary mx-auto" />
            </div>

            <div className="prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              <p>
                Иранбек (Иран-Ғайып) Оразбаев - 1947 жылы Қызылорда облысы, Сырдария ауданында туған. Қазақ политехникалық институтының таукен факультетін (1970), Мәскеудегі М.Горький атындағы Әдебиет институты жанындағы жоғары әдеби курсты бітірген (1980). Әр жылдары Қызылорда облысы «Білім» қоғамында референт, «Жазушы» баспасында редактор, «Қазақ әдебиеті» газеті редакциясында поэзия бөлімінің меңгерушісі, ҚР Білім, мәдениет комитетінің редакциялықрепертуарлық коллегиясының бас редакторы қызметтерін атқарды. 1998 жылдан Қазақтың мемлекеттік Ғ.Мүсірепов атындағы Жастар мен балалар театрының әдебиет бөлімін басқарды.
              </p>
              <p>
                   <div className="pt-4 flex flex-wrap items-center gap-4 mb-3"></div>
                Алғашқы «Жүрек жырлайды» атты жыр жинағы 1974 жылы жарық көрді. Кейін «Тың құрбаны», «Хайуандық комедия», «Күшігінен таланған», «Мен ішпеген у бар ма?», «Батқан кеменің бейбақтары», «Желжуан», «Құдай қарғағандар», «Жамбылдың қызыл жолбарысы», «Негізгі шаруа», «Қанына тартқан қыңырлар», «Алтын адам», «Алтын ажал», «Киелі күнә», «Хан–Абылай–Сабалақ», «Жәбекшаған», «ГүлНәр», «Театр Романы», «Қорқыттың көрі», «Мауглидің оралуы», «Махамбет», «Қашғария», «Былыққа батқан қала», «Керкеткен» атты драмалық дастандарын жазды. «Глаза ночи» (1983), «Царь слова»(1984), «Наследник» (1988) атты кітаптары орыс тілінде жарық көрді. 1990 жылы үш томдық, ал 2006 жылы 13 томдық таңдамалысы оқырмандар қолына тиді.
              </p>
              <p>
                   <div className="pt-4 flex flex-wrap items-center gap-4 mb-3"></div>
                2002 жылы «Қорқыттың көрі» атты жыр кітабы үшін ҚР Мемлекеттік сыйлығының лауреаты атанды. Тәуелсіз Қазақстан Республикасының тұңғыш өткен жазба ақындар жырмүшәйрасының бас жүлдегері.
              </p>
              <p>
                   <div className="pt-4 flex flex-wrap items-center gap-4 mb-3"></div>
                Шығармалары: Жүрек жырлайды. Өлеңдер. 1974; Жеті қазына. Балладалар мен поэма. 1977; Түннің көзі. Өлеңдер. А., 1980; Өмірөлең. Жыр кітабы. А., 1982; Молодые поэты Средней Азии и Казахстана. М., «Молодая гвардия», 1982; Глаза ночи. Стихи. А., 1983; Царь слова. Стихи, поэма. М., «Советский писатель», 1984; Сұлулық сарасы. Өлеңдер, поэмалар. А., 1985; Дүниежарық. Жыр кітабы. 1987; Наследник. Поэма. 1988; Батқан кеменің бейбақтары. Дастандар. 1990; Мұнар, мұнар, мұнарым… Қасірет кітабы. 1992; Иран бағы. Таңдамалы. 1995; Сөз патша. Таңдамалы. 1996; Жыр әлемі. Жыр кітабы. 1996.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { year: "1947", title: "Туған жылы", desc: "Қызылорда облысы, Сырдария ауданында туған" },
                { year: "1974", title: "«Жүрек жырлайды»", desc: "Алғашқы «Жүрек жырлайды» атты жыр жинағы 1974 жылы жарық көрді." },
                { year: "1980", title: "", desc: "Мәскеудегі М.Горький атындағы Әдебиет институты жанындағы жоғары әдеби курсты бітірген (1980)" },
                { year: "1998", title: "Жастар мен балалар театры", desc: "Қазақтың мемлекеттік Ғ.Мүсірепов атындағы Жастар мен балалар театрының әдебиет бөлімін басқарды" },
                { year: "1990", title: "", desc: "Үш томдық, ал 2006 жылы 13 томдық таңдамалысы оқырмандар қолына тиді." },
                { year: "2002", title: "«Қорқыттың көрі»", desc: "Жыр кітабы үшін ҚР Мемлекеттік сыйлығының лауреаты атанды." },
              ].map((item, i) => (
                <Card key={i} className="bg-background/50 border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center space-y-2">
                    <span className="text-4xl font-serif text-secondary opacity-50 block">{item.year}</span>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Poetry Section */}
      <section id="poetry" className="py-24 bg-background section-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif text-foreground">Өлеңдер</h2>
            <p className="text-muted-foreground">
              — Иранбек Әбітайұлы Оразбаев (Иран-Ғайып), ақын, драматург
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, i) => (
              <Card
                key={i}
                className="group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-secondary/50"
              >
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-serif text-primary group-hover:text-secondary transition-colors text-center">
                    {poem.title}
                  </h3>
                  <div className="space-y-2 text-center">
                    {poem.preview.map((line, l) => (
                      <p key={l} className="text-muted-foreground font-serif italic text-sm md:text-base leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => setActivePoemIndex(i)}
                      className="text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Толық оқу
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

 <section id="poetry" className="py-24 bg-white section-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif text-foreground">
Ұлт театрына 95 жыл- Иран-Ғайып</h2>
          </div>
            {/* Видео контейнер */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-12">
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
      <video className="w-full h-auto rounded-2xl" controls src={IranG95Ult} />
    </div>
</div>
<div className="prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              <div className="pt-4 flex flex-wrap items-center gap-4 mb-6">
                  <p>
              Ақын, драматург Иран-Ғайып театр ұжымын 95 жылдық мерейтойымен құттықтайды. Иран-Ғайып біздің театр сахнасында сахналанған “Мен ішпеген у бар ма?”, “Қорқыттың көрі” секілді спектакльдердің авторы.
              </p>
            </div>
            </div>
        </div>
      </section>

     <section id="poetry" className="py-24 bg-background section-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif text-foreground">Ақын Иран-Ғайып 75 жасқа толды</h2>
          </div>
            {/* Видео контейнер */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-12">
 {/* Видео контейнер */}
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
      <video className="w-full h-auto rounded-2xl" controls src={IranVideo} />
    </div>
</div>
<div className="prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              <div className="pt-4 flex flex-wrap items-center gap-4 mb-6">
                  <p>
              Алматыда ақын, драмматург, Мемлекеттік сыйлықтың иегері Иран-Ғайыптың 75 жылдық мерейтойына орай шығармашылық кеш өтті. Ақын өз туындыларында жаратылыстың ұлы феномені - адамды басты нысана ете отырып, оның бүкіл болмысындағы күйініші мен сүйінішін, қуанышы мен мұңын сезімталдықпен жеткізе білді. 
              Иран-Ғайыптың алғашқы «Жүрек жырлайды» атты жинағы 1974 жылы жарық көрді. Ал 2002 жылы «Қорқыттың көрі» атты жыр кітабы үшін Мемлекеттік сыйлықтың лауреаты атанды. Сондай-ақ тәуелсіз Қазақстанда тұңғыш өткен жазба ақындар жыр мүшайрасының бас жүлдесін иеленген. 
              Иран-Ғайыптың жақұт жырлары, өлмес өлеңдері мен поэмалары, аудармалары қазақ поэзиясының алтын қорына енген.
              </p>
            </div>
          <h2 className="text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              Ереке Құлкенов, жазушы:
              </h2>
                 <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6">
              "Алғашқы өлеңінен бастап қазақ поэзиясына өзінің сара жолын салып келген ерекше ақын. Оның жазу стилі, ойын жеткізе білуі, ойын ірікпей айта алатыны, батылдығы, ержүректігі көп ақындарда жоқ нәрсе. Сондықтан Иранбектің жөні бөлек."
            </p>
            </div>
        </div>
      </section>

      {activePoemIndex !== null && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActivePoemIndex(null)}
            aria-label="Жабу"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-10">
            <div className="w-full max-w-3xl max-h-full overflow-y-auto rounded-2xl bg-background text-foreground shadow-2xl border border-foreground/10 transition-transform duration-300 ease-out">
              <div className="flex items-center justify-between gap-4 border-b border-foreground/10 px-6 py-4">
                <h2 className="text-2xl md:text-3xl font-serif">{poems[activePoemIndex].title}</h2>
                <button
                  type="button"
                  onClick={() => setActivePoemIndex(null)}
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/5 transition"
                >
                  Жабу
                </button>
              </div>
              <div className="px-6 py-6 space-y-4 text-lg leading-relaxed">
                {poems[activePoemIndex].full.map((line, index) => (
                  <p key={`${poems[activePoemIndex].title}-${index}`} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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
