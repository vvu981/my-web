"use client";

import type { ContactDictionary } from '../../i18n/contact';
import { useContactForm } from './useContactForm';

type ContactFormProps = {
  copy: ContactDictionary['form'];
};

export function ContactForm({ copy }: Readonly<ContactFormProps>) {
  const { values, fieldErrors, submitState, isSubmitting, hasErrors, handleChange, handleSubmit } = useContactForm({ copy });

  return (
    <section className="contact-form-shell">
      <div className="card contact-form-card">
        <span className="section-label">{copy.tag}</span>

        <form className="contact-form-grid" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="fullName" className="contact-label">
              {copy.fullNameLabel}
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange('fullName')}
              placeholder={copy.fullNamePlaceholder}
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
              className="contact-control"
            />
            {fieldErrors.fullName ? <p id="fullName-error" className="contact-field-error">{fieldErrors.fullName}</p> : null}
          </div>

          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              {copy.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              placeholder={copy.emailPlaceholder}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
              className="contact-control"
            />
            {fieldErrors.email ? <p id="email-error" className="contact-field-error">{fieldErrors.email}</p> : null}
          </div>

          <div className="contact-field">
            <label htmlFor="challengeType" className="contact-label">
              {copy.challengeTypeLabel}
            </label>
            <select
              id="challengeType"
              name="challengeType"
              value={values.challengeType}
              onChange={handleChange('challengeType')}
              aria-invalid={Boolean(fieldErrors.challengeType)}
              aria-describedby={fieldErrors.challengeType ? 'challengeType-error' : undefined}
              className="contact-control contact-control-select"
            >
              <option value="">{copy.challengeTypePlaceholder}</option>
              {copy.challengeTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.challengeType ? (
              <p id="challengeType-error" className="contact-field-error">{fieldErrors.challengeType}</p>
            ) : null}
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">
              {copy.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange('message')}
              placeholder={copy.messagePlaceholder}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              rows={6}
              className="contact-control contact-control-textarea"
            />
            {fieldErrors.message ? <p id="message-error" className="contact-field-error">{fieldErrors.message}</p> : null}
          </div>

          <div className="contact-submit-row">
            <button
              type="submit"
              className="btn-primary contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? copy.loadingLabel : copy.submitLabel}
            </button>

            {submitState === 'success' ? (
              <output className="contact-status contact-status-success" aria-live="polite">
                {copy.successMessage}
              </output>
            ) : null}

            {submitState === 'error' && !hasErrors ? (
              <p className="contact-status contact-status-error" role="alert">
                {copy.errorMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
