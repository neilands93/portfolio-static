document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Elements Selection
    const body = document.body;
    const btnToggle = document.getElementById('mode-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const textMode = document.getElementById('text-mode');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const dayContent = document.getElementById('day-content');
    const nightContent = document.getElementById('night-content');
    const footerCopyright = document.getElementById('footer-copyright');
    const cursor = document.getElementById('cursor');

    // 4. Custom Cursor Logic
    const moveCursor = (e) => {
        // Use GSAP for smoother cursor follow
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    };
    window.addEventListener('mousemove', moveCursor);

    // Hover effects for cursor
    const hoverElements = document.querySelectorAll('a, button, .card, .night-card, li');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });


    // 5. GSAP Animations Setup
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Animate Hero on Load
    const tlHero = gsap.timeline();
    tlHero.from("#hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        skewY: 7
    })
    .from(".hero-divider", {
        scaleX: 0,
        duration: 0.8,
        ease: "expo.inOut"
    }, "-=0.5")
    .from("#hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5")
    .from(".marquee-container", {
        opacity: 0,
        y: 50,
        duration: 1
    }, "-=0.8");

    // Scroll Animations for Day Cards
    gsap.utils.toArray('.card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1, // stagger effect
            ease: "power2.out"
        });
    });

    // Scroll Animations for Night Cards
    gsap.utils.toArray('.night-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "steps(5)" // More robotic/glitchy ease
        });
    });

    // 6. Text Scramble Logic (The "Wild" Part)
    // Custom random character scrambler
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|:<>?";

    function scrambleText(element, newText, duration = 1) {
        const oldText = element.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => {
            let progress = 0;
            const startTime = Date.now();

            const interval = setInterval(() => {
                const now = Date.now();
                const timePassed = (now - startTime) / 1000;
                progress = Math.min(timePassed / duration, 1);

                let result = "";
                for (let i = 0; i < length; i++) {
                    if (i < newText.length * progress) {
                        result += newText[i];
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }

                element.innerText = result.substring(0, newText.length); // Clip to new length

                if (progress >= 1) {
                    clearInterval(interval);
                    element.innerText = newText; // Ensure final text is correct
                    resolve();
                }
            }, 50);
        });
        return promise;
    }


    // 7. Mode Toggle Logic
    let isDay = true;

    btnToggle.addEventListener('click', () => {
        isDay = !isDay;

        // Glitch effect on toggle
        const tlToggle = gsap.timeline();

        // 1. Flash white or black
        tlToggle.to("body", {
            backgroundColor: isDay ? "#fff" : "#000",
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // 2. Update UI classes/state
        updateUI();

        // 3. Re-run scroll triggers to adjust for layout changes
        ScrollTrigger.refresh();
    });

    function updateUI() {
        if (isDay) {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');

            if (iconSun) iconSun.style.display = 'block';
            if (iconMoon) iconMoon.style.display = 'none';
            scrambleText(textMode, 'DAY MODE', 0.5);

            dayContent.classList.add('active');
            nightContent.classList.remove('active');

            // Scramble Hero Title
            heroTitle.style.color = 'var(--color-day-fg)';
            scrambleText(heroTitle, 'BRIDGING INTENT & OUTPUT', 1.5);

            heroDesc.textContent = 'Driving adoption one conversation at a time. In the age of AI, the human element is the strongest variable.';
            footerCopyright.textContent = '© 2024 All Rights Reserved.';

        } else {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');

            if (iconSun) iconSun.style.display = 'none';
            if (iconMoon) iconMoon.style.display = 'block';
            scrambleText(textMode, 'NIGHT MODE', 0.5);

            dayContent.classList.remove('active');
            nightContent.classList.add('active');

            // Scramble Hero Title
            heroTitle.style.color = 'var(--color-night-fg)';
            scrambleText(heroTitle, 'SYNTHETIC ARCHITECT', 1.5);

            heroDesc.textContent = 'Exploring the latent space. Visuals by Grok & Veo3. Audio by Suno. Logic by Jules.';
            footerCopyright.textContent = 'NO COPYRIGHT. STEAL LIKE AN ARTIST.';
        }
    }

    // Initial trigger for hero title scramble just for effect
    // scrambleText(heroTitle, heroTitle.innerText, 1);
});
