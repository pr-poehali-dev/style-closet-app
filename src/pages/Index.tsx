import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALOG_ITEMS = [
  {
    id: 1,
    category: "Одежда",
    name: "Оверсайз худи",
    brand: "Urban Flow",
    price: "4 990 ₽",
    tag: "Хит",
    tagColor: "bg-rose-300",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/2f035610-8c93-4b6d-b874-4f2f546888de.jpg",
  },
  {
    id: 2,
    category: "Обувь",
    name: "Кроссовки Retro",
    brand: "SoleKing",
    price: "8 500 ₽",
    tag: "Новинка",
    tagColor: "bg-teal-400",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg",
  },
  {
    id: 3,
    category: "Аксессуары",
    name: "Цепочка Y2K",
    brand: "GoldRush",
    price: "2 200 ₽",
    tag: "Тренд",
    tagColor: "bg-amber-300",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg",
  },
  {
    id: 4,
    category: "Одежда",
    name: "Карго-джинсы",
    brand: "Streetwear Co",
    price: "6 700 ₽",
    tag: "Хит",
    tagColor: "bg-rose-300",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/2f035610-8c93-4b6d-b874-4f2f546888de.jpg",
  },
  {
    id: 5,
    category: "Аксессуары",
    name: "Очки Shield",
    brand: "VisionX",
    price: "3 100 ₽",
    tag: "Новинка",
    tagColor: "bg-teal-400",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg",
  },
  {
    id: 6,
    category: "Обувь",
    name: "Платформа Chunky",
    brand: "HeightMod",
    price: "11 000 ₽",
    tag: "Тренд",
    tagColor: "bg-amber-300",
    img: "https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg",
  },
];

