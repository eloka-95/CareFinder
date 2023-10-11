import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from './Context/SessionContext.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import OnlineStatus from './Errorboundry/OnlineStatus.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './Errorboundry/ErrorPage.tsx';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <OnlineStatus>
          <ErrorBoundary FallbackComponent={ErrorPage} onReset={ () => (location.href='/')}>
            <App />
          </ErrorBoundary>
        </OnlineStatus>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

  </React.StrictMode>,

);


