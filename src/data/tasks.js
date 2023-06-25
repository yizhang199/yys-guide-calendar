const Goals = {
  1: [
    '阴阳师等级30级',
    '自强低难度秘闻前四层和高难度秘闻前两层',
    '首通所有御魂和觉醒副本',
    '新区伴生活动',
    '新区商店勾玉购买一套雪幽魂和一套狂骨御魂',
    '加入修行羁旅',
  ],
  2: [
    '阴阳师等级36级',
    '完成日轮之陨首通成就',
    '完成业原火贪嗔痴首通成就,贪嗔痴完美通关,门票可以在御魂副本第七层刷',
    '御魂悲鸣通关成就',
    '木桩子秘闻前7层,新秘闻前5层',
  ],
  3: [
    '浪川秘闻1-9层,木桩子秘闻前9层,新秘闻前7层',
    '百鬼弈九番胜',
    '刷魂土,不要超过4000体力,留一些给周一,尽量不要升到45级',
    '阴界之门50层',
  ],
  4: [
    '完成永生之海前三层通关',
    '完成所有御灵通关',
    '木桩子秘闻全部打完第9层,除睡猪外,所有秘闻打过第7层(用完协战即可,不急着两天做完)',
    '协同对弈十次',
    '阴界之门70层',
    '竞速通关,斗技尽量打高',
  ],
  5: [
    '完成永生之海前三层通关',
    '完成所有御灵通关',
    '木桩子秘闻全部打完第9层,除睡猪外,所有秘闻打过第7层(用完协战即可,不急着两天做完)',
    '协同对弈十次',
    '阴界之门70层',
    '竞速通关,斗技尽量打高',
  ],
  6: ['新一周洗劫商店,两次真蛇', '魂王和永生之海第四层', '继续秘闻', '魂土'],
  7: [
    '领白送的SSR/SP和辉夜姬',
    '通关全部秘闻前九层',
    '大致决定要玩的斗技体系,分配资源给对应式神',
    '通关大蛇奇谭',
  ],
  8: [
    '攻略其他奇谭',
    '对照成就一项一项的去做',
    '完成全部平安百物语',
    '日常周常活动和所需的副本照旧',
    '如已经通关全部的秘闻,剩余的协战次数可以借蝠翼麓铭大岳丸一拖四挂业原火',
  ],
  9: [
    '攻略其他奇谭',
    '对照成就一项一项的去做',
    '完成全部平安百物语',
    '日常周常活动和所需的副本照旧',
    '如已经通关全部的秘闻,剩余的协战次数可以借蝠翼麓铭大岳丸一拖四挂业原火',
  ],
  10: [
    '攻略其他奇谭',
    '对照成就一项一项的去做',
    '完成全部平安百物语',
    '日常周常活动和所需的副本照旧',
    '如已经通关全部的秘闻,剩余的协战次数可以借蝠翼麓铭大岳丸一拖四挂业原火',
  ],
  11: ['完成所有章节探索成就', '完成发现所有妖怪成就'],
  12: ['完成所有章节探索成就', '完成发现所有妖怪成就'],
  13: ['买永久勾玉卡', '买没买完的秘闻', '抽没抽完的缘初'],
  14: ['买永久勾玉卡', '买没买完的秘闻', '抽没抽完的缘初'],
  15: ['领最后一直送的SSR/SP,最终确定自己的斗技体系', '神龛兑换式神'],
};

export const Outlines = [
  {
    id: 1,
    title:
      '阴阳师等级31，加入同心队，方便早上起来的时候清理体力，晚上睡前也可以清理体力。',
    plannedCompletionDay: 1,
  },
  {
    id: 2,
    title: '升级一只六星【姑获鸟】',
    plannedCompletionDay: 1,
  },
  {
    id: 3,
    title: '买两套御魂【狂骨】和【雪幽魂】',
    plannedCompletionDay: 1,
  },
  {
    id: 4,
    title: '【觉醒】和【御魂】副本前十层全通',
    plannedCompletionDay: 1,
  },
  {
    id: 4,
    title: '尽量多的完成【秘闻副本】',
    plannedCompletionDay: 1,
  },
];

