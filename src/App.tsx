import { useState, useRef } from 'react';

export default function App() {
  const [offerText, setOfferText] = useState('chicken for sale');
  const [brandVoice, setBrandVoice] = useState('Local/community');
  const [languageBlend, setLanguageBlend] = useState('English + isiZulu flavor');
  const [loading, setLoading] = useState(false);
  const [campaignOutput, setCampaignOutput] = useState('');
  
  // New states for Photo & Voice Note features
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<any>(null);

  // Handle Photo Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Voice Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        // Stop all audio tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert('Microphone access denied or not available.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const generateCampaign = () => {
    setLoading(true);
    setTimeout(() => {
      let output = `🔥 MZANSI WEEKLY CAMPAIGN DROP 🔥\n\n`;
      output += `📌 Focus: "${offerText}"\n`;
      output += `🗣️ Vibe: ${brandVoice} (${languageBlend})\n`;
      if (selectedImage) output += `📸 [Attached Visual Product Asset Included]\n`;
      if (audioUrl) output += `🎙️ [Voice Note Brief Attached (${recordingTime}s)]\n\n`;
      
      output += `--- POST 1: WHATSAPP BROADCAST ---\n`;
      output += `Shaping up the week right! Fresh stock available now: ${offerText}. First come, first served. Hit us up on WhatsApp to lock in your order before it's gone! 🇿🇦✨\n\n`;
      
      output += `--- POST 2: SOCIALS & FACEBOOK ---\n`;
      output += `Mzansi, we are live and ready! Get your ${offerText} sorted today with proper local pricing and instant delivery/pickup options. Don't compromise on quality! 🚀💼`;

      setCampaignOutput(output);
      setLoading(false);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#ffffff' }}>CONTENT MACHINE</h1>
              <span style={{ backgroundColor: '#f59e0b', color: '#020617', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>SA MVP</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: '4px 0 0 0' }}>Your business's content department — built for Mzansi</p>
          </div>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', padding: '6px 14px', borderRadius: '8px', fontSize: '13px' }}>
            Plan: <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Growth (R199/mo)</span>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          
          {/* Left Column: Input Panel */}
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginTop: 0, marginBottom: '16px', color: '#f8fafc' }}>
              ✨ What are we promoting today?
            </h3>

            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#94a3b8' }}>
              Offer, Promotion, or Raw Idea
            </label>
            <textarea 
              value={offerText}
              onChange={(e) => setOfferText(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '12px', backgroundColor: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
            />

            {/* Hidden file input for photo upload */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              style={{ display: 'none' }} 
            />

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', gap: '12px', margin: '16px 0' }}>
              <button 
                onClick={() => fileInputRef.current?.click()}
                style={{ flex: 1, padding: '10px', backgroundColor: selectedImage ? '#065f46' : '#1e293b', color: selectedImage ? '#6ee7b7' : '#cbd5e1', border: '1px solid #334155', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
              >
                📸 {selectedImage ? 'Photo Attached ✅' : 'Add Photo'}
              </button>

              <button 
                onClick={isRecording ? stopRecording : startRecording}
                style={{ flex: 1, padding: '10px', backgroundColor: isRecording ? '#991b1b' : (audioUrl ? '#065f46' : '#1e293b'), color: isRecording ? '#fca5a5' : (audioUrl ? '#6ee7b7' : '#cbd5e1'), border: '1px solid #334155', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
              >
                🎙️ {isRecording ? `Recording (${recordingTime}s)... Click to Stop` : (audioUrl ? `Voice Note Saved (${recordingTime}s) ✅` : 'Voice Note')}
              </button>
            </div>

            {/* Preview Selected Image */}
            {selectedImage && (
              <div style={{ marginBottom: '16px', position: 'relative', display: 'inline-block' }}>
                <img src={selectedImage} alt="Preview" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #334155' }} />
                <button 
                  onClick={() => setSelectedImage(null)}
                  style={{ position: 'absolute', top: '-6px', right: '-6px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '50%', width: '20px', height: '20px', fontSize: '11px', cursor: 'pointer' }}
                >
                  ×
                </button>
              </div>
            )}

            {/* Preview Recorded Audio */}
            {audioUrl && !isRecording && (
              <div style={{ marginBottom: '16px', padding: '8px 12px', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <audio controls src={audioUrl} style={{ height: '32px', width: '80%' }} />
                <button 
                  onClick={() => { setAudioUrl(null); setAudioBlob(null); }}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
                >
                  Delete
                </button>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#94a3b8' }}>Brand Voice</label>
                <select 
                  value={brandVoice} 
                  onChange={(e) => setBrandVoice(e.target.value)}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="Local/community">Local/community</option>
                  <option value="Hustle & Bold">Hustle & Bold</option>
                  <option value="Professional SME">Professional SME</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#94a3b8' }}>Language Blend</label>
                <select 
                  value={languageBlend} 
                  onChange={(e) => setLanguageBlend(e.target.value)}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="English + isiZulu flavor">English + isiZulu flavor</option>
                  <option value="English + Sesotho vibe">English + Sesotho vibe</option>
                  <option value="Pure English">Pure English</option>
                </select>
              </div>
            </div>

            <button 
              onClick={generateCampaign}
              disabled={loading}
              style={{ width: '100%', padding: '14px', backgroundColor: '#f59e0b', color: '#020617', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              {loading ? 'Machine is cooking...' : '🚀 GENERATE WEEKLY CAMPAIGN'}
            </button>

            {/* Quota */}
            <div style={{ marginTop: '24px', borderTop: '1px solid #1e293b', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', color: '#94a3b8' }}>
                <span>Generations Left This Month</span>
                <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>84 / 100</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '84%', height: '100%', backgroundColor: '#f59e0b' }}></div>
              </div>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', margin: '8px 0 0 0' }}>
                ⚡ Optimized for WhatsApp broadcasts, local EFT/cash terms, and load-shedding resilient scheduling.
              </p>
            </div>

          </div>

          {/* Right Column: Output Panel */}
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginTop: 0, marginBottom: '16px', color: '#f8fafc' }}>
              GENERATED CAMPAIGN OUTPUT
            </h3>

            <div style={{ flex: 1, backgroundColor: '#1e293b', border: '1px dashed #334155', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: campaignOutput ? 'flex-start' : 'center', alignItems: campaignOutput ? 'stretch' : 'center', textAlign: campaignOutput ? 'left' : 'center', minHeight: '350px', maxHeight: '500px', overflowY: 'auto' }}>
              {campaignOutput ? (
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '13px', color: '#e2e8f0', fontFamily: 'inherit', lineHeight: '1.6' }}>
                  {campaignOutput}
                </pre>
              ) : (
                <div>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
                    Click <strong>Generate Weekly Campaign</strong> to watch the machine build your local content stack.
                  </p>
                </div>
              )}
            </div>

            {campaignOutput && (
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(campaignOutput);
                  alert('Campaign copied to clipboard! ✅');
                }}
                style={{ marginTop: '16px', padding: '12px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
              >
                Copy Full Campaign 📋
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}