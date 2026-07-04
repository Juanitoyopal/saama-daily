"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { externalLinks } from "@/data/externalLinks";

type ExternalPurchaseDialogProps = {
  triggerLabel?: string;
  triggerClassName?: string;
};

export function ExternalPurchaseDialog({
  triggerLabel = "Quiero comprar en el sitio oficial",
  triggerClassName = "button-primary"
}: ExternalPurchaseDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      triggerButtonRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cancelButtonRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDialog();
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const elements = Array.from(focusableElements ?? []).filter(
          (element) => !element.hasAttribute("disabled")
        );

        if (elements.length === 0) {
          return;
        }

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeDialog, isOpen]);

  function continueToStore() {
    window.open(externalLinks.colombiaStore, "_blank", "noopener,noreferrer");
    closeDialog();
  }

  return (
    <>
      <button
        className={triggerClassName}
        onClick={() => setIsOpen(true)}
        ref={triggerButtonRef}
        type="button"
      >
        {triggerLabel}
      </button>

      {isOpen ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-ink/50 px-4 py-8"
          role="dialog"
        >
          <div
            className="w-full max-w-lg rounded-lg border border-ink/10 bg-linen p-6 shadow-2xl sm:p-8"
            ref={dialogRef}
          >
            <p className="eyebrow">Compra externa</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink" id={titleId}>
              Continuar al sitio oficial de compra
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              Estás siendo dirigido al micrositio oficial de Saama Daily dentro de
              Gano Excel Colombia. Allí podrás buscar el producto que estabas
              consultando, seleccionar otros productos y completar directamente tu
              compra.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              La compra, el pago, la confirmación del pedido y el despacho se
              realizan en la plataforma externa de Gano Excel Colombia y están
              sujetos a sus condiciones.
            </p>
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                className="button-secondary"
                onClick={closeDialog}
                ref={cancelButtonRef}
                type="button"
              >
                Cancelar
              </button>
              <button className="button-primary" onClick={continueToStore} type="button">
                Continuar al sitio oficial
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
