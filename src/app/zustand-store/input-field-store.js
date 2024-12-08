import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useInputFieldStore = create(
  persist(
    (set) => ({
      inputFieldDataState: [],

      setInputFieldDataState: (payload) =>
        set(() => ({
          inputFieldDataState: payload,
        })),

      saveAsDraftState: [],

      setSaveAsDraft: (payload) =>
        set(() => ({
          saveAsDraftState: payload,
        })),
    }),
    {
      name: 'draft-data',
      partialize: (state) => ({ saveAsDraftState: state.saveAsDraftState }),
    }
  )
);
