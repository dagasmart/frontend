import type { Lang, NavItem, HeroStats, HeroCard, AboutFeature, AboutStat, Service, Case, News } from '../types';

export const navItems: NavItem[] = [
  { id: 'hero', label: { zh: '首页', en: 'Home' }, href: '#hero' },
  { id: 'about', label: { zh: '关于我们', en: 'About' }, href: '#about' },
  { id: 'services', label: { zh: '产品服务', en: 'Services' }, href: '#services' },
  { id: 'cases', label: { zh: '案例展示', en: 'Cases' }, href: '#cases' },
  { id: 'news', label: { zh: '新闻动态', en: 'News' }, href: '#news' },
  { id: 'contact', label: { zh: '联系我们', en: 'Contact' }, href: '#contact' },
];

export const heroStats: HeroStats[] = [
  { value: '1000+', label: { zh: '服务企业', en: 'Enterprise Clients' } },
  { value: '99.9%', label: { zh: '客户满意度', en: 'Satisfaction Rate' } },
  { value: '12+', label: { zh: '行业覆盖', en: 'Industries Served' } },
];

export const heroCards: HeroCard[] = [
  {
    icon: '🚀',
    title: { zh: '智能决策系统', en: 'Smart Decision System' },
    desc: { zh: '基于AI的数据分析与预测引擎', en: 'AI-powered analytics & prediction engine' },
    metrics: [
      { value: '98%', label: { zh: '准确率', en: 'Accuracy' } },
      { value: '3x', label: { zh: '效率提升', en: 'Efficiency' } },
    ],
  },
  {
    icon: '☁️',
    title: { zh: '云端解决方案', en: 'Cloud Solutions' },
    desc: { zh: '弹性扩展，安全可靠的企业级云服务', en: 'Scalable, secure enterprise cloud services' },
    metrics: [],
  },
  {
    icon: '🔒',
    title: { zh: '数据安全', en: 'Data Security' },
    desc: { zh: '多层级企业级安全防护体系', en: 'Multi-layer enterprise security framework' },
    metrics: [],
  },
];

export const aboutFeatures: AboutFeature[] = [
  {
    icon: '🎯',
    title: { zh: '精准定位', en: 'Precise Positioning' },
    desc: { zh: '深入理解业务需求，精准定位技术方向', en: 'Deep understanding of business needs, precise tech direction' },
  },
  {
    icon: '⚡',
    title: { zh: '高效执行', en: 'Efficient Execution' },
    desc: { zh: '敏捷开发，快速迭代，准时交付', en: 'Agile development, fast iteration, on-time delivery' },
  },
  {
    icon: '🛡️',
    title: { zh: '安全保障', en: 'Security First' },
    desc: { zh: '端到端安全审计，数据零泄露', en: 'End-to-end security audit, zero data leakage' },
  },
  {
    icon: '🤝',
    title: { zh: '长期陪伴', en: 'Long-term Partnership' },
    desc: { zh: '持续技术支持，伴随企业成长', en: 'Continuous tech support, growing with you' },
  },
];

export const aboutStats: AboutStat[] = [
    { value: '2021', label: { zh: '成立年份', en: 'Founded' } },
    {
        value: '50+',
        label: { zh: '专业团队', en: 'Team Members' },
        suffix: { zh: '人', en: '+' },
    },
    {
        value: '10+',
        label: { zh: '专利技术', en: 'Patents' },
        suffix: { zh: '项', en: '+' },
    },
    {
        value: '1000+',
        label: { zh: '服务客户', en: 'Clients Served' },
        suffix: { zh: '家', en: '+' },
    },
];

