import { create } from 'zustand';

export const useProfileStore = create((set, get) => ({
  // --- STATE ---
  view: 'overview',
  currentStep: 1,
  showLegalModal: false,
  loading: false,
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ userStatus: { profileComplete: false, dataReviewed: true, legalAgreed: false } });
    } catch (error) {
      console.error('Error fetching user status:', error);
    } finally {
      set({ loading: false });
    }
  },

  handleSubmit: async () => {
    const { validateStep } = get();
    if (!validateStep(3)) return;

    set({ loading: true });
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      set((state) => ({
        userStatus: { ...state.userStatus, profileComplete: true },
        view: 'overview',
        currentStep: 1
      }));
    } catch (error) {
      console.error('Error submitting profile:', error);
      set({ errors: { submit: 'Failed to submit profile. Please try again.' } });
    } finally {
      set({ loading: false });
    }
  },

  handleLegalAgree: async () => {
    set({ loading: true });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
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