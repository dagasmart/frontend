<script lang="ts">
  import { navItems } from '../i18n';
  import type { Lang } from '../types';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();
  let scrolled = $state(false);
  let menuOpen = $state(false);

  function switchLang(newLang: Lang) {
    lang = newLang;
  }

  $effect(() => {
    function onScroll() {
      scrolled = window.scrollY > 20;
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  });

  function smoothScroll(e: MouseEvent, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }

    menuOpen = false;
  }
</script>

<header class="navbar" class:scrolled>
  <div class="nav-container">
    <!-- Logo -->
    <a href="#hero" class="logo" onclick={(e) => smoothScroll(e, '#hero')}>
      <div class="logo-mark">
          <img src="../../images/logo.png" style="height: 3rem;" alt="">
<!--        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">-->
<!--          <path d="M14 2L26 8v12L14 26 2 20V8L14 2z" fill="url(#logoGrad)" />-->
<!--          <path d="M9 14l4 4 6-8" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />-->
<!--          <defs>-->
<!--            <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26">-->
<!--              <stop offset="0%" stop-color="#1a56db"/>-->
<!--              <stop offset="100%" stop-color="#00b4d8"/>-->
<!--            </linearGradient>-->
<!--          </defs>-->
<!--        </svg>-->
      </div>
<!--      <div class="logo-text">-->
<!--        <span class="logo-name">{lang === 'zh' ? '大圭智科' : 'DagaSmart'}</span>-->
<!--        <span class="logo-sub">DAGASMART</span>-->
<!--      </div>-->
    </a>

    <!-- Desktop Nav -->
    <nav class="nav-menu" aria-label="Main navigation">
      {#each navItems as item}
        <a href={item.href}
           class="nav-link"
           onclick={(e) => smoothScroll(e, item.href)}
        >
          {item.label[lang]}
        </a>
      {/each}
    </nav>

    <!-- Actions -->
    <div class="nav-actions">
      <div class="lang-switcher">
        <button class="lang-btn" class:active={lang === 'zh'} onclick={() => switchLang('zh')}>中</button>
        <button class="lang-btn" class:active={lang === 'en'} onclick={() => switchLang('en')}>EN</button>
      </div>
      <a href="#contact" class="btn-cta" onclick={(e) => smoothScroll(e, '#contact')}>
        {lang === 'zh' ? '立即咨询' : 'Contact Us'}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <!-- Mobile Hamburger -->
      <button class="hamburger" aria-label="Toggle menu" onclick={() => menuOpen = !menuOpen}>
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div class="mobile-menu">
      {#each navItems as item}
        <a href={item.href} class="mobile-link" onclick={(e) => smoothScroll(e, item.href)}>
          {item.label[lang]}
        </a>
      {/each}
      <div class="mobile-lang">
        <button class:active={lang === 'zh'} onclick={() => switchLang('zh')}>中文</button>
        <button class:active={lang === 'en'} onclick={() => switchLang('en')}>English</button>
      </div>
    </div>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    height: var(--navbar-h);
    transition: background var(--duration-normal) var(--ease-out),
                box-shadow var(--duration-normal) var(--ease-out),
                border-color var(--duration-normal) var(--ease-out);
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background: rgba(6, 13, 31, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-color: var(--color-border);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
  }

  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-xl);
  }

  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .logo-mark {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-text { display: flex; flex-direction: column; line-height: 1.15; }
  .logo-name {
    font-size: 16px; font-weight: 700;
    color: var(--color-text-primary);
  }
  .logo-sub {
    font-family: var(--font-en);
    font-size: 9px; font-weight: 600;
    letter-spacing: 2.5px;
    color: var(--color-text-muted);
  }

  /* Nav Links */
  .nav-menu { display: flex; align-items: center; gap: 4px; }
  .nav-link {
    padding: 8px 16px;
    font-size: 14px; font-weight: 500;
    color: var(--color-text-secondary);
    border-radius: var(--radius-md);
    transition: color var(--duration-fast), background var(--duration-fast);
    position: relative;
  }
  .nav-link:hover {
    color: var(--color-text-primary);
    background: rgba(56, 139, 253, 0.08);
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px; left: 50%; right: 50%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary-light), var(--color-accent));
    border-radius: 1px;
    transition: left var(--duration-normal) var(--ease-out),
                right var(--duration-normal) var(--ease-out);
  }
  .nav-link:hover::after { left: 16px; right: 16px; }

  /* Actions */
  .nav-actions { display: flex; align-items: center; gap: 12px; }

  .lang-switcher {
    display: flex;
    background: rgba(56, 139, 253, 0.08);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 3px;
    gap: 2px;
  }
  .lang-btn {
    padding: 5px 10px;
    border: none;
    background: transparent;
    color: var(--color-text-muted);
    font-family: var(--font-en);
    font-size: 12px; font-weight: 600;
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: all var(--duration-fast);
  }
  .lang-btn.active {
    background: var(--color-primary-mid);
    color: white;
    box-shadow: 0 2px 8px rgba(26, 86, 219, 0.4);
  }

  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 20px;
    background: linear-gradient(135deg, var(--color-primary-mid), var(--color-primary-light));
    color: white;
    font-size: 14px; font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--duration-normal) var(--ease-out);
    box-shadow: 0 4px 20px rgba(26, 86, 219, 0.4);
    cursor: pointer;
    white-space: nowrap;
  }
  .btn-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(26, 86, 219, 0.55);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none; border: none;
    cursor: pointer; padding: 6px;
  }
  .hamburger span {
    display: block;
    width: 22px; height: 2px;
    background: var(--color-text-secondary);
    border-radius: 2px;
    transition: all var(--duration-normal) var(--ease-out);
  }

  /* Mobile Menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    padding: var(--space-md) var(--space-xl) var(--space-lg);
    background: rgba(6, 13, 31, 0.97);
    border-top: 1px solid var(--color-border);
  }
  .mobile-link {
    padding: 14px 0;
    font-size: 16px; font-weight: 500;
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-border-light);
    transition: color var(--duration-fast);
  }
  .mobile-link:hover { color: var(--color-text-primary); }
  .mobile-lang {
    display: flex; gap: 8px; padding-top: var(--space-md);
  }
  .mobile-lang button {
    padding: 8px 16px;
    background: rgba(56, 139, 253, 0.1);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: 14px;
  }
  .mobile-lang button.active {
    background: var(--color-primary-mid);
    border-color: var(--color-primary-mid);
    color: white;
  }

  @media (max-width: 1024px) {
    .nav-menu { display: none; }
    .hamburger { display: flex; }
    .mobile-menu { display: flex; }
    .nav-container { padding: 0 var(--space-md); }
  }
</style>
