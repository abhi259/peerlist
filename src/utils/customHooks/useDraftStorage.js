import { useState, useEffect } from 'react';
import {
  useInputFieldStore,
  useSaveAsDraftStore,
} from '@/zustand-store/input-field-store';

const useDraftStorage = () => {
  const {
    inputFieldDataState,
    setInputFieldDataState,
    formTitle,
    setFormTitle,
  } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();

  useEffect(() => {
    const draftData = localStorage.getItem('draft-storage');
    const parsedData = JSON.parse(draftData);
    const tempSaveAsDraftState = parsedData?.state?.saveAsDraftState;

    if (tempSaveAsDraftState?.formData?.length > 0) {
      setInputFieldDataState(tempSaveAsDraftState.formData);
      setFormTitle(tempSaveAsDraftState.formTitle);
      setSaveAsDraftState(tempSaveAsDraftState);
    }
  }, []);
};

export default useDraftStorage;
