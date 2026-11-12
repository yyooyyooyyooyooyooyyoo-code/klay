import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-card';
import { LiquidButton } from '@/components/ui/liquid-button';
import { ROUTES } from '@/lib/routes';

export function SetupCalculator() {
  const navigate = useNavigate();

  return (
    <GlassPanel
      variant="light"
      className="flex min-h-[300px] flex-col items-start justify-center border border-gray-200 !bg-white p-6 shadow-glass-lg sm:p-8"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
        <Calculator className="h-6 w-6 text-black" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-black">Plan Your UAE Business Setup</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-black">
        Explore setup options and review the costs that need confirmation in our dedicated calculator.
      </p>
      <LiquidButton
        variant="navy"
        size="sm"
        className="mt-6 w-full"
        icon={<ArrowRight className="h-4 w-4" />}
        onClick={() => navigate(ROUTES.costCalculator)}
      >
        Open Cost Calculator
      </LiquidButton>
    </GlassPanel>
  );
}
