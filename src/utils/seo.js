export const SITE_URL = "https://deepak-engineer.vercel.app";
export const SITE_NAME = "Deepak S — Electrical Design & Industrial Automation Engineer";

export function buildMeta({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | Deepak S` : SITE_NAME;
  return {
    title: fullTitle,
    description,
    url: `${SITE_URL}${path}`,
  };
}
