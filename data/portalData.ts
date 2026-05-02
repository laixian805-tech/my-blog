import siteMetadata from './siteMetadata'

export type PortalIconName =
  | 'grid'
  | 'briefcase'
  | 'terminal'
  | 'server'
  | 'sparkles'
  | 'shield'
  | 'users'
  | 'toolbox'
  | 'book-open'
  | 'github'

export interface PortalCategory {
  id: string
  label: string
  icon: PortalIconName
}

export interface PortalLink {
  id: string
  title: string
  url: string
  description: string
  categoryId: string
  iconPath?: string
  keywords: string[]
}

export interface PortalQuickLink {
  id: string
  label: string
  href: string
  icon: PortalIconName
}

export const portalCategories: PortalCategory[] = [
  {
    id: "all",
    label: "全部",
    icon: "grid"
  },
  {
    id: "Forum",
    label: "论坛",
    icon: "users"
  },
  {
    id: "TargetDrones",
    label: "靶场",
    icon: "shield"
  },
  {
    id: "SlackOff",
    label: "摸鱼",
    icon: "sparkles"
  },
  {
    id: "ToolChain",
    label: "工具链",
    icon: "toolbox"
  },
  {
    id: "VulnerabilityDatabase",
    label: "漏洞库",
    icon: "shield"
  },
  {
    id: "meme",
    label: "迷因",
    icon: "sparkles"
  },
  {
    id: "AI",
    label: "AI方面",
    icon: "sparkles"
  },
  {
    id: "Server",
    label: "服务器",
    icon: "server"
  },
  {
    id: "CampusWelfare",
    label: "校内福利",
    icon: "briefcase"
  },
  {
    id: "papers",
    label: "论文",
    icon: "book-open"
  },
  {
    id: "gowork",
    label: "笔面试找工作",
    icon: "briefcase"
  },
  {
    id: "Information",
    label: "信息搜集",
    icon: "terminal"
  }
]

