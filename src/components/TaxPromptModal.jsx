import React, { useState, useEffect } from 'react';
import { FileText, X, ArrowRight } from 'lucide-react';
import { useProfileStore } from '../Dashboard/DashboardPages/Profile/store/useProfileStore';
import { useRouter } from '../utils/useRouter';

const modalStyles = `
  .nl-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    font-family: sans-serif;
  }

  .nl-modal-card {
    background: #1a1528;
    width: 100%;
    max-width: 400px;
    border-radius: 28px;
    border: 1px solid rgba(167, 139, 250, 0.2);
    padding: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .nl-modal-glow {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: rgba(124, 58, 237, 0.15);
    filter: blur(40px);
    border-radius: 50%;
    pointer-events: none;
  }

  .nl-modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nl-modal-close:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }

  .nl-modal-icon-box {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(219, 39, 119, 0.1));
    border: 1px solid rgba(167, 139, 250, 0.2);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a78bfa;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .nl-modal-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
  }

  .nl-modal-desc {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .nl-modal-btn-primary {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px;
    background: linear-gradient(to right, #7c3aed, #db2777);
    border: none;
    border-radius: 14px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
  }
  .nl-modal-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 20px -3px rgba(124, 58, 237, 0.4);
    filter: brightness(1.1);
  }
  .nl-modal-btn-primary:active {
    transform: translateY(0);
  }

  .nl-modal-btn-secondary {
    width: 100%;
    margin-top: 12px;
    padding: 12px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s;
  }
  .nl-modal-btn-secondary:hover {
    color: #fff;
  }

  .nl-arrow-icon {
    transition: transform 0.2s;
  }
  .nl-modal-btn-primary:hover .nl-arrow-icon {
    transform: translateX(3px);
  }
`;

export const TaxPromptModal = () => {
  const setShowTaxModal = useProfileStore((state) => state.setShowTaxModal);
  const { navigate } = useRouter();
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = modalStyles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

  const handleGoToTax = () => {
    localStorage.setItem('targetPaymentTab', 'tax-compliance');
    
    if (window.navigate) {
      window.navigate('/payment'); 
    } else {
      navigate('/payment');
    }

    setTimeout(() => {
      setShowTaxModal(false);
    }, 50);
  };

  return (
    <div className="nl-modal-overlay">
      <div className="nl-modal-card">
        <div className="nl-modal-glow" />

        <button 
          onClick={() => setShowTaxModal(false)}
          className="nl-modal-close"
        >
          <X size={20} />
        </button>

        <div className="nl-modal-icon-box">
          <FileText size={32} />
        </div>

        <h2 className="nl-modal-title">Profile Completed!</h2>
        <p className="nl-modal-desc">
          Awesome! Your profile is completed and awaiting verification. To ensure quick Authentication and Approval, please complete your W-9 Tax Compliance form now.
        </p>

        <div className="nl-modal-actions">
          <button 
            onClick={handleGoToTax}
            className="nl-modal-btn-primary"
          >
            Complete W-9 Form 
            <ArrowRight size={18} className="nl-arrow-icon" />
          </button>
          
          <button 
            onClick={() => setShowTaxModal(false)}
            className="nl-modal-btn-secondary"
          >
            I'll do this later
          </button>
        </div>
      </div>
    </div>
  );
};