const OUTFITS = [
  {
    id: 1,
    name: "Городской экспресс",
    items: ["Оверсайз худи", "Карго-джинсы", "Кроссовки Retro"],
    mood: "Casual",
    moodColor: "from-rose-300 to-purple-300",
  },
  {
    id: 2,
    name: "Вечерний шарм",
    items: ["Топ сетка", "Мини-юбка", "Платформа Chunky", "Цепочка Y2K"],
    mood: "Night Out",
    moodColor: "from-teal-300 to-blue-300",
  },
  {
    id: 3,
    name: "Офис в стиле Y2K",
    items: ["Блейзер oversized", "Карго-джинсы", "Очки Shield"],
    mood: "Smart Casual",
    moodColor: "from-amber-300 to-rose-300",
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

export default function Index() {
  const [activeTab, setActiveTab] = useState<"wardrobe" | "outfits" | "trends">("wardrobe");
  const [activeFilter, setActiveFilter] = useState("Все");
  const [likedItems, setLikedItems] = useState<number[]>([1, 3]);
  const [savedOutfits, setSavedOutfits] = useState<number[]>([1, 3]);
  const [isPremium, setIsPremium] = useState(false);

  const filteredItems =
    activeFilter === "Все"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((i) => i.category === activeFilter);

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSave = (id: number) => {
    setSavedOutfits((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen mesh-bg font-body" style={{ color: "hsl(25 25% 15%)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b px-4 py-3" style={{ borderColor: "rgba(196,122,138,0.12)" }}>
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-btn flex items-center justify-center">
              <span className="text-sm font-display font-bold text-white">D</span>
            </div>
            <span className="font-display text-xl font-bold tracking-widest gradient-text">
              DRIP
            </span>
          </div>
          <div className="flex items-center gap-3">
            {isPremium ? (
              <span className="text-xs font-semibold px-2 py-1 rounded-full border" style={{ background: "rgba(201,168,124,0.15)", color: "#a07840", borderColor: "rgba(201,168,124,0.35)" }}>
                ✦ PREMIUM
              </span>
            ) : (
              <button
                onClick={() => setIsPremium(true)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full gradient-btn text-white"
              >
                Premium
              </button>
            )}
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #c47a8a, #9b8db5)" }}>
              A
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 pb-28">
        {/* Hero Banner */}
        {activeTab === "wardrobe" && (
          <div className="mt-5 mb-6 relative overflow-hidden rounded-2xl animate-slide-up">
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(196,122,138,0.75), rgba(155,141,181,0.55), rgba(138,171,155,0.35))" }} />
            <img
              src="https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/0dc8adf6-e946-458b-83c4-a5a547d06b40.jpg"
              alt="Fashion"
              className="w-full h-44 object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#e8f5f0" }}>
                Твой гардероб
              </p>
              <h2 className="font-display text-2xl font-bold text-white leading-tight mb-3">
                Сфотографируй вещь<br />и добавь в каталог
              </h2>
              <button className="self-start flex items-center gap-2 bg-white font-semibold text-sm px-4 py-2 rounded-full transition-all hover:shadow-md" style={{ color: "hsl(25 25% 15%)" }}>
                <Icon name="Camera" size={16} />
                Открыть камеру
              </button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="glass-card rounded-2xl p-1.5 flex gap-1 mb-6">
          {[
            { key: "wardrobe", label: "Гардероб", icon: "Shirt" },
            { key: "outfits", label: "Образы", icon: "Sparkles" },
            { key: "trends", label: "Тренды", icon: "TrendingUp" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "tab-active shadow-md"
                  : "hover:opacity-70"
              }`}
              style={activeTab !== tab.key ? { color: "hsl(25 10% 50%)" } : {}}
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* WARDROBE TAB */}
        {activeTab === "wardrobe" && (
          <div className="animate-fade-in">
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeFilter === cat ? "tab-active shadow-md" : "glass-card hover:shadow-sm"
                  }`}
                  style={activeFilter !== cat ? { color: "hsl(25 10% 45%)" } : {}}
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
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-36 object-cover"
                    />
                    <span className={`absolute top-2 left-2 text-xs font-bold text-white px-2 py-0.5 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-90 bg-white/80 backdrop-blur"
                    >
                      <Icon
                        name="Heart"
                        size={14}
                        className={likedItems.includes(item.id) ? "fill-rose-400 text-rose-400" : "text-stone-400"}
                      />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-xs mb-0.5" style={{ color: "hsl(25 10% 55%)" }}>{item.brand}</p>
                    <p className="font-semibold text-sm leading-tight mb-1" style={{ color: "hsl(25 25% 18%)" }}>{item.name}</p>
                    <p className="font-display font-bold text-base gradient-text">{item.price}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl overflow-hidden card-hover border-2 border-dashed flex flex-col items-center justify-center h-48 cursor-pointer transition-all group" style={{ borderColor: "rgba(196,122,138,0.25)", background: "rgba(196,122,138,0.04)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ background: "rgba(196,122,138,0.12)" }}>
                  <Icon name="Plus" size={22} className="text-rose-400" />
                </div>
                <p className="text-sm font-semibold" style={{ color: "hsl(25 10% 55%)" }}>
                  Добавить вещь
                </p>
              </div>
            </div>
          </div>
        )}

        {/* OUTFITS TAB */}
        {activeTab === "outfits" && (
          <div className="animate-fade-in space-y-4">
            {/* AI suggestion */}
            <div className="relative overflow-hidden rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #c47a8a, #9b8db5)" }}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Sparkles" size={16} className="text-amber-200" />
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-200">
                    ИИ-советник
                  </span>
                </div>
                <p className="font-display text-xl font-bold text-white mb-1">Образ на сегодня</p>
                <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Понедельник, 11 мая · Солнечно, +18°C
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Оверсайз худи", "Карго-джинсы", "Кроссовки Retro"].map((item) => (
                    <span key={item} className="text-xs rounded-full px-3 py-1 font-medium text-white" style={{ background: "rgba(255,255,255,0.2)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold" style={{ color: "hsl(25 25% 15%)" }}>Мои образы</h3>
              <button className="text-xs font-semibold" style={{ color: "#c47a8a" }}>
                + Создать новый
              </button>
            </div>

            {OUTFITS.map((outfit, i) => (
              <div key={outfit.id} className="glass-card rounded-2xl p-4 card-hover" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${outfit.moodColor} text-white mb-2`}>
                      {outfit.mood}
                    </div>
                    <h4 className="font-display text-lg font-bold" style={{ color: "hsl(25 25% 15%)" }}>{outfit.name}</h4>
                  </div>
                  <button
                    onClick={() => toggleSave(outfit.id)}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-90 bg-white/80"
                  >
                    <Icon
                      name="Bookmark"
                      size={16}
                      className={savedOutfits.includes(outfit.id) ? "fill-amber-400 text-amber-400" : "text-stone-300"}
                    />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {outfit.items.map((item) => (
                    <span key={item} className="text-xs rounded-full px-3 py-1 font-medium" style={{ background: "rgba(196,122,138,0.08)", color: "hsl(25 25% 35%)", border: "1px solid rgba(196,122,138,0.15)" }}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all hover:shadow-sm" style={{ background: "rgba(196,122,138,0.07)", border: "1px solid rgba(196,122,138,0.15)", color: "hsl(25 25% 35%)" }}>
                    Надеть сегодня
                  </button>
                  <button className="flex-1 py-2 rounded-xl text-white text-sm font-semibold gradient-btn">
                    Редактировать
                  </button>
                </div>
              </div>
            ))}

            {!isPremium && (
              <div className="relative overflow-hidden rounded-2xl p-5 border" style={{ borderColor: "rgba(201,168,124,0.25)", background: "rgba(201,168,124,0.06)" }}>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-xl" style={{ background: "rgba(201,168,124,0.15)" }} />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">✦</span>
                  <span className="font-display text-base font-bold" style={{ color: "#a07840" }}>Premium образы</span>
                </div>
                <p className="text-sm mb-3" style={{ color: "hsl(25 10% 45%)" }}>
                  Получи доступ к ИИ-стилисту, персональным рекомендациям и 500+ эксклюзивным образам
                </p>
                <button
                  onClick={() => setIsPremium(true)}
                  className="w-full py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #c9a87c, #c47a8a)" }}
                >
                  Попробовать 7 дней бесплатно
                </button>
              </div>
            )}
          </div>
        )}

        {/* TRENDS TAB */}
        {activeTab === "trends" && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" />
              <p className="text-sm" style={{ color: "hsl(25 10% 55%)" }}>Актуально для сезона SS/FW 2026</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-5">
              <img
                src="https://cdn.poehali.dev/projects/613e8477-c04e-4838-96e3-30ad0aee84a6/files/285a4fe3-a463-487d-a2aa-99ce3b0a22c6.jpg"
                alt="Fashion Show"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,15,20,0.80), rgba(30,15,20,0.15), transparent)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8aab9b" }}>
                  Прямой эфир
                </p>
                <p className="font-display text-xl font-bold text-white">Paris Fashion Week 2026</p>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-rose-400 rounded-full px-2.5 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold text-white">LIVE</span>
              </div>
            </div>

            <h3 className="font-display text-lg font-bold mb-3" style={{ color: "hsl(25 25% 15%)" }}>Горячие тренды</h3>
            <div className="space-y-3">
              {TRENDS.map((trend, i) => (
                <div key={trend.id} className="glass-card rounded-2xl overflow-hidden card-hover" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="flex">
                    <img src={trend.img} alt={trend.brand} className="w-28 h-28 object-cover shrink-0" />
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "hsl(25 10% 55%)" }}>{trend.brand}</span>
                          <span className="text-xs" style={{ color: "hsl(25 10% 65%)" }}>{trend.season}</span>
                          {trend.hot && (
                            <span className="text-xs rounded-full px-1.5 py-0.5 font-semibold" style={{ background: "rgba(196,122,138,0.12)", color: "#c47a8a", border: "1px solid rgba(196,122,138,0.2)" }}>
                              🔥
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-base font-bold mb-1" style={{ color: "hsl(25 25% 15%)" }}>{trend.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: "hsl(25 10% 50%)" }}>{trend.desc}</p>
                      </div>
                      <button className="mt-2 self-start text-xs font-semibold transition-colors flex items-center gap-1" style={{ color: "#8aab9b" }}>
                        Подробнее
                        <Icon name="ArrowRight" size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!isPremium && (
              <div className="mt-4 relative overflow-hidden rounded-2xl p-5 border" style={{ borderColor: "rgba(155,141,181,0.25)", background: "rgba(155,141,181,0.06)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Lock" size={16} style={{ color: "#9b8db5" }} />
                  <span className="font-display text-base font-bold" style={{ color: "#9b8db5" }}>Эксклюзивные тренды</span>
                </div>
                <p className="text-sm mb-3" style={{ color: "hsl(25 10% 45%)" }}>
                  Прогнозы на 6 месяцев вперёд, закрытые показы и аналитика от топ-стилистов
                </p>
                <button
                  onClick={() => setIsPremium(true)}
                  className="w-full py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #9b8db5, #c47a8a)" }}
                >
                  Открыть Premium доступ
                </button>
              </div>
            )}
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
                style={{ color: activeTab === nav.key ? "#c47a8a" : "hsl(25 10% 60%)" }}
              >
                <div className={`relative ${activeTab === nav.key ? "animate-float" : ""}`}>
                  <Icon name={nav.icon} size={20} />
                  {activeTab === nav.key && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-400" />
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