// those tasks are one time task, it will be used to create the agenda for the first two weeks calendar guide
export const OneTimeTasks = [
  {
    id: 1,
    title: '先跟着系统提示跑新手教程,完成以后会弹出跳过剧情对话框,点击跳过剧情',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 2,
    title: '拜师',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 3,
    title: '把成就领了',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 4,
    title: '町中玩一场百鬼夜行',
    description:
      '完成小白的任务，同时可以完成多个成就。重点砸N卡或R卡,目的是为了尽量多砸碎片，完成对应成就。前三次必中,可以先调成一个豆子砸三次,再拉满继续砸',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 5,
    title: '领邮件',
    description: '注意分享雪女皮肤,有20勾玉可以拿,错过只能找客服或者放弃.',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 6,
    title: '抽卡',
    description: '顺手完成分享得一张蓝票,只抽蓝票,勾玉不要动有其他用处.',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 7,
    title: '买成长礼包一个',
    description: '',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 8,
    title: '师徒历练五场',
    description:
      '成长礼包中的蓝蛋每个都带一场,可以升到12级,然后注意换掉,不要连带两场,蓝蛋过一会升到13级升级主力式神用.五场从第一场开始一直挂一个四星白蛋,一会给狗粮队长升星会用到.其他有空位可以用红蛋,R卡,注意R卡尽量不用用座敷童子,丑女,山兔和铁鼠.',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 9,
    title: '经验妖怪2次',
    description: '带一级式神培养,注意每场换人,不用浪费经验.',
    requirements: '',
    plannedCompletionDay: 1,
  },

  {
    id: 10,
    title: '23级',
    description: '',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 11,
    title: '把推送权限,绑定手机,绑定通讯录的勾玉奖励拿了',
    description: '',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 12,
    title: '追忆绘卷大蛇,看动画拿奖励',
    description: '',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 13,
    title: '加寮',
    description:
      '根据个人需求选择咸鱼寮还是活跃寮,个人感觉新区前期还是活跃寮好一些.',
    plannedCompletionDay: 1,
  },
  {
    id: 14,
    title: '养成座敷童子',
    description:
      '觉醒，装备送的火灵，升级技能。完成新手挑战的同时座敷童子也是我们接下来需要一直用的式神。',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 15,
    title: '解锁SP姑姑',
    description: '',
    requirements: '',
    relatedHeroes: [1],
    plannedCompletionDay: 1,
  },
  {
    id: 16,
    title: '御魂一到五和觉醒一到六的首通奖励',
    description:
      '阵容使用SP姑姑+座敷+各种狗粮.狗粮优先蓝蛋13级,其他各种狗粮20级.如果有铁鼠也可以觉醒以后带上一个.',
    plannedCompletionDay: 1,
    relatedInstances: [],
  },
  {
    id: 17,
    title: '清理一下结界突破券',
    description:
      '阵容使用SP姑姑+座敷+各种狗粮.狗粮优先蓝蛋13级,其他各种狗粮20级.如果有铁鼠也可以觉醒以后带上一个.',
    requirements: '',
    plannedCompletionDay: 1,
  },
  {
    id: 18,
    title: '继续通关探索副本,拿首通奖励',
    description:
      '阵容使用SP姑姑+座敷，十三章以后可以加入兔子，姑姑和兔子妖术，剩下的普攻',
    plannedCompletionDay: 1,
  },

  {
    id: 19,
    title: '打活动',
    description:
      '去网上找攻略，一般情况下第一阶段的阵容都是双兔子+座敷+丑女/铁鼠+借的输出式神',
    plannedCompletionDay: 1,
  },
  {
    id: 20,
    title: '新手教学关',
    description: '体力用完后再打，防止体力溢出',
    plannedCompletionDay: 1,
  },
  {
    id: 21,
    title: '平安京百物语',
    description: '用通关探索的阵容打,解锁了多少打多少。',
    plannedCompletionDay: 1,
  },
  {
    id: 22,
    title: '阴阳师24级完成御魂和觉醒第八层',
    plannedCompletionDay: 1,
  },

  {
    id: 23,
    title: '阴阳师27级完成御魂和觉醒第九层',
    plannedCompletionDay: 1,
  },
  {
    id: 24,
    title: '阴阳师30级完成御魂和觉醒第十层',
    plannedCompletionDay: 1,
  },
  {
    id: 25,
    title: '有1000勾玉以后买一套狂骨',
    plannedCompletionDay: 1,
  },
  {
    id: 26,
    title: '拉自己的姑姑到六星',
    plannedCompletionDay: 1,
  },
  {
    id: 27,
    title: '完成能完成的秘闻副本',
    plannedCompletionDay: 1,
  },
  {
    id: 28,
    title: '1000勾玉以后买一套雪幽魂',
    plannedCompletionDay: 1,
  },
  {
    id: 29,
    title: '体力用光下线',
    description: '可以把体力保存在同心队或者用来刷没有完成的探索首通',
    plannedCompletionDay: 1,
  },
];

