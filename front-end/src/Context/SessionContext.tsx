import React, { createContext, useContext, useEffect, useState } from 'react';

interface SessionContextData {
  sessionId: string | null;
}

const SessionContext = createContext<SessionContextData>({
  sessionId: null,
});

export const SessionProvider: React.FC = ({ children }) => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const getSessionId = sessionStorage.getItem('sessionId');
    setSessionId(getSessionId);
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextData => useContext(SessionContext);
