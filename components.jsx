// Shared components for Yedai
const { useState, useEffect, useContext, createContext, useRef } = React;

// ---- Router (custom, hash-based) ------------------------------------------
const RouterCtx = createContext(null);

function RouterProvider({ children, initial = '/' }) {
  const [stack, setStack] = useState([initial]);
  const path = stack[stack.length - 1];

  const navigate = (to, opts = {}) => {
    setStack((prev) => {
      if (opts.replace) {
        const copy = prev.slice(0, -1);
        copy.push(to);
        return copy;
      }
      if (to === prev[prev.length - 1]) return prev;
      return [...prev, to];
    });
  };

  const back = () => {
    setStack((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  return (
    <RouterCtx.Provider value={{ path, navigate, back, stack }}>
      {children}
    </RouterCtx.Provider>);

}

const useNavigate = () => useContext(RouterCtx).navigate;
const useBack = () => useContext(RouterCtx).back;
const usePath = () => useContext(RouterCtx).path;

// ---- App state (shared across screens) ------------------------------------
const AppStateCtx = createContext(null);

function AppStateProvider({ children }) {
  const [selectedServiceId, setSelectedServiceId] = useState('tv');
  const [selectedDate, setSelectedDate] = useState(window.Mock.scheduling.defaultDate);
  const [selectedTime, setSelectedTime] = useState(window.Mock.scheduling.defaultTime);
  const [rating, setRating] = useState(4);
  const [reviewText, setReviewText] = useState('Ótimo profissional, muito cuidadoso com os móveis.');
  const [progressStep, setProgressStep] = useState(window.Mock.inProgress.currentStep);

  return (
    <AppStateCtx.Provider value={{
      selectedServiceId, setSelectedServiceId,
      selectedDate, setSelectedDate,
      selectedTime, setSelectedTime,
      rating, setRating,
      reviewText, setReviewText,
      progressStep, setProgressStep
    }}>
      {children}
    </AppStateCtx.Provider>);

}

const useAppState = () => useContext(AppStateCtx);

// ---- MobileShell -----------------------------------------------------------
function MobileShell({ children, bottomNav = false }) {
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-6 px-3" style={{ background: '#F0F0F0' }}>
      <div
        className="bg-white overflow-hidden flex flex-col relative shell-scroll"
        style={{
          width: '100%',
          maxWidth: '390px',
          minHeight: '844px',
          borderRadius: '36px',
          boxShadow: '0 30px 60px -20px rgba(20, 20, 40, 0.18), 0 8px 20px -10px rgba(20, 20, 40, 0.10)'
        }}>
        
        <StatusBar />
        <div className="flex-1 flex flex-col" style={{ paddingBottom: bottomNav ? '88px' : '0' }}>
          {children}
        </div>
        {bottomNav && <BottomNav />}
      </div>
    </div>);

}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0" style={{ height: '44px' }}>
      <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}>9:41</span>
      <div className="flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
        <Icon.SquareDot />
        <Icon.SquareDot />
      </div>
    </div>);

}

// ---- BackNav ---------------------------------------------------------------
function BackNav({ to = null, label = 'Voltar' }) {
  const back = useBack();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => to ? navigate(to) : back()}
      className="flex items-center gap-2 active:scale-95"
      style={{ color: 'var(--primary)' }}>
      
      <span
        className="flex items-center justify-center rounded-md"
        style={{
          width: '28px',
          height: '28px',
          border: '1.4px solid var(--primary)',
          color: 'var(--primary)'
        }}>
        
        <Icon.ArrowLeft size={12} />
      </span>
      <span style={{ fontSize: '14px', fontWeight: 600 }}>{label}</span>
    </button>);

}

// ---- PrimaryButton ---------------------------------------------------------
function PrimaryButton({ children, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center justify-center active:scale-95"
      style={{
        background: disabled ? '#C4C4D4' : 'var(--primary)',
        color: '#fff',
        borderRadius: '28px',
        height: '52px',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '-0.005em'
      }}>
      
      {children}
    </button>);

}

// ---- GhostLink -------------------------------------------------------------
function GhostLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-center active:scale-95 py-3"
      style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 500 }}>
      
      {children}
    </button>);

}

// ---- Card ------------------------------------------------------------------
function Card({ children, className = '', style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '14px',
        ...style
      }}>
      
      {children}
    </div>);

}

// ---- Avatar ----------------------------------------------------------------
const avatarSizes = {
  sm: { box: 36, font: 13 },
  md: { box: 44, font: 15 },
  lg: { box: 56, font: 20 },
  xl: { box: 64, font: 22 }
};

function Avatar({ initials, size = 'md', bg = 'var(--primary)', color = '#fff' }) {
  const s = avatarSizes[size];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{
        width: s.box,
        height: s.box,
        background: bg,
        color,
        fontSize: s.font,
        fontWeight: 700,
        letterSpacing: '0.02em'
      }}>
      
      {initials}
    </span>);

}

// ---- Yedai brand marks -----------------------------------------------------
function YedaiMark({ size = 24, rounded = false }) {
  // Uses the transparent-bg brand mark
  return (
    <img
      src="assets/yedai-mark.png"
      alt="Yedai"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: rounded ? '22%' : 0,
        display: 'inline-block'
      }} />);


}

function YedaiLogo({ height = 26 }) {
  return (
    <img
      src="assets/yedai-logo.png"
      alt="Yedai"
      style={{ height, width: 'auto', display: 'inline-block', objectFit: "cover" }} />);


}