export const services: Service[] = [
  {
    icon: '🖥️',
    title: { zh: '软件开发', en: 'Software Development' },
    desc: { zh: '企业级应用、移动端、桌面端全栈开发，定制化解决方案', en: 'Enterprise apps, mobile & desktop full-stack development, customized solutions' },
    tags: { zh: ['Web应用', '移动端', 'API集成'], en: ['Web Apps', 'Mobile', 'API Integration'] },
    color: '#3b82f6',
  },
  {
    icon: '🤖',
    title: { zh: '人工智能', en: 'Artificial Intelligence' },
    desc: { zh: '机器学习、NLP、CV、智能推荐系统定制开发', en: 'Machine learning, NLP, computer vision, intelligent recommendation systems' },
    tags: { zh: ['机器学习', '深度学习', '智能分析'], en: ['ML', 'Deep Learning', 'Smart Analytics'] },
    color: '#8b5cf6',
  },
  {
    icon: '☁️',
    title: { zh: '云计算', en: 'Cloud Computing' },
    desc: { zh: '云架构设计、迁移、运维，Docke/K8s容器化部署', en: 'Cloud architecture design, migration & ops, Docker/K8s containerization' },
    tags: { zh: ['AWS/Azure', 'DevOps', '微服务'], en: ['AWS/Azure', 'DevOps', 'Microservices'] },
    color: '#06b6d4',
  },
  {
    icon: '📊',
    title: { zh: '数据分析', en: 'Data Analytics' },
    desc: { zh: '数据仓库建设、可视化大屏、商业智能报表', en: 'Data warehouse, visualization dashboards, BI reports' },
    tags: { zh: ['BI报表', '实时分析', '数据挖掘'], en: ['BI Reports', 'Real-time', 'Data Mining'] },
    color: '#10b981',
  },
  {
    icon: '🔐',
    title: { zh: '网络安全', en: 'Cybersecurity' },
    desc: { zh: '渗透测试、安全评估、等级保护合规咨询', en: 'Penetration testing, security assessment, compliance consulting' },
    tags: { zh: ['等保测评', '漏洞扫描', '应急响应'], en: ['Compliance', 'Vuln Scanning', 'Incident Response'] },
    color: '#f59e0b',
  },
  {
    icon: '📱',
    title: { zh: '数字化咨询', en: 'Digital Consulting' },
    desc: { zh: 'IT战略规划、数字化转型路线图、流程优化', en: 'IT strategy planning, digital transformation roadmap, process optimization' },
    tags: { zh: ['战略咨询', '流程优化', '培训'], en: ['Strategy', 'Process Opt.', 'Training'] },
    color: '#ef4444',
  },
];

