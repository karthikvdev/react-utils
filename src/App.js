import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routing';
import React, { createContext, useContext, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const initialState = {
  open: true,
  setOpen: () => { }
}

function App() {

  const [open, setOpen] = useState(false)

  const contextItems = {
    open,
    setOpen
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={contextItems}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
          <ReactQueryDevtools />
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

export const AppContext = createContext(initialState)