"use client";

import { useMemo, useState } from "react";
import { contactConfig } from "@/data/contact";

type CountryOption = "colombia" | "usa";

type FormState = {
  fullName: string;
  country: CountryOption | "";
  city: string;
  whatsapp: string;
  email: string;
  requestType: string;
  category: string;
  product: string;
  message: string;
  authorization: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const requestOptions = [
  "Quiero comprar",
  "Quiero asesoría sobre productos",
  "Quiero acceder al precio afiliado",
  "Quiero información para emprender"
];

const categoryOptions = [
  "Cafés",
  "Bebidas funcionales",
  "Suplementos",
  "Cuidado personal",
  "No estoy seguro"
];

const initialFormState: FormState = {
  fullName: "",
  country: "",
  city: "",
  whatsapp: "",
  email: "",
  requestType: "",
  category: "",
  product: "",
  message: "",
  authorization: false
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getCountryLabel(country: CountryOption | "") {
  if (country === "usa") {
    return "United States";
  }

  if (country === "colombia") {
    return "Colombia";
  }

  return "";
}

function buildAdviceMessage(form: FormState) {
  const countryLabel = getCountryLabel(form.country);
  const email = form.email.trim();
  const product = form.product.trim();
  const message = form.message.trim();

  if (form.country === "usa") {
    return [
      `Hello, my name is ${form.fullName.trim()}.`,
      "",
      `Country: ${countryLabel}`,
      `City: ${form.city.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Email: ${email || "Not provided"}`,
      `Request type: ${form.requestType}`,
      `Category of interest: ${form.category}`,
      `Product of interest: ${product || "Not specified"}`,
      `Message: ${message || "Not provided"}`,
      "",
      "I would like personalized guidance from Saama Daily."
    ].join("\n");
  }

  return [
    `Hola, soy ${form.fullName.trim()}.`,
    "",
    `País: ${countryLabel}`,
    `Ciudad: ${form.city.trim()}`,
    `WhatsApp: ${form.whatsapp.trim()}`,
    `Correo: ${email || "No informado"}`,
    `Tipo de solicitud: ${form.requestType}`,
    `Categoría de interés: ${form.category}`,
    `Producto de interés: ${product || "No especificado"}`,
    `Mensaje: ${message || "No informado"}`,
    "",
    "Deseo recibir asesoría personalizada de Saama Daily."
  ].join("\n");
}

function validateForm(form: FormState) {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Escribe tu nombre completo.";
  }

  if (!form.country) {
    errors.country = "Selecciona tu país.";
  }

  if (!form.city.trim()) {
    errors.city = "Escribe tu ciudad.";
  }

  if (!form.whatsapp.trim()) {
    errors.whatsapp = "Escribe tu número de WhatsApp.";
  }

  if (form.email.trim() && !isValidEmail(form.email.trim())) {
    errors.email = "Escribe un correo electrónico válido.";
  }

  if (!form.requestType) {
    errors.requestType = "Selecciona el tipo de solicitud.";
  }

  if (!form.category) {
    errors.category = "Selecciona una categoría de interés.";
  }

  if (!form.authorization) {
    errors.authorization = "Debes aceptar ser contactado por Saama Daily.";
  }

  return errors;
}

export function PersonalizedAdviceForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const selectedContact =
    form.country === "usa" ? contactConfig.usa : contactConfig.colombia;
  const generatedMessage = useMemo(() => buildAdviceMessage(form), [form]);
  const hasWhatsappNumber = Boolean(selectedContact.whatsappNumber);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
    setCopyStatus("");
  }

  function validateAndPreview() {
    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setHasSubmitted(true);
    setCopyStatus("");
    return Object.keys(nextErrors).length === 0;
  }

  async function copyMessage() {
    if (!validateAndPreview()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopyStatus("Mensaje copiado.");
    } catch {
      setCopyStatus("No se pudo copiar automáticamente. Puedes seleccionar y copiar el mensaje manualmente.");
    }
  }

  function sendToWhatsapp() {
    if (!validateAndPreview() || !selectedContact.whatsappNumber) {
      return;
    }

    const whatsappUrl = `https://wa.me/${selectedContact.whatsappNumber}?text=${encodeURIComponent(
      generatedMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const shouldShowPreview = hasSubmitted && Object.keys(errors).length === 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="rounded-lg border border-ink/10 bg-white/80 p-5 shadow-soft sm:p-7"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          validateAndPreview();
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-ink" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              aria-invalid={Boolean(errors.fullName)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="fullName"
              name="fullName"
              onChange={(event) => updateField("fullName", event.target.value)}
              value={form.fullName}
            />
            {errors.fullName ? (
              <p className="mt-2 text-sm text-red-700" id="fullName-error">
                {errors.fullName}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="country">
              País
            </label>
            <select
              aria-describedby={errors.country ? "country-error" : undefined}
              aria-invalid={Boolean(errors.country)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="country"
              name="country"
              onChange={(event) => updateField("country", event.target.value as CountryOption)}
              value={form.country}
            >
              <option value="">Selecciona tu país</option>
              <option value="colombia">Colombia</option>
              <option value="usa">United States</option>
            </select>
            {errors.country ? (
              <p className="mt-2 text-sm text-red-700" id="country-error">
                {errors.country}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="city">
              Ciudad
            </label>
            <input
              aria-describedby={errors.city ? "city-error" : undefined}
              aria-invalid={Boolean(errors.city)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="city"
              name="city"
              onChange={(event) => updateField("city", event.target.value)}
              value={form.city}
            />
            {errors.city ? (
              <p className="mt-2 text-sm text-red-700" id="city-error">
                {errors.city}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="whatsapp">
              Número de WhatsApp
            </label>
            <input
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
              aria-invalid={Boolean(errors.whatsapp)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="whatsapp"
              name="whatsapp"
              onChange={(event) => updateField("whatsapp", event.target.value)}
              type="tel"
              value={form.whatsapp}
            />
            {errors.whatsapp ? (
              <p className="mt-2 text-sm text-red-700" id="whatsapp-error">
                {errors.whatsapp}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="email">
              Correo electrónico opcional
            </label>
            <input
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={Boolean(errors.email)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="email"
              name="email"
              onChange={(event) => updateField("email", event.target.value)}
              type="email"
              value={form.email}
            />
            {errors.email ? (
              <p className="mt-2 text-sm text-red-700" id="email-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="requestType">
              Tipo de solicitud
            </label>
            <select
              aria-describedby={errors.requestType ? "requestType-error" : undefined}
              aria-invalid={Boolean(errors.requestType)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="requestType"
              name="requestType"
              onChange={(event) => updateField("requestType", event.target.value)}
              value={form.requestType}
            >
              <option value="">Selecciona una opción</option>
              {requestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.requestType ? (
              <p className="mt-2 text-sm text-red-700" id="requestType-error">
                {errors.requestType}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="category">
              Categoría de interés
            </label>
            <select
              aria-describedby={errors.category ? "category-error" : undefined}
              aria-invalid={Boolean(errors.category)}
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="category"
              name="category"
              onChange={(event) => updateField("category", event.target.value)}
              value={form.category}
            >
              <option value="">Selecciona una categoría</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.category ? (
              <p className="mt-2 text-sm text-red-700" id="category-error">
                {errors.category}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-ink" htmlFor="product">
              Producto de interés
            </label>
            <input
              className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="product"
              name="product"
              onChange={(event) => updateField("product", event.target.value)}
              placeholder="Opcional"
              value={form.product}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-ink" htmlFor="message">
              Mensaje o necesidad
            </label>
            <textarea
              className="mt-2 min-h-32 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30"
              id="message"
              name="message"
              onChange={(event) => updateField("message", event.target.value)}
              value={form.message}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 rounded-lg border border-ink/10 bg-linen/80 p-4 text-sm leading-6 text-ink/70">
              <input
                aria-describedby={errors.authorization ? "authorization-error" : undefined}
                aria-invalid={Boolean(errors.authorization)}
                checked={form.authorization}
                className="mt-1 h-4 w-4 accent-olive"
                onChange={(event) => updateField("authorization", event.target.checked)}
                type="checkbox"
              />
              <span>
                Acepto ser contactado por Saama Daily para recibir respuesta a mi
                solicitud de orientación.
              </span>
            </label>
            {errors.authorization ? (
              <p className="mt-2 text-sm text-red-700" id="authorization-error">
                {errors.authorization}
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-ink/70">
          Usaremos la información suministrada únicamente para responder tu solicitud
          de orientación. No solicitamos datos médicos ni información sensible de
          salud.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button className="button-primary" type="submit">
            Generar mensaje
          </button>
          <button className="button-secondary" onClick={copyMessage} type="button">
            Copiar mensaje
          </button>
          <button
            className="button-secondary cursor-not-allowed opacity-70"
            disabled={!hasWhatsappNumber}
            onClick={sendToWhatsapp}
            type="button"
          >
            {hasWhatsappNumber ? "Enviar por WhatsApp" : "Enviar por WhatsApp — pendiente"}
          </button>
        </div>

        {copyStatus ? <p className="mt-4 text-sm font-semibold text-olive-dark">{copyStatus}</p> : null}
      </form>

      <aside className="rounded-lg border border-ink/10 bg-linen/85 p-5 shadow-soft sm:p-7">
        <p className="eyebrow">{selectedContact.displayLabel}</p>
        <h2 className="mt-4 text-2xl font-semibold text-ink">Vista previa</h2>
        <p className="mt-4 text-sm leading-6 text-ink/70">
          El canal de WhatsApp está pendiente de configuración. Tu información
          permanecerá en el formulario hasta que el canal oficial esté disponible.
        </p>
        <div className="mt-5 rounded-lg border border-ink/10 bg-white/80 p-4">
          {shouldShowPreview ? (
            <pre className="whitespace-pre-wrap text-sm leading-6 text-ink">{generatedMessage}</pre>
          ) : (
            <p className="text-sm leading-6 text-ink/70">
              Completa los campos obligatorios y genera el mensaje para revisar la
              solicitud organizada.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
