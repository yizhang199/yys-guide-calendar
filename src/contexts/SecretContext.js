import React, { createContext, useContext, useState } from 'react';
import { information as Secrets } from 'data/Secrets';
import store from 'store2';

const SecretContext = createContext();

const getInitialSecrets = () =>
  Secrets.map((secret) => ({
    ...secret,
    instances: secret.instances.map((instance) => {
      const arr = store.get(secret.name) || [];

      return {
        ...instance,
        isDone: arr.includes(instance.level),
      };
    }),
  }));

const SecretContextProvider = ({ children }) => {
  const [secrets, setSecrets] = useState(getInitialSecrets);

  const toggleInstance = (secretName, instanceLevel, isDone = false) => {
    setSecrets((prevState) =>
      prevState.map((preSecret) => {
        if (preSecret.name !== secretName) return preSecret;

        return {
          ...preSecret,
          instances: preSecret.instances.map((instance) => {
            if (instance.level !== instanceLevel) return instance;

            const arr = store.get(secretName) || [];

            store.set(secretName, [...arr, instance.level]);

            return {
              ...instance,
              isDone,
            };
          }),
        };
      })
    );
  };

  return (
    <SecretContext.Provider value={{ toggleInstance, secrets }}>
      {children}
    </SecretContext.Provider>
  );
};

export const useSecrets = () => useContext(SecretContext);

export default SecretContextProvider;
