/*
 * Zacks Jersey House — Shield Logo Component
 * A football shield/crest with ZJH monogram — the brand mark
 * Colors: Teal (#0d9488)
 */

export function ShieldLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 110"
        width={size}
        height={size}
        className="drop-shadow-[0_4px_20px_rgba(13,148,136,0.25)]"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        <path
          d="M50 5 L92 22 L92 55 C92 78 72 95 50 105 C28 95 8 78 8 55 L8 22 Z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldBorder)"
          strokeWidth="2"
        />
        <path
          d="M50 15 L82 28 L82 55 C82 73 66 87 50 95 C34 87 18 73 18 55 L18 28 Z"
          fill="#ffffff"
          opacity="0.9"
        />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="#0d9488"
          fontFamily="Oswald, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="1"
        >
          ZJH
        </text>
        <circle cx="50" cy="38" r="6" fill="none" stroke="#0d9488" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
}

export function ShieldWordmark({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-3 group">
      <ShieldLogo size={small ? 32 : 40} />
      <span className="font-[var(--font-display)] text-xl font-bold tracking-wide text-slate-900 group-hover:text-teal-700 transition-colors">
        ZACKS<span className="text-teal-600">.</span>
      </span>
    </div>
  );
}
