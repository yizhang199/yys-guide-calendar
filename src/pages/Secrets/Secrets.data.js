export const difficulties = [
  {
    name: '伞剑的守护',
    beginnerLevel: 3,
    intermediateLevel: 6,
    expertLevel: 8,
    masterLevel: 10,
  },
  {
    name: '道成夙怨',
    beginnerLevel: 3,
    intermediateLevel: 6,
    expertLevel: 8,
    masterLevel: 10,
  },
  {
    name: '荒川之怒',
    beginnerLevel: 3,
    intermediateLevel: 6,
    expertLevel: 8,
    masterLevel: 10,
  },
  {
    name: '暴风之巅',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 7,
    masterLevel: 10,
  },
  {
    name: '海怪的温柔',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 7,
    masterLevel: 10,
  },
  {
    name: '狐生百魅',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 8,
    masterLevel: 10,
  },
  {
    name: '雨女的等候',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 6,
    masterLevel: 10,
    specials: {
      7: '4兔子加季',
    },
  },
  {
    name: '红叶的羁绊',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 7,
    masterLevel: 10,
  },
  {
    name: '青灯百物语',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 7,
    masterLevel: 10,
  },
  {
    name: '鲜血之月',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 8,
    masterLevel: 10,
  },
  {
    name: '意志的觉醒',
    beginnerLevel: 3,
    intermediateLevel: 4,
    expertLevel: 6,
    masterLevel: 10,
  },
  {
    name: '黄泉彼岸',
    beginnerLevel: 3,
    intermediateLevel: 5,
    expertLevel: 6,
    masterLevel: 10,
  },
  {
    name: '河畔童谣',
    beginnerLevel: 2,
    intermediateLevel: 4,
    expertLevel: 10,
    masterLevel: 0,
  },
  {
    name: '妖刀之秘籍',
    beginnerLevel: 2,
    intermediateLevel: 4,
    expertLevel: 10,
    masterLevel: 0,
  },
  {
    name: '雪之回忆',
    beginnerLevel: 2,
    intermediateLevel: 5,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '夏之风物诗',
    beginnerLevel: 1,
    intermediateLevel: 3,
    expertLevel: 7,
    masterLevel: 0,
  },
  {
    name: '拾花旧忆',
    beginnerLevel: 2,
    intermediateLevel: 3,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '盛宴终刻',
    beginnerLevel: 2,
    intermediateLevel: 3,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '逐路之争',
    beginnerLevel: 2,
    intermediateLevel: 4,
    expertLevel: 0,
    masterLevel: 0,
    specials: {
      5: '四兔子+季',
      6: '四兔子+季',
    },
  },
  {
    name: '烽火寄情',
    beginnerLevel: 2,
    intermediateLevel: 3,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '夜雪无声',
    beginnerLevel: 2,
    intermediateLevel: 3,
    expertLevel: 5,
    masterLevel: 0,
  },
  {
    name: '浪客远道',
    beginnerLevel: 2,
    intermediateLevel: 4,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '瓜士无双',
    beginnerLevel: 2,
    intermediateLevel: 3,
    expertLevel: 6,
    masterLevel: 0,
  },
  {
    name: '征服世界',
    beginnerLevel: 2,
    intermediateLevel: 4,
    expertLevel: 6,
    masterLevel: 0,
  },
];

export const RewardType = {
  gold: 'gold',
  jades: 'jades',
  ticket: 'challenge ticket',
  avatarFrame: 'avatar frame',
  costume: 'costume',
  blackDharma: 'Black Dharma Egg',
  blueDharma: 'Blue Dharma Egg',
  redDharma: 'Red Dharma Egg',
  twoStarWhiteDharma: '2 star White Dharma',
  fourStarWhiteDharma: '4 star White Dharma',
};

