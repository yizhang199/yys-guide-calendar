import React, { createContext, useContext, useState } from 'react';
import { information as Secrets, RewardType } from 'data/Secrets';
import store from 'store2';
import { useHeros } from './HeroContext';

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
  const [rewards, setRewards] = useState([]);

  const { heros } = useHeros();

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

  const selectRewardTypes = (optionNumber) => {
    switch (optionNumber) {
      case 1:
        setRewards([RewardType.ticket, RewardType.jades]);
        break;

      case 2:
        setRewards([RewardType.fourStarWhiteDharma]);
        break;
      case 3:
        setRewards([RewardType.blackDharma]);
        break;
      default:
        break;
    }
  };

  return (
    <SecretContext.Provider
      value={{
        toggleInstance,
        secrets: secrets.map((secret) => {
          const blockedInstance = getBlockedInstance(secret.instances, heros);
          const lastInstanceWithReward = getLastInstanceWithRewards(
            secret.instances,
            rewards
          );

          const maxLevel = Math.min(
            blockedInstance?.level ? blockedInstance?.level - 1 : 10,
            lastInstanceWithReward?.level || 0
          );

          return {
            ...secret,
            instances: secret.instances.map((instance) => ({
              ...instance,
              enable: instance.level <= maxLevel,
            })),
          };
        }),
      }}
    >
      {children}
    </SecretContext.Provider>
  );
};

export const useSecrets = () => useContext(SecretContext);

export default SecretContextProvider;

// helper functions
function getBlockedInstance(instances, heros) {
  return instances.find((instance) => {
    if (!instance.requirements) return true;

    return !instance.requirements.some((heroSet) =>
      heroSet.every(
        (hero) =>
          heros.filter((h) => h.obtained).findIndex((h) => h.id === hero.id) >=
          0
      )
    );
  });
}

function getLastInstanceWithRewards(instances, rewards) {
  return instances.findLast(
    (instance) => rewards.length === 0 || rewards.includes(instance.reward)
  );
}
