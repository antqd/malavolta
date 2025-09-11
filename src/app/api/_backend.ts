const BACKEND_URL = "http://185.229.239.141";

export async function backend(path: string, init?: RequestInit) {
  const url = `${BACKEND_URL}${path.startsWith("/") ? path : "/" + path}`;
  return fetch(url, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      ...(init?.method && init.method !== "GET"
        ? { "Content-Type": "application/json" }
        : {}),
    },
  });
}
