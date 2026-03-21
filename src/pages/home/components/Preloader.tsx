import { useState, useEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [text, setText] = useState('');
  const [lines, setLines] = useState<{ text: string; type: string }[]>([]);
  const [isExiting, setIsExiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const fullText = "npx create-codher-hackathon@2026";

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(blink);
  }, []);

  // Auto-scroll terminal body
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        const sequence: { text: string; delay: number; type: string }[] = [
          { text: "Creating a new Codher Hackathon project in /Users/root/codher26.", delay: 400, type: 'info' },
          { text: "Installing packages. This might take a couple of seconds.", delay: 800, type: 'info' },
          { text: "▸ progress", delay: 900, type: 'progress-trigger' },
          { text: "added 1204 packages, and audited 1205 packages in 1s", delay: 2200, type: 'dim' },
          { text: "186 packages are looking for funding", delay: 2500, type: 'dim' },
          { text: "  run `npm fund` for details", delay: 2700, type: 'dim' },
          { text: "found 0 vulnerabilities", delay: 2900, type: 'success-small' },
          { text: "Success! Created codher26 at /Users/root/codher26", delay: 3500, type: 'success' },
          { text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", delay: 3700, type: 'divider' },
          { text: "✦  Welcome to CODHER'26  ✦", delay: 4000, type: 'welcome' },
          { text: "Booting up your workspace...", delay: 4300, type: 'boot' },
        ];

        sequence.forEach(({ text, delay, type }) => {
          setTimeout(() => {
            if (type === 'progress-trigger') {
              setShowProgress(true);
              // Animate progress bar
              let p = 0;
              const progInterval = setInterval(() => {
                p += Math.random() * 12 + 3;
                if (p >= 100) {
                  p = 100;
                  clearInterval(progInterval);
                }
                setProgress(Math.min(p, 100));
              }, 80);
            } else {
              setLines(prev => [...prev, { text, type }]);
            }
          }, delay);
        });

        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => onComplete(), 900);
        }, 5200);
      }
    }, 42);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Geist+Mono:wght@300;400;500&display=swap');

        .preloader-root {
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
        }

        .mesh-bg {
          background:
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(255, 105, 180, 0.55) 0%, transparent 60%),
            radial-gradient(ellipse 70% 70% at 80% 20%, rgba(57, 255, 140, 0.45) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 20, 147, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0, 255, 127, 0.1) 0%, transparent 100%),
            #0a0a0f;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        .terminal-window {
          background: rgba(12, 12, 16, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 105, 180, 0.18);
          box-shadow:
            0 0 0 1px rgba(57, 255, 140, 0.06),
            0 32px 64px rgba(0, 0, 0, 0.7),
            0 0 80px rgba(255, 105, 180, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .terminal-header {
          background: rgba(20, 20, 28, 0.95);
          border-bottom: 1px solid rgba(255, 105, 180, 0.12);
        }

        .traffic-lights {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
          transition: filter 0.15s;
        }
        .dot:hover { filter: brightness(1.3); }
        .dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.3);
        }
        .dot-red    { background: #ff5f57; box-shadow: 0 0 0 0.5px #e0443e; }
        .dot-yellow { background: #ffbd2e; box-shadow: 0 0 0 0.5px #dea123; }
        .dot-green  { background: #27c93f; box-shadow: 0 0 0 0.5px #1aab29; }

        .tab-pill {
          background: rgba(255, 105, 180, 0.1);
          border: 1px solid rgba(255, 105, 180, 0.2);
          border-radius: 6px;
          padding: 3px 12px;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 200, 230, 0.85);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-body {
          background: transparent;
          padding: 18px 20px 16px;
          height: 340px;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .terminal-body::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-body::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.03);
        }
        .terminal-body::-webkit-scrollbar-thumb {
          background: rgba(255, 105, 180, 0.3);
          border-radius: 2px;
        }

        .prompt-line {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
          line-height: 1.6;
        }

        .prompt-user {
          color: #ff69b4;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.01em;
        }
        .prompt-at     { color: rgba(255,255,255,0.35); font-size: 13px; }
        .prompt-host   { color: #39ff8c; font-weight: 600; font-size: 13px; }
        .prompt-sep    { color: rgba(255,255,255,0.25); font-size: 13px; }
        .prompt-dir    { color: #87CEEB; font-size: 13px; }
        .prompt-branch {
          color: rgba(255, 105, 180, 0.7);
          font-size: 11px;
          margin-left: 6px;
          background: rgba(255,105,180,0.08);
          padding: 0px 6px;
          border-radius: 3px;
          border: 1px solid rgba(255,105,180,0.15);
        }
        .prompt-symbol { color: rgba(255,255,255,0.4); margin: 0 8px 0 6px; font-size: 13px; }

        .cmd-text {
          color: #f0f0f0;
          font-size: 13px;
          letter-spacing: 0.02em;
        }

        .cursor-block {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: rgba(255, 105, 180, 0.9);
          margin-left: 2px;
          vertical-align: middle;
          position: relative;
          top: -1px;
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(255, 105, 180, 0.6);
        }

        .line-info     { color: rgba(220, 220, 240, 0.75); font-size: 12.5px; line-height: 1.7; }
        .line-dim      { color: rgba(180, 180, 200, 0.45); font-size: 12px; line-height: 1.6; }
        .line-success  { color: #39ff8c; font-size: 12.5px; line-height: 1.7; font-weight: 500; }
        .line-success-small { color: rgba(57,255,140,0.7); font-size: 12px; line-height: 1.6; }
        .line-divider  { color: rgba(255,105,180,0.2); font-size: 11px; letter-spacing: 1px; }
        .line-welcome  {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
          background: linear-gradient(90deg, #ff69b4, #ff1493, #39ff8c, #00fa9a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2s linear infinite;
          margin-top: 4px;
        }
        .line-boot {
          color: rgba(57, 255, 140, 0.6);
          font-size: 12px;
          line-height: 1.7;
          animation: pulse-green 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; color: rgba(57,255,140,1); }
        }

        .progress-bar-wrap {
          margin: 8px 0 4px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .progress-label {
          color: rgba(255,105,180,0.6);
          font-size: 11px;
          min-width: 42px;
        }
        .progress-track {
          flex: 1;
          height: 3px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #ff69b4, #39ff8c);
          transition: width 0.1s linear;
          box-shadow: 0 0 8px rgba(255, 105, 180, 0.5);
          position: relative;
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          right: 0;
          top: -2px;
          width: 6px;
          height: 7px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255,255,255,0.8);
          opacity: 0.9;
        }
        .progress-pct {
          color: rgba(255,255,255,0.35);
          font-size: 11px;
          min-width: 36px;
          text-align: right;
        }

        .status-bar {
          border-top: 1px solid rgba(255, 105, 180, 0.1);
          padding: 6px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(10, 10, 15, 0.8);
        }
        .status-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .status-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(200,200,220,0.3);
          font-size: 10.5px;
        }
        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #39ff8c;
          box-shadow: 0 0 4px #39ff8c;
          animation: pulse-green 2s ease-in-out infinite;
        }
        .status-pink { color: rgba(255,105,180,0.45); }
        .status-green { color: rgba(57,255,140,0.45); }

        .exit-anim {
          opacity: 0;
          transform: scale(1.04) translateY(-8px);
          transition: all 0.85s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        .enter-anim {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: opacity 0s, transform 0s;
        }

        .line-enter {
          animation: lineIn 0.25s ease-out;
        }
        @keyframes lineIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .glow-ring {
          position: absolute;
          inset: -1px;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(255,105,180,0.25), rgba(57,255,140,0.25));
          z-index: -1;
          filter: blur(8px);
          opacity: 0.6;
        }
      `}</style>

      <div
        className={`preloader-root fixed inset-0 z-[100] flex items-center justify-center p-4 mesh-bg ${isExiting ? 'exit-anim' : 'enter-anim'}`}
      >
        <div className="noise-overlay" />

        {/* Floating orbs */}
        <div style={{
          position: 'absolute', top: '15%', left: '10%',
          width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,20,147,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'none',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '8%',
          width: 280, height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,250,130,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        {/* Terminal window */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 680 }}>
          <div className="glow-ring" />
          <div className="terminal-window" style={{ borderRadius: 10, overflow: 'hidden' }}>

            {/* Title bar */}
            <div className="terminal-header" style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: 44 }}>
              <div className="traffic-lights">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
              </div>

              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                <div className="tab-pill">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2h3v3H2zM7 2h3v3H7zM2 7h3v3H2zM7 7h3v3H7z" fill="rgba(255,105,180,0.7)" />
                  </svg>
                  codher — zsh — 80×24
                </div>
              </div>

              <div style={{ width: 58 }} />
            </div>

            {/* Body */}
            <div className="terminal-body" ref={bodyRef}>

              {/* Login info */}
              <div style={{ color: 'rgba(200,200,220,0.3)', fontSize: 11.5, marginBottom: 12, letterSpacing: '0.01em' }}>
                Last login: {dateStr} {timeStr} on ttys001
              </div>

              {/* Prompt line */}
              <div className="prompt-line" style={{ marginBottom: 4 }}>
                <span className="prompt-user">codher</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">studio</span>
                <span className="prompt-sep">:</span>
                <span className="prompt-dir">~</span>
                <span className="prompt-branch"> ⎇ main</span>
                <span className="prompt-symbol">❯</span>
                <span className="cmd-text">{text}</span>
                {lines.length === 0 && (
                  <span className="cursor-block" style={{ opacity: showCursor ? 1 : 0 }} />
                )}
              </div>

              {/* Output lines */}
              <div style={{ marginTop: 4 }}>
                {lines.map((line, i) => (
                  <div key={i} className={`line-enter line-${line.type}`}>
                    {line.type === 'success' && (
                      <span style={{ color: '#39ff8c', marginRight: 8, fontWeight: 700 }}>✔</span>
                    )}
                    {line.type === 'success-small' && (
                      <span style={{ color: 'rgba(57,255,140,0.6)', marginRight: 8 }}>✓</span>
                    )}
                    {line.text}
                  </div>
                ))}

                {/* Progress bar */}
                {showProgress && (
                  <div className="progress-bar-wrap line-enter">
                    <span className="progress-label">npm</span>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="progress-pct">{Math.round(progress)}%</span>
                  </div>
                )}

                {/* Blinking cursor after output */}
                {lines.length > 0 && lines.length < 11 && (
                  <span className="cursor-block" style={{ opacity: showCursor ? 1 : 0, marginTop: 4, display: 'inline-block' }} />
                )}
              </div>
            </div>

            {/* Status bar */}
            <div className="status-bar">
              <div className="status-left">
                <div className="status-item">
                  <div className="status-dot" />
                  <span className="status-green">connected</span>
                </div>
                <div className="status-item">
                  <span>⎇</span>
                  <span className="status-pink">main</span>
                </div>
                <div className="status-item status-pink">
                  node v22.4.0
                </div>
              </div>
              <div className="status-item">
                <span style={{ color: 'rgba(255,105,180,0.25)', fontSize: 10 }}>
                  codher'26 workspace
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
