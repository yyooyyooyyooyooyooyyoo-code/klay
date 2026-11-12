export function SiteBackground() {
  const bars = Array.from({ length: 15 });

  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__bars">
        {bars.map((_, index) => (
          <span
            key={index}
            className="site-background__bar"
            style={{
              '--bar-height': `${30 + Math.abs(index - 7) * 10}%`,
              '--bar-delay': `${index * 0.1}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