export const cases: Case[] = [
    {
        id: 'case-1',
        title: {
            zh: '某头部金融机构智能风控系统',
            en: 'Leading Financial Institution Smart Risk Control',
        },
        industry: { zh: '金融科技', en: 'FinTech' },
        description: {
            zh: '为大型银行设计并实施了一套基于机器学习的实时风控决策引擎，日均处理交易超千万笔，风控准确率提升至99.5%。',
            en: 'Designed and implemented an ML-based real-time risk control engine for a major bank, processing 10M+ daily transactions with 99.5% accuracy.',
        },
        tags: {
            zh: ['机器学习', '实时计算', '金融风控'],
            en: ['ML', 'Real-time', 'Risk Control'],
        },
        metrics: [
            { value: '99.5%', label: { zh: '风控准确率', en: 'Accuracy' } },
            {
                value: '10M+',
                label: { zh: '日均交易', en: 'Daily Transactions' },
            },
            { value: '85%', label: { zh: '坏账率下降', en: 'NPL Reduction' } },
        ],
        image: '.././images/89d794b7662cc01e0dea3885f02f9631.jpeg',
    },
    {
        id: 'case-2',
        title: {
            zh: '某知名零售品牌全渠道数字化平台',
            en: 'Leading Retail Brand Omnichannel Digital Platform',
        },
        industry: { zh: '零售连锁', en: 'Retail Chain' },
        description: {
            zh: '帮助某头部零售品牌打通线上线下数据，构建统一的会员管理和智能营销平台，三个月内会员活跃度提升120%。',
            en: 'Helped a leading retail brand unify online/offline data, building a unified member management and smart marketing platform, boosting member activity by 120% in 3 months.',
        },
        tags: {
            zh: ['O2O', '会员系统', '智能营销'],
            en: ['O2O', 'Member System', 'Smart Marketing'],
        },
        metrics: [
            {
                value: '120%',
                label: { zh: '会员活跃提升', en: 'Activity Increase' },
            },
            { value: '5x', label: { zh: '营销ROI提升', en: 'Marketing ROI' } },
            {
                value: '30%',
                label: { zh: '运营成本下降', en: 'Cost Reduction' },
            },
        ],
        image: '../../images/image_786526027224071.jpeg',
    },
    {
        id: 'case-3',
        title: {
            zh: '某三甲医院智慧医疗数据平台',
            en: 'Tier-A Hospital Smart Medical Data Platform',
        },
        industry: { zh: '医疗健康', en: 'Healthcare' },
        description: {
            zh: '构建医院数据中台，整合电子病历、医学影像、检验数据，实现AI辅助诊断功能，诊断效率提升60%。',
            en: 'Built a hospital data platform integrating EMRs, medical imaging & lab data to enable AI-assisted diagnostics, improving diagnostic efficiency by 60%.',
        },
        tags: {
            zh: ['数据中台', 'AI辅诊', '医疗信息化'],
            en: ['Data Platform', 'AI Diagnosis', 'Digital Health'],
        },
        metrics: [
            {
                value: '60%',
                label: { zh: '诊断效率提升', en: 'Diagnosis Efficiency' },
            },
            {
                value: '500万+',
                label: { zh: '服务患者', en: 'Patients Served' },
            },
            { value: '100%', label: { zh: '数据合规', en: 'Data Compliance' } },
        ],
        image: '../../images/image_177883025673789.png',
    },
    {
        id: 'case-4',
        title: {
            zh: '某头部车企智能制造MES平台',
            en: 'Leading Auto OEM Smart Manufacturing MES Platform',
        },
        industry: { zh: '智能制造', en: 'Smart Manufacturing' },
        description: {
            zh: '为大型汽车制造企业打造智能MES系统，实现生产全流程数字化管控，工厂产能利用率提升35%，质检准确率达99.8%。',
            en: 'Built a smart MES system for a large auto manufacturer enabling full digital production control, boosting capacity utilization by 35% with 99.8% quality accuracy.',
        },
        tags: {
            zh: ['MES', '工业4.0', '数字孪生'],
            en: ['MES', 'Industry 4.0', 'Digital Twin'],
        },
        metrics: [
            {
                value: '35%',
                label: { zh: '产能利用率提升', en: 'Capacity Utilization' },
            },
            { value: '99.8%', label: { zh: '质检准确率', en: 'Quality Rate' } },
            {
                value: '40%',
                label: { zh: '停机时间减少', en: 'Downtime Reduction' },
            },
        ],
        image: '../../images/cb92537324717cae5b0e085153423a45.jpeg',
    },
    {
        id: 'case-5',
        title: {
            zh: '某大型物流企业智能调度系统',
            en: 'Large Logistics Enterprise Smart Dispatch System',
        },
        industry: { zh: '智慧物流', en: 'Smart Logistics' },
        description: {
            zh: '基于实时数据与强化学习算法，重构物流调度引擎，实现智能路径规划与动态运力调度，整体配送效率提升42%。',
            en: 'Restructured logistics dispatch engine using real-time data and reinforcement learning for smart route planning and dynamic capacity dispatch, improving delivery efficiency by 42%.',
        },
        tags: {
            zh: ['强化学习', '路径优化', '实时调度'],
            en: ['RL', 'Route Optimization', 'Real-time Dispatch'],
        },
        metrics: [
            {
                value: '42%',
                label: { zh: '配送效率提升', en: 'Delivery Efficiency' },
            },
            {
                value: '20%',
                label: { zh: '油耗成本下降', en: 'Fuel Cost Reduction' },
            },
            { value: '24/7', label: { zh: '全天候调度', en: '24/7 Dispatch' } },
        ],
        image: '../../images/7449bfb94acca57dd4992223baacbf72.jpeg',
    },
    {
        id: 'case-6',
        title: {
            zh: '某头部电商平台智能客服系统',
            en: 'Leading E-commerce Platform Smart Customer Service',
        },
        industry: { zh: '电子商务', en: 'E-commerce' },
        description: {
            zh: '构建基于大语言模型的智能客服系统，支持多轮对话与情感分析，人工客服工作量降低65%，客户满意度达96%。',
            en: 'Built an LLM-powered smart customer service system with multi-turn dialogue and sentiment analysis, reducing manual workload by 65% with 96% CSAT.',
        },
        tags: {
            zh: ['LLM', 'NLP', '多轮对话'],
            en: ['LLM', 'NLP', 'Multi-turn Dialogue'],
        },
        metrics: [
            {
                value: '65%',
                label: { zh: '人工客服减负', en: 'Manual Workload Reduction' },
            },
            {
                value: '96%',
                label: { zh: '客户满意度', en: 'Customer Satisfaction' },
            },
            {
                value: '<3s',
                label: { zh: '平均响应', en: 'Avg Response Time' },
            },
        ],
        image: '../../images/image_344762924871584.jpeg',
    },
];

