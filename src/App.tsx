import { useState } from 'react';

export default function App() {
  const [businessType, setBusinessType] = useState('Shisa Nyama & Grill');
  const [promoText, setPromoText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      let generated = '';
      if (businessType.includes('Shisa Nyama')) {
        generated = "🔥 Ayoba! Weekend is sorted at our spot! Come through for the juiciest braai meat, ice-cold drinks, and proper kasi vibes. Table bookings open now—don't miss out! 🥩🍻 #ShisaNyama #MzansiVibes #WeekendSpecial";
      } else if (businessType.includes('Taxi')) {
        generated = "🚕 Morning Gauteng! Beat the traffic and ride safely with us today. Reliable, fast, and on time. DM or WhatsApp us to lock in your daily seat! 🚀 #CommuterLife #GautengTransport #SafeTrip";
      } else {
        generated = "💥 Sharp-sharp Mzansi! Level up your brand with our exclusive services designed to get you paid. Quality guaranteed, local pricing. Hit us up today! 🇿🇦 #LocalIsLekker #BusinessGrowth";
      }
      setPromoText(generated);
      setLoading(false);
      setCopied(false);
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ backgroundColor: '#1e293b', color: '#f59e0b', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Mzansi AI Engine 🇿🇦
          </span>
          <h1 style={{ fontSize: '28px', fontWeight: '800', marginTop: '12px', color: '#ffffff' }}>Content Machine SA</h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '4px' }}>Generate high-converting local marketing copy in seconds.</p>
        </div>

        {/* Card */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#cbd5e1' }}>
            Select Business Vibe:
          </label>
          <select 
            value={businessType} 
            onChange={(e) => setBusinessType(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', fontSize: '14px', marginBottom: '20px', outline: 'none' }}
          >
            <option value="Shisa Nyama & Grill">🔥 Shisa Nyama & Lifestyle Spot</option>
            <option value="Taxi & Transport">🚕 Commuter Transport & Services</option>
            <option value="General Hustle">💼 General Local Business / SME</option>
          </select>

          <button 
            onClick={generateContent}
            disabled={loading}
            style={{ width: '100%', padding: '12px', backgroundColor: '#f59e0b', color: '#020617', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
          >
            {loading ? 'Cooking up copy...' : 'Generate Mzansi Post 🚀'}
          </button>

          {promoText && (
            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5', color: '#e2e8f0' }}>{promoText}</p>
              
              <button 
                onClick={copyToClipboard}
                style={{ marginTop: '12px', padding: '8px 16px', backgroundColor: copied ? '#10b981' : '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
              >
                {copied ? 'Copied to Clipboard! ✅' : 'Copy Caption 📋'}
              </button>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div style={{ textAlign: 'center', marginTop: '32px', color: '#64748b', fontSize: '12px' }}>
          <p style={{ margin: 0 }}>Ayoba! Make this weekend count for your business.</p>
        </div>

      </div>
    </div>
  );
}