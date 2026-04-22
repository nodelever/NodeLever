import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = `
  @keyframes pulse-ring { 0%,100%{opacity:.15;transform:scale(1)} 50%{opacity:.35;transform:scale(1.08)} }
  @keyframes flow-dash { to{stroke-dashoffset:-40} }
  @keyframes orbit { from{transform:rotate(0deg) translateX(88px) rotate(0deg)} to{transform:rotate(360deg) translateX(88px) rotate(-360deg)} }
  @keyframes orbit-rev { from{transform:rotate(180deg) translateX(88px) rotate(-180deg)} to{transform:rotate(540deg) translateX(88px) rotate(-540deg)} }
  @keyframes float-up { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes glow-in { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  @keyframes spark { 0%,100%{opacity:0;r:2px} 50%{opacity:1;r:4px} }

  /* Mobile-First Base Styles */
  .nl-hero { 
    background:#0b0d14; 
    overflow:hidden; 
    position:relative; 
    font-family:sans-serif; 
    border-radius: 0;
    /* FIX: Added padding-top to account for fixed navigation */
    padding-top: 80px; 
  }
  
  .nl-grid-bg { position:absolute;inset:0; background-image:linear-gradient(rgba(120,80,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(120,80,255,.07) 1px,transparent 1px); background-size:44px 44px; pointer-events:none; }
  
  /* Adjusted internal padding so it doesn't double-up with the hero padding */
  .nl-content { display:flex; flex-direction:column; align-items:center; text-align:center; padding:20px 20px 40px; position:relative; z-index:5; gap:40px; }
  .nl-left { display:flex; flex-direction:column; align-items:center; padding-right:0; }
  .nl-badge { display:inline-flex;align-items:center;gap:6px; background:rgba(167,139,250,.1); border:0.5px solid rgba(167,139,250,.3); border-radius:20px;padding:5px 14px; font-size:11px;font-weight:500; color:#c4b5fd;letter-spacing:.5px;text-transform:uppercase; margin-bottom:20px; animation:glow-in .6s ease both; }
  .nl-badge-dot { width:6px;height:6px;border-radius:50%;background:#a78bfa; animation:spark 1.6s ease-in-out infinite; }
  
  .nl-h1 { font-size:36px; font-weight:500; line-height:1.1; color:#fff; margin-bottom:18px; letter-spacing:-1px; animation:glow-in .6s .1s ease both; }
  .nl-h1 em { font-style:normal; background:linear-gradient(135deg,#a78bfa 0%,#38bdf8 100%); -webkit-background-clip:text;-webkit-text-fill-color:transparent; }
  .nl-sub { font-size:15px;line-height:1.7; color:rgba(255,255,255,.5); margin-bottom:32px; animation:glow-in .6s .2s ease both; max-width:400px; }
  
  .nl-cta-row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; animation:glow-in .6s .3s ease both; }
  .nl-btn-primary { background:linear-gradient(135deg,#7c3aed,#0ea5e9); border:none;border-radius:24px;padding:12px 28px; color:#fff;font-size:14px;font-weight:500; cursor:pointer;transition:opacity .2s,transform .15s; white-space:nowrap; }
  .nl-btn-primary:hover { opacity:.88;transform:translateY(-1px); }
  .nl-btn-secondary { background:rgba(255,255,255,.05); border:0.5px solid rgba(255,255,255,.15); border-radius:24px;padding:12px 28px; color:rgba(255,255,255,.7);font-size:14px;font-weight:400; cursor:pointer;transition:background .2s,color .2s; white-space:nowrap; }
  .nl-btn-secondary:hover { background:rgba(255,255,255,.1);color:#fff; }
  
  .nl-stats-row { display:flex; gap:20px; flex-wrap:wrap; justify-content:center; margin-top:36px; animation:glow-in .6s .4s ease both; padding-top:28px; border-top:0.5px solid rgba(255,255,255,.07); width:100%; }
  .nl-stat-num { font-size:22px;font-weight:500;color:#fff; }
  .nl-stat-label { font-size:12px;color:rgba(255,255,255,.4);margin-top:2px; }
  
  .nl-right { display:flex;align-items:center;justify-content:center; width:100%; min-height:auto; }
  .nl-node-scene { position:relative; width:100%; max-width:360px; aspect-ratio:1; animation:float-up 4s ease-in-out infinite; }
  .nl-node-scene svg { width:100%;height:100%;overflow:visible; }
  
  .nl-orbit-dot { width:10px;height:10px;border-radius:50%; position:absolute;top:50%;left:50%; margin:-5px 0 0 -5px; transform-origin:center center; }
  .nl-orbit-1 { background:#a78bfa;animation:orbit 5s linear infinite;box-shadow:0 0 8px #a78bfa; }
  .nl-orbit-2 { background:#38bdf8;animation:orbit-rev 7s linear infinite;box-shadow:0 0 8px #38bdf8; }
  .nl-orbit-3 { background:#f472b6;animation:orbit 9s linear infinite;box-shadow:0 0 8px #f472b6; }
  
  .nl-cards-row { display:grid; grid-template-columns:1fr; gap:16px; padding:0 20px 40px; position:relative; z-index:5; }
  .nl-card { background:rgba(255,255,255,.03); border:0.5px solid rgba(255,255,255,.08); border-radius:14px;padding:20px; transition:border-color .25s,background .25s; }
  .nl-card:hover { border-color:rgba(167,139,250,.3);background:rgba(167,139,250,.05); }
  .nl-card-icon { width:36px;height:36px;border-radius:10px; display:flex;align-items:center;justify-content:center; margin-bottom:12px; }
  .nl-card-icon svg { width:18px;height:18px; }
  .nl-card h3 { font-size:13px;font-weight:500;color:rgba(255,255,255,.85);margin-bottom:6px; }
  .nl-card p { font-size:12px;color:rgba(255,255,255,.4);line-height:1.5; }

  /* Desktop Queries */
  @media (min-width: 1024px) {
    .nl-hero { border-radius:20px; min-height:680px; padding-top:100px; }
    .nl-content { display:grid; grid-template-columns:1fr 1fr; align-items:center; text-align:left; padding:40px 36px 48px; gap:0; }
    .nl-left { display:block; padding-right:32px; }
    .nl-h1 { font-size:46px; }
    .nl-cta-row { justify-content:flex-start; }
    .nl-stats-row { justify-content:flex-start; gap:28px; }
    .nl-cards-row { grid-template-columns:repeat(3, 1fr); gap:12px; padding:0 36px 40px; }
    .nl-node-scene { width:360px; height:360px; aspect-ratio:auto; }
  }
`;

