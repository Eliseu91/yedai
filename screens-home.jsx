// Home, professional profile, tracking

function HomeScheduledScreen() {
  const navigate = useNavigate();
  const pro = Mock.professional;
  const sc = Mock.scheduled;

  return (
    <Screen>
      {/* Brand bar */}
      <div className="flex items-center justify-between" style={{ padding: '2px 0 14px' }}>
        <div className="flex items-center gap-2">
          <YedaiMark size={28} />
          <span style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--primary)',
            lineHeight: 1,
          }}>
            yedai
          </span>
        </div>
        <span
          className="flex items-center justify-center"
          style={{
            width: 36, height: 36, borderRadius: 999,
            background: 'var(--surface)', color: 'var(--text)',
          }}
        >
          <Icon.User size={18} />
        </span>
      </div>

      <div style={{ paddingTop: 0, paddingBottom: 14 }}>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 4 }}>
          Bom dia, {Mock.user.name}
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Seu serviço é hoje
        </h1>
      </div>

      {/* Hero gradient card */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
          borderRadius: 16,
          padding: 16,
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 12,
        }}
      >
        {/* subtle decorative pattern */}
        <svg
          width="180" height="180" viewBox="0 0 180 180"
          style={{ position: 'absolute', right: -40, top: -40, opacity: 0.16, pointerEvents: 'none' }}
        >
          <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="1.2" fill="none" />
          <circle cx="90" cy="90" r="55" stroke="white" strokeWidth="1.2" fill="none" />
          <circle cx="90" cy="90" r="30" stroke="white" strokeWidth="1.2" fill="none" />
        </svg>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.22)',
            color: '#fff',
            fontSize: 11,
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: 999,
            letterSpacing: '0.01em',
          }}
        >
          Em breve
        </span>

        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12, letterSpacing: '-0.01em' }}>
          {sc.title}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', marginTop: 4 }}>
          {sc.when}
        </div>

        <div
          className="flex items-center gap-3"
          style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.22)' }}
        >
          <Avatar
            initials={pro.initials}
            size="sm"
            bg="rgba(255,255,255,0.25)"
            color="#fff"
          />
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{pro.name}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.78)' }}>★ {pro.rating} · {pro.services} serviços</div>
          </div>
          <button
            onClick={() => navigate('/professional-profile')}
            className="active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.20)',
              color: '#fff',
              fontSize: 12,
              fontWeight: 600,
              padding: '7px 14px',
              borderRadius: 999,
            }}
          >
            Ver perfil
          </button>
        </div>
      </div>

      {/* Info Card -> tracking */}
      <Card onClick={() => navigate('/tracking')} className="cursor-pointer active:scale-[0.99]" style={{ cursor: 'pointer' }}>
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center shrink-0"
            style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'var(--primary-bg)', color: 'var(--primary)',
            }}
          >
            <Icon.Clock size={20} />
          </span>
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              Profissional chega em {sc.eta}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
              Acompanhe em tempo real
            </div>
          </div>
          <span style={{ color: 'var(--muted)' }}>
            <Icon.ChevronRight size={14} />
          </span>
        </div>
      </Card>

      {/* Secondary card */}
      <div style={{ marginTop: 10 }}>
        <Card style={{ padding: 14 }}>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 14, fontWeight: 600 }}>Histórico de serviços</span>
            <span style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500 }}>3 anteriores ›</span>
          </div>
        </Card>
      </div>

      {/* In-progress shortcut (handy for demo flow) */}
      <div style={{ marginTop: 10 }}>
        <Card onClick={() => navigate('/service-in-progress')} style={{ cursor: 'pointer' }}>
          <div className="flex items-center justify-between">
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Serviço em andamento</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Toque para acompanhar</div>
            </div>
            <Tag variant="amber">● Ao vivo</Tag>
          </div>
        </Card>
      </div>

      <div className="flex-1" />
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function ProfessionalProfileScreen() {
  const pro = Mock.professional;

  return (
    <Screen>
      <ScreenHeader title="Perfil do profissional" back />

      <div className="flex flex-col items-center text-center" style={{ paddingBottom: 16 }}>
        <Avatar initials={pro.initials} size="xl" />
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 12, letterSpacing: '-0.01em' }}>
          {pro.name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
          Montagem & instalação
        </div>
        <div className="flex items-center gap-2.5" style={{ marginTop: 10 }}>
          <VerifiedBadge />
          <Tag variant="green">Disponível hoje</Tag>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
        {[
          { v: pro.ratingHigh, k: 'Avaliação' },
          { v: pro.services,   k: 'Serviços'  },
          { v: pro.yearsOnPlatform, k: 'Plataforma' },
        ].map((s, i) => (
          <Card key={i} style={{ padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--primary)' }}>{s.v}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.k}</div>
          </Card>
        ))}
      </div>

      {/* Reviews */}
      <Card>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Avaliações recentes</div>
        {Mock.reviews.map((r, i) => (
          <div key={i}>
            {i > 0 && <div style={{ borderTop: '1px solid #F0F0F8', margin: '12px 0' }} />}
            <div style={{ fontSize: 13, lineHeight: 1.45 }}>{r.quote}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{r.author}</div>
          </div>
        ))}
      </Card>

      <div className="flex-1" />

      <div className="mt-4">
        <PrimaryButton onClick={() => { /* non-functional */ }}>
          Entrar em contato
        </PrimaryButton>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function MapStub() {
  return (
    <div
      style={{
        height: 200,
        background: '#E8EEFF',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <svg viewBox="0 0 390 200" preserveAspectRatio="none" width="100%" height="100%">
        {/* major horizontal/vertical streets */}
        <g stroke="#C8D0F0" strokeWidth="6" strokeLinecap="round">
          <line x1="0" y1="40" x2="390" y2="40" />
          <line x1="0" y1="105" x2="390" y2="105" />
          <line x1="0" y1="165" x2="390" y2="165" />
          <line x1="80" y1="0" x2="80" y2="200" />
          <line x1="200" y1="0" x2="200" y2="200" />
          <line x1="320" y1="0" x2="320" y2="200" />
        </g>
        {/* thinner streets */}
        <g stroke="#D6DCF2" strokeWidth="2">
          <line x1="0" y1="72" x2="390" y2="72" />
          <line x1="0" y1="135" x2="390" y2="135" />
          <line x1="140" y1="0" x2="140" y2="200" />
          <line x1="260" y1="0" x2="260" y2="200" />
        </g>
        {/* park-ish block */}
        <rect x="208" y="113" width="50" height="44" rx="6" fill="#D1E7D9" opacity="0.7" />
        {/* river-ish curve */}
        <path d="M-10 175 C 60 168, 120 184, 200 174 S 360 168, 400 178" stroke="#BFD0F0" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* dashed route */}
        <path
          d="M50 150 Q 110 130, 140 105 T 230 80 T 320 60"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
          className="map-path"
        />

        {/* destination pin (outlined with star) */}
        <g transform="translate(320 60)">
          <circle r="14" fill="#fff" stroke="var(--primary)" strokeWidth="2" />
          <path d="M0 -6 L1.8 -1.8 L6.2 -1.4 L2.8 1.6 L3.8 6 L0 3.6 L-3.8 6 L-2.8 1.6 L-6.2 -1.4 L-1.8 -1.8 Z"
            fill="var(--star)" stroke="none" />
        </g>

        {/* pro pin */}
        <g transform="translate(50 150)">
          <circle r="18" fill="var(--primary)" />
          <circle r="22" fill="var(--primary)" opacity="0.18" />
          <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="-apple-system, system-ui">
            FM
          </text>
        </g>
      </svg>
    </div>
  );
}

function TrackingScreen() {
  return (
    <MobileShell>
      <div className="screen-enter flex-1 flex flex-col">
        {/* Top bar (over white) */}
        <div style={{ padding: '4px 20px 10px' }}>
          <BackNav to="/home-scheduled" />
        </div>

        <MapStub />

        <div style={{ padding: '14px 20px 0' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Fabio a caminho
          </h1>
        </div>

        <div style={{ padding: '14px 20px 0' }}>
          <Card>
            <div className="flex items-center gap-3">
              <Avatar initials={Mock.professional.initials} size="md" />
              <div className="flex-1">
                <div style={{ fontSize: 14, fontWeight: 600 }}>Chega em aproximadamente</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary)', marginTop: 2, letterSpacing: '-0.01em' }}>
                  22 min
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div style={{ padding: '10px 20px 0' }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Card>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Distância</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>3.2 km</div>
            </Card>
            <Card>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Status</div>
              <div style={{ marginTop: 6 }}>
                <Tag variant="green">Em trânsito</Tag>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex-1" />

        <div style={{ padding: '16px 20px 24px' }}>
          <PrimaryButton onClick={() => { /* non-functional */ }}>
            <span className="inline-flex items-center gap-2">
              <Icon.Send size={15} />
              Enviar mensagem
            </span>
          </PrimaryButton>
        </div>
      </div>
    </MobileShell>
  );
}

Object.assign(window, { HomeScheduledScreen, ProfessionalProfileScreen, TrackingScreen, MapStub });
