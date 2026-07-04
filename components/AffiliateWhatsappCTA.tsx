"use client";

import { useMemo, useState } from "react";
import { contactConfig } from "@/data/contact";

type Market = keyof typeof contactConfig;

type AffiliateWhatsappCTAProps = {
  market?: Market;
  variant?: "default" | "floating";
};

const buttonText = "DESEO CONOCER MÁS INFORMACIÓN DE CÓMO AFILIARME";

export function AffiliateWhatsappCTA({
  market = "colombia",
  variant = "default"
}: AffiliateWhatsappCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const channel = contactConfig[market];

  const whatsappUrl = useMemo(() => {
    if (!channel.whatsappNumber) return null;
    return `https://wa.me/${channel.whatsappNumber}?text=${encodeURIComponent(
      channel.affiliateMessage
    )}`;
  }, [channel.affiliateMessage, channel.whatsappNumber]);

  function handleClick() {
    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    setIsOpen(true);
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(channel.affiliateMessage);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div
      className={
        variant === "floating"
          ? "fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)] sm:max-w-sm"
          : "relative"
      }
    >
      <button
        type="button"
        onClick={handleClick}
        className={
          variant === "floating"
            ? "inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-xs font-semibold text-linen shadow-soft transition hover:bg-olive-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-linen sm:text-sm"
            : "button-primary w-full sm:w-auto"
        }
      >
        {buttonText}
      </button>

      {isOpen ? (
        <div
          className={
            variant === "floating"
              ? "mt-3 rounded-lg border border-ink/10 bg-white p-4 text-left shadow-xl"
              : "mt-4 max-w-xl rounded-lg border border-ink/10 bg-white p-5 text-left shadow-soft"
          }
          role="status"
        >
          <p className="text-sm font-semibold text-ink">
            El canal oficial de WhatsApp está pendiente de configuración.
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Pronto podrás solicitar acompañamiento personalizado desde aquí.
          </p>
          <div className="mt-4 rounded-lg border border-olive/20 bg-linen/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coffee">
              Mensaje listo para copiar
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/75">
              {channel.affiliateMessage}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copyMessage}
              className="button-secondary px-5 py-2 text-xs"
            >
              {copied ? "Mensaje copiado" : "Copiar mensaje"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-ink/60 transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 focus:ring-offset-linen"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
