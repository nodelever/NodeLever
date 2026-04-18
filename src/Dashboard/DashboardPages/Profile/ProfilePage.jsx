import React, { useEffect } from 'react';
import { useProfileStore } from './store/useProfileStore';
import { Overview } from './views/Overview';
import { Step1AccountInfo } from './views/Step1AccountInfo';
import { Step2Address } from './views/Step2Address';
import { Step3UploadCV } from './views/Step3UploadCV';
import { Step4UploadID } from './views/Step4UploadID'; // <-- Import new step
import { useAuth } from '../../../contexts/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();
  const handleInputChange = useProfileStore((state) => state.handleInputChange);
  const view = useProfileStore((state) => state.view);
  const fetchUserStatus = useProfileStore((state) => state.fetchUserStatus);

  useEffect(() => {
    fetchUserStatus();
    // Sync the authenticated email to the store automatically
    if (user?.email) {
      handleInputChange('email', user.email);
    }
  }, [fetchUserStatus, user, handleInputChange]);

  return (
    <>
      {view === 'overview' && <Overview />}
      {view === 'step1' && <Step1AccountInfo />}
      {view === 'step2' && <Step2Address />}
      {view === 'step3' && <Step3UploadCV />}
      {view === 'step4' && <Step4UploadID />} {/* <-- Add new step */}
    </>
  );
}