import { create } from 'zustand';

export const useProfileStore = create((set, get) => ({
  // --- STATE ---
  view: 'overview',
  currentStep: 1,
  showLegalModal: false,
  loading: false,
  showTaxModal: false,
  errors: {},
  userStatus: {
    profileComplete: false,
    dataReviewed: true,
    legalAgreed: false,
    identityVerified: false
  },
  formData: {
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    cvFile: null
  },

  // --- ACTIONS ---
  setView: (view) => set({ view }),
  setShowLegalModal: (showLegalModal) => set({ showLegalModal }),
  setShowTaxModal: (showTaxModal) => set({ showTaxModal }), 

  handleInputChange: (field, value) => {
    set((state) => {
      // Clear error for this field when user starts typing
      const newErrors = { ...state.errors };
      if (newErrors[field]) delete newErrors[field];
      
      return {
        formData: { ...state.formData, [field]: value },
        errors: newErrors
      };
    });
  },

  validateStep: (step) => {
    const { formData } = get();
    const newErrors = {};

    if (step === 1) {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
      
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
      else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Please enter a valid phone number';
      
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      else {
        const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
        if (age < 18) newErrors.dateOfBirth = 'You must be at least 18 years old';
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.country) newErrors.country = 'Country is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'Zipcode is required';
      else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode) && formData.country === 'us') {
        newErrors.zipCode = 'Please enter a valid US zipcode';
      }
    }

    if (step === 3) {
      if (!formData.cvFile) newErrors.cvFile = 'Please upload your CV';
      else {
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!validTypes.includes(formData.cvFile.type)) newErrors.cvFile = 'Only PDF and DOC files are allowed';
        if (formData.cvFile.size > 5 * 1024 * 1024) newErrors.cvFile = 'File size must be less than 5MB';
      }
    }

    set({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  },

  handleNext: () => {
    const { currentStep, validateStep } = get();
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        set({ currentStep: currentStep + 1, view: `step${currentStep + 1}` });
      }
    }
  },

  handleBack: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1, view: `step${currentStep - 1}` });
    } else {
      set({ view: 'overview', currentStep: 1 });
    }
  },

  // --- ASYNC API SIMULATIONS ---
fetchUserStatus: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch('https://the-king-backend.onrender.com/api/profile/status', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch status');
      
      const data = await response.json();
      set({ userStatus: data.userStatus });
    } catch (error) {
      console.error('Error fetching user status:', error);
    } finally {
      set({ loading: false });
    }
  },

handleSubmit: async () => {
    const { validateStep, formData } = get();
    if (!validateStep(3)) return;

    set({ loading: true });
    try {
      // 1. Get the auth token
      const token = localStorage.getItem('token'); 
      if (!token) throw new Error('Not authenticated');

      // 2. Create FormData object for the file and text data
      const dataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        // Only append if the value exists
        if (formData[key] !== null && formData[key] !== undefined) {
          dataToSend.append(key, formData[key]);
        }
      });

      // 3. Send the request with the Auth header
      const response = await fetch('https://the-king-backend.onrender.com/api/profile/submit', {
        method: 'POST',
        headers: {
          // Do NOT set 'Content-Type': 'multipart/form-data'. The browser does this automatically!
          'Authorization': `Bearer ${token}` 
        },
        body: dataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }

      const data = await response.json();

      // 4. Update the frontend state on success
      set((state) => ({
        // Use the updated status from the backend
        userStatus: data.userStatus, 
        view: 'overview',
        currentStep: 1,
        showTaxModal: true,
        formData: { ...state.formData, cvFile: null } // Clear file from memory
      }));

    } catch (error) {
      console.error('Error submitting profile:', error);
      set({ errors: { submit: error.message || 'Failed to submit profile. Please try again.' } });
    } finally {
      set({ loading: false });
    }
  },

 handleLegalAgree: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://the-king-backend.onrender.com/api/profile/legal-agree', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to accept agreement');

      // Update local state to reflect the successful database update
      set((state) => ({
        userStatus: { ...state.userStatus, legalAgreed: true },
        showLegalModal: false
      }));
    } catch (error) {
      console.error('Error accepting legal agreement:', error);
    } finally {
      set({ loading: false });
    }
  }
}));