export default function LangwageHero() {
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = styles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

  return (
    <div className="nl-hero">
      <div className="nl-grid-bg" />
      <div className="nl-content">
        <div className="nl-left">
          <div className="nl-badge">
            <div className="nl-badge-dot" />
            AI Training Platform
          </div>
          <h1 className="nl-h1">
            Train. Connect.<br /><em>Get Paid.</em>
          </h1>
          <p className="nl-sub">
            NodeLever links cathode learners with anode experts — two poles that together
            complete the circuit of AI-powered career growth.
          </p>
          <div className="nl-cta-row">
            <Link to="/reg" className="nl-btn-primary">Start Training →</Link>
            <Link to="/project" className="nl-btn-secondary">Browse Jobs</Link>        
          </div>
          <div className="nl-stats-row">
            <div className="nl-stat">
              <div className="nl-stat-num">12,400+</div>
              <div className="nl-stat-label">Trained members</div>
            </div>
            <div className="nl-stat">
              <div className="nl-stat-num">$3.2M</div>
              <div className="nl-stat-label">Paid out</div>
            </div>
            <div className="nl-stat">
              <div className="nl-stat-num">840</div>
              <div className="nl-stat-label">Active jobs</div>
            </div>
          </div>
        </div>

        <div className="nl-right">
          <div className="nl-node-scene">
            <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glow-purple" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity=".4"/>
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity=".4"/>
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="110" cy="180" r="72" stroke="#a78bfa" strokeWidth=".5" strokeDasharray="3 4" opacity=".3"
                style={{animation:'pulse-ring 3s ease-in-out infinite'}}/>
              <circle cx="250" cy="180" r="72" stroke="#38bdf8" strokeWidth=".5" strokeDasharray="3 4" opacity=".3"
                style={{animation:'pulse-ring 3s .5s ease-in-out infinite'}}/>
              <circle cx="110" cy="180" r="80" fill="url(#glow-purple)" opacity=".6"/>
              <circle cx="250" cy="180" r="80" fill="url(#glow-blue)" opacity=".6"/>
              <line x1="155" y1="165" x2="205" y2="165" stroke="rgba(167,139,250,.25)" strokeWidth="1"
                strokeDasharray="5 5" style={{animation:'flow-dash 1.4s linear infinite'}}/>
              <line x1="155" y1="180" x2="205" y2="180" stroke="rgba(167,139,250,.4)" strokeWidth="1.2"
                strokeDasharray="5 5" style={{animation:'flow-dash 1s linear infinite'}}/>
              <line x1="155" y1="195" x2="205" y2="195" stroke="rgba(56,189,248,.25)" strokeWidth="1"
                strokeDasharray="5 5" style={{animation:'flow-dash 1.6s linear infinite'}}/>
              <circle cx="110" cy="180" r="52" fill="#0b0d14" stroke="#a78bfa" strokeWidth="1"/>
              <circle cx="110" cy="180" r="34" fill="rgba(124,58,237,.12)" stroke="rgba(167,139,250,.2)" strokeWidth=".5"/>
              <circle cx="110" cy="180" r="14" fill="#7c3aed" opacity=".9"/>
              <text x="110" y="250" textAnchor="middle" fontSize="11" fill="#a78bfa" fontFamily="sans-serif" opacity=".8">Cathode</text>
              <text x="110" y="262" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.3)" fontFamily="sans-serif">Learner</text>
              <circle cx="250" cy="180" r="52" fill="#0b0d14" stroke="#38bdf8" strokeWidth="1"/>
              <circle cx="250" cy="180" r="34" fill="rgba(14,165,233,.12)" stroke="rgba(56,189,248,.2)" strokeWidth=".5"/>
              <circle cx="250" cy="180" r="14" fill="#0ea5e9" opacity=".9"/>
              <text x="250" y="250" textAnchor="middle" fontSize="11" fill="#38bdf8" fontFamily="sans-serif" opacity=".8">Anode</text>
              <text x="250" y="262" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.3)" fontFamily="sans-serif">Expert</text>
              <circle cx="180" cy="172" r="2.5" fill="#f472b6"
                style={{animation:'spark 1.2s .1s ease-in-out infinite'}}/>
              <circle cx="180" cy="180" r="3.5" fill="#fff" opacity=".7"
                style={{animation:'spark 1s ease-in-out infinite'}}/>
              <circle cx="180" cy="188" r="2.5" fill="#f472b6"
                style={{animation:'spark 1.2s .2s ease-in-out infinite'}}/>
              <line x1="110" y1="120" x2="110" y2="96" stroke="rgba(167,139,250,.2)" strokeWidth=".5"/>
              <rect x="70" y="78" width="80" height="22" rx="11" fill="rgba(124,58,237,.15)" stroke="rgba(167,139,250,.25)" strokeWidth=".5"/>
              <text x="110" y="93" textAnchor="middle" fontSize="11" fill="#c4b5fd" fontFamily="sans-serif">– pole</text>
              <line x1="250" y1="120" x2="250" y2="96" stroke="rgba(56,189,248,.2)" strokeWidth=".5"/>
              <rect x="210" y="78" width="80" height="22" rx="11" fill="rgba(14,165,233,.15)" stroke="rgba(56,189,248,.25)" strokeWidth=".5"/>
              <text x="250" y="93" textAnchor="middle" fontSize="11" fill="#7dd3fc" fontFamily="sans-serif">+ pole</text>
            </svg>
            <div className="nl-orbit-dot nl-orbit-1" />
            <div className="nl-orbit-dot nl-orbit-2" />
            <div className="nl-orbit-dot nl-orbit-3" />
          </div>
        </div>
      </div>

      <div className="nl-cards-row">
        {/* ... (Cards remain the same) */}
        <div className="nl-card">
          <div className="nl-card-icon" style={{background:'rgba(124,58,237,.12)'}}>
            <svg viewBox="0 0 18 18" fill="none">
              <rect x="2" y="5" width="14" height="10" rx="2" stroke="#a78bfa" strokeWidth="1.2"/>
              <path d="M6 5V4a3 3 0 016 0v1" stroke="#a78bfa" strokeWidth="1.2"/>
            </svg>
          </div>
          <h3>Structured AI Training</h3>
          <p>Earn verified credentials through role-based AI training paths built by industry experts.</p>
        </div>
        <div className="nl-card">
          <div className="nl-card-icon" style={{background:'rgba(14,165,233,.12)'}}>
            <svg viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="6" stroke="#38bdf8" strokeWidth="1.2"/>
              <path d="M9 6v3l2 2" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Live Job Matching</h3>
          <p>Match with AI roles in real time based on your completed modules and skill nodes.</p>
        </div>
        <div className="nl-card">
          <div className="nl-card-icon" style={{background:'rgba(244,114,182,.1)'}}>
            <svg viewBox="0 0 18 18" fill="none">
              <path d="M3 13l4-4 3 3 5-6" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Get Paid to Contribute</h3>
          <p>Annotate data, fine-tune models, and evaluate outputs — and earn directly on the platform.</p>
        </div>
      </div>
    </div>
  );
}