export const news: News[] = [
    {
        id: 'news-1',
        title: {
            zh: '大圭智科发布新一代智能决策平台3.0',
            en: 'DagaSmart Launches Next-Gen Smart Decision Platform 3.0',
        },
        excerpt: {
            zh: '全新一代智能决策平台3.0版本正式发布，集成多项前沿AI技术，为企业决策提供更强大的数据支撑。',
            en: 'The all-new Smart Decision Platform v3.0 officially launches, integrating multiple cutting-edge AI technologies to provide stronger data support for enterprise decision-making.',
        },
        date: { zh: '2026-05-08', en: 'May 8, 2026' },
        category: { zh: '产品发布', en: 'Product Launch' },
        image: '../../images/1787eea5ce01.jpeg',
        featured: true,
    },
    {
        id: 'news-2',
        title: {
            zh: '大圭智科与某知名高校共建AI联合实验室',
            en: 'DagaSmart & Leading University Co-found AI Joint Lab',
        },
        excerpt: {
            zh: '大圭智科与国内某知名高校签署战略合作协议，共同建设人工智能联合实验室，在机器学习与数据科学领域开展深度合作。',
            en: 'DagaSmart signed a strategic cooperation agreement with a renowned domestic university to co-build an AI joint lab, conducting deep collaboration in machine learning and data science.',
        },
        date: { zh: '2026-04-22', en: 'April 22, 2026' },
        category: { zh: '战略合作', en: 'Strategic Partnership' },
        image: '../../images/4e323c444d1fb748422829905b7eb55c.jpeg',
    },
    {
        id: 'news-3',
        title: {
            zh: '大圭智科亮相数字中国建设峰会',
            en: 'DagaSmart Showcases at Digital China Summit 2026',
        },
        excerpt: {
            zh: '大圭智科受邀参加第五届数字中国建设峰会，携多款核心产品亮相数字经济展区，引发广泛关注。',
            en: 'DagaSmart was invited to the 5th Digital China Summit, showcasing multiple core products at the Digital Economy Exhibition, attracting widespread attention.',
        },
        date: { zh: '2026-04-15', en: 'April 15, 2026' },
        category: { zh: '行业活动', en: 'Industry Events' },
        image: '../../images/image_179748185117239.jpeg',
    },
    {
        id: 'news-4',
        title: {
            zh: '大圭智科通过ISO 27001信息安全管理体系认证',
            en: 'DagaSmart Achieves ISO 27001 Information Security Certification',
        },
        excerpt: {
            zh: '大圭智科正式通过ISO 27001信息安全管理体系认证，标志着公司在信息安全管理方面达到国际领先水平。',
            en: "DagaSmart officially achieved ISO 27001 information security management system certification, marking the company's international-standard level in information security management.",
        },
        date: { zh: '2026-03-30', en: 'March 30, 2026' },
        category: { zh: '公司荣誉', en: 'Company Honor' },
        image: '../../images/image_439779063792961.jpeg',
    },
    {
        id: 'news-5',
        title: {
            zh: '大圭智科完成A轮融资',
            en: 'DagaSmart Closes Series A Funding',
        },
        excerpt: {
            zh: '大圭智科宣布完成A轮融资，由知名投资机构领投融资。',
            en: 'DagaSmart announced the completion of Series A funding, led by a well-known investment institution raising hundreds',
        },
        date: { zh: '2026-03-10', en: 'March 10, 2026' },
        category: { zh: '融资动态', en: 'Funding News' },
        image: '../../images/image_116124044228208.jpeg',
    },
    {
        id: 'news-6',
        title: {
            zh: '大圭智科发布2025年度企业社会责任报告',
            en: 'DagaSmart Releases 2025 Corporate Social Responsibility Report',
        },
        excerpt: {
            zh: '大圭智科正式发布2025年度企业社会责任报告，系统回顾了过去一年在环境保护、社会公益、员工发展等方面的努力与成果。',
            en: 'DagaSmart officially released its 2025 Corporate Social Responsibility Report, reviewing its efforts and achievements in environmental protection, social welfare, and employee development.',
        },
        date: { zh: '2026-02-28', en: 'February 28, 2026' },
        category: { zh: '公司动态', en: 'Company News' },
        image: '../../images/image_215303816922334.jpeg',
    },
];

