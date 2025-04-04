
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/browser";
import App from './App.tsx'
import './index.css'

// Initialize Sentry
Sentry.init({
  dsn: "https://4c33de1bc4664e03f1f8ee497c7cc592@o4509065806282752.ingest.us.sentry.io/4509065807134720",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions in development, adjust in production
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate for all sessions (10%)
  replaysOnErrorSampleRate: 1.0, // Sample rate for sessions with errors (100%)
  environment: import.meta.env.MODE, // Sets the environment (development/production)
  enabled: import.meta.env.PROD, // Only enable in production by default
});

// Create a Sentry wrapped version of App with error boundary
const SentryApp = Sentry.withErrorBoundary(App, {
  fallback: (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <div className="max-w-md mx-auto">
        <img src="/sponsors/sentry.svg" alt="Error occurred" className="h-10 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-4 text-muted-foreground">
          The application encountered an error. Our team has been notified.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          Refresh the page
        </button>
      </div>
    </div>
  ),
});

createRoot(document.getElementById("root")!).render(<SentryApp />);
