// ========== 全角色数据库（按元素分类） ==========
export const ROLE_DATABASE = {
  '冷凝': [
    { name: '绯雪', presetId: 'feiXue' },
    { name: '珂莱塔', presetId: 'keLaiTa' },
    { name: '凌阳', presetId: 'lingYang' },
    { name: '洛瑟菈', presetId: 'luoSeLa' },
    { name: '穗穗', presetId: 'suiSui' },
    { name: '折枝', presetId: 'zheZhi' },
    { name: '白芷', presetId: 'baiZhi' },
    { name: '散华', presetId: 'sanHua' },
    { name: '釉瑚', presetId: 'youHu' },
  ],
  '热熔': [
    { name: '爱弥斯', presetId: 'aiMiSi' },
    { name: '安可', presetId: 'anKe' },
    { name: '布兰特', presetId: 'buLanTe' },
    { name: '长离', presetId: 'changLi' },
    { name: '达尼娅', presetId: 'daNiYa' },
    { name: '嘉贝莉娜', presetId: 'jiaBeiLiNa' },
    { name: '露帕', presetId: 'luPa' },
    { name: '莫宁', presetId: 'moNing' },
    { name: '炽霞', presetId: 'chiXia' },
    { name: '莫特斐', presetId: 'moTeFei' },
  ],
  '导电': [
    { name: '漂泊者·导电', presetId: 'piaoBoZheDaoDian' },
    { name: '奥古斯塔', presetId: 'aoGuSiTa' },
    { name: '卡卡罗', presetId: 'kaKaLuo' },
    { name: '丽贝卡', presetId: 'liBeiKa' },
    { name: '相里要', presetId: 'xiangLiYao' },
    { name: '吟霖', presetId: 'yinLin' },
    { name: '卜灵', presetId: 'buLing' },
    { name: '灯灯', presetId: 'dengDeng' },
    { name: '渊武', presetId: 'yuanWu' },
  ],
  '气动': [
    { name: '漂泊者·气动', presetId: 'piaoBoZheQiDong' },
    { name: '鉴心', presetId: 'jianXin' },
    { name: '忌炎', presetId: 'jiYan' },
    { name: '卡提希娅', presetId: 'kaTiXiYa' },
    { name: '仇远', presetId: 'qiuYuan' },
    { name: '夏空', presetId: 'xiaKong' },
    { name: '西格莉卡', presetId: 'xiGeLiKa' },
    { name: '尤诺', presetId: 'youNuo' },
    { name: '秋水', presetId: 'qiuShui' },
    { name: '秧秧', presetId: 'yangYang' },
  ],
  '衍射': [
    { name: '漂泊者·衍射', presetId: 'piaoBoZheYanShe' },
    { name: '菲比', presetId: 'feiBi' },
    { name: '今汐', presetId: 'jinXi' },
    { name: '琳奈', presetId: 'linNai' },
    { name: '陆·赫斯', presetId: 'luHeSi' },
    { name: '露西', presetId: 'luXi' },
    { name: '守岸人', presetId: 'shouAnRen' },
    { name: '维里奈', presetId: 'weiLiNai' },
    { name: '赞妮', presetId: 'zanNi' },
  ],
  '湮灭': [
    { name: '漂泊者·湮灭', presetId: 'piaoBoZheYanMie' },
    { name: '椿', presetId: 'chun' },
    { name: '弗洛洛', presetId: 'fuLuoLuo' },
    { name: '坎特蕾拉', presetId: 'kanTeLeiLa' },
    { name: '洛可可', presetId: 'luoKeKe' },
    { name: '千咲', presetId: 'qianXiao' },
    { name: '秧秧·玄翎', presetId: 'yangYangXuanLing' },
    { name: '丹瑾', presetId: 'danJin' },
    { name: '桃祈', presetId: 'taoQi' },
  ],
}