// 公司信息
export const companyInfo = {
  name: { zh: '大圭智科', en: 'DagaSmart' },
  tagline: { zh: '智能科技，赋能企业未来', en: 'Intelligent Technology, Empowering Enterprise Future' },
  description: {
    zh: '大圭智科是一家专注于企业数字化转型的国家高新技术企业，总部位于贵阳，成立于2021年。我们汇聚了50余位信息技术工程师，致力于为金融、教育、医疗、零售等多个行业提供从战略咨询到技术落地的全栈式解决方案。',
    en: 'DagaSmart is a national high-tech enterprise specializing in enterprise digital transformation, headquartered in Shenzhen since 2021. We bring together 50+ top technical experts, committed to providing full-stack solutions from strategy consulting to tech implementation across finance, healthcare, retail, manufacturing and more.',
  },
  address: {
    zh: '贵阳市贵安区科技产业园区',
    en: '5F, Building R2-B, South Area of Science Park, High-Tech South 7th Road, Nanshan District, Shenzhen',
  },
  phone: '+86 18285085168',
  email: 'dagasmart@qq.com',
  website: 'www.dagasmart.com',
};

// 页脚链接
export const footerLinks = {
  solutions: {
    title: { zh: '解决方案', en: 'Solutions' },
    links: [
      { label: { zh: '软件开发', en: 'Software Development' }, href: '#services' },
      { label: { zh: '人工智能', en: 'AI Solutions' }, href: '#services' },
      { label: { zh: '云计算', en: 'Cloud Computing' }, href: '#services' },
      { label: { zh: '数据分析', en: 'Data Analytics' }, href: '#services' },
    ],
  },
  company: {
    title: { zh: '关于我们', en: 'Company' },
    links: [
      { label: { zh: '关于我们', en: 'About Us' }, href: '#about' },
      { label: { zh: '新闻动态', en: 'News' }, href: '#news' },
      { label: { zh: '加入我们', en: 'Careers' }, href: '#contact' },
      { label: { zh: '联系我们', en: 'Contact Us' }, href: '#contact' },
    ],
  },
  support: {
    title: { zh: '技术支持', en: 'Support' },
    links: [
      { label: { zh: '常见问题', en: 'FAQ' }, href: '#' },
      { label: { zh: '文档中心', en: 'Documentation' }, href: '#' },
      { label: { zh: '服务条款', en: 'Terms of Service' }, href: '#' },
      { label: { zh: '隐私政策', en: 'Privacy Policy' }, href: '#' },
    ],
  },
};
