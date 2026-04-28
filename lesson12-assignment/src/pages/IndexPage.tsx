import { useState } from "react";

function CrashyComponent() {
  throw new Error("CrashyComponent exploded!");
}

export function IndexPage() {
  const [crash, setCrash] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 12</h1>
      <p className="mt-2 text-gray-600">
        Use the buttons to test error handling.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setCrash(true)}
      >
        Crash on next render
      </button>
      <button
        className="mt-4 ml-4 px-4 py-2 bg-yellow-500 text-white rounded"
        onClick={() => Promise.reject(new Error("Unhandled promise rejection!"))}
      >
        Unhandled promise rejection
      </button>
      <button
        className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setTimeout(() => {
          throw new Error("Throw from setTimeout!");
        }, 1000)}
      >
        Throw from setTimeout
      </button>
      {crash && <CrashyComponent />}
    </main>
  );
}



  // TODO: Add three test buttons so you can verify every part of your error
  // handling is wired up correctly. Each button targets a different handler:
  //
  // 1. "Crash on next render" → flips a useState flag that causes a child
  //    component to `throw new Error(...)` during render.
  //    => should be caught by <ErrorBoundary>
  //
  // 2. "Unhandled promise rejection" → onClick creates a `Promise.reject(...)`
  //    with no .catch().
  //    => should be caught by the window 'unhandledrejection' listener
  //
  // 3. "Throw from setTimeout" → onClick schedules a setTimeout callback
  //    that throws.
  //    => should be caught by the window 'error' listener
  //
  // After clicking each one, check the console — every error should be
  // prefixed with [error] (your logger), proving it flowed through logger.error.

  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 12</h1>
      <p className="mt-2 text-gray-600">
        TODO: Add crash test buttons here (see comments in IndexPage.tsx).
      </p>
    </main>
  );
}