// ========== 角色别名映射 ==========
export const ROLE_ALIASES = {
  '绯雪': ['绯雪', '绯', '雪'],
  '珂莱塔': ['珂莱塔', '柯莱塔', '土豆', '珂', '柯'],
  '凌阳': ['凌阳', '雪豹', '凌', '豹'],
  '洛瑟菈': ['洛瑟菈', '校长', '洛', '菈'],
  '穗穗': ['穗穗', '穗'],
  '折枝': ['折枝', '折'],
  '白芷': ['白芷', '白'],
  '散华': ['散华', '散'],
  '釉瑚': ['釉瑚', '釉'],

  '爱弥斯': ['爱弥斯', '小爱', '爱', '机兵'],
  '安可': ['安可', '羊咩', '安'],
  '布兰特': ['布兰特', '船长', '船', '布'],
  '长离': ['长离', '长', '离'],
  '达尼娅': ['达尼娅', '白娅', '黑娅', '达', '娅'],
  '嘉贝莉娜': ['嘉贝莉娜', '嘉贝', '嘉', '贝'],
  '露帕': ['露帕', '露'],
  '莫宁': ['莫宁', '莫', '宁'],
  '炽霞': ['炽霞', '马小芳', '炽', '霞', '马', '小芳'],
  '莫特斐': ['莫特斐', '斐', '石头人', '莫'],

  '漂泊者·导电': ['漂泊者·导电', '导电漂', '导电主', '电漂', '雷漂', '电主', '雷主', '雷', '电'],
  '奥古斯塔': ['奥古斯塔', '奥古', '总督', '奥',  '日'],
  '卡卡罗': ['卡卡罗', '牢卡', '卡'],
  '丽贝卡': ['丽贝卡', '丽', '贝'],
  '相里要': ['相里要', '里哥', '相', '里', '鸡', '坤'],
  '吟霖': ['吟霖', '吟', '霖'],
  '卜灵': ['卜灵', '卜'],
  '灯灯': ['灯灯', '灯'],
  '渊武': ['渊武', '渊'],

  '漂泊者·气动': ['漂泊者·气动', '气动漂', '气动主', '风漂', '风主', '风'],
  '鉴心': ['鉴心', '鉴'],
  '忌炎': ['忌炎', '牢忌', '忌'],
  '卡提希娅': ['卡提希娅', '卡提', '小卡', '大卡', '圣女', '芙', '卡'],
  '仇远': ['仇远', '仇', '远'],
  '夏空': ['夏空', '夏'],
  '西格莉卡': ['西格莉卡', '西格', '西西', '粑粑柑', '西'],
  '尤诺': ['尤诺', '尤', '月'],
  '秋水': ['秋水', '秋'],
  '秧秧': ['秧秧', '秧'],

  '漂泊者·衍射': ['漂泊者·衍射', '衍射漂', '衍射主', '光漂', '光主', '光'],
  '菲比': ['菲比', '菲'],
  '今汐': ['今汐', '今', '汐'],
  '琳奈': ['琳奈', '琳', '奈'],
  '陆·赫斯': ['陆·赫斯', '陆赫斯', '赫斯', '陆'],
  '露西': ['露西', '露'],
  '守岸人': ['守岸人', '岸宝', '守', '岸'],
  '维里奈': ['维里奈', '小维', '维'],
  '赞妮': ['赞妮', '赞', '妮'],

  '漂泊者·湮灭': ['漂泊者·湮灭', '湮灭漂', '湮灭主', '暗漂', '暗主', '暗'],
  '椿': ['椿'],
  '弗洛洛': ['弗洛洛', '糯糯', '糯', '弗'],
  '坎特蕾拉': ['坎特蕾拉', '坎特', '家主', '坎'],
  '洛可可': ['洛可可', '洛'],
  '千咲': ['千咲', '千', '咲'],
  '秧秧·玄翎': ['秧秧·玄翎', '秧秧玄翎', '玄翎', '玄', '翎', '秧秧', '秧'],
  '丹瑾': ['丹瑾', '小西王', '丹', '瑾'],
  '桃祈': ['桃祈', '桃子', '桃', '祈'],
}

// ========== 按键与模式映射 ==========
export const KEY_ALIAS = {
  'e': 'E', '技能': 'E', '小技能': 'E', '共鸣技能': 'E',
  'q': 'Q', '声骸': 'Q',
  'r': 'R', '大招': 'R', '解放': 'R', '共鸣解放': 'R',
  'a': 'LMB', 'z': 'LMB', '普攻': 'LMB', '平a': 'LMB', '平z': 'LMB',
  '闪': 'RMB', '闪避': 'RMB',
  '跳': 'jump', '跳跃': 'jump', '空格': 'jump',
  '下落': 'X', '下落攻击': 'X', '下砸': 'X', '下落a': 'X', '落a': 'X',
  't': 'T', '工具': 'T', '探索': 'T', '钩锁': 'T',
  'f': 'F', '处决': 'F', '谐度': 'F', '谐度破坏': 'F', '处': 'F',
  'v': 'V', '空操作': 'V',
  '入场': 'intro', '延奏': 'intro',
}

export const MODE_ALIAS = {
  '长按': 'hold', '按住': 'hold', '蓄力': 'hold', '长': 'hold',
  '狂按': 'rapid_click', '连点': 'rapid_click', '速点': 'rapid_click',
  '预输入': 'preinput_action', '预输': 'preinput_action', '预': 'preinput_action',
  '切人预输': 'preinput_swap',
}

