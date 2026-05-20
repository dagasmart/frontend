// 语言类型
export type Lang = 'zh' | 'en';

// 导航项
export interface NavItem {
  id: string;
  label: Record<Lang, string>;
  href: string;
}

// Hero 数据
export interface HeroStats {
  value: string;
  label: Record<Lang, string>;
}

export interface HeroCard {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  metrics: Array<{
    value: string;
    label: Record<Lang, string>;
  }>;
}

// 关于我们
export interface AboutFeature {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
}

export interface AboutStat {
  value: string;
  label: Record<Lang, string>;
  suffix?: Record<Lang, string>;
}

// 服务
export interface Service {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  tags: Record<Lang, string[]>;
  color: string;
}

// 案例
export interface Case {
  id: string;
  title: Record<Lang, string>;
  industry: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: Record<Lang, string[]>;
  metrics: Array<{
    value: string;
    label: Record<Lang, string>;
  }>;
  image: string;
}

// 新闻
export interface News {
  id: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  date: Record<Lang, string>;
  category: Record<Lang, string>;
  image: string;
  featured?: boolean;
}

// 联系表单
export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  service: string;
}
