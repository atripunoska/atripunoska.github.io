import type { ContactFormValues, ContactFormErrors } from '../types/contact';

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = 'required';

  if (!values.email.trim()) {
    errors.email = 'required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'invalid';
  }

  if (!values.message.trim()) errors.message = 'required';

  return errors;
}
