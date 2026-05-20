<script lang="ts">
    import Navbar from './components/Navbar.svelte';
    import Hero from './components/Hero.svelte';
    import About from './components/About.svelte';
    import Services from './components/Services.svelte';
    import Cases from './components/Cases.svelte';
    import News from './components/News.svelte';
    import Contact from './components/Contact.svelte';
    import Footer from './components/Footer.svelte';
    import { onMount } from 'svelte';

    // Shared language state — drives all child components
    let lang = $state<'zh' | 'en'>('zh');

    // Intersection Observer for scroll-reveal animations
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<div id="app-root">
    <Navbar bind:lang />
    <Hero bind:lang />
    <About bind:lang />
    <Services bind:lang />
    <Cases bind:lang />
    <News bind:lang />
    <Contact bind:lang />
    <Footer bind:lang />
</div>