// need to be completed every day
// localStorage record structure: dailyTaskCompleteDateTime: {[id:number]:{ completedAt:'xxx', dueAt:'xxx', startAt: 'xxx'}}
export const DailyTasks = [
  { id: 1, title: '签到', startAt: [0], dueAt: [23, 59, 59] },
  { id: 2, title: '礼包屋-黑蛋碎片', startAt: [0], dueAt: [23, 59, 59] },
  { id: 3, title: '每日免费抽卡', startAt: [0], dueAt: [23, 59, 59] },
  { id: 4, title: '地狱鬼王', startAt: [6], dueAt: [23, 59, 59] },
  {
    id: 5,
    title: '好友赠送友情点，好友界面祝福可以有些奖励',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  { id: 6, title: '阴阳寮-领取寮资金', startAt: [0], dueAt: [23, 59, 59] },
  {
    id: 7,
    title: '阴阳寮-祈愿发布和赠送碎片',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  { id: 8, title: '阴阳寮-寮30', startAt: [0], dueAt: [23, 59, 59] },
  { id: 9, title: '阴阳寮-道馆', startAt: [19], dueAt: [23, 59, 59] },
  {
    id: 10,
    title: '宠物-喂食,一次御魂本拿奖励',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  { id: 11, title: '悬赏任务-早', startAt: [5], dueAt: [17, 59, 59] },
  { id: 12, title: '悬赏任务-晚', startAt: [18], dueAt: [4, 59, 59] },
  {
    id: 13,
    title: '金币、经验妖怪(12am、12pm各加一次挑战次数)',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  {
    id: 14,
    title: '守护历练:每天5次师徒一起',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  {
    id: 15,
    title: '花合战100点每日做满有勾玉',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  {
    id: 16,
    title: '开3个小号做协战50拿勾玉',
    startAt: [0],
    dueAt: [23, 59, 59],
  },
  {
    id: 17,
    title: '逢魔之时',
    startAt: [17],
    dueAt: [21, 59, 59],
  },
  {
    id: 18,
    title: '阴阳寮-讨伐战',
    description:
      '周一到周四是麒麟，手快有手慢无。周五到周日阴界之门自己打自己的。',
    startAt: [19],
    dueAt: [20, 59, 59],
  },
];

// need to be completed every week
// localStorage record structure: weeklyTaskCompleteDateTime: {[id:number]:{ completedAt:'xxx', dueAt:'xxx', startAt: 'xxx'}}
export const WeeklyTasks = [
  { id: 1, title: '分享图鉴' },
  { id: 2, title: '分享地域鬼王' },
  { id: 3, title: '秘卷屋换30个6星御魂' },
  { id: 4, title: '荣誉-黑碎,蓝票' },
  { id: 5, title: '勋章-黑蛋,蓝票,体力' },
  { id: 6, title: '魅力-黑碎,蓝票' },
  { id: 7, title: '寮商店' },
  { id: 8, title: '千物宝库' },
  { id: 9, title: '秘闻竞速或百战368勾玉必做' },
  { id: 10, title: '分享秘闻竞速' },
  { id: 11, title: '斗技' },
  { id: 12, title: '协同斗技' },
  { id: 13, title: '百鬼弈' },
  { id: 14, title: '日轮-周一到周五50次加成' },
  { id: 15, title: '日轮-周六50次加成' },
  { id: 16, title: '日轮-周日50次加成' },
  { id: 17, title: '真蛇-I' },
  { id: 18, title: '真蛇-II' },
];
