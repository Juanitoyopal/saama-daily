import Link from "next/link";

export function WhatsAppSupportButton() {
  return (
    <Link
      aria-label="Ir a soporte por WhatsApp"
      className="fixed bottom-4 right-4 z-30 inline-flex h-12 items-center justify-center rounded-full bg-olive px-4 text-xs font-semibold text-white shadow-soft transition hover:bg-olive-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-linen sm:bottom-5 sm:right-5 sm:h-14 sm:px-5 sm:text-sm"
      href="/soporte"
    >
      WhatsApp
    </Link>
  );
}
