<script lang="ts">
  import type { Lang } from '../types';
  import { services } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();
  let activeCard = $state<number | null>(null);
</script>

<section class="services section" id="services">
  <div class="services-inner section-inner">
    <!-- Header -->
    <div class="services-header reveal">
      <div class="section-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/></svg>
        {lang === 'zh' ? '产品服务' : 'Our Services'}
      </div>
      <h2 class="section-title">
        {lang === 'zh' ? '全栈式' : 'Full-Stack'}
        <span class="gradient-text">
          {lang === 'zh' ? '数字化解决方案' : 'Digital Solutions'}
        </span>
      </h2>
      <p class="section-desc">
        {lang === 'zh'
          ? '从战略咨询到技术落地，大圭智科为各行业客户提供端到端的数字化转型服务，覆盖软件、人工智能、云计算、数据分析全链路。'
          : 'From strategy consulting to tech implementation, DagaSmart delivers end-to-end digital transformation across software, AI, cloud, and data analytics.'}
      </p>
    </div>

    <!-- Services Grid -->
    <div class="services-grid">
      {#each services as svc, i}
        <div
          class="svc-card reveal"
          class:hovered={activeCard === i}
          style="--card-color: {svc.color}; transition-delay: {(i % 3) * 0.1}s"
          role="group"
          onmouseenter={() => activeCard = i}
          onmouseleave={() => activeCard = null}
        >
          <div class="svc-glow"></div>
          <div class="svc-icon" style="background: linear-gradient(135deg, {svc.color}22, {svc.color}11); border-color: {svc.color}44">
            <span style="font-size: 26px">{svc.icon}</span>
          </div>
          <h3 class="svc-title">{svc.title[lang]}</h3>
          <p class="svc-desc">{svc.desc[lang]}</p>
          <div class="svc-tags">
            {#each svc.tags[lang] as tag}
              <span class="svc-tag" style="background: {svc.color}18; color: {svc.color}; border-color: {svc.color}33">
                {tag}
              </span>
            {/each}
          </div>
          <div class="svc-arrow">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services {
    background: linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-mid) 100%);
  }

  .services-inner { }

  .services-header { margin-bottom: 60px; }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .svc-card {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    padding: 32px 28px;
    overflow: hidden;
    transition: all var(--duration-normal) var(--ease-out);
    cursor: default;
  }
  .svc-card:hover, .svc-card.hovered {
    border-color: var(--card-color);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
                0 0 40px color-mix(in srgb, var(--card-color) 15%, transparent);
  }

  .svc-glow {
    position: absolute;
    width: 200px; height: 200px;
    background: radial-gradient(circle, var(--card-color) 0%, transparent 70%);
    top: -60px; right: -60px;
    opacity: 0;
    transition: opacity var(--duration-normal) var(--ease-out);
    pointer-events: none;
    border-radius: 50%;
  }
  .svc-card:hover .svc-glow, .svc-card.hovered .svc-glow { opacity: 0.08; }

  .svc-icon {
    width: 56px; height: 56px;
    border: 1px solid;
    border-radius: var(--radius-lg);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
  }

  .svc-title {
    font-size: 18px; font-weight: 700;
    color: white;
    margin-bottom: 12px;
  }
  .svc-desc {
    font-size: 14px;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .svc-tags {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-bottom: 20px;
  }
  .svc-tag {
    font-size: 11px; font-weight: 500;
    padding: 4px 10px;
    border: 1px solid;
    border-radius: var(--radius-full);
    font-family: var(--font-en);
    letter-spacing: 0.3px;
  }
  .svc-arrow {
    color: var(--card-color);
    opacity: 0;
    transform: translateX(-8px);
    transition: all var(--duration-normal) var(--ease-out);
  }
  .svc-card:hover .svc-arrow, .svc-card.hovered .svc-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 1100px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .services-grid { grid-template-columns: 1fr; }
    .svc-card { padding: 24px 20px; }
  }
</style>
