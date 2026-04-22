import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Send
} from 'lucide-react';

const styles = `
  .nl-footer { background:#0b0d14; border-top:0.5px solid rgba(167,139,250,.2); position:relative; overflow:hidden; font-family:sans-serif; }
  .nl-footer-grid-bg { position:absolute;inset:0; background-image:linear-gradient(rgba(120,80,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(120,80,255,.04) 1px,transparent 1px); background-size:44px 44px; pointer-events:none; }
  .nl-footer-glow-l { position:absolute;top:0;left:25%;width:400px;height:400px; background:radial-gradient(circle,rgba(124,58,237,.06) 0%,transparent 70%); pointer-events:none; }
  .nl-footer-glow-r { position:absolute;bottom:0;right:25%;width:400px;height:400px; background:radial-gradient(circle,rgba(14,165,233,.06) 0%,transparent 70%); pointer-events:none; }
  
  /* Mobile First Structure */
  .nl-footer-inner { position:relative; z-index:10; max-width:1280px; margin:0 auto; padding:0 24px; }
  .nl-footer-main { display:flex; flex-direction:column; gap:48px; padding:48px 0; }
  
  .nl-footer-logo { font-size:26px;font-weight:500;color:#fff;text-decoration:none;display:inline-block;margin-bottom:20px; }
  .nl-footer-logo span { background:linear-gradient(135deg,#a78bfa,#38bdf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent; }
  .nl-footer-desc { font-size:14px;color:rgba(255,255,255,.45);line-height:1.75;margin-bottom:28px;max-width:280px; }
  .nl-footer-feature { display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(255,255,255,.5);margin-bottom:12px; }
  .nl-footer-feature-dot { width:7px;height:7px;border-radius:50%;flex-shrink:0; }
  
  .nl-footer-contact { margin-top:24px;padding-top:24px;border-top:0.5px solid rgba(255,255,255,.06); }
  .nl-footer-contact a, .nl-footer-contact-item { display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(255,255,255,.4);text-decoration:none;margin-bottom:10px;transition:color .2s; }
  .nl-footer-contact a:hover { color:rgba(255,255,255,.8); }
  
  .nl-footer-links-grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:32px; }
  .nl-footer-col-title { font-size:12px;font-weight:500;color:rgba(255,255,255,.7);letter-spacing:.6px;text-transform:uppercase;margin-bottom:20px;position:relative;padding-bottom:10px; }
  .nl-footer-col-title::after { content:'';position:absolute;bottom:0;left:0;width:24px;height:1px;background:linear-gradient(90deg,#a78bfa,#38bdf8); }
  .nl-footer-col-link { display:block;font-size:13px;color:rgba(255,255,255,.38);text-decoration:none;margin-bottom:10px;transition:color .2s,transform .15s; }
  .nl-footer-col-link:hover { color:rgba(255,255,255,.8);transform:translateX(3px); }
  
  .nl-newsletter-title { font-size:12px;font-weight:500;color:rgba(255,255,255,.7);letter-spacing:.6px;text-transform:uppercase;margin-bottom:20px;position:relative;padding-bottom:10px; }
  .nl-newsletter-title::after { content:'';position:absolute;bottom:0;left:0;width:24px;height:1px;background:linear-gradient(90deg,#a78bfa,#38bdf8); }
  .nl-newsletter-desc { font-size:13px;color:rgba(255,255,255,.38);line-height:1.6;margin-bottom:20px; }
  .nl-newsletter-input { width:100%;box-sizing:border-box;padding:10px 14px;border-radius:10px;background:rgba(255,255,255,.05);border:0.5px solid rgba(255,255,255,.1);color:#fff;font-size:13px;outline:none;transition:border-color .2s;margin-bottom:10px; }
  .nl-newsletter-input::placeholder { color:rgba(255,255,255,.25); }
  .nl-newsletter-input:focus { border-color:rgba(167,139,250,.5); }
  .nl-newsletter-btn { width:100%;padding:10px 16px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#0ea5e9);border:none;color:#fff;font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:opacity .2s,transform .15s; }
  .nl-newsletter-btn:hover { opacity:.88;transform:translateY(-1px); }
  
  .nl-footer-bottom { border-top:0.5px solid rgba(255,255,255,.06); padding:24px 0; display:flex; flex-direction:column-reverse; align-items:center; gap:24px; text-align:center; }
  .nl-footer-copy { font-size:12px;color:rgba(255,255,255,.28); }
  .nl-social-row { display:flex;gap:10px; }
  .nl-social-btn { width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.04);border:0.5px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.4);transition:background .2s,color .2s,transform .15s;cursor:pointer;text-decoration:none; }
  .nl-social-btn:hover { background:rgba(255,255,255,.09);color:#fff;transform:translateY(-2px); }
  .nl-back-top { font-size:12px;color:rgba(255,255,255,.35);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;transition:color .2s; }
  .nl-back-top:hover { color:rgba(255,255,255,.7); }
  .nl-bottom-line { position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(167,139,250,.4),transparent); }

  /* Desktop View */
  @media (min-width: 768px) {
    .nl-footer-links-grid { grid-template-columns:repeat(4, 1fr); }
    .nl-footer-bottom { flex-direction:row; justify-content:space-between; text-align:left; }
  }
  @media (min-width: 1024px) {
    .nl-footer-inner { padding:0 36px; }
    .nl-footer-main { display:grid; grid-template-columns:2fr 3fr 1.2fr; gap:64px; padding:64px 0 48px; }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    // Platform: [
    //   { name: 'Training Paths', href: '/platform/training' },
    //   { name: 'Job Matching', href: '/platform/jobs' },
    //   { name: 'Earn & Contribute', href: '/platform/earn' },
    //   { name: 'Skill Nodes', href: '/platform/nodes' },
    // ],
    // Company: [
    //   { name: 'Careers', href: '/careers' },
    // ],
    // Resources: [
    //   { name: 'Documentation', href: '/docs' },
    //   { name: 'Support Center', href: '/support' },
    // ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      // { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const features = [
    { label: 'Structured AI Training', color: '#a78bfa' },
    { label: 'Live Job Matching', color: '#38bdf8' },
    { label: 'Earn by Contributing', color: '#f472b6' },
  ];

  return (
    <>
      <style>{styles}</style>
      <footer className="nl-footer">
        <div className="nl-footer-grid-bg" />
        <div className="nl-footer-glow-l" />
        <div className="nl-footer-glow-r" />

        <div className="nl-footer-inner">
          <div className="nl-footer-main">
            {/* Brand */}
            <div>
              <Link to="/" className="nl-footer-logo">
                <span>Node</span>Lever
              </Link>
              <p className="nl-footer-desc">
                Linking cathode learners with anode experts — completing the circuit of AI-powered career growth.
              </p>
              {features.map(({ label, color }) => (
                <div key={label} className="nl-footer-feature">
                  <div className="nl-footer-feature-dot" style={{ background: color }} />
                  {label}
                </div>
              ))}
              <div className="nl-footer-contact">
                <a href="mailto:hey@nodelever.com" className="nl-footer-contact-item">
                  <Mail size={14} style={{ color: '#a78bfa', flexShrink: 0 }} />
                  hey@nodelever.com
                </a>
                <div className="nl-footer-contact-item">
                  <MapPin size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  Homestead, Pennsylvania
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="nl-footer-links-grid">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <div className="nl-footer-col-title">{category}</div>
                  {links.map((link) => (
                    <Link key={link.name} to={link.href} className="nl-footer-col-link">
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Newsletter */}
            {/* <div>
              <div className="nl-newsletter-title">Stay Updated</div>
              <p className="nl-newsletter-desc">
                Get the latest on AI training paths, new job nodes, and platform updates.
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="nl-newsletter-input"
                  required
                />
                <button type="submit" className="nl-newsletter-btn" disabled={isSubscribed}>
                  {isSubscribed ? (
                    <>Subscribed! <ArrowRight size={14} /></>
                  ) : (
                    <>Subscribe <Send size={14} /></>
                  )}
                </button>
              </form>
            </div> */}
          </div>

          <div className="nl-footer-bottom">
            <span className="nl-footer-copy">© 2025 NodeLever. All rights reserved.</span>
            <div className="nl-social-row">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="nl-social-btn">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <button className="nl-back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top <ArrowRight size={12} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </div>

        <div className="nl-bottom-line" />
      </footer>
    </>
  );
};

export default Footer;