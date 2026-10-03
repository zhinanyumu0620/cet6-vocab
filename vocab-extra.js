// Incremental vocabulary batches. Keeps the main vocab.js small and safe to maintain.
const EXTRA_B=[
['sarcasm','n. 讽刺；挖苦','Sarcasm can easily hurt other people.','挖苦很容易伤害别人。',''],
['portray','v. 描绘；刻画；表现','The film portrays the character as a thoughtful leader.','这部电影把这个人物刻画成一位深思熟虑的领导者。','por- 向前 + tray“拉/画”相关词源'],
['irritation','n. 恼怒；烦躁；刺激','His repeated comments caused considerable irritation.','他反复的评论引起了相当大的恼怒。','irritate + -ion'],
['disguise','v./n. 伪装；掩饰；伪装物','Hostility may be disguised as humor.','敌意可能被伪装成幽默。','dis- 分开/改变 + guise“外表”'],
['contemptible','adj. 可鄙的；令人轻视的','Such contemptible behavior should not be encouraged.','这种可鄙的行为不应受到鼓励。','contempt + -ible'],
['insecurity','n. 不安全感；缺乏信心；不稳定','Constant criticism can increase feelings of insecurity.','不断的批评会加剧不安全感。','in- 不 + secure + -ity'],
['subtle','adj. 微妙的；不明显的；难以察觉的','There is a subtle difference between wit and sarcasm.','机智与挖苦之间存在微妙的区别。',''],
['cowardly','adj. 胆怯的；懦弱的','Bullying weaker people is a cowardly act.','欺负弱者是一种懦弱的行为。','coward + -ly'],
['outright','adj./adv. 公然的；完全的；彻底地','The proposal met with outright opposition.','这项提议遭到了公开反对。','out + right'],
['sparingly','adv. 少量地；节制地','Sarcasm should be used sparingly.','讽刺应当节制使用。','sparing + -ly'],
['potent','adj. 强有力的；效力强的','Language can be a potent tool for persuasion.','语言可以成为强有力的说服工具。','pot“力量” + -ent'],
['wit','n. 机智；风趣；才智','Her wit made the conversation more enjoyable.','她的机智使谈话更加愉快。',''],
['state','v. 陈述；说明；声明；n. 状态；州','The report clearly states the main conclusion.','报告清楚地陈述了主要结论。','stat“站立/状态” + -e']
];
const existing=new Set(B.map(x=>x[0].toLowerCase()));
EXTRA_B.forEach(x=>{if(!existing.has(x[0].toLowerCase())){B.push(x);existing.add(x[0].toLowerCase())}});
Object.assign(IPA,{
sarcasm:'/ˈsɑːrkæzəm/',portray:'/pɔːrˈtreɪ/',irritation:'/ˌɪrɪˈteɪʃən/',disguise:'/dɪsˈɡaɪz/',contemptible:'/kənˈtemptəbəl/',insecurity:'/ˌɪnsɪˈkjʊrəti/',subtle:'/ˈsʌtəl/',cowardly:'/ˈkaʊərdli/',outright:'/ˈaʊtraɪt/',sparingly:'/ˈsperɪŋli/',potent:'/ˈpoʊtənt/',wit:'/wɪt/',state:'/steɪt/'
});