interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative py-16 lg:py-24 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-[#166534] bg-[#166534]/10 rounded-full mb-4 border border-[#166534]/20">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
