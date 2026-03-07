import React, { useEffect } from 'react';
import { useProfileStore } from './store/useProfileStore';
import { Overview } from './views/Overview';
import { Step1AccountInfo } from './views/Step1AccountInfo';
import { Step2Address } from './views/Step2Address';
import { Step3UploadCV } from './views/Step3UploadCV';

export function ProfilePage() {
  const view = useProfileStore((state) => state.view);
  const fetchUserStatus = useProfileStore((state) => state.fetchUserStatus);

  useEffect(() => {
    fetchUserStatus();
  }, [fetchUserStatus]);

  return (
    <>
      {view === 'overview' && <Overview />}
      {view === 'step1' && <Step1AccountInfo />}
      {view === 'step2' && <Step2Address />}
      {view === 'step3' && <Step3UploadCV />}
    </>
  );
}