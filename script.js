document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto';
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto';
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add reveal class to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.classList.add('reveal');
        }
    });

    // Scroll Reveal Animation via Intersection Observer
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load

    // Highlight Active Link on Scroll
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Certifications Carousel Logic
    const certificates = [
        {
            title: "Cyber Security and Privacy",
            issuer: "NPTEL",
            date: "Jul-Oct 2025",
            duration: "12 week course",
            tag: "SECURITY",
            image: "nptel-cert.png",
            link: "./cert-1.png" // Path to the copied screenshot
        },
        {
            title: "Foundations of Cybersecurity",
            issuer: "Google / Coursera",
            date: "Nov 2024",
            duration: "Online Course",
            tag: "SECURITY",
            image: "https://via.placeholder.com/800x600/fbfbfb/333?text=Google+Certificate",
            link: "#"
        },
        {
            title: "Full Stack Web Development",
            issuer: "Seven Mentor",
            date: "Aug 2024",
            duration: "Bootcamp",
            tag: "WEB DEV",
            image: "https://via.placeholder.com/800x600/fbfbfb/333?text=Seven+Mentor+Certificate",
            link: "#"
        },
        {
            title: "Fundamentals of Data Structures using C++",
            issuer: "LPU",
            date: "Nov 2025",
            duration: "University Course",
            tag: "DSA",
            image: "https://via.placeholder.com/800x600/fbfbfb/333?text=LPU+Certificate",
            link: "#"
        }
    ];

    function renderCertificates() {
        const certsGrid = document.getElementById('certs-grid');
        const countSpan = document.getElementById('cert-count');
        
        if (!certsGrid) return;

        if (countSpan) {
            countSpan.textContent = certificates.length;
        }

        certsGrid.innerHTML = '';
        
        certificates.forEach((cert) => {
            const card = document.createElement('div');
            card.className = 'cert-card glass-card';
            
            card.innerHTML = `
                <div class="cert-card-header">
                    <span class="cert-tag">${cert.tag}</span>
                </div>
                <h3 class="cert-name" style="margin-bottom: 1rem; font-size: 1.3rem;">${cert.title}</h3>
                <div class="cert-card-info" style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; margin-top: auto;">
                    <p><i class="fas fa-building" style="width: 20px;"></i> ${cert.issuer}</p>
                    <p><i class="far fa-calendar-alt" style="width: 20px;"></i> ${cert.date}</p>
                    <p><i class="far fa-clock" style="width: 20px;"></i> ${cert.duration}</p>
                </div>
            `;
            certsGrid.appendChild(card);
        });
    }

    renderCertificates();
});
