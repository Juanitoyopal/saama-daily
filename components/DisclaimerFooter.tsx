import { legalDisclaimer } from "@/data/legal";

type DisclaimerFooterProps = {
  className?: string;
};

export function DisclaimerFooter({ className = "text-ink/60" }: DisclaimerFooterProps) {
  return (
    <p className={`max-w-4xl text-xs leading-6 ${className}`}>
      {legalDisclaimer}
    </p>
  );
}
