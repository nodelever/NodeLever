import React from 'react';

export const projectStyles = `
  /* Paste your entire CSS string here exactly as you had it */
  @keyframes glow-in { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  @keyframes spark { 0%,100%{opacity:0;r:2px} 50%{opacity:1;r:4px} }
  .nl-projects-page { background: #0b0d14; min-height: 100vh; color: #fff; font-family: sans-serif; padding: 100px 20px 80px; position: relative; overflow-x: hidden; }
  .nl-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(120,80,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(120,80,255,.07) 1px,transparent 1px); background-size: 44px 44px; pointer-events: none; z-index: 0; }
  .nl-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 5; display: flex; flex-direction: column; gap: 60px; }
  .nl-page-header { text-align: center; margin-bottom: 20px; animation: glow-in .6s ease both; }
  .nl-page-title { font-size: 36px; font-weight: 500; line-height: 1.1; color: #fff; letter-spacing: -1px; }
  .nl-page-title em { font-style: normal; background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .nl-project-card { background: rgba(255, 255, 255, 0.02); border: 0.5px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 32px; backdrop-filter: blur(12px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); position: relative; overflow: hidden; animation: glow-in 0.8s ease both; transition: border-color .3s ease; }
  .nl-project-card:hover { border-color: rgba(167, 139, 250, 0.3); }
  .nl-project-header { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; border-bottom: 0.5px solid rgba(255, 255, 255, 0.07); padding-bottom: 32px; }
  @media(min-width: 768px) { .nl-project-card { padding: 48px; } .nl-project-header { flex-direction: row; justify-content: space-between; align-items: flex-start; } }
  .nl-badge { display:inline-flex;align-items:center;gap:6px; background:rgba(167,139,250,.1); border:0.5px solid rgba(167,139,250,.3); border-radius:20px;padding:5px 14px; font-size:11px;font-weight:500; color:#c4b5fd;letter-spacing:.5px;text-transform:uppercase; margin-bottom:16px; }
  .nl-badge-dot { width:6px;height:6px;border-radius:50%;background:#a78bfa; animation:spark 1.6s ease-in-out infinite; }
  .nl-badge.pink { background:rgba(244,114,182,.1); border-color:rgba(244,114,182,.3); color:#fbcfe8; }
  .nl-badge.pink .nl-badge-dot { background:#f472b6; }
  .nl-badge.blue { background:rgba(14,165,233,.1); border-color:rgba(14,165,233,.3); color:#bae6fd; }
  .nl-badge.blue .nl-badge-dot { background:#38bdf8; }
  .nl-project-title { font-size: 26px; font-weight: 500; line-height: 1.3; color: #fff; margin: 0; letter-spacing: -0.5px; }
  .nl-project-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
  @media(min-width: 1024px) { .nl-project-grid { grid-template-columns: 1fr 1fr; gap: 60px; } }
  .nl-content-section h3 { font-size: 13px; font-weight: 600; color: #c4b5fd; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px; border-bottom: 0.5px solid rgba(255,255,255,0.05); padding-bottom: 8px; }
  .nl-content-section h4 { font-size: 15px; font-weight: 500; color: #fff; margin: 24px 0 12px 0; }
  .nl-content-section p, .nl-content-section ul, .nl-content-section ol { font-size: 14px; line-height: 1.7; color: rgba(255, 255, 255, 0.6); margin: 0 0 16px 0; }
  .nl-content-section ul, .nl-content-section ol { padding-left: 20px; margin-bottom: 24px; }
  .nl-content-section li { margin-bottom: 10px; }
  .nl-content-section strong { color: #fff; font-weight: 500; }
  .nl-blockquote { background: rgba(244, 114, 182, 0.05); border-left: 2px solid #f472b6; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
  .nl-blockquote p { margin: 0; color: rgba(255, 255, 255, 0.85); font-size: 13px; }
  .nl-btn-primary { background: linear-gradient(135deg, #7c3aed, #0ea5e9); border: none; border-radius: 24px; padding: 12px 28px; color: #fff; font-size: 14px; font-weight: 500; cursor: pointer; transition: opacity .2s, transform .15s; white-space: nowrap; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; }
  .nl-btn-primary:hover { opacity: .88; transform: translateY(-1px); }
  .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.3s; } .delay-3 { animation-delay: 0.5s; }
`;

