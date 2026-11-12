import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: '01 / 04',
    category: 'Discover',
    title: 'Tell Us Your Vision',
    description: 'Share your business idea, industry, goals and expected budget.',
    label: '01 — Discovery',
  },
  {
    number: '02 / 04',
    category: 'Strategy',
    title: 'Find Your Setup Route',
    description: 'Understand the relevant jurisdiction, structure and licensing options.',
    label: '02 — Direction',
  },
  {
    number: '03 / 04',
    category: 'Preparation',
    title: 'Prepare for Registration',
    description: 'Get guidance on required documents, application details and applicable fees.',
    label: '03 — Readiness',
  },
  {
    number: '04 / 04',
    category: 'Execution',
    title: 'Move Through the Process',
    description:
      'Proceed with the registration application and relevant formalities with the appropriate authority.',
    label: '04 — Registration',
  },
] as const;

export function BusinessSetupProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="text-[#111111]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777777]">
          {processSteps[activeStep].number}
          <span className="ml-3 font-medium tracking-normal text-[#426B3C]">
            {processSteps[activeStep].label}
          </span>
        </p>
        <p className="text-[10px] font-semibold tracking-[0.16em] text-[#426B3C]">
          PLAN · PREPARE · PROCEED
        </p>
      </div>
      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[1.05rem] hidden h-px bg-[#E6E2DA] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute left-[12.5%] top-[1.05rem] hidden h-px bg-[#709260] lg:block"
          style={{ width: `${(activeStep / (processSteps.length - 1)) * 75}%` }}
        />
        {processSteps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            aria-pressed={activeStep === index}
            aria-label={`Select step ${step.number}: ${step.category}`}
            onClick={() => setActiveStep(index)}
            onKeyDown={(event) => {
              const nextIndex =
                event.key === 'ArrowRight' || event.key === 'ArrowDown'
                  ? (index + 1) % processSteps.length
                  : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
                    ? (index - 1 + processSteps.length) % processSteps.length
                    : event.key === 'Home'
                      ? 0
                      : event.key === 'End'
                        ? processSteps.length - 1
                        : index;
              if (nextIndex !== index) {
                event.preventDefault();
                setActiveStep(nextIndex);
                document.getElementById(`business-process-step-${nextIndex}`)?.focus();
              }
            }}
            id={`business-process-step-${index}`}
            className={`relative z-10 flex min-h-full flex-col rounded-xl border px-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426B3C] sm:px-5 lg:mx-2 lg:px-4 ${
              activeStep === index
                ? 'border-[#AFC5A2] bg-[#F4F9F1]'
                : 'border-[#E5E9E2] bg-white'
            }`}
          >
            <span className="mb-5 flex items-center gap-3 lg:justify-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                  activeStep === index
                    ? 'border-[#426B3C] bg-[#426B3C] text-white'
                    : 'border-[#E6E2DA] bg-white text-[#777777]'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#777777]">
                {step.number}
              </span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#426B3C]">
              {step.category}
            </span>
            <span className="mt-2 block font-serif text-xl font-medium leading-snug text-[#111111]">
              {step.title}
            </span>
            <span className="mt-3 block flex-1 text-sm leading-6 text-[#777777]">
              {step.description}
            </span>
            <span className="mt-5 inline-flex items-center gap-2 border-t border-[#E6E2DA] pt-4 text-[10px] font-semibold tracking-[0.12em] text-[#191919]">
              {step.label} <ArrowRight className="h-3.5 w-3.5 text-[#426B3C]" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
