import React, { createContext, useContext, useEffect, useState } from 'react';
import { Heros } from 'data/heros';
import store from 'store2';

export const HeroContext = createContext();

const getInitialHeros = () => {
  const heroIds = store.get('heros');

  const herosArr = Object.values(Heros);

  if (!Array.isArray(heroIds))
    return herosArr.map((hero) => ({ ...hero, obtained: false }));

  return herosArr.map((hero) => ({
    ...hero,
    obtained: heroIds.includes(hero.id),
  }));
};

const HeroContextProvider = (props) => {
  const [heros, setHeros] = useState(getInitialHeros);

  useEffect(() => {
    // saved obtained heros id into localStorage.
    store.set(
      'heros',
      heros.filter((hero) => hero.obtained).map((hero) => hero.id)
    );
  }, [heros]);

  const addHero = (id) => {
    if (!Heros[id]) return;

    const updatedHeros = heros.map((hero) =>
      hero.id === id ? { ...hero, obtained: true } : hero
    );

    setHeros(updatedHeros);
  };

  const removeHero = (id) => {
    if (!Heros[id]) return;

    const updatedHeros = heros.map((hero) =>
      hero.id === id ? { ...hero, obtained: false } : hero
    );

    setHeros(updatedHeros);
  };

  return (
    <HeroContext.Provider value={{ addHero, removeHero, heros }}>
      {props.children}
    </HeroContext.Provider>
  );
};

export const useHeros = () => useContext(HeroContext);

export default HeroContextProvider;
