document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons first so they render as SVGs
    lucide.createIcons();

    const body = document.body;
    const btnToggle = document.getElementById('mode-toggle');
    // Lucide replaces <i> with <svg>, but copies id/class/attributes.
    // So we can still select by ID, but we need to ensure we get the SVG if Lucide replaced it,
    // or the element that has that ID now.
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const textMode = document.getElementById('text-mode');

    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');

    const dayContent = document.getElementById('day-content');
    const nightContent = document.getElementById('night-content');
    const footerCopyright = document.getElementById('footer-copyright');

    // Default State
    let isDay = true;

    btnToggle.addEventListener('click', () => {
        isDay = !isDay;
        updateUI();
    });

    function updateUI() {
        if (isDay) {
            // Body Classes
            body.classList.remove('night-mode');
            body.classList.add('day-mode');

            // Toggle Button
            if (iconSun) iconSun.style.display = 'block';
            if (iconMoon) iconMoon.style.display = 'none';
            textMode.textContent = 'DAY MODE';

            // Content Visibility
            dayContent.classList.add('active');
            nightContent.classList.remove('active');

            // Hero Text
            heroTitle.style.color = 'var(--color-day-fg)';
            heroTitle.textContent = 'BRIDGING INTENT & OUTPUT';
            heroDesc.textContent = 'Driving adoption one conversation at a time. In the age of AI, the human element is the strongest variable.';

            // Footer Text
            footerCopyright.textContent = '© 2024 All Rights Reserved.';
        } else {
            // Body Classes
            body.classList.remove('day-mode');
            body.classList.add('night-mode');

            // Toggle Button
            if (iconSun) iconSun.style.display = 'none';
            if (iconMoon) iconMoon.style.display = 'block';
            textMode.textContent = 'NIGHT MODE';

            // Content Visibility
            dayContent.classList.remove('active');
            nightContent.classList.add('active');

            // Hero Text
            heroTitle.style.color = 'var(--color-night-fg)';
            heroTitle.textContent = 'SYNTHETIC ARCHITECT';
            heroDesc.textContent = 'Exploring the latent space. Visuals by Grok & Veo3. Audio by Suno. Logic by Jules.';

            // Footer Text
            footerCopyright.textContent = 'NO COPYRIGHT. STEAL LIKE AN ARTIST.';
        }
    }
});