export const information = [
  {
    name: '山兔大暴走',
    imageAlt: '山兔',
    instances: [
      {
        level: 1,
        name: '开心的山兔',
        rewardType: RewardType.gold,
        rewardAmount: 10000,
      },
      {
        level: 2,
        name: '安静的山兔',
        rewardType: RewardType.jades,
        rewardAmount: 50,
      },
      {
        level: 3,
        name: '严肃的山兔',
        rewardType: RewardType.gold,
        rewardAmount: 50000,
      },
      {
        level: 4,
        name: '认真的山兔',
        rewardType: RewardType.jades,
        rewardAmount: 75,
      },
      {
        level: 5,
        name: '嘟嘴的山兔',
        rewardType: RewardType.gold,
        rewardAmount: 100000,
      },
      {
        level: 6,
        name: '不开心的山兔',
        rewardType: RewardType.jades,
        rewardAmount: 100,
      },
      {
        level: 7,
        name: '闹脾气的山兔',
        rewardType: RewardType.ticket,
        rewardAmount: 1,
      },
      {
        level: 8,
        name: '生气的山兔',
        rewardType: RewardType.ticket,
        rewardAmount: 2,
      },
      {
        level: 9,
        name: '愤怒的山兔',
        rewardType: RewardType.avatarFrame,
        rewardAmount: 1,
      },
      {
        level: 10,
        name: '暴走的山兔',
        rewardType: RewardType.costume,
        rewardAmount: 1,
      },
    ],
  },
  {
    name: '红叶的羁绊',
    imageName: 'guinvhongye.png',
    imageAlt: '红叶',
    instances: [
      {
        level: 1,
        name: '邂逅',
        rewardType: RewardType.gold,
        rewardAmount: 10000,
      },
      {
        level: 2,
        name: '别离',
        rewardType: RewardType.jades,
        rewardAmount: 50,
      },
      {
        level: 3,
        name: '暮想',
        rewardType: RewardType.gold,
        rewardAmount: 50000,
      },
      {
        level: 4,
        name: '唆摆',
        rewardType: RewardType.redDharma,
        rewardAmount: 3,
      },
      {
        level: 5,
        name: '意乱',
        rewardType: RewardType.gold,
        rewardAmount: 100000,
      },
      {
        level: 6,
        name: '妖变',
        rewardType: RewardType.twoStarWhiteDharma,
        rewardAmount: 1,
      },
      {
        level: 7,
        name: '堕落',
        rewardType: RewardType.ticket,
        rewardAmount: 1,
      },
      {
        level: 8,
        name: '痴迷',
        rewardType: RewardType.avatarFrame,
        rewardAmount: 1,
      },
      {
        level: 9,
        name: '苦恋',
        rewardType: RewardType.blackDharma,
        rewardAmount: 1,
      },
      {
        level: 10,
        name: '羁绊',
        rewardType: RewardType.costume,
        rewardAmount: 1,
      },
    ],
  },
  {
    name: '妖刀之秘籍',
    imageAlt: '妖刀',
    instances: [
      {
        level: 1,
        name: '妖刀·壹式',
        rewardType: RewardType.gold,
        rewardAmount: 10000,
      },
      {
        level: 2,
        name: '妖刀·贰式',
        rewardType: RewardType.jades,
        rewardAmount: 50,
      },
      {
        level: 3,
        name: '妖刀·叁式',
        rewardType: RewardType.gold,
        rewardAmount: 50000,
      },
      {
        level: 4,
        name: '妖刀·肆式',
        rewardType: RewardType.redDharma,
        rewardAmount: 3,
      },
      {
        level: 5,
        name: '妖刀·伍式',
        rewardType: RewardType.gold,
        rewardAmount: 100000,
      },
      {
        level: 6,
        name: '妖刀·陆式',
        rewardType: RewardType.twoStarWhiteDharma,
        rewardAmount: 1,
      },
      {
        level: 7,
        name: '妖刀·柒式',
        rewardType: RewardType.gold,
        rewardAmount: 200000,
      },
      {
        level: 8,
        name: '妖刀·捌式',
        rewardType: RewardType.blueDharma,
        rewardAmount: 1,
      },
      {
        level: 9,
        name: '妖刀·玖式',
        rewardType: RewardType.avatarFrame,
        rewardAmount: 1,
      },
      {
        level: 10,
        name: '妖刀·拾式',
        rewardType: RewardType.costume,
        rewardAmount: 1,
      },
    ],
  },
  {
    name: '河畔童谣',
    imageAlt: '河童',
    instances: [
      {
        level: 1,
        name: '壹·稚气',
        rewardType: RewardType.gold,
        rewardAmount: 10000,
      },
      {
        level: 2,
        name: '贰·童真',
        rewardType: RewardType.jades,
        rewardAmount: 50,
      },
      {
        level: 3,
        name: '叁·眺望',
        rewardType: RewardType.gold,
        rewardAmount: 50000,
      },
      {
        level: 4,
        name: '肆·跋涉',
        rewardType: RewardType.redDharma,
        rewardAmount: 3,
      },
      {
        level: 5,
        name: '伍·舞蹈',
        rewardType: RewardType.gold,
        rewardAmount: 100000,
      },
      {
        level: 6,
        name: '陆·无间',
        rewardType: RewardType.twoStarWhiteDharma,
        rewardAmount: 1,
      },
      {
        level: 7,
        name: '柒·孤傲',
        rewardType: RewardType.gold,
        rewardAmount: 200000,
      },
      {
        level: 8,
        name: '捌·浩瀚',
        rewardType: RewardType.blueDharma,
        rewardAmount: 1,
      },
      {
        level: 9,
        name: '玖·泡沫',
        rewardType: RewardType.blackDharma,
        rewardAmount: 1,
      },
      {
        level: 10,
        name: '拾·离歌',
        rewardType: RewardType.costume,
        rewardAmount: 1,
      },
    ],
  },
  {
    name: '雨女的等候',
    imageAlt: '雨女',
    instances: [
      {
        level: 1,
        name: '壹·月明',
        rewardType: RewardType.redDharma,
        rewardAmount: 1,
      },
      {
        level: 2,
        name: '贰·对饮',
        rewardType: RewardType.gold,
        rewardAmount: 20000,
      },
      {
        level: 3,
        name: '叁·惮寒',
        rewardType: RewardType.jades,
        rewardAmount: 100,
      },
      {
        level: 4,
        name: '肆·无怨',
        rewardType: RewardType.twoStarWhiteDharma,
        rewardAmount: 1,
      },
      {
        level: 5,
        name: '伍·悲喜',
        rewardType: RewardType.gold,
        rewardAmount: 100000,
      },
      {
        level: 6,
        name: '陆·聚散',
        rewardType: RewardType.jades,
        rewardAmount: 200,
      },
      {
        level: 7,
        name: '柒·阴阳',
        rewardType: RewardType.blueDharma,
        rewardAmount: 1,
      },
      {
        level: 8,
        name: '捌·盈亏',
        rewardType: RewardType.ticket,
        rewardAmount: 1,
      },
      {
        level: 9,
        name: '玖·恒远',
        rewardType: RewardType.blackDharma,
        rewardAmount: 1,
      },
      {
        level: 10,
        name: '拾·婵娟',
        rewardType: RewardType.costume,
        rewardAmount: 1,
      },
    ],
  },
];
