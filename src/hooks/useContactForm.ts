import { useState, type ChangeEvent, type FormEvent } from 'react';
import type {
  ContactFormValues,
  ContactFormErrors,
  ContactFormStatus,
} from '../types/contact';
import { validateContactForm } from '../lib/validateContactForm';
import { trackEvent } from '../lib/analytics';

const FORM_ENDPOINT = 'https://formspree.io/f/meebqgpb';

const initialValues: ContactFormValues = { name: '', email: '', message: '' };

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // clear that field's error as soon as the person starts fixing it
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      console.warn(
        'FORM_ENDPOINT is not set — see the TODO in useContactForm.ts',
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Submission failed');
      trackEvent('contact', 'submit_success');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    formEndpointConfigured: Boolean(FORM_ENDPOINT),
  };
}
