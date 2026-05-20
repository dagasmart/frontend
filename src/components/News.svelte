<script lang="ts">
  import { news } from '../i18n';
  import type { Lang } from '../types';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();
  let activeCategory = $state<string>('all');

  const categories = {
    zh: ['全部', '产品发布', '战略合作', '行业活动', '公司荣誉', '融资动态', '公司动态'],
    en: ['All', 'Product Launch', 'Strategic Partnership', 'Industry Events', 'Company Honor', 'Funding News', 'Company News'],
  };

  let filteredNews = $derived(
      activeCategory === 'all' || activeCategory === 'All' || activeCategory === '全部'
      ? news
      : news.filter(n => {
          return n.category[lang] === activeCategory;
        })
  );

  const catKey = $derived(lang === 'zh' ? 'zh' : 'en');
</script>

<section class="news section" id="news">
  <div class="news-inner section-inner">
    <div class="news-header reveal">
      <div class="section-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M2 7h7M2 10h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        {lang === 'zh' ? '新闻动态' : 'News & Updates'}
      </div>
      <h2 class="section-title">
        {lang === 'zh' ? '最新' : 'Latest'}
        <span class="gradient-text">
          {lang === 'zh' ? '资讯动态' : 'News & Insights'}
        </span>
      </h2>
      <p class="section-desc">
        {lang === 'zh'
          ? '了解大圭智科最新动态、产品发布、行业合作与技术创新，与我们一起洞见数字未来。'
          : 'Stay updated with DagaSmart\'s latest developments, product launches, industry partnerships, and tech innovations.'}
      </p>
    </div>

    <!-- Category Filter -->
    <div class="news-filter reveal">
      {#each categories[catKey] as cat}
        <button
          class="filter-btn"
          class:active={activeCategory === cat}
          onclick={() => activeCategory = cat}
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- News Grid -->
    <div class="news-grid">
      {#each filteredNews as item, i}
        <article
          class="news-card reveal"
          class:featured={item.featured}
          style="transition-delay: {(i % 3) * 0.1}s"
        >
          {#if item.featured}
            <div class="featured-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 2.8 10l.6-3.2L1.2 4.5 4.5 4z" fill="currentColor"/>
              </svg>
              {lang === 'zh' ? '精选' : 'Featured'}
            </div>
          {/if}
          <div class="news-img">
            <img src={item.image} alt={item.title[lang]} loading="lazy" />
            <div class="news-overlay"></div>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span class="news-cat">{item.category[lang]}</span>
              <span class="news-date">{item.date[lang]}</span>
            </div>
            <h3 class="news-title">{item.title[lang]}</h3>
            <p class="news-excerpt">{item.excerpt[lang]}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .news { background: linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-mid) 50%, var(--color-bg-dark) 100%); }

  .news-inner { }

  .news-header { margin-bottom: 48px; }

  .news-filter {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-bottom: 40px;
  }
  .filter-btn {
    padding: 7px 16px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: 13px; font-weight: 500;
    cursor: pointer;
    transition: all var(--duration-fast);
    font-family: var(--font-zh);
  }
  .filter-btn:hover { border-color: var(--color-primary-light); color: var(--color-text-secondary); }
  .filter-btn.active {
    background: var(--color-primary-mid);
    border-color: var(--color-primary-mid);
    color: white;
    box-shadow: 0 4px 16px rgba(26, 86, 219, 0.35);
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .news-card {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: all var(--duration-normal) var(--ease-out);
    cursor: default;
    display: flex;
    flex-direction: column;
  }
  .news-card:hover {
    border-color: var(--color-primary-light);
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  }

  .featured-badge {
    position: absolute;
    top: 12px; right: 12px;
    z-index: 2;
    display: inline-flex; align-items: center; gap: 4px;
    padding: 4px 10px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: var(--radius-full);
    font-size: 11px; font-weight: 600;
    color: white;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
  }

  .news-img {
    position: relative;
    height: 160px;
    overflow: hidden;
  }
  .news-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease-out);
  }
  .news-card:hover .news-img img { transform: scale(1.08); }
  .news-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(6, 13, 31, 0.7) 100%);
  }

  .news-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
  .news-meta {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 12px;
  }
  .news-cat {
    font-size: 11px; font-weight: 600;
    padding: 3px 10px;
    background: rgba(0, 180, 216, 0.12);
    border: 1px solid rgba(0, 180, 216, 0.25);
    border-radius: var(--radius-full);
    color: var(--color-accent);
    font-family: var(--font-en);
  }
  .news-date {
    font-size: 12px;
    color: var(--color-text-muted);
    font-family: var(--font-en);
  }
  .news-title {
    font-size: 16px; font-weight: 700;
    color: white;
    line-height: 1.45;
    margin-bottom: 10px;
  }
  .news-excerpt {
    font-size: 13px;
    color: var(--color-text-muted);
    line-height: 1.7;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 1100px) { .news-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px)  { .news-grid { grid-template-columns: 1fr; } }
</style>
