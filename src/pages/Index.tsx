import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALOG_ITEMS = [
  {
    id: 1,
    category: "Одежда",
    name: "Оверсайз худи",
    brand: "Urban Flow",
    tag: "Хит",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/2f035610-8c93-4b6d-b874-4f2f546888de.jpg",
  },
  {
    id: 2,
    category: "Обувь",
    name: "Кроссовки Retro",
    brand: "SoleKing",
    tag: "Новинка",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg",
  },
  {
    id: 3,
    category: "Аксессуары",
    name: "Цепочка Y2K",
    brand: "GoldRush",
    tag: "Тренд",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg",
  },
  {
    id: 4,
    category: "Одежда",
    name: "Карго-джинсы",
    brand: "Streetwear Co",
    tag: "Хит",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/2f035610-8c93-4b6d-b874-4f2f546888de.jpg",
  },
  {
    id: 5,
    category: "Аксессуары",
    name: "Очки Shield",
    brand: "VisionX",
    tag: "Новинка",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg",
  },
  {
    id: 6,
    category: "Обувь",
    name: "Платформа Chunky",
    brand: "HeightMod",
    tag: "Тренд",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg",
  },
];

const OUTFITS = [
  {
    id: 1,
    name: "Городской экспресс",
    items: ["Оверсайз худи", "Карго-джинсы", "Кроссовки Retro"],
    mood: "Casual",
  },
  {
    id: 2,
    name: "Вечерний шарм",
    items: ["Топ сетка", "Мини-юбка", "Платформа Chunky", "Цепочка Y2K"],
    mood: "Night Out",
  },
  {
    id: 3,
    name: "Офис в стиле Y2K",
    items: ["Блейзер oversized", "Карго-джинсы", "Очки Shield"],
    mood: "Smart Casual",
  },
];

const TRENDS = [
  {
    id: 1,
    brand: "Balenciaga",
    season: "SS 2026",
    title: "Деконструктивизм",
    desc: "Асимметричные силуэты, незашитые края, сырая эстетика",
    hot: true,
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg",
  },
  {
    id: 2,
    brand: "Jacquemus",
    season: "SS 2026",
    title: "Мини всё",
    desc: "Максимально укороченные пропорции, яркие монохромы",
    hot: false,
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg",
  },
  {
    id: 3,
    brand: "Y-Project",
    season: "FW 2026",
    title: "Layering Future",
    desc: "Многослойность, техно-ткани, металлик акценты",
    hot: true,
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/2f035610-8c93-4b6d-b874-4f2f546888de.jpg",
  },
];

const FILTER_CATEGORIES = ["Все", "Одежда", "Обувь", "Аксессуары"];

const INK = "#2e2820";
const MID = "#7a7068";
const LIGHT = "#b8afa6";
const LINEN = "#ede9e3";
const MILK = "#f5f2ee";

