import React, { useState } from "react";

const API = {
  auth: "http://localhost:3001",
  user: "http://localhost:3002",
  product: "http://localhost:3003",
  order: "http://localhost:3004"
};

async function login() {
  const res = await fetch(`${API.auth}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "test", password: "1234" })
  });
  return res.json();
}

async function getProducts() {
  const res = await fetch(`${API.product}/products`);
  return res.json();
}

async function createOrder() {
  const res = await fetch(`${API.order}/orders`, { method: "POST" });
  return res.text();
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FDF8F2;
    --warm-white: #FFFCF8;
    --amber: #E8A030;
    --amber-light: #F5C96A;
    --amber-pale: #FEF3DC;
    --brown: #3D2B1F;
    --brown-mid: #6B4C38;
    --brown-light: #A07858;
    --success: #4CAF7D;
    --error: #E05A5A;
    --border: #EDE0D0;
    --shadow: rgba(61, 43, 31, 0.08);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: var(--cream);
    color: var(--brown);
    min-height: 100vh;
  }

  .layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: 100vh;
  }

  /* SIDEBAR */
  .sidebar {
    background: var(--brown);
    padding: 0;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .sidebar-logo {
    padding: 36px 28px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .sidebar-logo .logo-icon {
    font-size: 32px;
    display: block;
    margin-bottom: 8px;
  }

  .sidebar-logo h2 {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: var(--amber-light);
    letter-spacing: 0.5px;
  }

  .sidebar-logo p {
    font-size: 12px;
    color: var(--brown-light);
    font-weight: 300;
    margin-top: 2px;
  }

  .sidebar-nav {
    padding: 24px 16px;
    flex: 1;
  }

  .nav-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--brown-light);
    padding: 0 12px;
    margin-bottom: 8px;
    margin-top: 20px;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 14px;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.55);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    margin-bottom: 2px;
  }

  .nav-btn:hover {
    background: rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.85);
  }

  .nav-btn.active {
    background: var(--amber);
    color: var(--brown);
    font-weight: 600;
  }

  .nav-btn .nav-icon {
    font-size: 17px;
    width: 20px;
    text-align: center;
  }

  .sidebar-footer {
    padding: 20px 16px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .status-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    margin-right: 6px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .sidebar-footer p {
    font-size: 12px;
    color: var(--brown-light);
  }

  /* MAIN */
  .main {
    background: var(--cream);
    overflow-y: auto;
  }

  .topbar {
    background: var(--warm-white);
    border-bottom: 1px solid var(--border);
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .topbar-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: var(--brown);
  }

  .topbar-title span {
    color: var(--amber);
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .badge {
    background: var(--amber-pale);
    color: var(--brown-mid);
    font-size: 12px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid var(--amber-light);
  }

  .content {
    padding: 36px 40px;
  }

  /* STATS ROW */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 36px;
  }

  .stat-card {
    background: var(--warm-white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 22px 24px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--shadow);
  }

  .stat-card .stat-icon {
    font-size: 24px;
    margin-bottom: 12px;
    display: block;
  }

  .stat-card .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: var(--brown);
    display: block;
  }

  .stat-card .stat-label {
    font-size: 12px;
    color: var(--brown-light);
    font-weight: 500;
    margin-top: 4px;
    letter-spacing: 0.3px;
  }

  /* ACTION CARDS */
  .section-heading {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: var(--brown);
    margin-bottom: 18px;
  }

  .section-heading span {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--brown-light);
    margin-left: 10px;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 36px;
  }

  .action-card {
    background: var(--warm-white);
    border: 1.5px solid var(--border);
    border-radius: 18px;
    padding: 28px 24px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
    text-align: left;
  }

  .action-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--amber);
    transform: scaleX(0);
    transition: transform 0.25s;
    transform-origin: left;
  }

  .action-card:hover::before {
    transform: scaleX(1);
  }

  .action-card:hover {
    border-color: var(--amber-light);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px var(--shadow);
  }

  .action-card.loading {
    pointer-events: none;
    opacity: 0.7;
  }

  .action-card .card-emoji {
    font-size: 32px;
    display: block;
    margin-bottom: 14px;
  }

  .action-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    color: var(--brown);
    margin-bottom: 6px;
  }

  .action-card p {
    font-size: 13px;
    color: var(--brown-light);
    line-height: 1.5;
    font-weight: 300;
  }

  .card-footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--brown-light);
  }

  .card-arrow {
    width: 30px; height: 30px;
    border-radius: 50%;
    background: var(--amber-pale);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
    transition: background 0.2s, transform 0.2s;
  }

  .action-card:hover .card-arrow {
    background: var(--amber);
    transform: translateX(2px);
  }

  .spinner {
    display: inline-block;
    width: 14px; height: 14px;
    border: 2px solid var(--amber-light);
    border-top-color: var(--amber);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* OUTPUT PANEL */
  .output-section {
    background: var(--warm-white);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
  }

  .output-header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--amber-pale);
  }

  .output-header h4 {
    font-size: 13px;
    font-weight: 600;
    color: var(--brown-mid);
    letter-spacing: 0.3px;
  }

  .output-header .output-tag {
    font-size: 11px;
    color: var(--brown-light);
    font-weight: 400;
  }

  .output-body {
    padding: 24px;
    min-height: 120px;
  }

  .output-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    color: var(--brown-light);
    font-size: 13px;
    gap: 8px;
    opacity: 0.6;
  }

  .output-empty .empty-icon { font-size: 28px; }

  pre.output-pre {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: var(--brown);
    line-height: 1.7;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .output-pre.success { color: #2d7a50; }
  .output-pre.error { color: var(--error); }

  .toast {
    position: fixed;
    bottom: 28px; right: 28px;
    background: var(--brown);
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease;
    z-index: 100;
  }

  @keyframes slideUp {
    from { transform: translateY(16px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .divider { height: 1px; background: var(--border); margin: 32px 0; }
`;

export default function App() {
  const [output, setOutput] = useState(null);
  const [outputLabel, setOutputLabel] = useState("");
  const [loading, setLoading] = useState(null);
  const [toast, setToast] = useState(null);
  const [activeNav, setActiveNav] = useState("dashboard");

  const showToast = (msg, icon = "✓") => {
    setToast({ msg, icon });
    setTimeout(() => setToast(null), 3000);
  };

  const run = async (key, label, fn) => {
    setLoading(key);
    setOutputLabel(label);
    try {
      const data = await fn();
      setOutput({ data, isError: false });
      showToast(`${label} successful`, "✓");
    } catch (e) {
      setOutput({ data: `Error: ${e.message}`, isError: true });
      showToast("Request failed", "✕");
    } finally {
      setLoading(null);
    }
  };

  const actions = [
    {
      key: "login",
      emoji: "🔐",
      title: "Authenticate",
      desc: "Sign in via the auth service and receive a JWT token.",
      tag: "POST /login",
      fn: login
    },
    {
      key: "products",
      emoji: "🍔",
      title: "Get Products",
      desc: "Fetch the full product catalogue from the product service.",
      tag: "GET /products",
      fn: getProducts
    },
    {
      key: "order",
      emoji: "📋",
      title: "Create Order",
      desc: "Place a new order through the order service.",
      tag: "POST /orders",
      fn: createOrder
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <span className="logo-icon">🍔</span>
            <h2>BurgerStack</h2>
            <p>Microservices Dashboard</p>
          </div>
          <nav className="sidebar-nav">
            <div className="nav-label">Main</div>
            {[
              { id: "dashboard", icon: "◈", label: "Dashboard" },
              { id: "auth", icon: "🔐", label: "Auth Service" },
              { id: "products", icon: "🍔", label: "Products" },
              { id: "orders", icon: "📋", label: "Orders" },
              { id: "users", icon: "👤", label: "Users" },
            ].map(item => (
              <button
                key={item.id}
                className={`nav-btn ${activeNav === item.id ? "active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <div className="nav-label">System</div>
            {[
              { id: "health", icon: "💚", label: "Health Check" },
              { id: "logs", icon: "📄", label: "Logs" },
            ].map(item => (
              <button
                key={item.id}
                className={`nav-btn ${activeNav === item.id ? "active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="sidebar-footer">
            <p><span className="status-dot" />All services running</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="main">
          <div className="topbar">
            <h1 className="topbar-title">Good morning, <span>Dev</span> 👋</h1>
            <div className="topbar-right">
              <span className="badge">4 services online</span>
              <span className="badge">v1.0.0</span>
            </div>
          </div>

          <div className="content">
            {/* Stats */}
            <div className="stats-row">
              {[
                { icon: "🔐", value: "Auth", label: "Port 3001 · Node.js" },
                { icon: "👤", value: "Users", label: "Port 3002 · FastAPI" },
                { icon: "🍔", value: "Products", label: "Port 3003 · Node.js" },
                { icon: "📋", value: "Orders", label: "Port 3004 · Spring" },
              ].map((s, i) => (
                <div className="stat-card" key={i}>
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-value">{s.value}</span>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <h2 className="section-heading">
              Quick Actions <span>click to test your services</span>
            </h2>
            <div className="actions-grid">
              {actions.map(action => (
                <div
                  key={action.key}
                  className={`action-card ${loading === action.key ? "loading" : ""}`}
                  onClick={() => run(action.key, action.title, action.fn)}
                >
                  <span className="card-emoji">{action.emoji}</span>
                  <h3>{action.title}</h3>
                  <p>{action.desc}</p>
                  <div className="card-footer">
                    <span className="card-tag">{action.tag}</span>
                    <span className="card-arrow">
                      {loading === action.key
                        ? <span className="spinner" />
                        : "→"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider" />

            {/* Output */}
            <h2 className="section-heading">Response Output</h2>
            <div className="output-section">
              <div className="output-header">
                <h4>📡 {outputLabel || "Awaiting request..."}</h4>
                <span className="output-tag">
                  {output ? "Last response" : "No requests yet"}
                </span>
              </div>
              <div className="output-body">
                {!output ? (
                  <div className="output-empty">
                    <span className="empty-icon">🌐</span>
                    <span>Hit one of the actions above to see the response here</span>
                  </div>
                ) : (
                  <pre className={`output-pre ${output.isError ? "error" : "success"}`}>
                    {typeof output.data === "string"
                      ? output.data
                      : JSON.stringify(output.data, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {toast && (
        <div className="toast">
          <span>{toast.icon}</span> {toast.msg}
        </div>
      )}
    </>
  );
}
