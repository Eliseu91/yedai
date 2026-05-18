// Review + ReviewSent

function ReviewScreen() {
  const navigate = useNavigate();
  const { rating, setRating, reviewText, setReviewText } = useAppState();

  const ratingLabel = Mock.ratingLabels[rating] || '';

  return (
    <Screen>
      <ScreenHeader title="Avalie o serviço" back />

      <div className="flex flex-col items-center text-center" style={{ paddingBottom: 18 }}>
        <Avatar initials={Mock.professional.initials} size="lg" />
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12, letterSpacing: '-0.01em' }}>
          {Mock.professional.name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
          Montagem de móveis
        </div>
      </div>

      <div className="text-center" style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>
          Como você avalia o serviço?
        </div>
      </div>

      <div className="flex justify-center">
        <StarRating
          value={rating}
          interactive
          onChange={setRating}
          size={36}
          gap={10}
        />
      </div>

      <div className="text-center" style={{ marginTop: 10, marginBottom: 16, minHeight: 22 }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--primary)',
            background: 'var(--primary-bg)',
            padding: '4px 12px',
            borderRadius: 999,
            opacity: rating ? 1 : 0,
            transition: 'opacity 200ms',
          }}
        >
          {ratingLabel}
        </span>
      </div>

      <textarea
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
        placeholder="Conte como foi a experiência (opcional)..."
        rows={3}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: 12,
          minHeight: 80,
          width: '100%',
          fontSize: 13,
          resize: 'none',
          color: 'var(--text)',
          lineHeight: 1.45,
        }}
      />

      <div className="flex-1" />

      <div className="mt-4 flex flex-col gap-1">
        <PrimaryButton onClick={() => navigate('/review-sent')}>Enviar avaliação</PrimaryButton>
        <GhostLink onClick={() => navigate('/home-scheduled')}>Pular</GhostLink>
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function ReviewSentScreen() {
  const navigate = useNavigate();
  const { rating, reviewText } = useAppState();

  // Build a star string of length `rating`
  const stars = '★'.repeat(rating || 0);

  return (
    <Screen>
      <ScreenHeader title="Obrigado!" />

      <div className="flex flex-col items-center text-center" style={{ padding: '12px 0 22px' }}>
        <IconHalo>
          <YedaiMark size={34} />
        </IconHalo>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 14, letterSpacing: '-0.01em' }}>
          Avaliação enviada!
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, maxWidth: 280, lineHeight: 1.4 }}>
          Sua opinião ajuda outros clientes a escolher bem.
        </div>
      </div>

      <Card>
        <div className="flex items-center gap-3">
          <Avatar initials={Mock.professional.initials} size="md" />
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 15, fontWeight: 600 }}>{Mock.professional.name}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
              Sua avaliação: <span style={{ color: 'var(--star)' }}>{stars}</span>
            </div>
          </div>
        </div>

        {reviewText && reviewText.trim() && (
          <div
            style={{
              marginTop: 12,
              background: 'var(--surface)',
              borderRadius: 10,
              padding: 10,
            }}
          >
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 3 }}>Seu comentário</div>
            <div style={{ fontSize: 13, lineHeight: 1.45 }}>{reviewText}</div>
          </div>
        )}
      </Card>

      <div style={{ marginTop: 10 }}>
        <Card onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="flex items-center gap-3">
            <span
              className="flex items-center justify-center shrink-0"
              style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--primary-bg)', color: 'var(--primary)',
              }}
            >
              <Icon.Plus size={18} />
            </span>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 13, fontWeight: 600 }}>Agendar novo serviço</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                Com Fabio ou outro profissional
              </div>
            </div>
            <span style={{ color: 'var(--muted)' }}>
              <Icon.ChevronRight size={14} />
            </span>
          </div>
        </Card>
      </div>

      <div className="flex-1" />

      <div className="mt-4">
        <PrimaryButton onClick={() => navigate('/home-scheduled')}>Voltar ao início</PrimaryButton>
      </div>
    </Screen>
  );
}

Object.assign(window, { ReviewScreen, ReviewSentScreen });
