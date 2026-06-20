interface SkillChipProps {
  label: string;
  primary?: boolean;
}

export function SkillChip({ label, primary = false }: SkillChipProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-full text-[13px] border transition-all duration-200 cursor-default hover:-translate-y-px ${
        primary
          ? 'bg-fg text-bg border-fg'
          : 'bg-bg-raised text-fg border-line hover:border-fg-muted'
      }`}
    >
      {label}
    </span>
  );
}
