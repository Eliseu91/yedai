// Router root for Yedai

const ROUTES = {
  '/':                        { Comp: () => <CheckoutScreen />,             shell: true,  bottomNav: false },
  '/service-select':          { Comp: () => <ServiceSelectScreen />,        shell: true,  bottomNav: false },
  '/scheduling':              { Comp: () => <SchedulingScreen />,           shell: true,  bottomNav: false },
  '/confirmation':            { Comp: () => <ConfirmationScreen />,         shell: true,  bottomNav: false },
  '/home-scheduled':          { Comp: () => <HomeScheduledScreen />,        shell: true,  bottomNav: true  },
  '/professional-profile':    { Comp: () => <ProfessionalProfileScreen />,  shell: true,  bottomNav: false },
  '/tracking':                { Comp: () => <TrackingScreen />,             shell: false, bottomNav: false }, // self-shelled (map full-bleed)
  '/service-in-progress':     { Comp: () => <ServiceInProgressScreen />,    shell: true,  bottomNav: false },
  '/service-complete':        { Comp: () => <ServiceCompleteScreen />,      shell: true,  bottomNav: false },
  '/review':                  { Comp: () => <ReviewScreen />,               shell: true,  bottomNav: false },
  '/review-sent':             { Comp: () => <ReviewSentScreen />,           shell: true,  bottomNav: false },
};

function Router() {
  const path = usePath();
  const route = ROUTES[path] || ROUTES['/'];
  const Comp = route.Comp;

  // Key remounts the screen for the entry transition.
  if (route.shell) {
    return (
      <MobileShell bottomNav={route.bottomNav}>
        <div key={path} style={{ display: 'contents' }}>
          <Comp />
        </div>
      </MobileShell>
    );
  }
  return <div key={path} style={{ display: 'contents' }}><Comp /></div>;
}

function App() {
  return (
    <RouterProvider initial="/">
      <AppStateProvider>
        <Router />
      </AppStateProvider>
    </RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
