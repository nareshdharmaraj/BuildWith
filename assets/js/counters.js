document.addEventListener('DOMContentLoaded', () => {
    // Select both selectors used in index.html (counter-number) and index2.html (stat-number) if we decide to use that class there
    // Based on index2.html, it uses .stat-number. Let's make sure we target widely.
    const counters = document.querySelectorAll('.counter-number, .stat-number');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                // Prefer data-target, fallback to innerText if it's a number
                let target = +counter.getAttribute('data-target');
                if (!target) {
                    const text = counter.innerText.replace(/\D/g, ''); // Extract number
                    target = +text;
                }

                if (target > 0) {
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + "+"; // Add + sign
                        }
                    };
                    updateCounter();
                }
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
