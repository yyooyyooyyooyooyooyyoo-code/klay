'use client';

import { useState, useMemo } from 'react';
import { CALCULATOR_OPTIONS } from '@/lib/data';
import { Calculator, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-card';
import { LiquidButton } from '@/components/ui/liquid-button';
import { ROUTES } from '@/src/config/routes';
import { useNavigate } from 'react-router-dom';

export function SetupCalculator() {
  const navigate = useNavigate();
  const [jurisdiction, setJurisdiction] = useState(CALCULATOR_OPTIONS.jurisdiction[1].value);
  const [activity, setActivity] = useState(CALCULATOR_OPTIONS.activities[1].value);
  const [visaCount, setVisaCount] = useState(2);

  const total = useMemo(() => {
    const juris = CALCULATOR_OPTIONS.jurisdiction.find((j) => j.value === jurisdiction)!;
    const act = CALCULATOR_OPTIONS.activities.find((a) => a.value === activity)!;
    const visaCost = juris.visaCost * Math.max(0, visaCount - 1);
    return juris.baseCost + act.cost + visaCost;
  }, [jurisdiction, activity, visaCount]);

  return (
    <GlassPanel variant="light" className="border border-gray-200 !bg-white p-6 shadow-glass-lg sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center">
          <Calculator className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Setup Cost Calculator</h3>
          <p className="text-xs text-black">Estimate your initial investment</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-black mb-2">Jurisdiction</label>
          <div className="grid grid-cols-3 gap-2">
            {CALCULATOR_OPTIONS.jurisdiction.map((j) => (
              <button
                key={j.value}
                onClick={() => setJurisdiction(j.value)}
                aria-pressed={jurisdiction === j.value}
                className={`site-button site-button--choice px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  jurisdiction === j.value
                    ? 'border-gold-500/45 text-black ring-1 ring-gold-500/20'
                    : 'text-black'
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">Business Activity</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-cream border border-navy-800/10 text-sm text-black focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
          >
            {CALCULATOR_OPTIONS.activities.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label} (+AED {a.cost.toLocaleString()})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Residency Visas: <span className="text-palette-gold font-semibold">{visaCount}</span>
          </label>
          <input
            type="range"
            min={1}
            max={4}
            value={visaCount}
            onChange={(e) => setVisaCount(Number(e.target.value))}
            className="w-full accent-gold-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-black mt-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>

        <div className="pt-4 border-t border-navy-800/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-black">Estimated Total</span>
            <span className="text-3xl font-bold text-gradient-navy">
              AED {total.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-black mb-4">
            This is an indicative estimate only. Final costs depend on specific license, activity, and government fees. Contact us for a tailored quote.
          </p>
          <LiquidButton variant="navy" size="sm" className="w-full" icon={<ArrowRight className="w-4 h-4" />} onClick={() => navigate(ROUTES.contact)}>
            Get a Detailed Quote
          </LiquidButton>
        </div>
      </div>
    </GlassPanel>
  );
}