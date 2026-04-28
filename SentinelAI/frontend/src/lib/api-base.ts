const rawApiBaseUrl = (import.meta.env.VITE_API_URL || '/api').trim();

export const API_BASE_URL =
  rawApiBaseUrl.length > 0 ? rawApiBaseUrl.replace(/\/+$/, '') : '/api';

export function buildApiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
