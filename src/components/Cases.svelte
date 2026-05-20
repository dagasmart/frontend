<script lang="ts">
  import type { Lang } from '../types';
  import { cases } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();
  let activeCase = $state<string | null>(null);
</script>

<section class="cases section" id="cases">
  <div class="cases-inner section-inner">
    <div class="cases-header reveal">
      <div class="section-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        {lang === 'zh' ? '成功案例' : 'Success Stories'}
      </div>
      <h2 class="section-title">
        {lang === 'zh' ? '行业标杆' : 'Industry Benchmark'}
        <span class="gradient-text">
          {lang === 'zh' ? '客户案例' : 'Customer Cases'}
        </span>
      </h2>
      <p class="section-desc">
        {lang === 'zh'
          ? '大圭智科已为金融、教育、医疗、零售等多个行业头部客户提供数字化转型服务，以技术实力创造真实业务价值。'
          : 'DagaSmart has delivered digital transformation for leading clients across finance, education， healthcare, retail, manufacturing, and more, creating real business value through technology.'}
      </p>
    </div>

    <div class="cases-grid">
      {#each cases as c, i}
        <div
          class="case-card reveal"
          class:hovered={activeCase === c.id}
          style="transition-delay: {(i % 3) * 0.1}s"
          onmouseenter={() => activeCase = c.id}
          onmouseleave={() => activeCase = null}
          role="group"
        >
          <div class="case-img">
            <img src={c.image} alt={c.title[lang]} loading="lazy" />
            <div class="case-overlay"></div>
            <span class="case-industry">{c.industry[lang]}</span>
          </div>
          <div class="case-body">
            <h3 class="case-title">{c.title[lang]}</h3>
            <p class="case-desc">{c.description[lang]}</p>
            <div class="case-tags">
              {#each c.tags[lang] as tag}
                <span class="case-tag">{tag}</span>
              {/each}
            </div>
            <div class="case-metrics">
              {#each c.metrics as m}
                <div class="case-metric">
                  <div class="cm-val gradient-text">{m.value}</div>
                  <div class="cm-lbl">{m.label[lang]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .cases { background: var(--color-bg-dark); }

  .cases-inner { }

  .cases-header { margin-bottom: 60px; }

  .cases-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .case-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: all var(--duration-normal) var(--ease-out);
    cursor: default;
  }
  .case-card:hover, .case-card.hovered {
    border-color: var(--color-primary-light);
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  }

  .case-img {
    position: relative;
    height: 180px;
    overflow: hidden;
  }
  .case-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease-out);
  }
  .case-card:hover .case-img img { transform: scale(1.08); }
  .case-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 30%, rgba(6, 13, 31, 0.8) 100%);
  }
  .case-industry {
    position: absolute;
    top: 12px; left: 12px;
    padding: 4px 12px;
    background: rgba(6, 13, 31, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    font-size: 11px; font-weight: 600;
    font-family: var(--font-en);
    color: var(--color-accent);
    letter-spacing: 0.5px;
  }

  .case-body { padding: 24px; }
  .case-title {
    font-size: 16px; font-weight: 700;
    color: white;
    margin-bottom: 10px;
    line-height: 1.4;
  }
  .case-desc {
    font-size: 13px;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 14px;
  }
  .case-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-bottom: 20px;
  }
  .case-tag {
    font-size: 11px;
    padding: 3px 10px;
    background: rgba(56, 139, 253, 0.1);
    border: 1px solid rgba(56, 139, 253, 0.2);
    border-radius: var(--radius-full);
    color: var(--color-primary-light);
    font-family: var(--font-en);
  }
  .case-metrics {
    display: flex;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-border-light);
  }
  .case-metric { flex: 1; text-align: center; }
  .cm-val {
    font-size: 18px; font-weight: 800; line-height: 1;
  }
  .cm-lbl {
    font-size: 10px; color: var(--color-text-muted);
    margin-top: 3px; font-family: var(--font-en);
  }

  @media (max-width: 1100px) { .cases-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px)  { .cases-grid { grid-template-columns: 1fr; } }
</style>
