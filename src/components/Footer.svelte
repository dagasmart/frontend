<script lang="ts">
  import type { Lang } from '../types';
  import { footerLinks, companyInfo } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();

  const socials = [
    { icon: '𝕏', label: 'X (Twitter)', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: '▶', label: 'Bilibili', href: '#' },
    { icon: '◎', label: 'WeChat', href: '#' },
  ];
</script>

<footer class="footer">
  <div class="footer-inner section-inner">
    <!-- Top: Logo + Description + Links -->
    <div class="footer-top">
      <div class="footer-brand">
        <a href="#hero" class="footer-logo">
          <div class="logo-mark">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L26 8v12L14 26 2 20V8L14 2z" fill="url(#logoGrad2)" />
              <path d="M9 14l4 4 6-8" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="logoGrad2" x1="2" y1="2" x2="26" y2="26">
                  <stop offset="0%" stop-color="#1a56db"/>
                  <stop offset="100%" stop-color="#00b4d8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="footer-logo-text">
            <span class="footer-logo-name">{lang === 'zh' ? '大圭智科' : 'DagaSmart'}</span>
            <span class="footer-logo-sub">DAGASMART</span>
          </div>
        </a>
        <p class="footer-tagline">{companyInfo.tagline[lang]}</p>
        <div class="footer-socials">
          {#each socials as s}
            <a href={s.href} class="social-btn" aria-label={s.label} title={s.label}>
              <span>{s.icon}</span>
            </a>
          {/each}
        </div>
      </div>

      <!-- Link Columns -->
      <div class="footer-links">
        {#each Object.values(footerLinks) as col}
          <div class="link-col">
            <h4 class="link-col-title">{col.title[lang]}</h4>
            <ul class="link-list">
              {#each col.links as link}
                <li>
                  <a href={link.href} class="footer-link">{link.label[lang]}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Divider -->
    <div class="footer-divider"></div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p class="copyright">
        &copy; {new Date().getFullYear()} DagaSmart {lang === 'zh' ? '大圭智科' : 'DagaSmart'}.
          {lang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}


          <a target="_blank" rel="noopener" class="marketify" href="https://beian.miit.gov.cn/">
              <img src="../../images/beian.png" style="height: 12px;" alt="">
              {lang === 'zh' ? '贵公网安备52011102003086号' : '贵公网安备52011102003086号'}
          </a>
          /
          <a target="_blank" rel="noopener" class="marketify" href="https://beian.miit.gov.cn/">
              {lang === 'zh' ? '黔ICP备2025043057号' : '黔ICP备2025043057号'}
          </a>

      </p>
      <div class="footer-legal">
        <a href="/privacy">{lang === 'zh' ? '隐私政策' : 'Privacy Policy'}</a>
        <a href="/terms">{lang === 'zh' ? '服务条款' : 'Terms of Service'}</a>
        <a href="/sitemap">{lang === 'zh' ? '网站地图' : 'Sitemap'}</a>
      </div>
      <div class="footer-lang-badge">
        <span class="footer-lang-dot"></span>
        {lang === 'zh' ? '简体中文' : 'English'}
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-bg-dark);
    border-top: 1px solid var(--color-border);
    padding: 72px 0 0;
  }

  .footer-inner { }

  .footer-top {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 80px;
    margin-bottom: 60px;
  }

  /* Brand */
  .footer-logo {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 16px;
  }
  .footer-logo-text { display: flex; flex-direction: column; line-height: 1.15; }
  .footer-logo-name { font-size: 16px; font-weight: 700; color: white; }
  .footer-logo-sub { font-family: var(--font-en); font-size: 9px; font-weight: 600; letter-spacing: 2.5px; color: var(--color-text-muted); }

  .footer-tagline {
    font-size: 14px; color: var(--color-text-muted);
    line-height: 1.6; margin-bottom: 20px;
    max-width: 260px;
  }

  .footer-socials { display: flex; gap: 8px; }
  .social-btn {
    width: 36px; height: 36px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    color: var(--color-text-muted);
    transition: all var(--duration-fast);
    cursor: pointer;
  }
  .social-btn:hover {
    border-color: var(--color-primary-light);
    color: var(--color-text-primary);
    background: rgba(56, 139, 253, 0.1);
    transform: translateY(-2px);
  }

  /* Link Columns */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .link-col-title {
    font-size: 14px; font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 20px;
  }
  .link-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .footer-link {
    font-size: 14px; color: var(--color-text-muted);
    transition: color var(--duration-fast);
    cursor: pointer;
  }
  .footer-link:hover { color: var(--color-text-primary); }

  /* Divider */
  .footer-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, var(--color-border), transparent);
    margin-bottom: 28px;
  }

  /* Bottom */
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 28px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .copyright {
    font-size: 13px; color: var(--color-text-muted);
    font-family: var(--font-en);
  }
  .footer-legal {
    display: flex; gap: 24px;
  }
  .footer-legal a {
    font-size: 13px; color: var(--color-text-muted);
    transition: color var(--duration-fast);
  }
  .footer-legal a:hover { color: var(--color-text-primary); }
  .footer-lang-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; color: var(--color-text-muted);
    font-family: var(--font-en);
  }
  .footer-lang-dot {
    width: 6px; height: 6px;
    background: var(--color-success);
    border-radius: 50%;
  }

  @media (max-width: 1100px) {
    .footer-top { grid-template-columns: 1fr; gap: 48px; }
    .footer-links { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 768px) {
    .footer-links { grid-template-columns: repeat(2, 1fr); }
    .footer-bottom { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 480px) {
    .footer-links { grid-template-columns: 1fr; }
  }
</style>
