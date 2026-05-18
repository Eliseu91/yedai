// Icons for Yedai — small, outlined, currentColor-based
const Icon = {};

Icon.Box = ({ size = 18, stroke = 1.6, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" stroke="currentColor" strokeWidth={stroke} />
  </svg>
);

Icon.ArrowLeft = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M15 4 L7 12 L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Icon.ChevronLeft = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M15 5 L8 12 L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Icon.ChevronRight = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 5 L16 12 L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Icon.Check = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12.5 L10 17 L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Icon.Plus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 5 V19 M5 12 H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// "TV" icon: rectangle with a base line
Icon.TV = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 20 H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M12 17 V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

// signal cell icons in status bar (we'll just draw outlined squares per "two small square outline icons")
Icon.SquareDot = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

Icon.Clock = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 7.5 V12 L15 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Icon.Phone = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 5.5 C5 4.7 5.7 4 6.5 4 H8.5 C9.1 4 9.6 4.4 9.7 5 L10.3 7.5 C10.4 8 10.2 8.6 9.8 8.9 L8.6 9.8 C9.6 11.8 11.2 13.4 13.2 14.4 L14.1 13.2 C14.4 12.8 15 12.6 15.5 12.7 L18 13.3 C18.6 13.4 19 13.9 19 14.5 V16.5 C19 17.3 18.3 18 17.5 18 C10.6 18 5 12.4 5 5.5 Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

Icon.Home = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 11 L12 4 L20 11 V19 C20 19.6 19.6 20 19 20 H15 V14 H9 V20 H5 C4.4 20 4 19.6 4 19 Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

Icon.Grid = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

Icon.User = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5 20 C5 16.4 8.1 14 12 14 C15.9 14 19 16.4 19 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

Icon.Send = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3.5 12 L20.5 4 L16 20.5 L12 13 L3.5 12 Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

Icon.Star = ({ size = 28, filled = false, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className}>
    <path d="M12 3.6 L14.6 9 L20.5 9.8 L16.2 13.9 L17.3 19.7 L12 16.9 L6.7 19.7 L7.8 13.9 L3.5 9.8 L9.4 9 Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

window.Icon = Icon;
