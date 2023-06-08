import { Heros } from './heros';

export const presets = {
  1: {
    description: '同行式神待霄姑获鸟带火灵座敷随便打,姑获鸟妖术其他式神普攻',
    requirements: [[Heros[1], Heros[2]]],
  },
  2: {
    description:
      '同行式神待霄姑获鸟,火灵座敷,辣条山兔,山兔锁二技能,姑获鸟妖术,其他式神普攻',
    requirements: [[Heros[1], Heros[2], Heros[3]]],
  },
  3: {
    description: '真旅居系统麓铭大岳丸单刷',
    requirements: [[Heros[4]]],
  },
  4: {
    description: '双拉+神蛇+丑女+座敷',
    requirements: [[Heros[6], Heros[2], Heros[7], Heros[2], Heros[8]]],
  },
  5: {
    description: '双拉+神蛇+因幡辉夜姬+丑女',
    requirements: [[Heros[6], Heros[9], Heros[7], Heros[2], Heros[8]]],
  },
};
