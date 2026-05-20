<script lang="ts">
  import type { Lang } from '../types';
  import { aboutFeatures, aboutStats, companyInfo } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();

  const milestones = [
    { year: '2021', zh: '公司成立', en: 'Company Founded' },
    { year: '2023', zh: '获得高新技术企业认证', en: 'National High-Tech Certification' },
    { year: '2024', zh: '团队规模突破50人', en: 'Team Grows to 50+' },
    { year: '2025', zh: '发布Saas模块化通用系统2.0', en: 'Launch Saas Platform 2.0' },
    { year: '2026', zh: '完成A轮融资', en: 'Series A Funding' },
  ];
</script>

<section class="about section" id="about">
  <div class="about-bg" aria-hidden="true">
    <div class="about-glow"></div>
  </div>

  <div class="section-inner">
    <!-- Header -->
    <div class="about-header reveal">
      <div class="section-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="3" fill="currentColor"/></svg>
        {lang === 'zh' ? '关于我们' : 'About'}
      </div>
      <h2 class="section-title">
        {lang === 'zh' ? '用科技力量' : 'Empowering Business with'}
        <span class="gradient-text">
          {lang === 'zh' ? '驱动智能变革' : 'Technology Excellence'}
        </span>
      </h2>
      <p class="section-desc">
        {companyInfo.description[lang]}
      </p>
    </div>

    <!-- Stats Row -->
    <div class="stats-row">
      {#each aboutStats as stat, i}
        <div class="stat-card reveal" style="transition-delay: {i * 0.1}s">
          <div class="stat-num gradient-text">{stat.value}</div>
          <div class="stat-unit">{stat.suffix?.[lang] ?? ''}</div>
          <div class="stat-name">{stat.label[lang]}</div>
        </div>
      {/each}
    </div>

    <!-- Content Grid -->
    <div class="about-grid">
      <!-- Left: Features -->
      <div class="features-col">
        <h3 class="col-title">
          {lang === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
        </h3>
        <div class="features-list">
          {#each aboutFeatures as feat, i}
            <div class="feat-card reveal" style="transition-delay: {i * 0.1}s">
              <div class="feat-icon">{feat.icon}</div>
              <div class="feat-text">
                <div class="feat-title">{feat.title[lang]}</div>
                <div class="feat-desc">{feat.desc[lang]}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: Milestones -->
      <div class="milestones-col">
        <h3 class="col-title">
          {lang === 'zh' ? '发展历程' : 'Milestones'}
        </h3>
        <div class="timeline">
          {#each milestones as m, i}
            <div class="timeline-item reveal" style="transition-delay: {i * 0.08}s">
              <div class="tl-year">{m.year}</div>
              <div class="tl-dot"></div>
              <div class="tl-text">{lang === 'zh' ? m.zh : m.en}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about { position: relative; background: var(--color-bg-dark); overflow: hidden; }

  .about-bg { position: absolute; inset: 0; pointer-events: none; }
  .about-glow {
    position: absolute;
    width: 800px; height: 800px;
    background: radial-gradient(circle, rgba(26, 86, 219, 0.08) 0%, transparent 70%);
    top: -200px; right: -200px;
    border-radius: 50%;
  }

  .section-inner { position: relative; z-index: 1; }

  .about-header { max-width: 640px; margin-bottom: 64px; }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 80px;
  }
  .stat-card {
    background: var(--color-bg-card);
    backdrop-filter: blur(20px);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-lg);
    padding: 28px 20px;
    text-align: center;
    transition: all var(--duration-normal) var(--ease-out);
  }
  .stat-card:hover {
    border-color: rgba(56, 139, 253, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(26, 86, 219, 0.15);
  }
  .stat-num {
    font-size: 36px; font-weight: 900; line-height: 1;
    letter-spacing: -2px;
  }
  .stat-unit {
    font-size: 14px; color: var(--color-accent);
    margin-top: 2px;
  }
  .stat-name {
    font-size: 12px; color: var(--color-text-muted);
    margin-top: 8px;
    font-family: var(--font-en);
    letter-spacing: 0.5px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  .col-title {
    font-size: 20px; font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 28px;
  }

  .features-list { display: flex; flex-direction: column; gap: 16px; }
  .feat-card {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    padding: 20px;
    transition: all var(--duration-normal) var(--ease-out);
    cursor: default;
  }
  .feat-card:hover {
    border-color: var(--color-primary-light);
    background: rgba(26, 86, 219, 0.05);
    transform: translateX(6px);
  }
  .feat-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, rgba(26, 86, 219, 0.2), rgba(0, 180, 216, 0.1));
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }
  .feat-title {
    font-size: 15px; font-weight: 600;
    color: white; margin-bottom: 4px;
  }
  .feat-desc {
    font-size: 13px;
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  /* Timeline */
  .timeline {
    position: relative;
    padding-left: 60px;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 16px; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--color-primary-light), transparent);
    opacity: 0.3;
  }
  .timeline-item {
    position: relative;
    margin-bottom: 28px;
    padding-left: 20px;
  }
  .timeline-item:last-child { margin-bottom: 0; }
  .tl-year {
    font-family: var(--font-en),serif;
    font-size: 12px; font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 2px;
  }
  .tl-dot {
    position: absolute;
    left: -49px; top: 0;
    width: 11px; height: 11px;
    background: var(--color-primary-mid);
    border: 2px solid var(--color-bg-dark);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(26, 86, 219, 0.5);
  }
  .tl-text {
    font-size: 14px;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }

  @media (max-width: 1024px) {
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .about-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .stats-row { grid-template-columns: 1fr 1fr; gap: 12px; }
    .stat-num { font-size: 28px; }
  }
</style>
