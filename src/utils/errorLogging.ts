
import * as Sentry from "@sentry/react";

/**
 * Log an error to Sentry with optional context
 */
export const logError = (error: Error | string, context?: Record<string, any>) => {
  if (typeof error === 'string') {
    Sentry.captureMessage(error, { 
      level: "error",
      ...(context && { extra: context })
    });
  } else {
    Sentry.captureException(error, { 
      ...(context && { extra: context })
    });
  }
};

/**
 * Set user information for Sentry tracking
 */
export const setUserContext = (user: { id?: string; email?: string; username?: string } | null) => {
  Sentry.setUser(user);
};

/**
 * Add breadcrumb to track user actions
 */
export const addBreadcrumb = (message: string, category?: string, level?: Sentry.SeverityLevel) => {
  Sentry.addBreadcrumb({
    message,
    category: category || 'user-action',
    level: level || 'info',
  });
};

/**
 * Start a Sentry transaction for performance monitoring
 */
export const startTransaction = (name: string, op: string) => {
  return Sentry.startTransaction({ name, op });
};