export const portalLinks: PortalLink[] = [
  {
    id: "learngitbranching",
    title: "LearnGitBranching",
    url: "https://learngitbranching.js.org/?locale=zh_CN",
    description: "一个在线练习git操作的网站",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/learngitbranching.ico",
    keywords: [
      "LearnGitBranching",
      "gowork",
      "一个在线练习git操作的网站"
    ]
  },
  {
    id: "nowcoder",
    title: "牛客",
    url: "https://www.nowcoder.com/",
    description: "一款挺杂的面经分享网站，杂了招聘、做题、做项目、背八股",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/nowcoder.ico",
    keywords: [
      "牛客",
      "gowork",
      "一款挺杂的面经分享网站",
      "杂了招聘",
      "做题",
      "做项目"
    ]
  },
  {
    id: "programmercarl",
    title: "代码随想录",
    url: "https://programmercarl.com/",
    description: "代码随想录",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/programmercarl.png",
    keywords: [
      "代码随想录",
      "gowork"
    ]
  },
  {
    id: "mianshiya",
    title: "面试鸭",
    url: "https://www.mianshiya.com/",
    description: "一款AI生成资料的八股背诵工具",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/mianshiya.ico",
    keywords: [
      "面试鸭",
      "gowork",
      "一款AI生成资料的八股背诵工具"
    ]
  },
  {
    id: "xiaolincoding",
    title: "小林Coding",
    url: "https://www.xiaolincoding.com/",
    description: "系统和网络部分很经典",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xiaolincoding.webp",
    keywords: [
      "小林Coding",
      "gowork",
      "系统和网络部分很经典"
    ]
  },
  {
    id: "csguidecn",
    title: "编程指北",
    url: "https://csguide.cn/",
    description: "cpp挺全的",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/csguidecn.ico",
    keywords: [
      "编程指北",
      "gowork",
      "cpp挺全的"
    ]
  },
  {
    id: "csview",
    title: "csview",
    url: "https://www.csview.cn/",
    description: "CSView一个面试和八股文的网站",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/csview.png",
    keywords: [
      "csview",
      "gowork",
      "CSView一个面试和八股文的网站"
    ]
  },
  {
    id: "leetcode",
    title: "LeetCode",
    url: "https://leetcode.cn/",
    description: "你们什么时候周赛才能打败AI",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/leetcode.webp",
    keywords: [
      "LeetCode",
      "gowork",
      "你们什么时候周赛才能打败AI"
    ]
  },
  {
    id: "wondercv",
    title: "超级简历",
    url: "https://www.wondercv.com/",
    description: "比较好用的一个简历制作网站",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wondercv.ico",
    keywords: [
      "超级简历",
      "gowork",
      "比较好用的一个简历制作网站"
    ]
  },
  {
    id: "bosszhipin",
    title: "Boss直聘",
    url: "https://www.zhipin.com/",
    description: "什么都有",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bosszhipin.ico",
    keywords: [
      "Boss直聘",
      "gowork",
      "什么都有"
    ]
  },
  {
    id: "lintcode",
    title: "Lintcode炼码",
    url: "https://www.lintcode.com/",
    description: "体验不如leetcode",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/lintcode.ico",
    keywords: [
      "Lintcode炼码",
      "gowork",
      "体验不如leetcode"
    ]
  },
  {
    id: "acmcoder",
    title: "acmcoder赛码",
    url: "https://www.acmcoder.com/",
    description: "有些公司会使用这个平台进行笔试",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/acmcoder.ico",
    keywords: [
      "acmcoder赛码",
      "gowork",
      "有些公司会使用这个平台进行笔试"
    ]
  },
  {
    id: "shixiseng",
    title: "实习僧",
    url: "https://www.shixiseng.com/",
    description: "一般",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/shixiseng.ico",
    keywords: [
      "实习僧",
      "gowork",
      "一般"
    ]
  },
  {
    id: "zhilianzhaopin",
    title: "智联招聘",
    url: "https://www.zhaopin.com/",
    description: "智联招聘",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zhilianzhaopin.png",
    keywords: [
      "智联招聘",
      "gowork"
    ]
  },
  {
    id: "ciweishixi",
    title: "刺猬实习",
    url: "https://www.ciwei.net/",
    description: "刺猬实习",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ciweishixi.ico",
    keywords: [
      "刺猬实习",
      "gowork"
    ]
  },
  {
    id: "haitouzhaopin",
    title: "鱼泡直聘校招",
    url: "https://www.haitou.cc/",
    description: "原网站是海投网",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/haitouzhaopin.ico",
    keywords: [
      "鱼泡直聘校招",
      "gowork",
      "原网站是海投网"
    ]
  },
  {
    id: "yingjiesheng",
    title: "应届生求职网",
    url: "https://www.yingjiesheng.com/",
    description: "应届生求职网",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yingjiesheng.png",
    keywords: [
      "应届生求职网",
      "gowork"
    ]
  },
  {
    id: "maimai",
    title: "脉脉",
    url: "https://maimai.cn/",
    description: "momo",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/maimai.ico",
    keywords: [
      "脉脉",
      "gowork",
      "momo"
    ]
  },
  {
    id: "offershow",
    title: "offershow",
    url: "https://www.offershow.cn/",
    description: "马内马内",
    categoryId: "gowork",
    iconPath: "https://folajj.github.io/MyNavPage/icon/offershow.ico",
    keywords: [
      "offershow",
      "gowork",
      "马内马内"
    ]
  },
  {
    id: "wispaperaizh",
    title: "wispaperaizh",
    url: "https://www.wispaper.ai/zh",
    description: "WisPaper：AI学术搜索引擎",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wispaperaizh.png",
    keywords: [
      "wispaperaizh",
      "papers",
      "WisPaper",
      "AI学术搜索引擎"
    ]
  },
  {
    id: "4openscience",
    title: "4openscience",
    url: "https://anonymous.4open.science/",
    description: "4openscience，匿名的github项目，发论文需要",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/4openscience.ico",
    keywords: [
      "4openscience",
      "papers",
      "匿名的github项目",
      "发论文需要"
    ]
  },
  {
    id: "cloudconvert",
    title: "svg转eps",
    url: "https://cloudconvert.com/svg-to-eps",
    description: "svg转eps",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cloudconvert.png",
    keywords: [
      "svg转eps",
      "papers"
    ]
  },
  {
    id: "zhuqueai",
    title: "朱雀AI检测助手",
    url: "https://matrix.tencent.com/ai-detect/",
    description: "检查文本是否AI味过重，每日五次免费",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zhuqueai.ico",
    keywords: [
      "朱雀AI检测助手",
      "papers",
      "检查文本是否AI味过重",
      "每日五次免费"
    ]
  },
  {
    id: "pdf24",
    title: "pdf24",
    url: "https://tools.pdf24.org/zh/svg-to-pdf",
    description: "svg转pdf",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/pdf24_32.png",
    keywords: [
      "pdf24",
      "papers",
      "svg转pdf"
    ]
  },
  {
    id: "zotero",
    title: "zotero",
    url: "https://www.zotero.org/",
    description: "永远的神，建议你把chrome插件也下了",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zotero.ico",
    keywords: [
      "zotero",
      "papers",
      "永远的神",
      "建议你把chrome插件也下了"
    ]
  },
  {
    id: "bohrium",
    title: "bohrium",
    url: "https://www.bohrium.com/",
    description: "波尔AI，全球科学家的AI for Science",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bohrium.png",
    keywords: [
      "bohrium",
      "papers",
      "波尔AI",
      "全球科学家的AI",
      "for",
      "Science"
    ]
  },
  {
    id: "mycolorSpace",
    title: "mycolor-space",
    url: "https://mycolor.space/",
    description: "科研绘图配色推荐！",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/MycolorSpace.png",
    keywords: [
      "mycolor-space",
      "papers",
      "科研绘图配色推荐！"
    ]
  },
  {
    id: "zlib",
    title: "Z-Library",
    url: "https://z-lib.id/",
    description: "Z-Library",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zlib.ico",
    keywords: [
      "Z-Library",
      "papers"
    ]
  },
  {
    id: "arxiv",
    title: "arXiv",
    url: "https://arxiv.org/",
    description: "arxiv，预印本",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/arxiv.png",
    keywords: [
      "arXiv",
      "papers",
      "arxiv",
      "预印本"
    ]
  },
  {
    id: "sota",
    title: "SOTA",
    url: "https://paperswithcode.com/sota",
    description: "收集论文SOTA模型",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/sota.png",
    keywords: [
      "SOTA",
      "papers",
      "收集论文SOTA模型"
    ]
  },
  {
    id: "overleaf",
    title: "Overleaf",
    url: "https://www.overleaf.com/",
    description: "经典Latex在线工具，写作必备",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/overleaf.svg",
    keywords: [
      "Overleaf",
      "papers",
      "经典Latex在线工具",
      "写作必备"
    ]
  },
  {
    id: "semanticscholar",
    title: "Semanticscholar",
    url: "https://www.semanticscholar.org/",
    description: "在线查找papers",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/semanticscholar.png",
    keywords: [
      "Semanticscholar",
      "papers",
      "在线查找papers"
    ]
  },
  {
    id: "ccfnis",
    title: "CCF分区",
    url: "https://www.ccf.org.cn/Academic_Evaluation/NIS/",
    description: "网络与信息安全推荐期刊",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ccfnis.png",
    keywords: [
      "CCF分区",
      "papers",
      "网络与信息安全推荐期刊"
    ]
  },
  {
    id: "IEEEtemplateSelector",
    title: "IEEE论文模板下载",
    url: "https://template-selector.ieee.org/secure/templateSelector/publicationType",
    description: "IEEE论文模板下载",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/IEEEtemplateSelector.png",
    keywords: [
      "IEEE论文模板下载",
      "papers"
    ]
  },
  {
    id: "xueshu",
    title: "学术之家",
    url: "https://www.xueshu.com/",
    description: "学术之家",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xueshu.ico",
    keywords: [
      "学术之家",
      "papers"
    ]
  },
  {
    id: "enmermaid",
    title: "mermaid",
    url: "https://mermaid.live/",
    description: "国外的在线mermaid，有限量免费，样式还行",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/enmermaid.svg",
    keywords: [
      "mermaid",
      "papers",
      "国外的在线mermaid",
      "有限量免费",
      "样式还行"
    ]
  },
  {
    id: "yanfajia",
    title: "研发家",
    url: "https://www.yanfajia.com/",
    description: "研发家",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yanfajia.ico",
    keywords: [
      "研发家",
      "papers"
    ]
  },
  {
    id: "cnmermaid",
    title: "mermaid",
    url: "https://www.min2k.com/tools/mermaid/",
    description: "国内的在线mermaid",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cnmermaid.ico",
    keywords: [
      "mermaid",
      "papers",
      "国内的在线mermaid"
    ]
  },
  {
    id: "netinfo-security",
    title: "信息网络安全期刊",
    url: "http://netinfo-security.org/CN/1671-1122/home.shtml",
    description: "netinfo-security",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/netinfo-security.png",
    keywords: [
      "信息网络安全期刊",
      "papers",
      "netinfo-security"
    ]
  },
  {
    id: "CeaCeajOrg",
    title: "计算机工程与应用",
    url: "http://cea.ceaj.org/CN/1002-8331/home.shtml",
    description: "计算机工程与应用期刊",
    categoryId: "papers",
    iconPath: "https://folajj.github.io/MyNavPage/icon/CeaCeajOrg.ico",
    keywords: [
      "计算机工程与应用",
      "papers",
      "计算机工程与应用期刊"
    ]
  },
  {
    id: "futurecv",
    title: "未来简历",
    url: "https://futurecv.cn/",
    description: "你深也有一个会免的简历制作工具",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/futurecv.png",
    keywords: [
      "未来简历",
      "CampusWelfare",
      "你深也有一个会免的简历制作工具"
    ]
  },
  {
    id: "jiuyexing",
    title: "就业星",
    url: "https://portal.jiuyexing.com/#/home/home-page",
    description: "也是有模拟面试之类的，会免",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/jiuyexing.png",
    keywords: [
      "就业星",
      "CampusWelfare",
      "也是有模拟面试之类的",
      "会免"
    ]
  },
  {
    id: "aminer",
    title: "有时面试",
    url: "https://growup.aminer.cn/student/login",
    description: "你深特有的会免，可以AI模拟面试",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/aminer.jpg",
    keywords: [
      "有时面试",
      "CampusWelfare",
      "你深特有的会免",
      "可以AI模拟面试"
    ]
  },
  {
    id: "szunas",
    title: "网安Alist网盘",
    url: "http://nas.szu.moe/",
    description: "仅限校内网络访问，里面很多东西思密达",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/szunas.svg",
    keywords: [
      "网安Alist网盘",
      "CampusWelfare",
      "仅限校内网络访问",
      "里面很多东西思密达"
    ]
  },
  {
    id: "1005Cloudreve",
    title: "1005-NAS",
    url: "http://1005.shkong.com/home",
    description: "仅限校内网络访问，1005-NAS",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/1005Cloudreve.ico",
    keywords: [
      "1005-NAS",
      "CampusWelfare",
      "仅限校内网络访问"
    ]
  },
  {
    id: "szums",
    title: "校内正版软件下载",
    url: "http://ms.szu.edu.cn/",
    description: "仅限校内网络访问，matlab、wps",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/szums.ico",
    keywords: [
      "校内正版软件下载",
      "CampusWelfare",
      "仅限校内网络访问",
      "matlab",
      "wps"
    ]
  },
  {
    id: "aicloudszu",
    title: "算力调度平台",
    url: "https://console.aicloud.szu.edu.cn/console/task-debug",
    description: "仅限校内网络访问，你深的智算资源，还是有点余额的",
    categoryId: "CampusWelfare",
    iconPath: "https://folajj.github.io/MyNavPage/icon/aicloudszu.ico",
    keywords: [
      "算力调度平台",
      "CampusWelfare",
      "仅限校内网络访问",
      "你深的智算资源",
      "还是有点余额的"
    ]
  },
  {
    id: "freevpsedu",
    title: "freevpsedu",
    url: "https://freevps.edu.pl/",
    description: "免费的Windows VPS托管给学生和开发者",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/freevpsedu.png",
    keywords: [
      "freevpsedu",
      "Server",
      "免费的Windows",
      "VPS托管给学生和开发者"
    ]
  },
  {
    id: "compshare",
    title: "优云智算",
    url: "https://console.compshare.cn/",
    description: "优云智算",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/compshare.ico",
    keywords: [
      "优云智算",
      "Server"
    ]
  },
  {
    id: "vpsboy",
    title: "vpsboy",
    url: "https://vpsboy.top/",
    description: "多的不说了",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/vpsboy.png",
    keywords: [
      "vpsboy",
      "Server",
      "多的不说了"
    ]
  },
  {
    id: "cloudcone",
    title: "cloudcone",
    url: "https://app.cloudcone.com/",
    description: "多的不说了",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cloudcone.png",
    keywords: [
      "cloudcone",
      "Server",
      "多的不说了"
    ]
  },
  {
    id: "whdmw",
    title: "whdmw",
    url: "https://www.whdmw.com/",
    description: "大麦云主机",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/whdmw.ico",
    keywords: [
      "whdmw",
      "Server",
      "大麦云主机"
    ]
  },
  {
    id: "bltcy",
    title: "bltcy",
    url: "https://api.bltcy.ai/",
    description: "柏拉图API中转站",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bltcy.png",
    keywords: [
      "bltcy",
      "Server",
      "柏拉图API中转站"
    ]
  },
  {
    id: "autodl",
    title: "AutoDL",
    url: "https://www.autodl.com/console/homepage/personal",
    description: "经典GPU算力，主要是可以走报销，有账单说明啥的",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/autodl.png",
    keywords: [
      "AutoDL",
      "Server",
      "经典GPU算力",
      "主要是可以走报销",
      "有账单说明啥的"
    ]
  },
  {
    id: "tencentCloud",
    title: "腾讯云",
    url: "https://cloud.tencent.com/",
    description: "有保证",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tencentCloud.ico",
    keywords: [
      "腾讯云",
      "Server",
      "有保证"
    ]
  },
  {
    id: "huaweiCloud",
    title: "华为云",
    url: "https://www.huaweicloud.com/",
    description: "华为云",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/huaweiCloud.ico",
    keywords: [
      "华为云",
      "Server"
    ]
  },
  {
    id: "tianyiCloud",
    title: "天翼云",
    url: "https://www.ctyun.cn/",
    description: "呃呃呃",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tianyiCloud.ico",
    keywords: [
      "天翼云",
      "Server",
      "呃呃呃"
    ]
  },
  {
    id: "jdCloud",
    title: "京东云",
    url: "https://www.jdcloud.com/",
    description: "嗯嗯嗯",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/jdCloud.ico",
    keywords: [
      "京东云",
      "Server",
      "嗯嗯嗯"
    ]
  },
  {
    id: "volcengine",
    title: "火山引擎",
    url: "https://www.volcengine.com/product/gpu",
    description: "新起之秀",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/volcengine.png",
    keywords: [
      "火山引擎",
      "Server",
      "新起之秀"
    ]
  },
  {
    id: "aliyun",
    title: "阿里云",
    url: "https://cn.aliyun.com/",
    description: "品牌的力量",
    categoryId: "Server",
    iconPath: "https://folajj.github.io/MyNavPage/icon/aliyun.ico",
    keywords: [
      "阿里云",
      "Server",
      "品牌的力量"
    ]
  },
  {
    id: "minimax",
    title: "minimax",
    url: "https://www.minimaxi.com/",
    description: "minimax",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/minimax.ico",
    keywords: [
      "minimax",
      "AI"
    ]
  },
  {
    id: "weelinking",
    title: "weelinking",
    url: "https://docs.weelinking.com/",
    description: "AI-API中转站",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/weelinking.ico",
    keywords: [
      "weelinking",
      "AI",
      "AI-API中转站"
    ]
  },
  {
    id: "jeniya",
    title: "jeniya",
    url: "https://jeniya.cn/",
    description: "AI-API中转站",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/jeniya.png",
    keywords: [
      "jeniya",
      "AI",
      "AI-API中转站"
    ]
  },
  {
    id: "greatrouter",
    title: "greatrouter",
    url: "https://www.greatrouter.com/",
    description: "AI-API中转站",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/greatrouter.svg",
    keywords: [
      "greatrouter",
      "AI",
      "AI-API中转站"
    ]
  },
  {
    id: "declawed",
    title: "declawed",
    url: "https://declawed.io/",
    description: "网络空间OpenClaw暴露实例",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/declawed.png",
    keywords: [
      "declawed",
      "AI",
      "网络空间OpenClaw暴露实例"
    ]
  },
  {
    id: "openclaw",
    title: "openclaw",
    url: "https://openclaw.ai/",
    description: "谁能忍住在预算充足的时候养只虾呢",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/openclaw.svg",
    keywords: [
      "openclaw",
      "AI",
      "谁能忍住在预算充足的时候养只虾呢"
    ]
  },
  {
    id: "clawhub",
    title: "clawhub",
    url: "https://clawhub.ai/",
    description: "Clawhub官方的skills超商",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/clawhub.png",
    keywords: [
      "clawhub",
      "AI",
      "Clawhub官方的skills超商"
    ]
  },
  {
    id: "skillssh",
    title: "skillssh",
    url: "https://skills.sh/",
    description: "Skills检索发现",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/skillssh.ico",
    keywords: [
      "skillssh",
      "AI",
      "Skills检索发现"
    ]
  },
  {
    id: "GLMAI",
    title: "GLMAI",
    url: "https://www.bigmodel.cn/glm-coding",
    description: "智谱AI，BigModel",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/GLMAI.png",
    keywords: [
      "GLMAI",
      "AI",
      "智谱AI",
      "BigModel"
    ]
  },
  {
    id: "longcat",
    title: "Longcat AI",
    url: "https://longcat.chat/",
    description: "longcat 每日免费额度",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/longcat.png",
    keywords: [
      "Longcat",
      "AI",
      "longcat",
      "每日免费额度"
    ]
  },
  {
    id: "jimeng",
    title: "即梦AI",
    url: "https://jimeng.jianying.com/",
    description: "即梦AI-即刻造梦",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/jimeng.ico",
    keywords: [
      "即梦AI",
      "AI",
      "即梦AI-即刻造梦"
    ]
  },
  {
    id: "imini",
    title: "imini-AI",
    url: "https://imini.com/zh",
    description: "imini一站式AI图片和AI视频创作平台",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/imini.ico",
    keywords: [
      "imini-AI",
      "AI",
      "imini一站式AI图片和AI视频创作平台"
    ]
  },
  {
    id: "gemini",
    title: "gemini",
    url: "https://gemini.google.com/",
    description: "gemini、NanoBananaPro",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/gemini.jpg",
    keywords: [
      "gemini",
      "AI",
      "NanoBananaPro"
    ]
  },
  {
    id: "nanobananaorg",
    title: "nanobananaOrg",
    url: "https://nanobanana.org/zh",
    description: "nanobananaOrg不知道正不正规",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/nanobananaorg.png",
    keywords: [
      "nanobananaOrg",
      "AI",
      "nanobananaOrg不知道正不正规"
    ]
  },
  {
    id: "notebooklm",
    title: "Google-notebooklm",
    url: "https://notebooklm.google/",
    description: "notebooklm",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/notebooklm.svg",
    keywords: [
      "Google-notebooklm",
      "AI",
      "notebooklm"
    ]
  },
  {
    id: "kaggle",
    title: "kaggle",
    url: "https://www.kaggle.com/",
    description: "kaggle",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/kaggle.ico",
    keywords: [
      "kaggle",
      "AI"
    ]
  },
  {
    id: "HelloAgents",
    title: "HelloAgents",
    url: "https://datawhalechina.github.io/hello-agents/#/",
    description: "适合中国宝宝体质的Agent入门手册",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/HelloAgents.png",
    keywords: [
      "HelloAgents",
      "AI",
      "适合中国宝宝体质的Agent入门手册"
    ]
  },
  {
    id: "HappyLLM",
    title: "HappyLLM",
    url: "https://datawhalechina.github.io/happy-llm/#/",
    description: "适合中国宝宝体质的LLM入门手册",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/HappyLLM.png",
    keywords: [
      "HappyLLM",
      "AI",
      "适合中国宝宝体质的LLM入门手册"
    ]
  },
  {
    id: "LLaMAFactory",
    title: "LLaMA-Factory",
    url: "https://github.com/hiyouga/LLaMA-Factory",
    description: "永远的神，LLaMA-Factory",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/LLaMAFactory.png",
    keywords: [
      "LLaMA-Factory",
      "AI",
      "永远的神"
    ]
  },
  {
    id: "easydataset",
    title: "Easy-dataset",
    url: "https://github.com/ConardLi/easy-dataset/blob/main/README.zh-CN.md",
    description: "一个使用大模型帮你处理数据集的好东西",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/easydataset.png",
    keywords: [
      "Easy-dataset",
      "AI",
      "一个使用大模型帮你处理数据集的好东西"
    ]
  },
  {
    id: "promptingguide",
    title: "PromptingGuide",
    url: "https://www.promptingguide.ai/zh",
    description: "21世纪每个人都得会提示词工程",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/promptingguide.svg",
    keywords: [
      "PromptingGuide",
      "AI",
      "21世纪每个人都得会提示词工程"
    ]
  },
  {
    id: "promptoptimizer",
    title: "PromptOptimizer",
    url: "https://github.com/linshenkx/prompt-optimizer",
    description: "什么？你说不会提示词？那就AI帮你改吧",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/promptoptimizer.ico",
    keywords: [
      "PromptOptimizer",
      "AI",
      "什么？你说不会提示词？那就AI帮你改吧"
    ]
  },
  {
    id: "4apitop",
    title: "4apitop",
    url: "https://4api.top/",
    description: "4apitop",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/4apitop.png",
    keywords: [
      "4apitop",
      "AI"
    ]
  },
  {
    id: "henapi",
    title: "HenAPI",
    url: "https://www.henapi.top/dash",
    description: "HenAPI",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/henapi.png",
    keywords: [
      "HenAPI",
      "AI"
    ]
  },
  {
    id: "siliconflow",
    title: "硅基流动",
    url: "https://siliconflow.cn/",
    description: "硅基流动",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/siliconflow.ico",
    keywords: [
      "硅基流动",
      "AI"
    ]
  },
  {
    id: "openai",
    title: "Openai",
    url: "https://openai.com/",
    description: "还是无法逾越的高山",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/openai.svg",
    keywords: [
      "Openai",
      "AI",
      "还是无法逾越的高山"
    ]
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    url: "https://chat.deepseek.com/",
    description: "不要念成DickSeek了",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/deepseek.svg",
    keywords: [
      "DeepSeek",
      "AI",
      "不要念成DickSeek了"
    ]
  },
  {
    id: "qwenai",
    title: "Qwen",
    url: "https://chat.qwen.ai/",
    description: "从学术界迈向ToC",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/qwenai.png",
    keywords: [
      "Qwen",
      "AI",
      "从学术界迈向ToC"
    ]
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    url: "https://chat.chatbot.app/?model=4o-mini",
    description: "ChatGPT对话",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/chatgpt.svg",
    keywords: [
      "ChatGPT",
      "AI",
      "ChatGPT对话"
    ]
  },
  {
    id: "kimi",
    title: "kimi",
    url: "https://www.kimi.com/",
    description: "别的不敢说，但他搜索arxiv有一手的",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/kimi.ico",
    keywords: [
      "kimi",
      "AI",
      "别的不敢说",
      "但他搜索arxiv有一手的"
    ]
  },
  {
    id: "yuanbao",
    title: "腾讯元宝",
    url: "https://yuanbao.tencent.com/",
    description: "DeepSeek启动器罢了",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yuanbao.svg",
    keywords: [
      "腾讯元宝",
      "AI",
      "DeepSeek启动器罢了"
    ]
  },
  {
    id: "doubao",
    title: "豆包",
    url: "https://www.doubao.com/chat/",
    description: "豆包姐越来越像人了",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/doubao.png",
    keywords: [
      "豆包",
      "AI",
      "豆包姐越来越像人了"
    ]
  },
  {
    id: "mcpcn",
    title: "MCP大全",
    url: "https://www.mcp-cn.com/",
    description: "MCP菜单",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/mcpcn.svg",
    keywords: [
      "MCP大全",
      "AI",
      "MCP菜单"
    ]
  },
  {
    id: "dify",
    title: "Dify",
    url: "https://cloud.dify.ai/apps",
    description: "好好好",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/dify.svg",
    keywords: [
      "Dify",
      "AI",
      "好好好"
    ]
  },
  {
    id: "huggingface",
    title: "HuggingFace",
    url: "https://huggingface.co/",
    description: "好好好",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/huggingface.ico",
    keywords: [
      "HuggingFace",
      "AI",
      "好好好"
    ]
  },
  {
    id: "huggingfacecopy",
    title: "HuggingFace镜像站",
    url: "https://hf-mirror.com/",
    description: "镜像站",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/huggingface.ico",
    keywords: [
      "HuggingFace镜像站",
      "AI",
      "镜像站"
    ]
  },
  {
    id: "modelscope",
    title: "魔塔",
    url: "https://www.modelscope.cn/home",
    description: "好好好",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/modelscope.ico",
    keywords: [
      "魔塔",
      "AI",
      "好好好"
    ]
  },
  {
    id: "labml",
    title: "labml",
    url: "https://nn.labml.ai/zh/",
    description: "逐行解读机器学习代码",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/labml.png",
    keywords: [
      "labml",
      "AI",
      "逐行解读机器学习代码"
    ]
  },
  {
    id: "trae",
    title: "Trae",
    url: "https://www.trae.cn/plugin",
    description: "感觉不如cursor",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/trae.png",
    keywords: [
      "Trae",
      "AI",
      "感觉不如cursor"
    ]
  },
  {
    id: "cursor",
    title: "Cursor",
    url: "https://cursor.com/cn",
    description: "双汇火腿肠，王中王",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cursor.ico",
    keywords: [
      "Cursor",
      "AI",
      "双汇火腿肠",
      "王中王"
    ]
  },
  {
    id: "d2lai",
    title: "深度学习",
    url: "https://zh.d2l.ai/index.html",
    description: "动手学深度学习一书的电子册",
    categoryId: "AI",
    iconPath: "https://folajj.github.io/MyNavPage/icon/d2lai.png",
    keywords: [
      "深度学习",
      "AI",
      "动手学深度学习一书的电子册"
    ]
  },
  {
    id: "yandex",
    title: "Yandex",
    url: "https://yandex.com/",
    description: "网站时光机",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yandex.png",
    keywords: [
      "Yandex",
      "meme",
      "网站时光机"
    ]
  },
  {
    id: "webarchive",
    title: "Wayback Machine",
    url: "https://web.archive.org/",
    description: "网站时光机",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/webarchive.ico",
    keywords: [
      "Wayback",
      "Machine",
      "meme",
      "网站时光机"
    ]
  },
  {
    id: "nof1ai",
    title: "LLM-solo炒股战",
    url: "https://nof1.ai/",
    description: "LLM塞博斗蛐蛐",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/nof1ai.png",
    keywords: [
      "LLM-solo炒股战",
      "meme",
      "LLM塞博斗蛐蛐"
    ]
  },
  {
    id: "icebergcharts",
    title: "中文互联网迷因",
    url: "https://icebergcharts.com/i/Chinese_Oddities",
    description: "当小故事看了，还挺有趣的",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/icebergcharts.png",
    keywords: [
      "中文互联网迷因",
      "meme",
      "当小故事看了",
      "还挺有趣的"
    ]
  },
  {
    id: "typora",
    title: "typora通行证管理",
    url: "https://store.typora.io/my",
    description: "谁把这玩���放这里了？",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/typora.png",
    keywords: [
      "typora通行证管理",
      "meme",
      "谁把这玩���放这里了？"
    ]
  },
  {
    id: "wanxuege",
    title: "考研网盘",
    url: "https://www.wanxuege.com/forum-93-1.html",
    description: "万学阁，考研网盘挺全的",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wanxuege.ico",
    keywords: [
      "考研网盘",
      "meme",
      "万学阁",
      "考研网盘挺全的"
    ]
  },
  {
    id: "tapfog",
    title: "Tapfog",
    url: "https://www.tapfog.io/#/login",
    description: "DDDD，阶段计费型",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tapfog.ico",
    keywords: [
      "Tapfog",
      "meme",
      "DDDD",
      "阶段计费型"
    ]
  },
  {
    id: "mojie",
    title: "MoJie",
    url: "https://mojie.me/#/dashboard",
    description: "DDDD，当量计费型",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/mojie.ico",
    keywords: [
      "MoJie",
      "meme",
      "DDDD",
      "当量计费型"
    ]
  },
  {
    id: "zaoanyun",
    title: "早安云",
    url: "https://早安云.net/",
    description: "早安云",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zaoanyun.ico",
    keywords: [
      "早安云",
      "meme"
    ]
  },
  {
    id: "helloshudong",
    title: "HelloShudong",
    url: "https://hello-shudong.com/user",
    description: "备用地址：https://nihaoshudong.com",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/helloshudong.ico",
    keywords: [
      "HelloShudong",
      "meme",
      "备用地址",
      "https",
      "nihaoshudong.com"
    ]
  },
  {
    id: "tizi001",
    title: "tizi001",
    url: "https://tizi001.com/",
    description: "DDDD，备用",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tizi001.ico",
    keywords: [
      "tizi001",
      "meme",
      "DDDD",
      "备用"
    ]
  },
  {
    id: "meimeiyun",
    title: "MeiMeiYun",
    url: "https://www.meimeiyun.top/",
    description: "DDDD，签到免费型",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/meimeiyun.ico",
    keywords: [
      "MeiMeiYun",
      "meme",
      "DDDD",
      "签到免费型"
    ]
  },
  {
    id: "xhj",
    title: "小火箭",
    url: "https://xhj.info/",
    description: "游戏加速",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xhj.png",
    keywords: [
      "小火箭",
      "meme",
      "游戏加速"
    ]
  },
  {
    id: "xxfvipaff",
    title: "小旋风加速",
    url: "https://ca01.xxfvipaff.pro/#/login",
    description: "游戏加速",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xxfvipaff.png",
    keywords: [
      "小旋风加速",
      "meme",
      "游戏加速"
    ]
  },
  {
    id: "ggbet",
    title: "GGbet",
    url: "https://gg.bet/cn/esports",
    description: "GG.BET",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ggbet.png",
    keywords: [
      "GGbet",
      "meme",
      "GG.BET"
    ]
  },
  {
    id: "windy",
    title: "Windy风力图",
    url: "https://www.windy.com/",
    description: "十分好用的气象网站",
    categoryId: "meme",
    iconPath: "https://folajj.github.io/MyNavPage/icon/windy.png",
    keywords: [
      "Windy风力图",
      "meme",
      "十分好用的气象网站"
    ]
  },
  {
    id: "ddpoc",
    title: "ddpoc",
    url: "https://ddpoc.com/",
    description: "DayDayPoc",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddpoc.ico",
    keywords: [
      "ddpoc",
      "VulnerabilityDatabase",
      "DayDayPoc"
    ]
  },
  {
    id: "imfhtPOC",
    title: "imfht-POC平台",
    url: "https://cve.imfht.com/poc",
    description: "检索最新的可用POC，AI大规模爬取分析",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/imfhtPOC.png",
    keywords: [
      "imfht-POC平台",
      "VulnerabilityDatabase",
      "检索最新的可用POC",
      "AI大规模爬取分析"
    ]
  },
  {
    id: "wooyun",
    title: "wooyun镜像站",
    url: "https://wy.zone.ci/",
    description: "全球首个针对人工智能的漏洞赏金平台",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wyzone.ico",
    keywords: [
      "wooyun镜像站",
      "VulnerabilityDatabase",
      "全球首个针对人工智能的漏洞赏金平台"
    ]
  },
  {
    id: "huntrCom",
    title: "Huntr",
    url: "https://huntr.com/",
    description: "全球首个针对人工智能的漏洞赏金平台",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/huntrCom.ico",
    keywords: [
      "Huntr",
      "VulnerabilityDatabase",
      "全球首个针对人工智能的漏洞赏金平台"
    ]
  },
  {
    id: "Vulnerability-lookup",
    title: "Vulnerability-lookup",
    url: "https://cve.circl.lu/",
    description: "Vulnerability-lookup漏洞查找",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/Vulnerability-lookup.ico",
    keywords: [
      "Vulnerability-lookup",
      "VulnerabilityDatabase",
      "Vulnerability-lookup漏洞查找"
    ]
  },
  {
    id: "cnnvd",
    title: "国家信息安全漏洞库",
    url: "https://www.cnnvd.org.cn/home/childHome",
    description: "CNNVD",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cnnvd.ico",
    keywords: [
      "国家信息安全漏洞库",
      "VulnerabilityDatabase",
      "CNNVD"
    ]
  },
  {
    id: "cve",
    title: "CVE漏洞库",
    url: "https://www.cve.org/",
    description: "CVE漏洞库",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cve.svg",
    keywords: [
      "CVE漏洞库",
      "VulnerabilityDatabase"
    ]
  },
  {
    id: "avdaliyun",
    title: "aliyun漏洞库",
    url: "https://avd.aliyun.com/",
    description: "aliyun漏洞库",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/avdaliyun.ico",
    keywords: [
      "aliyun漏洞库",
      "VulnerabilityDatabase"
    ]
  },
  {
    id: "CVEProject",
    title: "CVEProject",
    url: "https://github.com/CVEProject/cvelistV5",
    description: "cvelist在github",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/CVEProject.png",
    keywords: [
      "CVEProject",
      "VulnerabilityDatabase",
      "cvelist在github"
    ]
  },
  {
    id: "exploitdb",
    title: "ExploitDB",
    url: "https://www.exploit-db.com/",
    description: "不止漏洞库，还有很多其他东西",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/exploitdb.ico",
    keywords: [
      "ExploitDB",
      "VulnerabilityDatabase",
      "不止漏洞库",
      "还有很多其他东西"
    ]
  },
  {
    id: "butian",
    title: "补天",
    url: "https://www.butian.net/",
    description: "补天平台",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/butian.ico",
    keywords: [
      "补天",
      "VulnerabilityDatabase",
      "补天平台"
    ]
  },
  {
    id: "seebug",
    title: "Seebug",
    url: "https://www.seebug.org/",
    description: "知道创宇的漏洞平台",
    categoryId: "VulnerabilityDatabase",
    iconPath: "https://folajj.github.io/MyNavPage/icon/seebug.ico",
    keywords: [
      "Seebug",
      "VulnerabilityDatabase",
      "知道创宇的漏洞平台"
    ]
  },
  {
    id: "ruancang",
    title: "软仓",
    url: "https://www.ruancang.net/",
    description: "挺多专业软件免费下载安装的网站",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ruancang.png",
    keywords: [
      "软仓",
      "ToolChain",
      "挺多专业软件免费下载安装的网站"
    ]
  },
  {
    id: "MaxMind",
    title: "MaxMind",
    url: "https://www.maxmind.com/en/home",
    description: "IP定位数据库，免费账户有限制",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/MaxMind.ico",
    keywords: [
      "MaxMind",
      "ToolChain",
      "IP定位数据库",
      "免费账户有限制"
    ]
  },
  {
    id: "officetool",
    title: "officetool",
    url: "https://www.officetool.plus/zh-cn/",
    description: "office实用部署工具",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/officetool.ico",
    keywords: [
      "officetool",
      "ToolChain",
      "office实用部署工具"
    ]
  },
  {
    id: "namesilo",
    title: "NameSilo",
    url: "https://www.namesilo.com/account/",
    description: "一个免备案的域名站",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/NameSilo.ico",
    keywords: [
      "NameSilo",
      "ToolChain",
      "一个免备案的域名站"
    ]
  },
  {
    id: "qianduangebilidanmu",
    title: "bili_danmu",
    url: "https://tool.qianduange.cn/bili_danmu",
    description: "一个查B站弹幕发送者的网站",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/qianduangebilidanmu.png",
    keywords: [
      "bili_danmu",
      "ToolChain",
      "一个查B站弹幕发送者的网站"
    ]
  },
  {
    id: "ctftoolsio",
    title: "ctftools-io",
    url: "https://ctftools.github.io/",
    description: "一个在线的CTFtools收集网站",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ctftoolsio.ico",
    keywords: [
      "ctftools-io",
      "ToolChain",
      "一个在线的CTFtools收集网站"
    ]
  },
  {
    id: "InternxtCom",
    title: "InternxtCom",
    url: "https://internxt.com/zh/temporary-email",
    description: "一个在线的免费临时邮箱",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/InternxtCom.png",
    keywords: [
      "InternxtCom",
      "ToolChain",
      "一个在线的免费临时邮箱"
    ]
  },
  {
    id: "viewdnsinfo",
    title: "viewdnsinfo",
    url: "https://viewdns.info/",
    description: "viewdns.info一个有较多关于dns查询、ip查询的在线网站",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/viewdnsinfo.ico",
    keywords: [
      "viewdnsinfo",
      "ToolChain",
      "viewdns.info一个有较多关于dns查询",
      "ip查询的在线网站"
    ]
  },
  {
    id: "de4js",
    title: "de4js",
    url: "https://lelinhtinh.github.io/de4js/",
    description: "de4js，一款js反混淆工具",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/de4js.ico",
    keywords: [
      "de4js",
      "ToolChain",
      "一款js反混淆工具"
    ]
  },
  {
    id: "linuxmirrorscn",
    title: "Linuxmirrors",
    url: "https://linuxmirrors.cn/",
    description: "一键脚本换源，巨好用！适配多种系统，别再自己配啦！",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/linuxmirrorscn.svg",
    keywords: [
      "Linuxmirrors",
      "ToolChain",
      "一键脚本换源",
      "巨好用！适配多种系统",
      "别再自己配啦！"
    ]
  },
  {
    id: "SerpApi",
    title: "SerpApi",
    url: "https://serpapi.com/",
    description: "SerpApi综合的搜索引擎平台，有免��额度",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/SerpApi.png",
    keywords: [
      "SerpApi",
      "ToolChain",
      "SerpApi综合的搜索引擎平台",
      "有免��额度"
    ]
  },
  {
    id: "busuanzi",
    title: "busuanzi",
    url: "https://busuanzi.ibruce.info/",
    description: "永久免费使用，好人站长。你的站点要在公网，它才会去记录",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/busuanzi.png",
    keywords: [
      "busuanzi",
      "ToolChain",
      "永久免费使用",
      "好人站长",
      "你的站点要在公网",
      "它才会去记录"
    ]
  },
  {
    id: "googleanalytics",
    title: "GoogleAnalytics",
    url: "https://analytics.google.com/analytics/web/provision/#/provision",
    description: "GoogleAnalytics",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/GoogleAnalytics.png",
    keywords: [
      "GoogleAnalytics",
      "ToolChain"
    ]
  },
  {
    id: "cloudflareanalytics",
    title: "CloudflareAnalytics",
    url: "https://www.cloudflare.com/zh-tw/application-services/products/analytics/",
    description: "cloudflare网站访问量统计平台",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/CloudflareAnalytics.png",
    keywords: [
      "CloudflareAnalytics",
      "ToolChain",
      "cloudflare网站访问量统计平台"
    ]
  },
  {
    id: "counterapi",
    title: "CounterAPI",
    url: "https://app.counterapi.dev/",
    description: "一款免费限量的网站访问量统计平台",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/counterapi.png",
    keywords: [
      "CounterAPI",
      "ToolChain",
      "一款免费限量的网站访问量统计平台"
    ]
  },
  {
    id: "cowtransfer",
    title: "奶牛快传（悲）",
    url: "https://cowtransfer.com/",
    description: "一个非常简洁好用的文件分享工具，时代的眼泪，25年12月寄了",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cowtransfer.png",
    keywords: [
      "奶牛快传",
      "悲",
      "ToolChain",
      "一个非常简洁好用的文件分享工具",
      "时代的眼泪",
      "25年12月寄了"
    ]
  },
  {
    id: "dnslog",
    title: "DNSLog",
    url: "https://dnslog.uk/template",
    description: "dnslog反代检查之类的必备，已经寄了",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/dnslog.png",
    keywords: [
      "DNSLog",
      "ToolChain",
      "dnslog反代检查之类的必备",
      "已经寄了"
    ]
  },
  {
    id: "syscall",
    title: "Syscall",
    url: "https://syscall.sh/",
    description: "系统调用号查询，什么？你说你是pwn手？",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/syscall.png",
    keywords: [
      "Syscall",
      "ToolChain",
      "系统调用号查询",
      "什么？你说你是pwn手？"
    ]
  },
  {
    id: "libc",
    title: "Libc",
    url: "https://libc.rip/",
    description: "libc库查询工具",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/libc.png",
    keywords: [
      "Libc",
      "ToolChain",
      "libc库查询工具"
    ]
  },
  {
    id: "shellcode",
    title: "Shellcode",
    url: "http://shell-storm.org/shellcode/index.html",
    description: "shellcode大全",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/shellcode.png",
    keywords: [
      "Shellcode",
      "ToolChain",
      "shellcode大全"
    ]
  },
  {
    id: "1o1oxyz",
    title: "随波逐流",
    url: "http://1o1o.xyz/",
    description: "随波逐流一把梭",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/1o1oxyz.jpg",
    keywords: [
      "随波逐流",
      "ToolChain",
      "随波逐流一把梭"
    ]
  },
  {
    id: "lazydork",
    title: "LazyDork",
    url: "https://iamunixtz.github.io/LazyDork/",
    description: "有各种写好配置���谷歌搜索，方便偷懒",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/lazydork.ico",
    keywords: [
      "LazyDork",
      "ToolChain",
      "有各种写好配置���谷歌搜索",
      "方便偷懒"
    ]
  },
  {
    id: "ddosiscg",
    title: "SqlMap偷懒",
    url: "https://www.ddosi.org/scg/",
    description: "SQLMAP命令偷懒生成的工具罢了",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddosiscg.png",
    keywords: [
      "SqlMap偷懒",
      "ToolChain",
      "SQLMAP命令偷懒生成的工具罢了"
    ]
  },
  {
    id: "dockeraityp",
    title: "Docker镜像源",
    url: "https://docker.aityp.com/",
    description: "Docker渡渡鸟镜像源",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/dockeraityp.ico",
    keywords: [
      "Docker镜像源",
      "ToolChain",
      "Docker渡渡鸟镜像源"
    ]
  },
  {
    id: "ddosishell",
    title: "反弹shell偷懒",
    url: "https://www.ddosi.org/shell/",
    description: "反弹shell自动生成的在线工具",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddosiscg.png",
    keywords: [
      "反弹shell偷懒",
      "ToolChain",
      "反弹shell自动生成的在线工具"
    ]
  },
  {
    id: "ddosidork",
    title: "谷歌dork偷懒",
    url: "https://www.ddosi.org/dork/",
    description: "谷歌dork偷懒",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddosiscg.png",
    keywords: [
      "谷歌dork偷懒",
      "ToolChain"
    ]
  },
  {
    id: "factordb",
    title: "大数分解",
    url: "http://factordb.com/",
    description: "大数分解",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/factordb.png",
    keywords: [
      "大数分解",
      "ToolChain"
    ]
  },
  {
    id: "godbolt",
    title: "在线程序转汇编",
    url: "https://godbolt.org/",
    description: "在线程序转汇编，非常好用，pwn手初学必备",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/godbolt.ico",
    keywords: [
      "在线程序转汇编",
      "ToolChain",
      "非常好用",
      "pwn手初学必备"
    ]
  },
  {
    id: "linuxcommand",
    title: "Linux命令快查手册",
    url: "https://wangchujiang.com/linux-command/hot.html",
    description: "Linux命令快查手册",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/linuxcommand.ico",
    keywords: [
      "Linux命令快查手册",
      "ToolChain"
    ]
  },
  {
    id: "cmd5",
    title: "CMD5",
    url: "https://www.cmd5.com/default.aspx",
    description: "cmd5查询某些加密的在线网站，必备",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cmd5.ico",
    keywords: [
      "CMD5",
      "ToolChain",
      "cmd5查询某些加密的在线网站",
      "必备"
    ]
  },
  {
    id: "wavedrom",
    title: "硬件协议时序图",
    url: "https://wavedrom.com/editor.html",
    description: "用于生成硬件协议时序图，美观",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wavedrom.ico",
    keywords: [
      "硬件协议时序图",
      "ToolChain",
      "用于生成硬件协议时序图",
      "美观"
    ]
  },
  {
    id: "chaipip",
    title: "高精度IP地址搜索",
    url: "https://chaipip.com/",
    description: "定位某个邪恶ip罢了",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/chaipip.ico",
    keywords: [
      "高精度IP地址搜索",
      "ToolChain",
      "定位某个邪恶ip罢了"
    ]
  },
  {
    id: "mirrorstsinghua",
    title: "清华镜像站",
    url: "https://mirrors.tuna.tsinghua.edu.cn/",
    description: "换源必备",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/mirrorstsinghua.png",
    keywords: [
      "清华镜像站",
      "ToolChain",
      "换源必备"
    ]
  },
  {
    id: "busybox",
    title: "busybox",
    url: "https://busybox.net/",
    description: "应急响应可能需要的原生Linux命令工具",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/busybox.ico",
    keywords: [
      "busybox",
      "ToolChain",
      "应急响应可能需要的原生Linux命令工具"
    ]
  },
  {
    id: "nomoreransom",
    title: "国际刑警组织反勒索病毒网站",
    url: "https://www.nomoreransom.org/zh/index.html",
    description: "如果运气好，你被锁住的文件也许可以找回",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/nomoreransom.png",
    keywords: [
      "国际刑警组织反勒索病毒网站",
      "ToolChain",
      "如果运气好",
      "你被锁住的文件也许可以找回"
    ]
  },
  {
    id: "ATTCK",
    title: "ATT&CK",
    url: "https://www.ddosi.org/att/index.html#",
    description: "ATT&CK",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddosiscg.png",
    keywords: [
      "ATT&CK",
      "ToolChain"
    ]
  },
  {
    id: "drawnix",
    title: "Drawnix",
    url: "https://drawnix.com/",
    description: "一款开源的白板工具，https://github.com/plait-board/drawnix",
    categoryId: "ToolChain",
    iconPath: "https://folajj.github.io/MyNavPage/icon/drawnix.ico",
    keywords: [
      "Drawnix",
      "ToolChain",
      "一款开源的白板工具",
      "https",
      "github.com",
      "plait-board"
    ]
  },
  {
    id: "xiaohongshu",
    title: "xiaohongshu",
    url: "https://www.xiaohongshu.com/",
    description: "小红书",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xiaohongshu.ico",
    keywords: [
      "xiaohongshu",
      "SlackOff",
      "小红书"
    ]
  },
  {
    id: "qqqyscom",
    title: "布布影视 原3Q影视",
    url: "https://bbys.app/",
    description: "这个好这个好，齐全高清",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/qqqyscom.png",
    keywords: [
      "布布影视",
      "原3Q影视",
      "SlackOff",
      "这个好这个好",
      "齐全高清"
    ]
  },
  {
    id: "zxzjhd",
    title: "zxzjhd",
    url: "https://www.zxzjhd.com/",
    description: "zxzjhd在线之家，一些影视资源",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zxzjhd.ico",
    keywords: [
      "zxzjhd",
      "SlackOff",
      "zxzjhd在线之家",
      "一些影视资源"
    ]
  },
  {
    id: "icebreakergames",
    title: "icebreakergames",
    url: "https://icebreakergames.club/zh/",
    description: "破冰游戏，当你被推上去做活动组织者的时候就有点子了。",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/icebreakergames.png",
    keywords: [
      "icebreakergames",
      "SlackOff",
      "破冰游戏",
      "当你被推上去做活动组织者的时候就有点子了"
    ]
  },
  {
    id: "youtube",
    title: "youtube",
    url: "https://www.youtube.com/",
    description: "油管！",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/youtube.png",
    keywords: [
      "youtube",
      "SlackOff",
      "油管！"
    ]
  },
  {
    id: "netflix",
    title: "netflix",
    url: "https://www.netflix.com/",
    description: "网飞！",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/netflix.ico",
    keywords: [
      "netflix",
      "SlackOff",
      "网飞！"
    ]
  },
  {
    id: "acfun",
    title: "A站",
    url: "https://www.acfun.cn/",
    description: "acfun",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/acfun.ico",
    keywords: [
      "A站",
      "SlackOff",
      "acfun"
    ]
  },
  {
    id: "bilibili",
    title: "B站",
    url: "https://www.bilibili.com/",
    description: "都快变成p站了",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bilibili.ico",
    keywords: [
      "B站",
      "SlackOff",
      "都快变成p站了"
    ]
  },
  {
    id: "cctv",
    title: "CCTV",
    url: "https://tv.cctv.com/",
    description: "这是C站，谁赞成，谁反对",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cctv.ico",
    keywords: [
      "CCTV",
      "SlackOff",
      "这是C站",
      "谁赞成",
      "谁反对"
    ]
  },
  {
    id: "missevan",
    title: "M站",
    url: "https://www.missevan.com/",
    description: "missevan，猫耳FM弹幕音图站",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/missevan.ico",
    keywords: [
      "M站",
      "SlackOff",
      "missevan",
      "猫耳FM弹幕音图站"
    ]
  },
  {
    id: "ddys",
    title: "低端影视（悲）",
    url: "https://ddys.pro//",
    description: "时代的眼泪，不可抗力停站了！",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddys.webp",
    keywords: [
      "低端影视",
      "悲",
      "SlackOff",
      "时代的眼泪",
      "不可抗力停站了！"
    ]
  },
  {
    id: "iqiyi",
    title: "爱奇艺",
    url: "https://www.iqiyi.com/",
    description: "爱奇艺",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/iqiyi.ico",
    keywords: [
      "爱奇艺",
      "SlackOff"
    ]
  },
  {
    id: "youku",
    title: "优酷",
    url: "https://www.youku.com/ku/webhome",
    description: "优酷",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/youku.png",
    keywords: [
      "优酷",
      "SlackOff"
    ]
  },
  {
    id: "saduck",
    title: "SaDuck考公网站",
    url: "https://saduck.top/",
    description: "空闲练一练行测真不是说笑",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/saduck.png",
    keywords: [
      "SaDuck考公网站",
      "SlackOff",
      "空闲练一练行测真不是说笑"
    ]
  },
  {
    id: "tuxun",
    title: "图寻",
    url: "https://tuxun.fun/",
    description: "一屋不出看天下，每日挑战攒积分",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tuxun.ico",
    keywords: [
      "图寻",
      "SlackOff",
      "一屋不出看天下",
      "每日挑战攒积分"
    ]
  },
  {
    id: "haiyongmoyu",
    title: "摸鱼小游戏",
    url: "https://haiyong.site/moyu/",
    description: "摸鱼小游戏，挺全的，无聊玩一下",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/haiyongmoyu.png",
    keywords: [
      "摸鱼小游戏",
      "SlackOff",
      "挺全的",
      "无聊玩一下"
    ]
  },
  {
    id: "emoji6",
    title: "emoji表情包生成",
    url: "https://emoji6.com/",
    description: "emoji表情包生成，杂交",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/emoji6.png",
    keywords: [
      "emoji表情包生成",
      "SlackOff",
      "杂交"
    ]
  },
  {
    id: "doodleCursorMaker",
    title: "doodle-cursor-maker",
    url: "https://doodle-cursor-maker.figma.site/",
    description: "一个可以绘制专属于自己的鼠标样式网站",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/doodleCursorMaker.png",
    keywords: [
      "doodle-cursor-maker",
      "SlackOff",
      "一个可以绘制专属于自己的鼠标样式网站"
    ]
  },
  {
    id: "cilisousuo",
    title: "磁力神器",
    url: "https://cilishenqi.cc/favorites/cilisousuo",
    description: "某些同学不要在实验室搜索奇奇怪怪的东西哈，尼玛的这网站还banF12",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cilisousuo.png",
    keywords: [
      "磁力神器",
      "SlackOff",
      "某些同学不要在实验室搜索奇奇怪怪的东西哈",
      "尼玛的这网站还banF12"
    ]
  },
  {
    id: "ddosibug",
    title: "神兽保佑",
    url: "https://www.ddosi.org/bug.html",
    description: "放置在代码中的玄学标识",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ddosiscg.png",
    keywords: [
      "神兽保佑",
      "SlackOff",
      "放置在代码中的玄学标识"
    ]
  },
  {
    id: "similarsites",
    title: "找相似网站",
    url: "https://www.similarsites.com/",
    description: "找相似网站",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/similarsites.png",
    keywords: [
      "找相似网站",
      "SlackOff"
    ]
  },
  {
    id: "carbon",
    title: "代码展示生成",
    url: "https://carbon.now.sh/",
    description: "做PPT必备，不会有人直接白纸黑字粘贴上去吧",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/carbon.ico",
    keywords: [
      "代码展示生成",
      "SlackOff",
      "做PPT必备",
      "不会有人直接白纸黑字粘贴上去吧"
    ]
  },
  {
    id: "fyscs",
    title: "csgo风云社",
    url: "https://fyscs.com/",
    description: "风云社启动！",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/fyscs.png",
    keywords: [
      "csgo风云社",
      "SlackOff",
      "风云社启动！"
    ]
  },
  {
    id: "codefun2000",
    title: "Hot100的ACM模式",
    url: "https://codefun2000.com/",
    description: "充值了的Hot100，可以acm模式",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/codefun2000.png",
    keywords: [
      "Hot100的ACM模式",
      "SlackOff",
      "充值了的Hot100",
      "可以acm模式"
    ]
  },
  {
    id: "ChaostartPiano",
    title: "ChaostartPiano",
    url: "https://www.chaostart.xyz/piano#/",
    description: "别人建的一个在线钢琴演奏，感觉对初学者挺好的",
    categoryId: "SlackOff",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ChaostartPiano.png",
    keywords: [
      "ChaostartPiano",
      "SlackOff",
      "别人建的一个在线钢琴演奏",
      "感觉对初学者挺好的"
    ]
  },
  {
    id: "labex",
    title: "LabEx",
    url: "https://labex.io/zh/learn",
    description: "LabEx",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/labex.ico",
    keywords: [
      "LabEx",
      "TargetDrones"
    ]
  },
  {
    id: "portswigger",
    title: "Burp官网实验",
    url: "https://portswigger.net/web-security",
    description: "Burp官网实验",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/portswigger.ico",
    keywords: [
      "Burp官网实验",
      "TargetDrones"
    ]
  },
  {
    id: "PwnProtostar",
    title: "PWN-Protostar",
    url: "https://exploit.education/protostar/",
    description: "一个关卡式学习pwn的网站",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/PwnProtostar.png",
    keywords: [
      "PWN-Protostar",
      "TargetDrones",
      "一个关卡式学习pwn的网站"
    ]
  },
  {
    id: "buuctf",
    title: "BUUCTF",
    url: "https://buuoj.cn/challenges",
    description: "BUUCTF，免费的ctf在线练习平台",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/buuctf.ico",
    keywords: [
      "BUUCTF",
      "TargetDrones",
      "免费的ctf在线练习平台"
    ]
  },
  {
    id: "ctfshow",
    title: "CTFshow",
    url: "https://ctf.show/",
    description: "CTFshow",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ctfshow.png",
    keywords: [
      "CTFshow",
      "TargetDrones"
    ]
  },
  {
    id: "ctfhub",
    title: "CTFhub",
    url: "https://www.ctfhub.com/#/index",
    description: "ctfhub",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ctfhub.png",
    keywords: [
      "CTFhub",
      "TargetDrones",
      "ctfhub"
    ]
  },
  {
    id: "edisec",
    title: "玄机靶场",
    url: "https://xj.edisec.net/",
    description: "玄机靶场",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/edisec.ico",
    keywords: [
      "玄机靶场",
      "TargetDrones"
    ]
  },
  {
    id: "bugku",
    title: "Bugku",
    url: "https://ctf.bugku.com/",
    description: "bugku",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bugku.ico",
    keywords: [
      "Bugku",
      "TargetDrones",
      "bugku"
    ]
  },
  {
    id: "didctf",
    title: "DIDCTF",
    url: "https://forensics.didctf.com/",
    description: "电子数据取证练习平台",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/didctf.png",
    keywords: [
      "DIDCTF",
      "TargetDrones",
      "电子数据取证练习平台"
    ]
  },
  {
    id: "xctf",
    title: "xctf",
    url: "https://adworld.xctf.org.cn/home/index",
    description: "攻防世界",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xctf.ico",
    keywords: [
      "xctf",
      "TargetDrones",
      "攻防世界"
    ]
  },
  {
    id: "ctfwar",
    title: "ctfwar",
    url: "https://ctfwar.org.cn/",
    description: "攻防战争",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ctfwar.jpg",
    keywords: [
      "ctfwar",
      "TargetDrones",
      "攻防战争"
    ]
  },
  {
    id: "helloctf",
    title: "HelloCTF",
    url: "https://hello-ctf.com/",
    description: "HelloCTF",
    categoryId: "TargetDrones",
    iconPath: "https://folajj.github.io/MyNavPage/icon/helloctf.png",
    keywords: [
      "HelloCTF",
      "TargetDrones"
    ]
  },
  {
    id: "DailyDarkWeb",
    title: "DailyDarkWeb",
    url: "https://dailydarkweb.net/",
    description: "DailyDarkWeb每日暗网，可能不全",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/DailyDarkWeb.png",
    keywords: [
      "DailyDarkWeb",
      "Forum",
      "DailyDarkWeb每日暗网",
      "可能不全"
    ]
  },
  {
    id: "linuxdo",
    title: "Linuxdo社区",
    url: "https://linux.do/",
    description: "L站",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/linuxdo.png",
    keywords: [
      "Linuxdo社区",
      "Forum",
      "L站"
    ]
  },
  {
    id: "v2ex",
    title: "V2EX社区",
    url: "https://www.v2ex.com/",
    description: "V2EX社区",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/v2ex.ico",
    keywords: [
      "V2EX社区",
      "Forum"
    ]
  },
  {
    id: "kanxue",
    title: "看雪",
    url: "https://bbs.kanxue.com/",
    description: "看雪",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/kanxue.ico",
    keywords: [
      "看雪",
      "Forum"
    ]
  },
  {
    id: "ichunqiu",
    title: "i春秋",
    url: "https://www.ichunqiu.com/",
    description: "i春秋",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ichunqiu.ico",
    keywords: [
      "i春秋",
      "Forum"
    ]
  },
  {
    id: "longyusec",
    title: "泷羽Sec安全团队",
    url: "https://longyusec.com/",
    description: "泷羽Sec安全团队",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/longyusec.png",
    keywords: [
      "泷羽Sec安全团队",
      "Forum"
    ]
  },
  {
    id: "52pojie",
    title: "吾爱破解",
    url: "https://www.52pojie.cn/forum.php",
    description: "神中神，大佬云集",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/52pojie.svg",
    keywords: [
      "吾爱破解",
      "Forum",
      "神中神",
      "大佬云集"
    ]
  },
  {
    id: "anquanke",
    title: "安全客",
    url: "https://www.anquanke.com/",
    description: "安全客",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/anquanke.ico",
    keywords: [
      "安全客",
      "Forum"
    ]
  },
  {
    id: "aqniukt",
    title: "安全牛课堂",
    url: "https://www.aqniukt.com/",
    description: "不做评价",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/aqniukt.png",
    keywords: [
      "安全牛课堂",
      "Forum",
      "不做评价"
    ]
  },
  {
    id: "freebuf",
    title: "FreeBuf",
    url: "https://www.freebuf.com/",
    description: "以前很好，现在只能拣点有趣的看看了",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/freebuf.png",
    keywords: [
      "FreeBuf",
      "Forum",
      "以前很好",
      "现在只能拣点有趣的看看了"
    ]
  },
  {
    id: "ctfwiki",
    title: "ctf-wiki教学时间",
    url: "https://ctf-wiki.org/",
    description: "ctfwiki",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ctfwiki.png",
    keywords: [
      "ctf-wiki教学时间",
      "Forum",
      "ctfwiki"
    ]
  },
  {
    id: "yuquehxfqg9",
    title: "二进制学习笔记",
    url: "https://www.yuque.com/hxfqg9/bin",
    description: "（别人���）",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yuquehxfqg9.png",
    keywords: [
      "二进制学习笔记",
      "Forum",
      "别人���"
    ]
  },
  {
    id: "wwwprojectwebsecuritytestingguide",
    title: "OWASP基金会测试手册",
    url: "https://owasp.org/www-project-web-security-testing-guide/stable/",
    description: "OWASP基金会测试手册",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/wwwprojectwebsecuritytestingguide.ico",
    keywords: [
      "OWASP基金会测试手册",
      "Forum"
    ]
  },
  {
    id: "bdziyi",
    title: "棉花糖",
    url: "https://vip.bdziyi.com/",
    description: "网安在线吃瓜学习网站",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/bdziyi.jpg",
    keywords: [
      "棉花糖",
      "Forum",
      "网安在线吃瓜学习网站"
    ]
  },
  {
    id: "cnsec",
    title: "cnsec中文站",
    url: "https://cn-sec.com/",
    description: "网安学习网站，挺多的",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cnsec.ico",
    keywords: [
      "cnsec中文站",
      "Forum",
      "网安学习网站",
      "挺多的"
    ]
  },
  {
    id: "anquan419",
    title: "安全419",
    url: "http://www.anquan419.com/",
    description: "网安信息汇总，主要是比赛",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/anquan419.ico",
    keywords: [
      "安全419",
      "Forum",
      "网安信息汇总",
      "主要是比赛"
    ]
  },
  {
    id: "yijinglab",
    title: "蚁景网安",
    url: "https://www.yijinglab.com/",
    description: "就跟那种中国大学MOOC一样的主页，然后你付钱就是了",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/yijinglab.png",
    keywords: [
      "蚁景网安",
      "Forum",
      "就跟那种中国大学MOOC一样的主页",
      "然后你付钱就是了"
    ]
  },
  {
    id: "cnfnst",
    title: "隼目安全",
    url: "https://www.cn-fnst.top/",
    description: "网安学习平台",
    categoryId: "Forum",
    iconPath: "https://folajj.github.io/MyNavPage/icon/cnfnst.png",
    keywords: [
      "隼目安全",
      "Forum",
      "网安学习平台"
    ]
  },
  {
    id: "monitormozilla",
    title: "MonitorMozilla",
    url: "https://monitor.mozilla.org/",
    description: "Mozilla的邮箱监控泄露的网站，还可以定时发邮件提醒",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/monitormozilla.ico",
    keywords: [
      "MonitorMozilla",
      "Information",
      "Mozilla的邮箱监控泄露的网站",
      "还可以定时发邮件提醒"
    ]
  },
  {
    id: "uidejfkdev",
    title: "UidEjfkdev",
    url: "https://uid.ejfkdev.com/",
    description: "一个检测分享链接泄露隐私的在线网站",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/uidejfkdev.ico",
    keywords: [
      "UidEjfkdev",
      "Information",
      "一个检测分享链接泄露隐私的在线网站"
    ]
  },
  {
    id: "xamgt",
    title: "环宇网络社工库",
    url: "https://xamgt.com/",
    description: "一个付费的社工库",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xamgt.ico",
    keywords: [
      "环宇网络社工库",
      "Information",
      "一个付费的社工库"
    ]
  },
  {
    id: "privacyaiuys",
    title: "个人数据泄露检测",
    url: "https://privacy.aiuys.com/?ref=@#google_vignette",
    description: "通过QQ/手机号/身份证等来查连带",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/privacyaiuys.ico",
    keywords: [
      "个人数据泄露检测",
      "Information",
      "通过QQ",
      "手机号",
      "身份证等来查连带"
    ]
  },
  {
    id: "fofa",
    title: "FoFa",
    url: "https://fofa.info/",
    description: "fofa，好用，可以去咸鱼找找便宜的资源",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/fofa.ico",
    keywords: [
      "FoFa",
      "Information",
      "fofa",
      "好用",
      "可以去咸鱼找找便宜的资源"
    ]
  },
  {
    id: "hunter",
    title: "Hunter",
    url: "https://hunter.how/",
    description: "我勒个Hunter啊",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/hunter.ico",
    keywords: [
      "Hunter",
      "Information",
      "我勒个Hunter啊"
    ]
  },
  {
    id: "shodan",
    title: "shodan",
    url: "https://www.shodan.io/",
    description: "shodan信息搜集",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/shodan.png",
    keywords: [
      "shodan",
      "Information",
      "shodan信息搜集"
    ]
  },
  {
    id: "Quake360",
    title: "Quake360",
    url: "https://quake.360.net/quake/#/index",
    description: "360网络空间测绘",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/Quake360.png",
    keywords: [
      "Quake360",
      "Information",
      "360网络空间测绘"
    ]
  },
  {
    id: "zoomeye",
    title: "zoomeye",
    url: "https://www.zoomeye.org/",
    description: "钟馗之眼，感觉IoT得行",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/zoomeye.ico",
    keywords: [
      "zoomeye",
      "Information",
      "钟馗之眼",
      "感觉IoT得行"
    ]
  },
  {
    id: "CenSys",
    title: "CenSys",
    url: "https://search.censys.io/",
    description: "也相当于资产测绘了",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/CenSys.ico",
    keywords: [
      "CenSys",
      "Information",
      "也相当于资产测绘了"
    ]
  },
  {
    id: "crtsh",
    title: "CrtSh",
    url: "https://crt.sh/",
    description: "搜索子域名，免费又全！还能搜历史缓存。",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/CrtSh.png",
    keywords: [
      "CrtSh",
      "Information",
      "搜索子域名",
      "免费又全！还能搜历史缓存"
    ]
  },
  {
    id: "weixinsogou",
    title: "weixinsogou",
    url: "https://weixin.sogou.com/",
    description: "搜狗查找微信公众号等内容",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/weixinsogou.ico",
    keywords: [
      "weixinsogou",
      "Information",
      "搜狗查找微信公众号等内容"
    ]
  },
  {
    id: "ti360",
    title: "Ti360",
    url: "https://ti.360.net/",
    description: "360安全大脑，不自信的网站就开Anti-Debug了",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/ti360.png",
    keywords: [
      "Ti360",
      "Information",
      "360安全大脑",
      "不自信的网站就开Anti-Debug了"
    ]
  },
  {
    id: "tiqianxin",
    title: "TiQiAnXin",
    url: "https://ti.qianxin.com/",
    description: "奇安信威胁情报中心，这哥们真没icon啊，随便截了个",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tiqianxin.png",
    keywords: [
      "TiQiAnXin",
      "Information",
      "奇安信威胁情报中心",
      "这哥们真没icon啊",
      "随便截了个"
    ]
  },
  {
    id: "tisangfor",
    title: "TiSangfor",
    url: "https://ti.sangfor.com.cn/analysis-platform?lang=ZH-CN",
    description: "深信服威胁情报中心",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tisangfor.ico",
    keywords: [
      "TiSangfor",
      "Information",
      "深信服威胁情报中心"
    ]
  },
  {
    id: "beianx",
    title: "ICP备案查询",
    url: "https://www.beianx.cn/",
    description: "ICP备案查询",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/beianx.ico",
    keywords: [
      "ICP备案查询",
      "Information"
    ]
  },
  {
    id: "dnsdumpster",
    title: "dnsdumpster",
    url: "https://dnsdumpster.com/",
    description: "信息收集必备，找旁站或者内网之类的",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/dnsdumpster.ico",
    keywords: [
      "dnsdumpster",
      "Information",
      "信息收集必备",
      "找旁站或者内网之类的"
    ]
  },
  {
    id: "xthreatbook",
    title: "微步在线威胁分析",
    url: "https://x.threatbook.com/",
    description: "微步在线威胁分析",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/xthreatbook.ico",
    keywords: [
      "微步在线威胁分析",
      "Information"
    ]
  },
  {
    id: "sthreatbook",
    title: "微步云沙箱",
    url: "https://s.threatbook.com/",
    description: "好用，简单分析木马文件之类的",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/sthreatbook.ico",
    keywords: [
      "微步云沙箱",
      "Information",
      "好用",
      "简单分析木马文件之类的"
    ]
  },
  {
    id: "tiqianxin",
    title: "奇安信情报沙箱",
    url: "https://sandbox.ti.qianxin.com/sandbox/page",
    description: "奇安信情报沙箱",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/tiqianxin.ico",
    keywords: [
      "奇安信情报沙箱",
      "Information"
    ]
  },
  {
    id: "lingfengyun",
    title: "lingfengyun",
    url: "https://www.lingfengyun.com/",
    description: "凌风云，一个可以搜索很多网盘关键字的平台，信息搜集",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/lingfengyun.ico",
    keywords: [
      "lingfengyun",
      "Information",
      "凌风云",
      "一个可以搜索很多网盘关键字的平台",
      "信息搜集"
    ]
  },
  {
    id: "pansoo",
    title: "97盘搜",
    url: "https://pansoo.cn/",
    description: "97盘搜，搜索一些网盘资源",
    categoryId: "Information",
    iconPath: "https://folajj.github.io/MyNavPage/icon/pansoo.ico",
    keywords: [
      "97盘搜",
      "Information",
      "搜索一些网盘资源"
    ]
  }
]

export const portalQuickLinks: PortalQuickLink[] = [
  { id: 'my-blog', label: 'MyBlog', href: '/blog', icon: 'book-open' },
  {
    id: 'github',
    label: 'GitHub',
    href: siteMetadata.siteRepo || siteMetadata.github || 'https://github.com/',
    icon: 'github',
  },
]