export default function Index() {
  const [activeTab, setActiveTab] = useState<"wardrobe" | "outfits" | "trends">("wardrobe");
  const [activeFilter, setActiveFilter] = useState("Все");
  const [likedItems, setLikedItems] = useState<number[]>([1, 3]);
  const [savedOutfits, setSavedOutfits] = useState<number[]>([1, 3]);

  const filteredItems =
    activeFilter === "Все"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((i) => i.category === activeFilter);

  const toggleLike = (id: number) =>
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleSave = (id: number) =>
    setSavedOutfits((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="min-h-screen mesh-bg font-body" style={{ color: INK }}>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b px-4 py-3" style={{ borderColor: "rgba(180,168,155,0.18)" }}>
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: INK }}>
              <span className="text-sm font-display font-bold text-white tracking-wider">D</span>
            </div>
            <span className="font-display text-xl font-bold tracking-[0.18em]" style={{ color: INK }}>
              DRIP
            </span>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: INK }}>
            A
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 pb-28">

        {/* Hero Banner */}
        {activeTab === "wardrobe" && (
          <div className="mt-5 mb-6 relative overflow-hidden rounded-2xl animate-slide-up">
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(46,40,32,0.72), rgba(46,40,32,0.25), transparent)" }} />
            <img
              src="https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg"
              alt="Fashion"
              className="w-full h-44 object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-1.5" style={{ color: "rgba(250,248,245,0.65)" }}>
                Твой гардероб
              </p>
              <h2 className="font-display text-2xl font-bold text-white leading-tight mb-4">
                Сфотографируй вещь<br />и добавь в каталог
              </h2>
              <button
                className="self-start flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
                style={{ background: "#faf8f5", color: INK }}
              >
                <Icon name="Camera" size={15} />
                Открыть камеру
              </button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="rounded-2xl p-1.5 flex gap-1 mb-6" style={{ background: LINEN }}>
          {[
            { key: "wardrobe", label: "Гардероб", icon: "Shirt" },
            { key: "outfits", label: "Образы", icon: "Sparkles" },
            { key: "trends", label: "Тренды", icon: "TrendingUp" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250"
              style={
                activeTab === tab.key
                  ? { background: INK, color: "#faf8f5", boxShadow: "0 2px 8px rgba(46,40,32,0.14)" }
                  : { color: MID }
              }
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* WARDROBE */}
        {activeTab === "wardrobe" && (
          <div className="animate-fade-in">
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={
                    activeFilter === cat
                      ? { background: INK, color: "#faf8f5" }
                      : { background: LINEN, color: MID }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {filteredItems.map((item, i) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl overflow-hidden card-hover"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative">
                    <img src={item.img} alt={item.name} className="w-full h-36 object-cover" />
                    <span
                      className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(250,248,245,0.92)", color: MID }}
                    >
                      {item.tag}
                    </span>
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-90"
                      style={{ background: "rgba(250,248,245,0.92)" }}
                    >
                      <Icon
                        name="Heart"
                        size={14}
                        className={likedItems.includes(item.id) ? "fill-rose-400 text-rose-400" : ""}
                        style={!likedItems.includes(item.id) ? { color: LIGHT } : {}}
                      />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-xs mb-0.5" style={{ color: LIGHT }}>{item.brand}</p>
                    <p className="font-semibold text-sm leading-tight" style={{ color: INK }}>{item.name}</p>
                  </div>
                </div>
              ))}

              <button
                className="rounded-2xl card-hover flex flex-col items-center justify-center h-48 transition-all group border-2 border-dashed"
                style={{ borderColor: "rgba(120,100,80,0.18)", background: MILK }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"
                  style={{ background: LINEN }}
                >
                  <Icon name="Plus" size={20} style={{ color: MID }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: LIGHT }}>Добавить вещь</p>
              </button>
            </div>
          </div>
        )}

        {/* OUTFITS */}
        {activeTab === "outfits" && (
          <div className="animate-fade-in space-y-4">
            <div className="relative overflow-hidden rounded-2xl p-5" style={{ background: INK }}>
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10" style={{ background: "#faf8f5" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Sparkles" size={15} className="text-amber-200" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-200">ИИ-советник</span>
                </div>
                <p className="font-display text-xl font-bold text-white mb-1">Образ на сегодня</p>
                <p className="text-sm mb-4" style={{ color: "rgba(250,248,245,0.55)" }}>
                  Понедельник, 11 мая · Солнечно, +18°C
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Оверсайз худи", "Карго-джинсы", "Кроссовки Retro"].map((item) => (
                    <span
                      key={item}
                      className="text-xs rounded-full px-3 py-1 font-medium"
                      style={{ background: "rgba(250,248,245,0.12)", color: "rgba(250,248,245,0.85)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <h3 className="font-display text-lg font-bold" style={{ color: INK }}>Мои образы</h3>
              <button className="text-xs font-semibold" style={{ color: MID }}>+ Создать новый</button>
            </div>

            {OUTFITS.map((outfit, i) => (
              <div
                key={outfit.id}
                className="glass-card rounded-2xl p-4 card-hover"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: LINEN, color: MID }}
                    >
                      {outfit.mood}
                    </span>
                    <h4 className="font-display text-lg font-bold" style={{ color: INK }}>{outfit.name}</h4>
                  </div>
                  <button
                    onClick={() => toggleSave(outfit.id)}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-90"
                    style={{ background: MILK }}
                  >
                    <Icon
                      name="Bookmark"
                      size={16}
                      className={savedOutfits.includes(outfit.id) ? "fill-amber-400 text-amber-400" : ""}
                      style={!savedOutfits.includes(outfit.id) ? { color: LIGHT } : {}}
                    />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {outfit.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs rounded-full px-3 py-1 font-medium"
                      style={{ background: LINEN, color: MID }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: LINEN, color: MID }}
                  >
                    Надеть сегодня
                  </button>
                  <button
                    className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: INK, color: "#faf8f5" }}
                  >
                    Редактировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TRENDS */}
        {activeTab === "trends" && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MID }} />
              <p className="text-sm" style={{ color: LIGHT }}>Актуально · SS / FW 2026</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src="https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg"
                alt="Fashion Show"
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,40,32,0.85), rgba(46,40,32,0.1), transparent)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "rgba(250,248,245,0.55)" }}>
                  Прямой эфир
                </p>
                <p className="font-display text-xl font-bold text-white">Paris Fashion Week 2026</p>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "rgba(46,40,32,0.75)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wider">LIVE</span>
              </div>
            </div>

            <h3 className="font-display text-lg font-bold mb-3" style={{ color: INK }}>Горячие тренды</h3>
            <div className="space-y-3">
              {TRENDS.map((trend, i) => (
                <div
                  key={trend.id}
                  className="glass-card rounded-2xl overflow-hidden card-hover"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex">
                    <img src={trend.img} alt={trend.brand} className="w-28 h-28 object-cover shrink-0" />
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: LIGHT }}>{trend.brand}</span>
                          <span className="text-xs" style={{ color: "rgba(184,175,166,0.7)" }}>{trend.season}</span>
                          {trend.hot && (
                            <span
                              className="text-xs rounded-full px-1.5 py-0.5 font-semibold"
                              style={{ background: LINEN, color: MID }}
                            >
                              ✦ Хит
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-base font-bold mb-1" style={{ color: INK }}>{trend.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: MID }}>{trend.desc}</p>
                      </div>
                      <button
                        className="mt-2 self-start text-xs font-semibold flex items-center gap-1"
                        style={{ color: MID }}
                      >
                        Подробнее <Icon name="ArrowRight" size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-md mx-auto px-4 pb-4">
          <div className="glass-card rounded-2xl px-2 py-3 flex items-center justify-around">
            {[
              { key: "wardrobe", icon: "Shirt", label: "Гардероб" },
              { key: "outfits", icon: "Sparkles", label: "Образы" },
              { key: "trends", icon: "TrendingUp", label: "Тренды" },
              { key: "profile", icon: "User", label: "Профиль" },
            ].map((nav) => (
              <button
                key={nav.key}
                onClick={() => {
                  if (nav.key !== "profile") setActiveTab(nav.key as typeof activeTab);
                }}
                className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all duration-200"
                style={{ color: activeTab === nav.key ? INK : LIGHT }}
              >
                <div className={`relative ${activeTab === nav.key ? "animate-float" : ""}`}>
                  <Icon name={nav.icon} size={20} />
                  {activeTab === nav.key && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: INK }} />
                  )}
                </div>
                <span className="text-xs font-semibold">{nav.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
