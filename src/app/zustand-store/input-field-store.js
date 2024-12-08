import { create } from 'zustand';

export const useInputFieldStore = create((set) => ({
  inputFieldDataState: [],

  setInputFieldDataState: (payload) =>
    set(() => ({
      inputFieldDataState: payload,
    })),
}));