// ========== 修饰词标记 ==========
export const STRONG_FLAGS = ['强', '强化']
export const INTRO_FLAGS = ['延奏', '变奏', '延', '变']
export const STAY_BACK_FLAGS = ['切回', '衔接', '接']
export const KEY_FLAGS = ['跳', '闪', '钩锁', '处决', '处', '谐度破坏', '谐度']

// ========== 角色专属术语 ==========
export const ROLE_SPECIAL_TERMS = {
  '绯雪': [
    { term: '居合', key: 'LMB', mode: 'click', strong: true },
    { term: '居',   key: 'LMB', mode: 'click', strong: true },
  ],
  '千咲': [
    { term: '电锯终结', key: 'LMB', mode: 'click', strong: true },
    { term: '终结', key: 'LMB', mode: 'click', strong: true },
  ],
  '爱弥斯': [
    { term: '光翼共奏', key: 'E', mode: 'click', strong: true },
    { term: '光翼', key: 'E', mode: 'click', strong: true },
  ],
  '卡提希娅': [
    { term: '三剑下落', key: 'X', mode: 'click', strong: true },
    { term: '三剑', key: 'X', mode: 'click', strong: true },
    { term: '下落', key: 'X', mode: 'click', strong: true },
  ],
  '奥古斯塔': [
    { term: '旋切', key: 'LMB', mode: 'hold', strong: true },
    { term: '旋', key: 'LMB', mode: 'hold', strong: true },
    { term: '升拳', key: 'jump', mode: 'click', strong: true },
    { term: '升', key: 'jump', mode: 'click', strong: true },
  ],
  '卡卡罗': [
    { term: '死告', key: 'LMB', mode: 'hold', strong: true },
  ],
  '今汐': [
    { term: '龙喷', key: 'E', mode: 'click', strong: true },
    { term: '喷', key: 'E', mode: 'click', strong: true },
  ],
  '守岸人': [
    { term: '洞悉', key: 'intro', mode: 'click', strong: true },
    { term: '强变', key: 'intro', mode: 'click', strong: true },
  ],
  '露帕': [
    { term: '你无法逃离！', key: 'intro', mode: 'click', strong: true },
    { term: '强变', key: 'intro', mode: 'click', strong: true },
  ],
  '长离': [
    { term: '心眼·征', key: 'LMB', mode: 'click', strong: true },
    { term: '征', key: 'LMB', mode: 'click', strong: true },
    { term: '心眼·冲', key: 'jump', mode: 'click', strong: true },
    { term: '冲', key: 'jump', mode: 'click', strong: true },
    { term: '跳冲', key: 'jump', mode: 'click', strong: true },
    { term: '焚身以火', key: 'LMB', mode: 'hold', strong: true },
    { term: '焚身', key: 'LMB', mode: 'hold', strong: true },
  ],
  '赞妮': [
    { term: '终夜', key: 'LMB', mode: 'click', strong: true },
    { term: '终', key: 'LMB', mode: 'click', strong: true },
  ],
  '仇远': [
    { term: '答剑', key: 'LMB', mode: 'hold', strong: true },
    { term: '一日竹', key: 'LMB', mode: 'hold', strong: true },
  ],
  '西格莉卡': [
    { term: '我即语义', key: 'E', mode: 'hold', strong: true },
    { term: '一日灵', key: 'E', mode: 'hold', strong: true },
    { term: '符语爆破', key: 'LMB', mode: 'hold', strong: true },
    { term: '爆破', key: 'LMB', mode: 'hold', strong: true },
    { term: '符语链刃', key: 'LMB', mode: 'hold', strong: true },
    { term: '链刃', key: 'LMB', mode: 'hold', strong: true },
    { term: '符语日灵', key: 'LMB', mode: 'hold', strong: true },
  ],
  '椿': [
    { term: '一日花', key: 'E', mode: 'click', strong: true },
    { term: '永生花', key: 'E', mode: 'click', strong: true },
    { term: '花', key: 'E', mode: 'click', strong: true },
  ],
  '弗洛洛': [
    { term: '谱曲终末', key: 'LMB', mode: 'hold', strong: true },
    { term: '一日谱', key: 'LMB', mode: 'hold', strong: true },
    { term: '谱', key: 'LMB', mode: 'hold', strong: true },
  ],
  '坎特蕾拉': [
    { term: '感知汲取', key: 'E', mode: 'click', strong: true },
    { term: '一日吸', key: 'E', mode: 'click', strong: true },
    { term: '吸', key: 'E', mode: 'click', strong: true },
  ],
}

// ========== 布局常量 ==========
export const LAYOUT = {
  startX: 4,
  blockPadding: 7,
  actionGap: 2,
  baseWidth: {
    click: 20,
    hold: 49,
    preinput_action: 49,
    preinput_swap: 49,
    rapid_click: 49,
  },
  comboBase: 11,
  comboExtraPer: 5,
}