<script lang="ts">
  import type { Lang } from '../types';
  import { companyInfo } from '../i18n';

  // Accept lang as bindable prop from parent
  let { lang = $bindable<Lang>('zh') } = $props();

  let form = $state({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  let submitted = $state(false);
  let submitting = $state(false);
  let errors = $state<Record<string, string>>({});

  const services = {
    zh: ['软件开发', '人工智能', '云计算', '数据分析', '网络安全', '数字化咨询'],
    en: ['Software Development', 'Artificial Intelligence', 'Cloud Computing', 'Data Analytics', 'Cybersecurity', 'Digital Consulting'],
  };

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = lang === 'zh' ? '请输入姓名' : 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = lang === 'zh' ? '请输入有效邮箱' : 'Valid email required';
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = lang === 'zh' ? '请输入至少10个字符' : 'Message must be at least 10 characters';
    errors = errs;
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!validate()) return;
    submitting = true;
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200));
    submitting = false;
    submitted = true;
  }

  function reset() {
    form = { name: '', email: '', phone: '', company: '', service: '', message: '' };
    errors = {};
    submitted = false;
  }
</script>

<section class="contact section" id="contact">
  <div class="contact-inner section-inner">
    <div class="contact-header reveal">
      <div class="section-label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 7a2 2 0 100-4 2 2 0 000 4zM2 12c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        {lang === 'zh' ? '联系我们' : 'Contact Us'}
      </div>
      <h2 class="section-title">
        {lang === 'zh' ? '开启' : 'Start Your'}
        <span class="gradient-text">
          {lang === 'zh' ? '数字化转型之旅' : 'Digital Journey'}
        </span>
      </h2>
      <p class="section-desc">
        {lang === 'zh'
          ? '无论您有任何疑问或合作意向，我们都期待与您交流。填写表单或直接联系我们，专业团队将在24小时内给予回复。'
          : 'Whatever your question or partnership inquiry, we look forward to connecting. Fill out the form or reach us directly — our team responds within 24 hours.'}
      </p>
    </div>

    <div class="contact-grid">
      <!-- Form -->
      <div class="contact-form-col reveal">
        {#if submitted}
          <div class="success-state">
            <div class="success-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="var(--color-success)" stroke-width="2"/>
                <path d="M15 24l7 7 11-14" stroke="var(--color-success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{lang === 'zh' ? '提交成功！' : 'Submission Received!'}</h3>
            <p>{lang === 'zh' ? '我们的专业团队将在24小时内与您联系。' : 'Our team will reach out within 24 hours.'}</p>
            <button class="btn-reset" onclick={reset}>
              {lang === 'zh' ? '继续填写' : 'Submit Another'}
            </button>
          </div>
        {:else}
          <form class="contact-form" onsubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-field" class:error={errors.name}>
                <label for="name">{lang === 'zh' ? '姓名 *' : 'Name *'}</label>
                <input id="name" type="text" bind:value={form.name} placeholder={lang === 'zh' ? '请输入您的姓名' : 'Your name'} />
                {#if errors.name}<span class="err-msg">{errors.name}</span>{/if}
              </div>
              <div class="form-field" class:error={errors.email}>
                <label for="email">{lang === 'zh' ? '邮箱 *' : 'Email *'}</label>
                <input id="email" type="email" bind:value={form.email} placeholder={lang === 'zh' ? 'work@company.com' : 'work@company.com'} />
                {#if errors.email}<span class="err-msg">{errors.email}</span>{/if}
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="phone">{lang === 'zh' ? '电话' : 'Phone'}</label>
                <input id="phone" type="tel" bind:value={form.phone} placeholder="+86 xxx xxxx xxxx" />
              </div>
              <div class="form-field">
                <label for="company">{lang === 'zh' ? '公司' : 'Company'}</label>
                <input id="company" type="text" bind:value={form.company} placeholder={lang === 'zh' ? '公司名称' : 'Company name'} />
              </div>
            </div>
            <div class="form-field">
              <label for="service">{lang === 'zh' ? '感兴趣的服务' : 'Service of Interest'}</label>
              <select id="service" bind:value={form.service}>
                <option value="">— {lang === 'zh' ? '请选择' : 'Select'} —</option>
                {#each services[lang === 'zh' ? 'zh' : 'en'] as svc}
                  <option value={svc}>{svc}</option>
                {/each}
              </select>
            </div>
            <div class="form-field" class:error={errors.message}>
              <label for="message">{lang === 'zh' ? '留言 *' : 'Message *'}</label>
              <textarea id="message" rows="5" bind:value={form.message}
                placeholder={lang === 'zh' ? '请描述您的需求或问题...' : 'Describe your needs or questions...'}></textarea>
              {#if errors.message}<span class="err-msg">{errors.message}</span>{/if}
            </div>
            <button type="submit" class="btn-submit" disabled={submitting}>
              {#if submitting}
                <span class="spinner"></span>
                {lang === 'zh' ? '提交中...' : 'Submitting...'}
              {:else}
                {lang === 'zh' ? '提交咨询' : 'Submit Inquiry'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              {/if}
            </button>
          </form>
        {/if}
      </div>

      <!-- Info Column -->
      <div class="contact-info-col reveal" style="transition-delay: 0.15s">
        <div class="info-card">
          <h3 class="info-title">{lang === 'zh' ? '联系方式' : 'Contact Info'}</h3>
          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <div class="info-label">{lang === 'zh' ? '地址' : 'Address'}</div>
                <div class="info-value">{companyInfo.address[lang]}</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <div class="info-label">{lang === 'zh' ? '电话' : 'Phone'}</div>
                <div class="info-value">{companyInfo.phone}</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div>
                <div class="info-label">{lang === 'zh' ? '邮箱' : 'Email'}</div>
                <div class="info-value">{companyInfo.email}</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">🌐</div>
              <div>
                <div class="info-label">{lang === 'zh' ? '网站' : 'Website'}</div>
                <div class="info-value">{companyInfo.website}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="map-placeholder">
          <div class="map-inner">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30 5C20.3 5 12.5 12.8 12.5 22.5c0 13.5 17.5 32.5 17.5 32.5S47.5 36 47.5 22.5C47.5 12.8 39.7 5 30 5z" fill="rgba(56,139,253,0.15)" stroke="rgba(56,139,253,0.4)" stroke-width="1.5"/>
              <circle cx="30" cy="22.5" r="6" fill="rgba(56,139,253,0.3)" stroke="rgba(56,139,253,0.8)" stroke-width="1.5"/>
            </svg>
            <p>{lang === 'zh' ? '贵阳 · 贵安区科技园' : 'Shenzhen · Nanshan Science Park'}</p>
            <span>{lang === 'zh' ? '查看地图' : 'View Map'}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact { background: var(--color-bg-dark); }

  .contact-inner { }

  .contact-header { margin-bottom: 60px; }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 48px;
    align-items: start;
  }

  /* Form */
  .contact-form-col {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    padding: 40px;
  }
  .contact-form { display: flex; flex-direction: column; gap: 20px; }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  .form-field { display: flex; flex-direction: column; gap: 6px; }
  .form-field label {
    font-size: 13px; font-weight: 600;
    color: var(--color-text-secondary);
  }
  .form-field input,
  .form-field select,
  .form-field textarea {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    padding: 12px 16px;
    font-size: 14px;
    font-family: var(--font-zh);
    color: var(--color-text-primary);
    transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
    outline: none;
    width: 100%;
  }
  .form-field input::placeholder,
  .form-field textarea::placeholder { color: var(--color-text-muted); }
  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    border-color: var(--color-primary-light);
    box-shadow: 0 0 0 3px rgba(56, 139, 253, 0.12);
  }
  .form-field.error input,
  .form-field.error textarea {
    border-color: var(--color-error);
  }
  .err-msg {
    font-size: 12px;
    color: var(--color-error);
  }
  .form-field select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%238ba4d4' stroke-width='1.5' stroke-linecap='round' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
    cursor: pointer;
  }
  .form-field select option { background: var(--color-bg-mid); color: var(--color-text-primary); }
  .form-field textarea { resize: vertical; min-height: 120px; }

  .btn-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 32px;
    background: linear-gradient(135deg, var(--color-primary-mid), var(--color-primary-light));
    color: white;
    font-size: 15px; font-weight: 600;
    font-family: var(--font-zh);
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--duration-normal) var(--ease-out);
    box-shadow: 0 6px 28px rgba(26, 86, 219, 0.4);
  }
  .btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(26, 86, 219, 0.55);
  }
  .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

  .spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Success State */
  .success-state {
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
    padding: 60px 40px;
    gap: 16px;
  }
  .success-icon { margin-bottom: 8px; }
  .success-state h3 { font-size: 22px; font-weight: 700; color: white; }
  .success-state p { font-size: 15px; color: var(--color-text-muted); }
  .btn-reset {
    margin-top: 12px;
    padding: 10px 24px;
    background: transparent;
    border: 1px solid var(--color-border-light);
    color: var(--color-text-secondary);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: 14px;
    transition: all var(--duration-fast);
  }
  .btn-reset:hover { border-color: var(--color-primary-light); color: white; }

  /* Info Column */
  .contact-info-col { display: flex; flex-direction: column; gap: 24px; }

  .info-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    padding: 32px;
  }
  .info-title {
    font-size: 18px; font-weight: 700;
    color: white; margin-bottom: 24px;
  }
  .info-items { display: flex; flex-direction: column; gap: 20px; }
  .info-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .info-icon {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, rgba(26, 86, 219, 0.2), rgba(0, 180, 216, 0.1));
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .info-label {
    font-size: 11px; font-weight: 600;
    color: var(--color-text-muted);
    margin-bottom: 2px;
    font-family: var(--font-en);
  }
  .info-value {
    font-size: 14px; color: var(--color-text-secondary);
    line-height: 1.5;
  }

  .map-placeholder {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-xl);
    overflow: hidden;
    height: 180px;
  }
  .map-inner {
    height: 100%;
    background: linear-gradient(135deg, rgba(6, 13, 31, 0.8), rgba(11, 26, 58, 0.6));
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 8px;
    cursor: default;
  }
  .map-inner p { font-size: 13px; font-weight: 600; color: var(--color-text-secondary); }
  .map-inner span {
    font-size: 11px; color: var(--color-accent);
    font-family: var(--font-en);
  }

  @media (max-width: 1024px) {
    .contact-grid { grid-template-columns: 1fr; }
    .contact-info-col { flex-direction: row; }
  }
  @media (max-width: 768px) {
    .form-row { grid-template-columns: 1fr; }
    .contact-form-col { padding: 24px; }
    .contact-info-col { flex-direction: column; }
  }
</style>