export const projectsData = [
  {
    id: 'nexus',
    badgeText: 'Project 1',
    badgeClass: '',
    title: 'Nexus: Live Multilingual Gaming Transcription & Interaction Analysis',
    summary: 'A specialized data collection and analysis initiative aimed at capturing, transcribing, and evaluating live, inter-linguistic player interactions in multiplayer online gaming environments.',
    content: (
      <>
        <div className="nl-content-section">
          <h3>1. Project Description</h3>
          <p><strong>Overview:</strong> Project Nexus is a specialized data collection and analysis initiative aimed at capturing, transcribing, and evaluating live, inter-linguistic player interactions in multiplayer online gaming environments. As gaming becomes increasingly global, cross-cultural and cross-linguistic communication (via voice comms and text chat) is vital to the player experience.</p>
          <p><strong>Objectives:</strong> The primary goal of this project is to build a robust dataset to train and improve AI-driven gaming features, such as real-time voice translation, cross-regional matchmaking algorithms, and automated community moderation.</p>
          <p><strong>Key Responsibilities:</strong></p>
          <ul>
            <li>Monitor live multiplayer gaming sessions across various genres (e.g., FPS, MOBA, MMORPG).</li>
            <li>Transcribe live VoIP and text chat interactions verbatim, capturing gaming-specific lexicon and slang.</li>
            <li>Analyze inter-linguistic interactions for context, sentiment, and communication barriers.</li>
            <li>Evaluate the effectiveness of cross-cultural communication and identify areas for automated intervention.</li>
          </ul>
        </div>
        <div className="nl-content-section">
          <h3>2. Project Requirements</h3>
          <p><strong>Hardware & Connectivity:</strong> Modern PC or current-gen console (PS5/Xbox Series X), high-fidelity noise-canceling headset, and stable broadband (min 100 Mbps download / 20 Mbps upload).</p>
          <p><strong>Technical & Software:</strong> Dual-monitor setup, proficiency in transcription platforms (e.g., ELAN), and ability to securely transfer large audio/video files.</p>
          <p><strong>Skills & Expertise:</strong> Native/Bilingual fluency (C2 level) in English and a target language, deep gaming literacy (slang like <em>gank, aggro, smurf</em>), and analytical skills to assess sentiment in high-stress environments.</p>
        </div>
        <div className="nl-content-section">
          <h3>3. Guidelines for Transcription and Analysis</h3>
          <blockquote><strong>Crucial Note:</strong> Accuracy and context are the core pillars of this project. A literal translation that misses the gaming intent is considered a critical error.</blockquote>
          <p><strong>Transcription Rules:</strong> Use verbatim capture (including filler words), accurate speaker diarization, and frequent timestamps. Ensure all Personally Identifiable Information is replaced with [PII_REDACTED].</p>
        </div>
      </>
    )
  },
  {
    id: 'vlso',
    badgeText: 'Project 2',
    badgeClass: 'blue',
    title: 'VR Live-Sync Optimizer (VLSO)',
    summary: 'A high-fidelity, real-time toolset designed to monitor and optimize VR environments as they are being experienced, moving beyond static development.',
    content: (
      <>
        <div className="nl-content-section">
          <h3>Project Description</h3>
          <p>This project involves creating a high-fidelity, real-time toolset designed to monitor and optimize VR environments as they are being experienced. The goal is to move beyond static development and into dynamic, "live" simulation management.</p>
          <p>The <strong>VR Live-Sync Optimizer</strong> functions as a "Live Builder" that allows developers to assess player interaction and replicate specific gameplay sequences into a sandbox for analysis. It evaluates hardware latency and software bottlenecks in real-time, offering alternate rendering paths or asset LOD swaps to improve performance without breaking immersion.</p>
        </div>
        <div className="nl-content-section">
          <h3>Qualification Requirements</h3>
          <ol>
            <li><strong>Hardware-Software Interfacing:</strong> Low-level telemetry extraction from VR headsets (Quest 3, Vive Pro) without increasing motion-to-photon latency.</li>
            <li><strong>State Replication:</strong> Methods for replicating live networked physics states into a "shadow" simulation.</li>
            <li><strong>Heuristic Analysis:</strong> Evaluating "Experience Quality" using frame timing variance and foveated rendering efficiency.</li>
            <li><strong>Dynamic Optimization:</strong> Implementing alternate asset delivery based on live GPU thermal throttling.</li>
            <li><strong>Data Synthesis:</strong> Summarizing 6DOF movement data for non-technical stakeholders.</li>
          </ol>
        </div>
        <div className="nl-content-section">
          <h3>Implementation Guidelines</h3>
          <p><strong>Assessment Phase:</strong> Monitoring tools must operate on a separate thread to prevent the "observer effect." Establish a strict latency budget (11ms for 90Hz).</p>
          <p><strong>Improvement Strategy:</strong> Utilize A/B Live Testing via "Split-Sim" features and automated bottleneck detection.</p>
        </div>
      </>
    )
  },
  {
    id: 'fpas',
    badgeText: 'Project 3',
    badgeClass: 'pink',
    title: 'First-Person Action Synthesis (FPAS)',
    summary: 'Focusing on Egocentric Vision (Ego-Vis), building a dataset for Computer Vision for Action Understanding by capturing data from a first-person perspective.',
    content: (
      <>
        <div className="nl-content-section">
          <h3>Project Description</h3>
          <p>This project transitions from digital VR into the physical realm, focusing on <strong>Egocentric Vision (Ego-Vis)</strong>. By capturing data from a first-person perspective, you are essentially building a dataset for "Computer Vision for Action Understanding."</p>
          <p>The <strong>First-Person Action Synthesis</strong> project is a data-collection and generative-refinement initiative. Participants record "Live Scenes" (household chores or scripted actions) using a head-mounted smartphone to create a high-fidelity bridge between physical movement and AI-generated video.</p>
        </div>
        <div className="nl-content-section">
          <h3>Qualification Requirements</h3>
          <ul>
            <li><strong>Kinematic Stability:</strong> Maintaining consistent "eye-level" FOV during high-motion tasks.</li>
            <li><strong>Action Segmentation:</strong> Timestamping and summarizing start/peak/end points of complex chores.</li>
            <li><strong>Generative Evaluation:</strong> Evaluating success against "Ground Truth" using FVD or CLIP scores.</li>
            <li><strong>Alternative Scenarios:</strong> Methods to alternate variables (e.g., swapping object materials) while maintaining physics.</li>
          </ul>
        </div>
        <div className="nl-content-section">
          <h3>Implementation Guidelines</h3>
          <p><strong>Recording Protocol:</strong> Use 0.5x wide-angle lens, 4K resolution at 60 FPS, and a 15° downward tilt.</p>
          <p><strong>Analysis Phase:</strong> Summarize actions into 5–10 "Keyframes" and document occlusion management to teach models object permanence.</p>
          <p><strong>Quality Improvement:</strong> Use recorded motion vectors for temporal smoothing to eliminate "jitter" in AI outputs.</p>
        </div>
      </>
    )
  }
];