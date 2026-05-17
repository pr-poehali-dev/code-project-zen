import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      {/* Background field photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/4410dbe7-7eb0-4fdc-b48f-c8f95cdc403c/files/4be50f1c-3dc9-4cec-bfe5-42914f20024b.jpg"
          alt="Пшеничное поле на закате"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p
          className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Агромедиа · Исследование 2025
        </p>

        {/* Main Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Агроблогеры vs
          <span className="block text-sage">Традиционные медиа</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Конкуренты или союзники? Разбираемся, как новые голоса в агросфере меняют медиаландшафт — и что это значит для фермеров, брендов и аудитории.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Читать исследование
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            Контекст
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}