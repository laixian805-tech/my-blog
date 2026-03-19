import { execSync } from 'child_process'

export function getLastUpdated() {
  try {
    return execSync('git log -1 --format=%cs', {
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    }).trim()
  } catch {
    return process.env.NEXT_PUBLIC_LAST_UPDATED || '2026-03-19'
  }
}
