import { useState, useEffect } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('Weekend special: R65 chicken burger + free delivery within 5km');
  const [brandVoice, setBrandVoice] = useState('Local/community');
  const [language, setLanguage] = useState('English + isiZulu flavor');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1200);
  };

  const handleCopyAll = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* Top Navigation */}
      <header style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#090d16', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'between', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', padding: '8px 12px', borderRadius: '12px', color: '#020617', fontWeight: 900, boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)' }}>
            🇿🇦
          </div>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: '18px', color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              CONTENT MACHINE <span style={{ fontSize: '11px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '2px 8px', borderRadius: '9999px', fontWeight: 600 }}>SA MVP</span>
            </h1>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Your business's content department — built for Mzansi</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8', backgroundColor: '#1e293b', padding: '6px 12px', borderRadius: '8px', border: '1px solid #334155' }}>
            Plan: <strong style={{ color: '#f59e0b' }}>Growth (R199/mo)</strong>
          </span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f59e0b', fontWeight: 'bold', color: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
            TS
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px', display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '32px' }}>
        
        {/* Left Column: Input Panel */}
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', position: 'relative', overflow: 'hidden' }}>
            
            <h2 style={{ fontSize: '15px', fontWeight: 'bold', color: '#ffffff', marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✨ What are we promoting today?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#94a3b8', marginBottom: '6px' }}>Offer, Promotion, or Raw Idea</label>
                <textarea 
                  rows={3}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '12px', fontSize: '14px', color: '#f1f5f9', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" style={{ flex: 1, backgroundColor: '#020617', border: '1px solid #1e293b', fontSize: '12px', padding: '10px', borderRadius: '8px', color: '#cbd5e1', cursor: 'pointer' }}>
                  📷 Add Photo
                </button>
                <button type="button" style={{ flex: 1, backgroundColor: '#020617', border: '1px solid #1e293b', fontSize: '12px', padding: '10px', borderRadius: '8px', color: '#cbd5e1', cursor: 'pointer' }}>
                  🎤 Voice Note
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#94a3b8', marginBottom: '6px' }}>Brand Voice</label>
                  <select 
                    value={brandVoice} 
                    onChange={(e) => setBrandVoice(e.target.value)}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#f1f5f9', outline: 'none' }}
                  >
                    <option>Local/community</option>
                    <option>Professional</option>
                    <option>Street / Mzansi</option>
                    <option>Funny & Playful</option>
                    <option>Luxury / Premium</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#94a3b8', marginBottom: '6px' }}>Language Blend</label>
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#f1f5f9', outline: 'none' }}
                  >
                    <option>English + isiZulu flavor</option>
                    <option>Pure English (SA Pricing)</option>
                    <option>English + Tsotsitaal</option>
                    <option>English + Setswana</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                style={{ width: '100%', marginTop: '8px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#020617', fontWeight: 'bold', padding: '14px', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)', fontSize: '14px', opacity: loading ? 0.6 : 1 }}
              >
                {loading ? 'Cooking up Mzansi content...' : '⚡ GENERATE WEEKLY CAMPAIGN'}
              </button>
            </div>
          </div>

          <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '16px', padding: '20px', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'between', color: '#94a3b8' }}>
              <span>Generations Left This Month</span>
              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>84 / 100</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#020617', height: '8px', borderRadius: '9999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
              <div style={{ backgroundColor: '#f59e0b', height: '100%', width: '84%', borderRadius: '9999px' }}></div>
            </div>
            <p style={{ color: '#64748b', margin: 0, lineHeight: 1.4 }}>✨ Optimized for WhatsApp broadcasts, local EFT/cash terms, and load-shedding resilient scheduling.</p>
          </div>
        </div>

        {/* Right Column: Output Dashboard */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', margin: 0 }}>
              Generated Campaign Output
            </h3>
            {generated && (
              <button 
                onClick={handleCopyAll}
                style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.2)', fontSize: '12px', fontWeight: 600, padding: '6px 12px', borderRadius: '8px', cursor: 'pointer' }}
              >
                {copied ? '✅ Copied Everything!' : '📋 Copy All Output'}
              </button>
            )}
          </div>

          {!generated && !loading && (
            <div style={{ backgroundColor: 'rgba(9, 13, 22, 0.4)', border: '2px dashed #1e293b', borderRadius: '16px', padding: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#090d16', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid #1e293b' }}>
                🚀
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Click <strong>Generate Weekly Campaign</strong> to watch the machine build your local content stack.</p>
            </div>
          )}

          {loading && (
            <div style={{ backgroundColor: 'rgba(9, 13, 22, 0.4)', border: '1px solid #1e293b', borderRadius: '16px', padding: '64px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', border: '3px solid #f59e0b', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Analyzing promo details, pricing in Rands, and formatting for WhatsApp & TikTok...</p>
            </div>
          )}

          {generated && !loading && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* TikTok / Reel Card */}
              <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '4px 10px', borderRadius: '6px' }}>
                    🎬 TikTok / Instagram Reel Script
                  </span>
                  <button style={{ fontSize: '12px', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}>Copy script</button>
                </div>
                <div style={{ backgroundColor: '#020617', padding: '14px', borderRadius: '8px', border: '1px solid rgba(30, 41, 59, 0.8)', fontSize: '12px', fontFamily: 'monospace', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#f59e0b' }}>HOOK (0-3s):</strong> "Pretoria, if your weekend plans don't include an R65 chicken burger with free delivery, we need to talk..."</p>
                  <p style={{ margin: 0 }}><strong style={{ color: '#64748b' }}>VISUAL:</strong> Quick close-up of juice dripping, sliding the burger into a brown paper delivery bag.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: '#64748b' }}>CTA:</strong> "WhatsApp us right now to lock in your order before load-shedding hits!"</p>
                </div>
              </div>

              {/* WhatsApp Status Card */}
              <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '4px 10px', borderRadius: '6px' }}>
                    💬 WhatsApp Status Blast (5-part)
                  </span>
                  <button style={{ fontSize: '12px', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}>Copy status</button>
                </div>
                <div style={{ backgroundColor: '#020617', padding: '14px', borderRadius: '8px', border: '1px solid rgba(30, 41, 59, 0.8)', fontSize: '12px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ margin: 0 }}>🔥 <strong>Status 1/5:</strong> Weekend special is officially live! R65 chicken burger. Yes, you read that right. 🍔👇</p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '11px' }}>+ 4 more statuses generated with payment/EFT details and delivery radius rules.</p>
                </div>
              </div>

              {/* Instagram / Facebook Caption */}
              <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(236, 72, 153, 0.1)', color: '#f472b6', border: '1px solid rgba(236, 72, 153, 0.2)', padding: '4px 10px', borderRadius: '6px' }}>
                    🌐 Instagram & Facebook Caption + Hashtags
                  </span>
                  <button style={{ fontSize: '12px', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}>Copy caption</button>
                </div>
                <div style={{ backgroundColor: '#020617', padding: '14px', borderRadius: '8px', border: '1px solid rgba(30, 41, 59, 0.8)', fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <p style={{ margin: 0 }}>Ayoba! Make this weekend count. 🍗🔥 Get our legendary crispy chicken burger for only R65. Free delivery within 5km radius so you don't even have to leave the couch.</p>
                  <p style={{ margin: '8px 0 0 0', color: '#f59e0b', fontFamily: 'monospace' }}>Order via WhatsApp link in bio. EFT & SnapScan accepted. 🇿🇦</p>
                  <p style={{ margin: '8px 0 0 0', color: '#64748b', fontFamily: 'monospace', fontSize: '11px' }}>#MzansiEats #ChickenBurger #WeekendVibes #SupportLocalSA #PretoriaEats</p>
                </div>
              </div>

            </div>
          )}

        </div>

      </main>
    </div>
  );
}