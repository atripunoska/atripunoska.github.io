import { useContactForm } from '../../hooks/useContactForm';

export function ContactForm() {
  const {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    formEndpointConfigured,
  } = useContactForm();

  if (status === 'success') {
    return (
      <div className='bg-bg-raised border border-line rounded-[18px] p-7 shadow-[var(--shadow)] text-center py-16'>
        <div className='w-[46px] h-[46px] rounded-full bg-fg text-bg grid place-items-center mx-auto mb-4'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            width='20'
            height='20'
          >
            <path d='M5 12l5 5L20 7' />
          </svg>
        </div>
        <p className='text-lg'>
          Message received — <em className='font-serif italic'>thank you</em>.
        </p>
        <p className='text-fg-muted text-sm mt-2'>
          I'll write back within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-bg-raised border border-line rounded-[18px] p-7 shadow-[var(--shadow)]'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='contact-name'
            className='font-mono text-[11px] tracking-[0.08em] uppercase text-fg-muted flex justify-between'
          >
            Name
            {errors.name && (
              <span className='text-danger' id='contact-name-error'>
                {errors.name}
              </span>
            )}
          </label>
          <input
            id='contact-name'
            type='text'
            name='name'
            autoComplete='name'
            placeholder='Your name'
            value={values.name}
            onChange={handleChange('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={`bg-transparent border-0 border-b py-2.5 font-inherit text-fg transition-colors
              focus-visible:outline-none focus-visible:border-fg focus-visible:ring-2 focus-visible:ring-fg/30 focus-visible:rounded-sm
              ${errors.name ? 'border-danger' : 'border-line-strong'}`}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='contact-email'
            className='font-mono text-[11px] tracking-[0.08em] uppercase text-fg-muted flex justify-between'
          >
            Email
            {errors.email && (
              <span className='text-danger' id='contact-email-error'>
                {errors.email}
              </span>
            )}
          </label>
          <input
            id='contact-email'
            type='email'
            name='email'
            autoComplete='email'
            placeholder='you@domain.com'
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`bg-transparent border-0 border-b py-2.5 font-inherit text-fg transition-colors
              focus-visible:outline-none focus-visible:border-fg focus-visible:ring-2 focus-visible:ring-fg/30 focus-visible:rounded-sm
              ${errors.email ? 'border-danger' : 'border-line-strong'}`}
          />
        </div>
      </div>

      <div className='flex flex-col gap-1.5 mt-4'>
        <label
          htmlFor='contact-message'
          className='font-mono text-[11px] tracking-[0.08em] uppercase text-fg-muted flex justify-between'
        >
          What are you working on?
          {errors.message && (
            <span className='text-danger' id='contact-message-error'>
              {errors.message}
            </span>
          )}
        </label>
        <textarea
          id='contact-message'
          name='message'
          placeholder='A paragraph or two is plenty.'
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? 'contact-message-error' : undefined
          }
          rows={5}
          className={`bg-transparent border-0 border-b py-2.5 font-inherit text-fg resize-none transition-colors
            focus-visible:outline-none focus-visible:border-fg focus-visible:ring-2 focus-visible:ring-fg/30 focus-visible:rounded-sm
            ${errors.message ? 'border-danger' : 'border-line-strong'}`}
        />
      </div>

      <div className='flex justify-between items-center gap-4 mt-5'>
        {status === 'error' && (
          <span className='font-mono text-[11px] text-danger' role='alert'>
            {formEndpointConfigured
              ? 'Something went wrong — try again, or email me directly.'
              : 'Form not wired up yet — see TODO in useContactForm.ts'}
          </span>
        )}

        <button
          type='submit'
          disabled={status === 'submitting'}
          className='ml-auto inline-flex items-center gap-2 bg-fg text-bg border border-fg rounded-default px-5 py-3.5 transition-colors hover:bg-accent hover:text-accent-ink hover:border-accent disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
        >
          <span>{status === 'submitting' ? 'Sending…' : 'Send message'}</span>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.8'
            className='w-4 h-4'
          >
            <path d='M5 12h14m0 0l-6-6m6 6l-6 6' />
          </svg>
        </button>
      </div>
    </form>
  );
}
