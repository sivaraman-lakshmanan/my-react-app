import { useState } from 'react';
import './App.css';

const menuItems = [
  { label: 'Dashboard', icon: '▦' },
  { label: 'Projects', icon: '▰' },
  { label: 'Calendar', icon: '◷' },
  { label: 'Team', icon: '◎' },
];

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [message, setMessage] = useState('');

  function chooseMenuItem(label) {
    setActivePage(label);
    setMenuOpen(false);
    setMobileNavOpen(false);
    setMessage(`${label} selected`);
  }

  return (
    <div className="app-shell">
      {mobileNavOpen && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} />}
      <aside className={`sidebar${mobileNavOpen ? ' sidebar-open' : ''}`}>
        <button className="brand" onClick={() => setActivePage('Dashboard')} aria-label="Orbit home">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">orbit<span className="brand-period">.</span></span>
        </button>

        <button className="workspace-switcher" onClick={() => setMessage('Workspace menu opened')}>
          <span className="workspace-avatar">S</span>
          <span className="workspace-copy"><strong>Studio North</strong><small>Free workspace</small></span>
          <span aria-hidden="true">⌄</span>
        </button>

        <div className="nav-label">MENU</div>
        <nav className="primary-nav" aria-label="Main navigation">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item${activePage === item.label ? ' nav-item-active' : ''}`}
              onClick={() => chooseMenuItem(item.label)}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => chooseMenuItem('Settings')}>
            <span className="nav-icon" aria-hidden="true">⚙</span><span>Settings</span>
          </button>
          <button className="profile-card" onClick={() => setMessage('Signed in as Alex Morgan')}>
            <span className="profile-avatar">AM</span>
            <span className="profile-copy"><strong>Alex Morgan</strong><small>Personal account</small></span>
            <span aria-hidden="true">···</span>
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu-button" aria-label="Open navigation" onClick={() => setMobileNavOpen(true)}>☰</button>
          <div className="breadcrumbs"><span>Studio North</span><span>/</span><strong>{activePage}</strong></div>
          <div className="topbar-actions">
            <label className="search-box"><span aria-hidden="true">⌕</span><input aria-label="Search" placeholder="Search" /></label>
            <div className="menu-anchor">
              <button className="create-button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <span aria-hidden="true">＋</span><span>New item</span><span aria-hidden="true">⌄</span>
              </button>
              {menuOpen && (
                <div className="dropdown" role="menu">
                  <button role="menuitem" onClick={() => chooseMenuItem('Project')}>Project</button>
                  <button role="menuitem" onClick={() => chooseMenuItem('Task')}>Task</button>
                  <button role="menuitem" onClick={() => chooseMenuItem('Event')}>Event</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="page-content">
          <div className="page-heading">
            <div><h1>Good morning, Alex<span className="heading-period">.</span></h1><p>Here’s a quick look at your workspace.</p></div>
            <span className="date-label">Monday, May 19</span>
          </div>

          <section className="summary-grid" aria-label="Workspace summary">
            <article className="summary-card"><span className="summary-label">Open projects</span><strong className="summary-value">08</strong><span className="summary-note">+2 this month</span></article>
            <article className="summary-card"><span className="summary-label">Tasks this week</span><strong className="summary-value">24</strong><span className="summary-note">6 completed</span></article>
            <article className="summary-card"><span className="summary-label">Team members</span><strong className="summary-value">12</strong><span className="summary-note">3 active today</span></article>
          </section>

          <section className="content-grid">
            <article className="content-panel">
              <div className="panel-heading"><h2>Recent projects</h2><button onClick={() => chooseMenuItem('Projects')}>View all</button></div>
              <div className="list-row"><span className="list-mark">▧</span><span className="list-copy"><strong>Website refresh</strong><small>Updated 20 minutes ago</small></span><span className="list-status">In progress</span></div>
              <div className="list-row"><span className="list-mark coral-mark">◈</span><span className="list-copy"><strong>Spring campaign</strong><small>Updated yesterday</small></span><span className="list-status">Planning</span></div>
              <div className="list-row"><span className="list-mark">▤</span><span className="list-copy"><strong>Mobile app</strong><small>Updated Monday</small></span><span className="list-status">In progress</span></div>
            </article>

            <article className="content-panel">
              <div className="panel-heading"><h2>Recent activity</h2><button onClick={() => setMessage('Showing all activity')}>See all</button></div>
              <div className="activity-entry"><span className="activity-avatar">JL</span><div><p><strong>Jamie Lee</strong> shared a project update</p><small>10 minutes ago</small></div></div>
              <div className="activity-entry"><span className="activity-avatar">AK</span><div><p><strong>Aria Kim</strong> completed a task</p><small>1 hour ago</small></div></div>
              <div className="activity-entry"><span className="activity-avatar">MR</span><div><p><strong>Morgan Reed</strong> joined your team</p><small>Yesterday</small></div></div>
            </article>
          </section>
          {message && <div className="menu-message" role="status">{message}</div>}
        </div>
      </main>
    </div>
  );
}

export default App;
