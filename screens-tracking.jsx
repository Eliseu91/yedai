// Service-in-progress + service-complete

function ServiceInProgressScreen() {
  const navigate = useNavigate();
  const ip = Mock.inProgress;
  const { progressStep, setProgressStep } = useAppState();

  // Progress percentage: completed steps + half credit for the in-progress one
  const percent = Math.min(100, Math.round(((progressStep + 0.4) / ip.steps.length) * 100));

  return (
    <Screen>
      <div style={{ paddingTop: 4 }}>
        <Tag variant="amber">● Em andamento</Tag>
      </div>

      <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 12 }}>
        Montagem em progresso
      </h1>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, marginBottom: 14 }}>
        Iniciado às {ip.startedAt} · {ip.estimate}
      </div>

      {/* Progress card */}
      <Card>
        <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Progresso</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>{percent}%</span>
        </div>

        <div style={{
          background: '#F0F0F8',
          borderRadius: 999,
          height: 6,
          overflow: 'hidden',
          marginBottom: 16,
        }}>
          <div
            className="progress-fill"
            style={{
              width: `${percent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--primary), var(--primary-light))',
              borderRadius: 999,
            }}
          />
        </div>

        {/* Checklist */}
        <div className="flex flex-col" style={{ gap: 10 }}>
          {ip.steps.map((label, i) => {
            const done = i < progressStep;
            const current = i === progressStep;
            return (
              <button
                key={i}
                onClick={() => {
                  // tap a step to mark it done (demo nicety)
                  if (i <= progressStep && i < ip.steps.length - 1) {
                    setProgressStep(i + 1);
                  }
                }}
                className="flex items-center gap-3 text-left"
                style={{ background: 'transparent', padding: 0 }}
              >
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 22, height: 22, borderRadius: 999,
                    background: done ? 'var(--primary)' : (current ? 'transparent' : 'transparent'),
                    border: done
                      ? 'none'
                      : (current ? '2px solid var(--primary)' : '2px solid #E4E4EE'),
                    color: '#fff',
                    position: 'relative',
                  }}
                >
                  {done && <Icon.Check size={12} />}
                  {current && (
                    <span style={{
                      width: 8, height: 8, borderRadius: 999, background: 'var(--primary)',
                    }} />
                  )}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: current ? 700 : 500,
                    color: done ? 'var(--muted)' : (current ? 'var(--text)' : '#B8B8C9'),
                    textDecoration: done ? 'line-through' : 'none',
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Professional card */}
      <div style={{ marginTop: 12 }}>
        <Card>
          <div className="flex items-center gap-3">
            <Avatar initials={Mock.professional.initials} size="sm" />
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 14, fontWeight: 600 }}>{Mock.professional.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                No local desde {ip.startedAt}
              </div>
            </div>
            <span
              className="flex items-center justify-center"
              style={{
                width: 36, height: 36, borderRadius: 999,
                border: '1px solid var(--border)', color: 'var(--primary)',
              }}
            >
              <Icon.Phone size={16} />
            </span>
          </div>
        </Card>
      </div>

      <div className="flex-1" />

      <div className="mt-4">
        <PrimaryButton onClick={() => navigate('/service-complete')}>
          Finalizar serviço
        </PrimaryButton>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function ServiceCompleteScreen() {
  const navigate = useNavigate();
  const c = Mock.completed;

  return (
    <Screen>
      <ScreenHeader title="Serviço concluído" />

      <div className="flex flex-col items-center text-center" style={{ padding: '12px 0 22px' }}>
        <IconHalo>
          <YedaiMark size={34} />
        </IconHalo>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 14, letterSpacing: '-0.01em' }}>
          Tudo pronto!
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, maxWidth: 280, lineHeight: 1.4 }}>
          Fabio finalizou o serviço. Como foi a experiência?
        </div>
      </div>

      <Card>
        <DetailsList rows={[
          { k: 'Serviço',        v: c.service },
          { k: 'Duração',        v: c.duration },
          { k: 'Profissional',   v: c.pro },
          { k: 'Total cobrado',  v: c.total, valueStyle: { fontSize: 14, fontWeight: 700, color: 'var(--primary)' } },
        ]} />
      </Card>

      <div className="flex-1" />

      <div className="mt-4 flex flex-col gap-1">
        <PrimaryButton onClick={() => navigate('/review')}>Avaliar Fabio</PrimaryButton>
        <GhostLink onClick={() => navigate('/home-scheduled')}>Pular por agora</GhostLink>
      </div>
    </Screen>
  );
}

Object.assign(window, { ServiceInProgressScreen, ServiceCompleteScreen });
