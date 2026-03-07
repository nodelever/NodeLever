import { useState } from 'react';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState('/profile');
  const navigate = (path) => setCurrentPath(path);
  return { currentPath, navigate };
};
