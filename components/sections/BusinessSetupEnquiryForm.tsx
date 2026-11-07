'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  'Business Setup / Company Formation',
  'Mainland Company Formation',
  'Free Zone Company Formation',
  'Offshore Company Formation',
  'Golden Visa',
  'Other Services',
];

const countries = [
  'Australia',
  'Canada',
  'France',
  'Germany',
  'India',
  'Italy',
  'Pakistan',
  'Saudi Arabia',
  'Singapore',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
];

const inputClassName =
  'mt-2 min-h-12 w-full rounded-xl border border-[#E5E9E2] bg-white px-4 py-3 text-sm text-[#151515] outline-none focus:border-[#709260] focus:ring-2 focus:ring-[#709260]/20';

export function BusinessSetupEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-[#E5E9E2] bg-white p-5 sm:p-7">
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#426B3C]">
          Your next step
        </p>
        <h3 className="mt-2 font-serif text-2xl font-medium text-[#151515] sm:text-3xl">
          Send Us a Message
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-describedby="business-form-status">
        <label className="block text-sm font-medium text-[#151515]">
          Your Name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-[#151515]">
          Your Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email address"
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-[#151515] sm:col-span-2">
          Subject
          <input
            required
            name="subject"
            placeholder="Enter the subject"
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-[#151515]">
          Phone No.
          <span className="mt-2 flex min-h-12 overflow-hidden rounded-xl border border-[#E5E9E2] bg-white focus-within:border-[#709260] focus-within:ring-2 focus-within:ring-[#709260]/20">
            <select
              name="countryCode"
              aria-label="Phone country calling code"
              defaultValue="+91"
              className="w-[5.5rem] shrink-0 border-r border-[#E5E7EB] bg-transparent px-3 text-sm text-[#151515] outline-none"
            >
              <option value="+91">+91</option>
              <option value="+971">+971</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+92">+92</option>
              <option value="+966">+966</option>
              <option value="+65">+65</option>
            </select>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel-national"
              placeholder="Phone number"
              pattern="[0-9\s()-]{6,20}"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#151515] outline-none"
            />
          </span>
        </label>
        <label className="block text-sm font-medium text-[#151515]">
          Country
          <input
            required
            name="country"
            autoComplete="country-name"
            list="business-setup-countries"
            placeholder="Please choose an option"
            className={inputClassName}
          />
          <datalist id="business-setup-countries">
            {countries.map((country) => <option key={country} value={country} />)}
          </datalist>
        </label>
        <label className="block text-sm font-medium text-[#151515] sm:col-span-2">
          Services
          <select required name="service" defaultValue="" className={inputClassName}>
            <option value="" disabled>Please choose an option</option>
            {services.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-[#151515] sm:col-span-2">
          Your Message*
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell us about your business plans."
            className={`${inputClassName} min-h-32 resize-y`}
          />
        </label>
        <label className="sr-only" aria-hidden="true">
          Please leave this field empty
          <input
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0C2D48] px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426B3C] sm:col-span-2"
        >
          Send Your Enquiry <ArrowUpRight className="h-4 w-4 text-[#BFD8B1]" aria-hidden="true" />
        </button>

        <p
          id="business-form-status"
          role={submitted ? 'alert' : 'status'}
          className="text-xs leading-relaxed text-[#656565] sm:col-span-2"
        >
          {submitted
            ? 'This form is not connected to a submission service yet. Please email info@klayconsultants.com or call +971 56 229 2260.'
            : 'Please leave the spam-check field empty. Form submission is currently unavailable; no details will be sent from this form.'}
        </p>
      </form>
    </div>
  );
}
