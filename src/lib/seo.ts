export function getBaseUrl() {
  // Usa variable d'entorn si existeix; si no, cau a localhost.
  // Recorda: les variables NEXT_PUBLIC_* estan disponibles al client,
  // però això només s'usa al servidor (layout, route handlers).
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  // Normalitza traient la barra final si n'hi ha
  return base.replace(/\/+$/, "");
}
