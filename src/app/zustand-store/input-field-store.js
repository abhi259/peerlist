import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useInputFieldStore = create((set) => ({
  inputFieldDataState: [],
  formTitle: '',

  setInputFieldDataState: (payload) =>
    set(() => ({
      inputFieldDataState: payload,
    })),

  setFormTitle: (payload) =>
    set(() => ({
      formTitle: payload,
    })),
}));

export const useSaveAsDraftStore = create(
  persist(
    (set) => ({
      saveAsDraftState: [],
      setSaveAsDraftState: (payload) =>
        set(() => ({
          saveAsDraftState: payload,
        })),
    }),
    {
      name: 'draft-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const usePublishedStore = create(
  persist(
    (set) => ({
      publishedForms: {},
      setPublishedForms: (payload) =>
        set(() => ({
          publishedForms: payload,
        })),
    }),
    {
      name: 'published-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
