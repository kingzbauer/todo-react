export function apiHost() {
  return typeof window === undefined ? process.env.apiHost: process.env.cliApiHost;
}
