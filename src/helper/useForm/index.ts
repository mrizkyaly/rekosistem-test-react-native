import {useState} from 'react';

type FormValue = {
  [key: string]: any;
};

type FormSetter = (formType: string, formValue: any) => void;

type useFormReturn = [FormValue, FormSetter];

const useForm = (initialValue: FormValue): useFormReturn => {
  const [form, setForm] = useState<FormValue>(initialValue);

  const handleFormChange: FormSetter = (formType, formValue) => {
    if (formType === 'reset') {
      setForm(initialValue);
    } else {
      setForm({...form, [formType]: formValue});
    }
  };

  return [form, handleFormChange];
};

export default useForm;
