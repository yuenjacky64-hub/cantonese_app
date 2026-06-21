import * as Sentry from '@sentry/react';

/**
 * Initialize Sentry runtime error tracking.
 *
 * No-op unless `VITE_SENTRY_DSN` is set at build time. Local dev and
 * preview builds don't need a DSN; CI/production builds inject one
 * via repo secrets so prod crashes are visible without noisy dev
 * traffic.
 *
 * The release tag pulls from the existing `__BUILD_INFO__` global
 * that vite.config.ts defines so Sentry can group errors by commit.
 */
export const initSentry = (): void => {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;

  const buildInfo = (globalThis as unknown as { __BUILD_INFO__?: { hash?: string } }).__BUILD_INFO__;

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    release: buildInfo?.hash,
    // Don't ship sessions/breadcrumbs unless we explicitly add an
    // integration — this keeps the bundle smaller and avoids any
    // surprise PII capture.
    tracesSampleRate: 0,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    // Filter the noisy fallback chain — the audio path tries Cloud
    // TTS and Google Translate, and a single user can produce many
    // CORS/abort errors per session that aren't actionable.
    beforeSend(event, hint) {
      const err = hint.originalException;
      const msg = typeof err === 'string' ? err : (err as Error)?.message ?? '';
      if (/Local audio not found|Audio playback failed|Interrupted/i.test(msg)) {
        return null;
      }
      return event;
    },
  });
};

export const SentryErrorBoundary = Sentry.ErrorBoundary;