// ---- VerifiedBadge ---------------------------------------------------------
// variant: 'plain' = checkmark + "Verificado". 'brand' = yedai mark + "Verificado pela Yedai"
function VerifiedBadge({ variant = 'plain' }) {
  if (variant === 'brand') {
    return (
      <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--primary)' }}>
        <YedaiMark size={16} />
        <span style={{ fontSize: '12px', fontWeight: 500 }}>Verificado pela Yedai</span>
      </span>);

  }
  return (
    <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--primary)' }}>
      <span
        className="flex items-center justify-center rounded"
        style={{
          width: '16px',
          height: '16px',
          border: '1.4px solid var(--primary)'
        }}>
        
        <Icon.Check size={10} />
      </span>
      <span style={{ fontSize: '12px', fontWeight: 500 }}>Verificado</span>
    </span>);

}

// ---- Tag -------------------------------------------------------------------
const tagVariants = {
  green: { bg: 'var(--success-bg)', color: 'var(--success-text)' },
  amber: { bg: 'var(--warning-bg)', color: 'var(--warning-text)' },
  blue: { bg: 'var(--primary-bg)', color: 'var(--primary)' }
};

function Tag({ children, variant = 'blue', style = {} }) {
  const v = tagVariants[variant] || tagVariants.blue;
  return (
    <span
      className="inline-flex items-center"
      style={{
        background: v.bg,
        color: v.color,
        fontSize: '11px',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: '999px',
        letterSpacing: '0.01em',
        ...style
      }}>
      
      {children}
    </span>);

}

// ---- StarRating ------------------------------------------------------------
function StarRating({ value = 0, max = 5, interactive = false, size = 36, onChange, gap = 10, color = 'var(--star)', emptyColor = 'var(--border)' }) {
  const [hover, setHover] = useState(0);
  const stars = [];
  const shown = hover || value;
  for (let i = 1; i <= max; i++) {
    const filled = i <= shown;
    stars.push(
      <button
        key={i}
        type="button"
        onClick={() => interactive && onChange && onChange(i)}
        onMouseEnter={() => interactive && setHover(i)}
        onMouseLeave={() => interactive && setHover(0)}
        className={interactive ? 'active:scale-90' : ''}
        style={{
          color: filled ? color : emptyColor,
          padding: 0,
          background: 'transparent',
          cursor: interactive ? 'pointer' : 'default',
          lineHeight: 0
        }}
        aria-label={`${i} estrelas`}>
        
        <Icon.Star size={size} filled={filled} />
      </button>
    );
  }
  return <div className="flex items-center" style={{ gap }}>{stars}</div>;
}

// ---- Screen wrapper (provides fade-in transition) -------------------------
function Screen({ children, className = '', padded = true, style = {} }) {
  // Re-mount key handled by parent (App) per path change.
  return (
    <div
      className={"screen-enter flex-1 flex flex-col " + className}
      style={{ padding: padded ? '8px 20px 24px' : 0, ...style }}>
      
      {children}
    </div>);

}

// ---- ScreenHeader (title + optional BackNav) ------------------------------
function ScreenHeader({ title, back = false, backTo = null }) {
  return (
    <div className="flex flex-col gap-3 pt-1 pb-4">
      {back && <BackNav to={backTo} />}
      <h1 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        {title}
      </h1>
    </div>);

}

// ---- BottomNav (only on /home-scheduled) ----------------------------------
function BottomNav() {
  const navigate = useNavigate();
  const path = usePath();
  const items = [
  { id: 'home', label: 'Home', icon: Icon.Home, active: path === '/home-scheduled' },
  { id: 'svcs', label: 'Serviços', icon: Icon.Grid, active: false },
  { id: 'me', label: 'Perfil', icon: Icon.User, active: false }];

  return (
    <div
      className="absolute left-0 right-0 bottom-0 flex items-stretch justify-around px-6"
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'saturate(180%) blur(20px)',
        borderTop: '1px solid var(--border)',
        height: '76px',
        paddingBottom: '14px'
      }}>
      
      {items.map((it) =>
      <button
        key={it.id}
        onClick={() => navigate('/home-scheduled')}
        className="flex-1 flex flex-col items-center justify-center gap-1 active:scale-95"
        style={{ color: it.active ? 'var(--primary)' : 'var(--muted)' }}>
        
          <it.icon size={24} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.01em' }}>{it.label}</span>
        </button>
      )}
    </div>);

}

// ---- Label (uppercase small) ----------------------------------------------
function Label({ children, className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        ...style
      }}>
      
      {children}
    </div>);

}

// ---- DetailsRow (key/value list with bottom border except last) -----------
function DetailsList({ rows }) {
  return (
    <div>
      {rows.map((r, i) =>
      <div
        key={i}
        className="flex items-center justify-between py-3"
        style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)' }}>
        
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{r.k}</span>
          <span style={r.valueStyle || { fontSize: '13px', fontWeight: r.bold ? 700 : 500 }}>{r.v}</span>
        </div>
      )}
    </div>);

}

// ---- Centered icon halo ---------------------------------------------------
function IconHalo({ children, size = 62, bg = 'var(--primary-bg)', color = 'var(--primary)' }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: bg, color }}>
      
      {children}
    </span>);

}

Object.assign(window, {
  RouterProvider, AppStateProvider,
  useNavigate, useBack, usePath, useAppState,
  MobileShell, StatusBar, BackNav, PrimaryButton, GhostLink, Card,
  Avatar, VerifiedBadge, Tag, StarRating, Screen, ScreenHeader, Label,
  DetailsList, IconHalo, YedaiMark, YedaiLogo
});