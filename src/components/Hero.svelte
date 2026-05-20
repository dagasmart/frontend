<script lang="ts">
  import type { Lang } from '../types';
  import { heroStats, heroCards } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();

  function scrollToServices(e: MouseEvent) {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToCases(e: MouseEvent) {
    e.preventDefault();
    document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="hero" id="hero">
  <!-- Background Elements -->
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-grid"></div>
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="stars"></div>
    <div class="border-line left"></div>
    <div class="border-line right"></div>
  </div>

  <div class="hero-inner">
    <!-- Left Content -->
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span class="badge-text">
          {lang === 'zh' ? '🌟 创新驱动发展 · 科技引领未来' : '🌟 Innovation-Driven · Tech-Led Future'}
        </span>
      </div>

      <h1 class="hero-title">
        <span class="title-line-1">
          {lang === 'zh' ? '智能科技' : 'Intelligent'}
        </span>
        <span class="title-line-2 gradient-text">
          {lang === 'zh' ? '赋能企业未来' : 'Technology'}
        </span>
        <span class="title-en">
          {lang === 'zh' ? 'DAGASMART · 大圭智科' : 'Empowering Enterprise Future · DAGASMART'}
        </span>
      </h1>

      <p class="hero-desc">
        {lang === 'zh'
          ? '大圭智科专注于企业数字化转型，提供从战略咨询到技术落地的一站式解决方案，助力企业实现智能化升级，引领行业创新发展。'
          : 'DagaSmart specializes in enterprise digital transformation, providing end-to-end solutions from strategy consulting to implementation, empowering businesses with intelligent upgrades.'}
      </p>

      <div class="hero-cta">
        <a href="#services" class="btn-primary" onclick={scrollToServices}>
          {lang === 'zh' ? '探索解决方案' : 'Explore Solutions'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#cases" class="btn-ghost" onclick={scrollToCases}>
          {lang === 'zh' ? '查看成功案例' : 'View Success Stories'}
        </a>
      </div>

      <div class="hero-stats">
        {#each heroStats as stat, i}
          <div class="stat-item">
            <div class="stat-value gradient-text">{stat.value}</div>
            <div class="stat-label">{stat.label[lang]}</div>
          </div>
          {#if i < heroStats.length - 1}
            <div class="stat-divider"></div>
          {/if}
        {/each}
      </div>
    </div>

    <!-- Right Visual: Floating Cards -->
    <div class="hero-visual" aria-hidden="true">
      <div class="card-stack">
        {#each heroCards as card, i}
          <div class="floating-card card-{i + 1}" style="--delay: {i * 0.15}s">
            <div class="card-icon">{card.icon}</div>
            <div class="card-body">
              <div class="card-title">{card.title[lang]}</div>
              <div class="card-desc">{card.desc[lang]}</div>
            </div>
            {#if card.metrics.length > 0}
              <div class="card-metrics">
                {#each card.metrics as m}
                  <div class="m-item">
                    <div class="m-val gradient-text">{m.value}</div>
                    <div class="m-lbl">{m.label[lang]}</div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/each}

        <!-- Decorative Node Graph -->
        <div class="node-graph">
          <svg width="320" height="300" viewBox="0 0 320 300">
            <!-- Connection lines -->
            <line x1="160" y1="150" x2="80" y2="80"  stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            <line x1="160" y1="150" x2="240" y2="80" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            <line x1="160" y1="150" x2="60"  y2="200" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            <line x1="160" y1="150" x2="260" y2="200" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            <line x1="160" y1="150" x2="160" y2="270" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
            <!-- Nodes -->
            <circle cx="160" cy="150" r="12" fill="url(#nodeGrad)" opacity="0.9"/>
            <circle cx="80"  cy="80"  r="7"  fill="#3b82f6" opacity="0.7"/>
            <circle cx="240" cy="80"  r="7"  fill="#00b4d8" opacity="0.7"/>
            <circle cx="60"  cy="200" r="7"  fill="#8b5cf6" opacity="0.7"/>
            <circle cx="260" cy="200" r="7"  fill="#10b981" opacity="0.7"/>
            <circle cx="160" cy="270" r="7"  fill="#f59e0b" opacity="0.7"/>
            <!-- Pulse rings -->
            <circle cx="160" cy="150" r="20" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.3"/>
            <circle cx="160" cy="150" r="36" fill="none" stroke="#3b82f6" stroke-width="0.5" opacity="0.15"/>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#00b4d8" stop-opacity="0.3"/>
              </linearGradient>
              <radialGradient id="nodeGrad">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#0f3d9e"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="scroll-hint">
    <div class="scroll-line"></div>
    <span>{lang === 'zh' ? '向下滚动' : 'Scroll Down'}</span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--color-bg-dark);
    padding-top: var(--navbar-h);
  }

  /* ---- Background ---- */
  .hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(56, 139, 253, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56, 139, 253, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 100%);
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
  }
  .orb-1 {
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(26, 86, 219, 0.18) 0%, transparent 70%);
    top: -250px; right: -200px;
    animation: orb-drift 25s ease-in-out infinite;
  }
  .orb-2 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(0, 180, 216, 0.12) 0%, transparent 70%);
    bottom: -150px; left: -150px;
    animation: orb-drift 20s ease-in-out infinite reverse;
  }
  .orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    top: 40%; left: 30%;
    animation: orb-drift 15s ease-in-out infinite;
    animation-delay: -5s;
  }
  @keyframes orb-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, -30px) scale(1.05); }
    66% { transform: translate(-20px, 40px) scale(0.97); }
  }

  .stars {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.35) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.25) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 100%);
  }

  .border-line {
    position: absolute;
    top: 15%; bottom: 15%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent);
    opacity: 0.5;
  }
  .border-line.left  { left: 5%; }
  .border-line.right { right: 5%; }

  /* ---- Layout ---- */
  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px var(--space-xl) 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    width: 100%;
  }

  /* ---- Left Content ---- */
  .hero-content { color: white; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px 8px 10px;
    background: rgba(56, 139, 253, 0.1);
    border: 1px solid rgba(56, 139, 253, 0.25);
    border-radius: var(--radius-full);
    margin-bottom: 28px;
    animation: fade-up 0.7s var(--ease-out) both;
  }
  .badge-dot {
    width: 8px; height: 8px;
    background: var(--color-accent);
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(0,180,216,0.4); }
    50% { opacity: 0.8; transform: scale(1.2); box-shadow: 0 0 0 6px transparent; }
  }
  .badge-text {
    font-family: var(--font-en);
    font-size: 12px; font-weight: 500;
    color: var(--color-accent);
    letter-spacing: 0.5px;
  }

  .hero-title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 28px;
    animation: fade-up 0.7s var(--ease-out) 0.1s both;
  }
  .title-line-1 {
    font-size: clamp(42px, 5.5vw, 64px);
    font-weight: 900;
    line-height: 1.1;
    color: white;
    letter-spacing: -1px;
  }
  .title-line-2 {
    font-size: clamp(42px, 5.5vw, 64px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1px;
  }
  .title-en {
    font-family: var(--font-en);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 3px;
    color: var(--color-text-muted);
    margin-top: 10px;
  }

  .hero-desc {
    font-size: 17px;
    line-height: 1.85;
    color: var(--color-text-secondary);
    max-width: 480px;
    margin-bottom: 40px;
    animation: fade-up 0.7s var(--ease-out) 0.2s both;
  }

  .hero-cta {
    display: flex;
    gap: 14px;
    margin-bottom: 56px;
    animation: fade-up 0.7s var(--ease-out) 0.3s both;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--color-primary-mid), var(--color-primary-light));
    color: white;
    font-size: 15px; font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--duration-normal) var(--ease-out);
    box-shadow: 0 6px 28px rgba(26, 86, 219, 0.45);
    cursor: pointer;
  }
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(26, 86, 219, 0.6);
  }
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    padding: 14px 28px;
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 15px; font-weight: 500;
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    transition: all var(--duration-normal) var(--ease-out);
  }
  .btn-ghost:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 40px;
    border-top: 1px solid var(--color-border-light);
    animation: fade-up 0.7s var(--ease-out) 0.4s both;
  }
  .stat-item { text-align: center; }
  .stat-value {
    font-size: 32px; font-weight: 800;
    line-height: 1;
    letter-spacing: -1px;
  }
  .stat-label {
    font-size: 12px;
    color: var(--color-text-muted);
    margin-top: 4px;
  }
  .stat-divider {
    width: 1px; height: 40px;
    background: var(--color-border-light);
  }

  /* ---- Right Visual ---- */
  .hero-visual {
    position: relative;
    height: 520px;
    animation: fade-right 1s var(--ease-out) 0.3s both;
  }

  .card-stack {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .floating-card {
    position: absolute;
    background: rgba(11, 26, 58, 0.7);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 20px;
    transition: transform 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out);
    cursor: default;
    animation: float var(--duration-slow) ease-in-out infinite;
    animation-delay: var(--delay, 0s);
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  .card-1 { width: 290px; top: 20px;  left: 0;  z-index: 3; animation-delay: 0s,      0s; }
  .card-2 { width: 250px; top: 100px; left: 200px; z-index: 2; animation-delay: 0.15s, 0.2s; }
  .card-3 { width: 220px; top: 240px; left: 60px; z-index: 1; animation-delay: 0.3s,  0.4s; }

  .floating-card:hover { z-index: 10; transform: translateY(-12px) scale(1.03); }

  .card-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, var(--color-primary-mid), var(--color-accent));
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
    margin-bottom: 14px;
  }
  .card-title {
    font-size: 15px; font-weight: 700;
    color: white; margin-bottom: 6px;
  }
  .card-desc {
    font-size: 12px;
    color: var(--color-text-muted);
    line-height: 1.6;
  }
  .card-metrics {
    display: flex; gap: 16px;
    margin-top: 14px; padding-top: 14px;
    border-top: 1px solid var(--color-border-light);
  }
  .m-item { }
  .m-val {
    font-size: 20px; font-weight: 800; line-height: 1;
  }
  .m-lbl {
    font-size: 10px; color: var(--color-text-muted); margin-top: 2px;
  }

  .node-graph {
    position: absolute;
    right: -20px; top: 50%;
    transform: translateY(-50%);
    opacity: 0.6;
    pointer-events: none;
  }

  /* ---- Scroll Hint ---- */
  .scroll-hint {
    position: absolute;
    bottom: 40px; left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--color-text-muted);
    font-size: 11px;
    font-family: var(--font-en);
    letter-spacing: 1px;
    animation: fade-up 1s var(--ease-out) 0.8s both;
  }
  .scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, var(--color-accent), transparent);
    animation: scroll-pulse 2s ease-in-out infinite;
  }
  @keyframes scroll-pulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(0.7); }
  }

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-right {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ---- Responsive ---- */
  @media (max-width: 1100px) {
    .hero-inner { grid-template-columns: 1fr; gap: 60px; }
    .hero-visual { display: none; }
    .hero-desc { margin: 0 auto 40px; }
    .hero-cta, .hero-stats { justify-content: center; }
    .hero-title { text-align: center; }
    .hero-badge { display: flex; }
    .title-en { text-align: center; }
  }

  @media (max-width: 768px) {
    .hero-inner { padding: 60px var(--space-md) 80px; }
    .hero-stats { gap: 20px; flex-wrap: wrap; }
    .hero-cta { flex-direction: column; }
    .stat-divider { display: none; }
    .stat-item { min-width: 80px; }
  }
</style>
