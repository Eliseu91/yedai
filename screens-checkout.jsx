// Checkout flow screens: /, /service-select, /scheduling, /confirmation

function CheckoutScreen() {
  const navigate = useNavigate();
  const pro = Mock.professional;

  return (
    <Screen>
      {/* Brand bar */}
      <div className="flex items-center justify-between" style={{ padding: '2px 0 14px' }}>
        <YedaiLogo height={22} />
        <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>
          checkout seguro
        </span>
      </div>

      <ScreenHeader title="Finalizar compra" />

      {/* Product card */}
      <Card className="mb-3">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center shrink-0"
            style={{
              width: 44, height: 44, borderRadius: 10,
              background: 'var(--primary-bg)', color: 'var(--primary)',
            }}
          >
            <Icon.TV size={22} />
          </span>
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.25 }} className="truncate">
              {Mock.product.title}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
              {Mock.product.price} · {Mock.product.delivery}
            </div>
          </div>
        </div>
      </Card>

      {/* Upsell card */}
      <Card>
        <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>
          Instale sua TV hoje
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, marginBottom: 10 }}>
          Profissional disponível em até 24h após a entrega
        </div>

        <div style={{ marginBottom: 12 }}>
          <VerifiedBadge variant="brand" />
        </div>

        <div className="flex items-center gap-3" style={{ paddingTop: 4 }}>
          <Avatar initials={pro.initials} size="md" />
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{pro.name}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>
              {pro.role} · {pro.exp}
            </div>
            <div className="flex items-center gap-1.5" style={{ marginTop: 4 }}>
              <StarRating value={5} size={11} gap={1} color="var(--star)" emptyColor="var(--border)" />
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                {pro.rating} · {pro.services} serv.
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between"
          style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed var(--border)' }}
        >
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>Instalação de TV</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary)' }}>R$ 89,90</span>
        </div>
      </Card>

      <div className="flex-1" />

      <div className="flex flex-col gap-1 mt-4">
        <PrimaryButton onClick={() => navigate('/service-select')}>
          Adicionar instalação
        </PrimaryButton>
        <GhostLink onClick={() => navigate('/home-scheduled')}>Agora não</GhostLink>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function ServiceSelectScreen() {
  const navigate = useNavigate();
  const { selectedServiceId, setSelectedServiceId } = useAppState();

  return (
    <Screen>
      <ScreenHeader title="Escolha o serviço" back />

      <Label style={{ marginTop: -4, marginBottom: 10 }}>Disponível para sua compra</Label>

      <div className="flex flex-col gap-2.5">
        {Mock.services.map(s => {
          const selected = selectedServiceId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedServiceId(s.id)}
              className="text-left active:scale-[0.99]"
              style={{
                background: '#fff',
                border: selected ? '2px solid var(--primary)' : '1px solid var(--border)',
                borderRadius: 14,
                padding: selected ? 13 : 14, // compensate for border width
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 26, height: 26, borderRadius: 7,
                  border: selected ? 'none' : '1.6px solid var(--primary)',
                  background: selected ? 'var(--primary)' : 'transparent',
                  color: selected ? '#fff' : 'var(--primary)',
                }}
              >
                {selected ? <Icon.Check size={14} /> : null}
              </span>
              <div className="flex-1">
                <div style={{ fontSize: 15, fontWeight: 600 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{s.price}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex-1" />

      <div className="mt-4">
        <PrimaryButton onClick={() => navigate('/scheduling')}>Confirmar serviço</PrimaryButton>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

const weekdayPt = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function dateLabelFor(day) {
  // For Jan 2025: Jan 1 2025 was a Wednesday. Day 7 -> Tue.
  // We'll just compute from a known anchor: Jan 5 2025 = Sunday.
  // So weekday index = (day - 5) mod 7 with 0=Sun
  const idx = (((day - 5) % 7) + 7) % 7;
  return `${weekdayPt[idx]}, ${day} jan`;
}

function SchedulingScreen() {
  const navigate = useNavigate();
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useAppState();
  const sch = Mock.scheduling;

  return (
    <Screen>
      <ScreenHeader title="Agendamento" back />

      {/* Calendar */}
      <Card style={{ padding: 14, marginBottom: 16 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 600 }}>{sch.month}</span>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center"
              style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <Icon.ChevronLeft size={12} />
            </span>
            <span
              className="flex items-center justify-center"
              style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <Icon.ChevronRight size={12} />
            </span>
          </div>
        </div>

        {/* Weekday header */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: 6 }}>
          {sch.weekdays.map((d, i) => (
            <div key={i} style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>{d}</div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', rowGap: 6 }}>
          {sch.weeks.flatMap((week, wi) => {
            // Pad first/last weeks to 7
            const padded = [...week];
            while (padded.length < 7) padded.push({ empty: true });
            return padded.map((cell, ci) => {
              if (cell.empty) {
                return <div key={`${wi}-${ci}`} style={{ height: 32 }} />;
              }
              const interactive = !cell.muted && cell.d >= 5 && cell.d <= 11;
              const selected = !cell.muted && selectedDate === cell.d;
              return (
                <div key={`${wi}-${ci}`} className="flex items-center justify-center" style={{ height: 32 }}>
                  <button
                    onClick={() => interactive && setSelectedDate(cell.d)}
                    className={interactive ? 'active:scale-95' : ''}
                    style={{
                      width: 30, height: 30, borderRadius: 999,
                      background: selected ? 'var(--primary)' : 'transparent',
                      color: cell.muted ? 'var(--placeholder)' : (selected ? '#fff' : 'var(--text)'),
                      fontSize: 13, fontWeight: selected ? 700 : 500,
                      cursor: interactive ? 'pointer' : 'default',
                      opacity: !cell.muted && !interactive ? 0.4 : 1,
                    }}
                  >
                    {cell.d}
                  </button>
                </div>
              );
            });
          })}
        </div>
      </Card>

      <Label style={{ marginBottom: 10 }}>Horário disponível</Label>
      <div className="flex flex-wrap gap-2" style={{ marginBottom: 18 }}>
        {sch.times.map(t => {
          const selected = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className="active:scale-95"
              style={{
                padding: selected ? '8px 13px' : '9px 14px',
                border: selected ? '2px solid var(--primary)' : '1px solid var(--border)',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: selected ? 600 : 500,
                color: selected ? 'var(--primary)' : 'var(--text)',
                background: '#fff',
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Summary */}
      <Card>
        <div className="flex items-center gap-3">
          <Avatar initials={Mock.professional.initials} size="sm" />
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{Mock.professional.name}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>
              {dateLabelFor(selectedDate)} · {selectedTime}
            </div>
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--primary)' }}>R$ 89,90</div>
        </div>
      </Card>

      <div className="flex-1" />

      <div className="mt-4">
        <PrimaryButton onClick={() => navigate('/confirmation')}>Confirmar agendamento</PrimaryButton>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function ConfirmationScreen() {
  const navigate = useNavigate();
  const { selectedDate, selectedTime } = useAppState();

  // build end time string e.g. 10:00 -> 12:00
  const [hh, mm] = selectedTime.split(':').map(Number);
  const endStr = `${String(hh + 2).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;

  return (
    <Screen>
      <ScreenHeader title="Pedido confirmado" />

      <div className="flex flex-col items-center text-center" style={{ padding: '20px 0 24px' }}>
        <IconHalo>
          <YedaiMark size={34} />
        </IconHalo>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 14, letterSpacing: '-0.01em' }}>
          Serviço confirmado!
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, maxWidth: 260, lineHeight: 1.4 }}>
          Você receberá um lembrete no dia anterior
        </div>
      </div>

      <Card style={{ marginBottom: 12 }}>
        <div className="flex items-center gap-3">
          <Avatar initials={Mock.professional.initials} size="md" />
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 15, fontWeight: 600 }}>{Mock.professional.name}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
              Instalador · ★ {Mock.professional.rating}
            </div>
          </div>
          <VerifiedBadge />
        </div>
      </Card>

      <Card>
        <DetailsList rows={[
          { k: 'Data',     v: dateLabelFor(selectedDate) },
          { k: 'Horário',  v: `${selectedTime} – ${endStr}` },
          { k: 'Serviço',  v: 'Instalação de TV', valueStyle: { fontSize: 13, fontWeight: 600 } },
          { k: 'Total',    v: 'R$ 89,90', valueStyle: { fontSize: 16, fontWeight: 700, color: 'var(--primary)' } },
        ]} />
      </Card>

      <div className="flex-1" />

      <div className="mt-4 flex flex-col gap-1">
        <PrimaryButton onClick={() => navigate('/home-scheduled')}>Ver meus serviços</PrimaryButton>
        <GhostLink onClick={() => navigate('/')}>Voltar às compras</GhostLink>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  CheckoutScreen, ServiceSelectScreen, SchedulingScreen, ConfirmationScreen, dateLabelFor,
});
