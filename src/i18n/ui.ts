export type Lang = 'en' | 'zh';
export const langs: Lang[] = ['en', 'zh'];

// Prefix a site path with the language segment ("/zh/..." for Chinese, unprefixed for English).
export function localize(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/zh${clean === '/' ? '/' : clean}`;
}

// Strip the language prefix so a page can link to its translation.
export function unlocalize(pathname: string): string {
  const stripped = pathname.replace(/^\/zh(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

const ui = {
  en: {
    name: 'Bo Yang',
    langSwitch: '中文',
    nav: { work: 'Work', cycling: 'Cycling', about: 'About', contact: 'Contact' },
    meta: {
      description:
        'Bo Yang — electrical engineering student at Penn building embedded systems and hardware products. Projects, cycling, and résumé.',
    },
    hero: {
      eyebrow: 'Electrical Engineering · University of Pennsylvania',
      title: 'Engineer.\nBuilder.\nRider.',
      body: 'Embedded hardware, autonomous robots, and the products around them. I’m an M.S.E. student at Penn looking for Summer 2027 internships in hardware-focused embedded engineering and robotics, or in product management. Off the bench, I’m usually somewhere on a long road on my bike.',
      ctaWork: 'See selected work',
      ctaContact: 'Say hello',
    },
    // FTP 225 W at 62 kg body weight -> 3.6 W/kg (weight itself is not shown on the site).
    stats: [
      { value: '20,000 km', label: 'ridden on my road bike so far' },
      { value: '225 W', label: 'FTP (functional threshold power)' },
      { value: '3.6 W/kg', label: 'power-to-weight at FTP' },
      { value: '1st / 18', label: 'teams in an autonomous drone challenge' },
    ],
    work: {
      title: 'Selected work',
      intro: 'Four projects, from flight controllers to brain–computer interfaces.',
      read: 'Read the case study',
    },
    route: {
      caption: 'Baoting → Lingshui · 76.9 km · April 2026',
    },
    offBench: {
      title: 'Off the bench',
      body: [
        'When I’m not building things, I’m usually on a road bike. I co-founded the first cycling club on our new campus and grew it from zero to 50+ riders, with weekly endurance and interval sessions and group rides that add up to more than 2,000 km a semester.',
        'Planning those rides — routes, pacing, safety rules, what to do when someone flats far from anywhere — is project management with a sunburn.',
      ],
      race: 'I’ve raced the UCI Gran Fondo World Series in Hainan twice. In April 2026 that meant 76.9 km from Baoting to Lingshui at 38.9 km/h.',
      more: 'More from the road',
    },
    contact: {
      title: 'Let’s talk',
      body: 'I’m looking for Summer 2027 internships in hardware-focused embedded engineering and robotics, or in product management. The fastest way to reach me is email.',
      email: 'Email me',
      resumes: { embedded: 'Résumé · Embedded', product: 'Résumé · Product' },
      linkedin: 'LinkedIn',
    },
    project: {
      back: 'All work',
      role: 'Role',
      org: 'Where',
      advisor: 'Advisor',
      period: 'When',
      gallery: 'Gallery',
      next: 'Next project',
    },
    cycling: {
      title: 'On the road',
      lead: 'Cycling is where I recharge — and, it turns out, where I learned a lot about planning, pacing and looking after a team.',
      raceTitle: 'UCI Gran Fondo World Series · Hainan',
      raceApril: 'April 2026 · Baoting → Lingshui',
      raceDec: 'December 2025',
      raceDecNote: 'Ride record not available.',
      statLabels: {
        distance: 'Distance',
        avg: 'Average speed',
        moving: 'Moving time',
        climb: 'Elevation gain',
        max: 'Max speed',
      },
      clubTitle: 'Starting a club from zero',
      clubBody: [
        'Our new campus had no cycling club, so a few of us started one. It now has 50+ members.',
        'I designed the weekly training plan — endurance rides and interval sessions — and organized group rides that total more than 2,000 km each semester, with club-wide safety rules and route-planning standards so that everyone gets home.',
      ],
      galleryTitle: 'Snapshots',
    },
    about: {
      title: 'About',
      bio: [
        'I’m Bo Yang, an electrical engineering master’s student at the University of Pennsylvania (expected May 2028). Before Penn I completed a dual-degree B.Eng. at the University of Electronic Science and Technology of China (UESTC) and the University of Glasgow, graduating with First Class Honours.',
        'I like work that sits between hardware and people: making a sensor, a drone or a lab tool actually usable by whoever depends on it. That’s why, for Summer 2027, I’m looking at hardware-focused embedded and robotics roles as well as product management.',
      ],
      education: 'Education',
      edu: [
        { school: 'University of Pennsylvania', detail: 'M.S.E. in Electrical Engineering', period: '2026 – 2028' },
        { school: 'University of Electronic Science and Technology of China', detail: 'B.Eng. in Electronic Information Engineering · GPA 3.8/4.0', period: '2022 – 2026' },
        { school: 'University of Glasgow', detail: 'B.Eng. in Electronics and Electrical Engineering · First Class Honours', period: '2022 – 2026' },
      ],
      skills: 'Toolkit',
      skillGroups: [
        { name: 'Embedded', items: ['C', 'AVR assembly', 'RTOS', 'UART / I2C / SPI', 'STM32F4', 'nRF24LE1', 'OpenMV'] },
        { name: 'Hardware', items: ['PCB design (Altium)', 'FPGA (Verilog, Vivado)', 'Keil MDK / C51'] },
        { name: 'Product & tools', items: ['Python', 'MATLAB', 'Unity', 'Claude Code', 'Codex', 'Grok Bot'] },
      ],
      honors: 'Honors',
      honorList: [
        '1st of 18 teams, autonomous UAV challenge (2025)',
        'First-author paper accepted at AIAC 2025',
        'UESTC Excellent Student Scholarship (2023–2025)',
        'Glasgow College Academic Scholarship (2023–2025)',
        'UESTC Outstanding Social Practice Team (2023)',
      ],
    },
    footer: {
      note: 'Route line traced from my April 2026 ride, Baoting → Lingshui.',
    },
  },
  zh: {
    name: '杨博',
    langSwitch: 'EN',
    nav: { work: '项目', cycling: '骑行', about: '关于', contact: '联系' },
    meta: {
      description: '杨博，宾夕法尼亚大学电气工程硕士，做嵌入式系统与硬件产品。项目作品、骑行与简历。',
    },
    hero: {
      eyebrow: '宾夕法尼亚大学 · 电气工程',
      title: '工程师，\n也是骑行者。',
      body: '关注嵌入式硬件、自主机器人，以及围绕它们的产品。我目前在宾夕法尼亚大学读电气工程硕士，正在寻找 2027 年暑期偏硬件的嵌入式与机器人方向实习，或产品经理实习。离开工作台的时候，我多半在某条长路上骑车。',
      ctaWork: '看看我的项目',
      ctaContact: '联系我',
    },
    stats: [
      { value: '20,000 km', label: '累计骑行里程' },
      { value: '225 W', label: '功能阈值功率（FTP）' },
      { value: '3.6 W/kg', label: '功体比（FTP ÷ 体重）' },
      { value: '1st / 18', label: '自主无人机挑战赛排名' },
    ],
    work: {
      title: '项目',
      intro: '四个项目，从飞控到脑机接口。',
      read: '查看项目详情',
    },
    route: {
      caption: '保亭 → 陵水 · 76.9 km · 2026 年 4 月',
    },
    offBench: {
      title: '工作台之外',
      body: [
        '不做项目的时候，我大多在骑车。我参与创办了新校区的第一个自行车社，从零发展到 50 多名社员：每周有耐力和间歇训练，每学期集体骑行累计超过 2,000 km。',
        '规划这些骑行，包括路线、配速、安全规范，以及有人在荒郊野外爆胎时怎么办，本质上就是一场被晒黑的项目管理。',
      ],
      race: '我两次参加 UCI 格兰芬多世界系列赛海南站。2026 年 4 月那一场，从保亭骑到陵水，76.9 km，均速 38.9 km/h。',
      more: '更多骑行故事',
    },
    contact: {
      title: '聊聊吧',
      body: '我正在寻找 2027 年暑期偏硬件的嵌入式与机器人方向实习，或产品经理实习。联系我最快的方式是邮件。',
      email: '发邮件给我',
      resumes: { embedded: '简历 · 嵌入式', product: '简历 · 产品经理' },
      linkedin: '领英',
    },
    project: {
      back: '全部项目',
      role: '角色',
      org: '单位',
      advisor: '导师',
      period: '时间',
      gallery: '图集',
      next: '下一个项目',
    },
    cycling: {
      title: '在路上',
      lead: '骑行是我充电的方式，也让我学会了很多关于规划、配速和照顾队友的事。',
      raceTitle: 'UCI 格兰芬多世界系列赛 · 海南站',
      raceApril: '2026 年 4 月 · 保亭 → 陵水',
      raceDec: '2025 年 12 月',
      raceDecNote: '这一场的骑行记录暂缺。',
      statLabels: {
        distance: '距离',
        avg: '平均速度',
        moving: '骑行时长',
        climb: '累计爬升',
        max: '最高速度',
      },
      clubTitle: '从零创建一个车社',
      clubBody: [
        '新校区原本没有自行车社，我们几个人就自己办了一个，现在已经有 50 多名社员。',
        '我设计了每周的训练计划，包括耐力骑和间歇训练；组织每学期累计超过 2,000 km 的集体骑行，并制定了全社的安全规范和路线规划标准，确保每个人都能平安回来。',
      ],
      galleryTitle: '路上的瞬间',
    },
    about: {
      title: '关于我',
      bio: [
        '我是杨博，宾夕法尼亚大学电气工程硕士在读，预计 2028 年 5 月毕业。本科是电子科技大学与格拉斯哥大学的双学位项目，以一等荣誉学位毕业。',
        '我喜欢介于硬件和人之间的工作：让一个传感器、一架无人机或者一个实验工具，真正被依赖它的人用起来。所以 2027 年暑期，我同时在看偏硬件的嵌入式与机器人方向，以及产品经理方向。',
      ],
      education: '教育背景',
      edu: [
        { school: '宾夕法尼亚大学', detail: '电气工程 硕士（M.S.E.）', period: '2026 – 2028' },
        { school: '电子科技大学', detail: '电子信息工程 工学学士 · GPA 3.8/4.0', period: '2022 – 2026' },
        { school: '格拉斯哥大学', detail: '电子与电气工程 工学学士 · 一等荣誉学位', period: '2022 – 2026' },
      ],
      skills: '工具箱',
      skillGroups: [
        { name: '嵌入式', items: ['C', 'AVR 汇编', 'RTOS', 'UART / I2C / SPI', 'STM32F4', 'nRF24LE1', 'OpenMV'] },
        { name: '硬件', items: ['PCB 设计（Altium）', 'FPGA（Verilog、Vivado）', 'Keil MDK / C51'] },
        { name: '产品与工具', items: ['Python', 'MATLAB', 'Unity', 'Claude Code', 'Codex', 'Grok Bot'] },
      ],
      honors: '荣誉',
      honorList: [
        '自主无人机挑战赛 18 支队伍中第 1 名（2025）',
        '第一作者论文被 AIAC 2025 录用',
        '电子科技大学优秀学生奖学金（2023–2025）',
        '格拉斯哥学院学业奖学金（2023–2025）',
        '校级优秀社会实践团队（2023）',
      ],
    },
    footer: {
      note: '页面上的线条，描自我 2026 年 4 月从保亭到陵水的那次骑行。',
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
