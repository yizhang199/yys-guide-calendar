import { useState } from 'react';
import { Heros } from 'data/heros';
import store from 'store2';

function useHeros() {
  const [heros, setHeros] = useState(() => {
    const heroIds = store.get('heros');

    const herosArr = Object.values(Heros);

    if (!Array.isArray(heroIds))
      return herosArr.map((hero) => ({ ...hero, obtained: false }));

    return herosArr.map((hero) => ({
      ...hero,
      obtained: heroIds.includes(hero.id),
    }));
  });

  const updateHeros = (updatedHeros) => {
    store.set(
      'heros',
      updatedHeros.filter((hero) => hero.obtained).map((hero) => hero.id)
    );
    setHeros(updatedHeros);
  };

  const addHero = (id) => {
    if (!Heros[id]) return;

    const updatedHeros = heros.map((hero) =>
      hero.id === id ? { ...hero, obtained: true } : hero
    );

    updateHeros(updatedHeros);
  };
  const removeHero = (id) => {
    if (!Heros[id]) return;

    const updatedHeros = heros.map((hero) =>
      hero.id === id ? { ...hero, obtained: false } : hero
    );

    updateHeros(updatedHeros);
  };

  return { heros, addHero, removeHero };
}

export { useHeros };
