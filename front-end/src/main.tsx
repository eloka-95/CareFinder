import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from './Context/SessionContext.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <App />
    </SessionProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


