// ===== Audio Player Functions =====
let currentPlayingAudio = null;

function togglePlay(audioId, buttonElement) {
    const audio = document.getElementById(audioId);
    
    // Stop any other playing audio
    if (currentPlayingAudio && currentPlayingAudio !== audio) {
        currentPlayingAudio.pause();
        const otherButtons = document.querySelectorAll('.play-btn');
        otherButtons.forEach(btn => {
            if (btn !== buttonElement) {
                btn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }

    if (audio.paused) {
        audio.play();
        currentPlayingAudio = audio;
        buttonElement.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        buttonElement.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function updateDuration(audioId, durationId) {
    const audio = document.getElementById(audioId);
    const duration = document.getElementById(durationId);
    
    if (audio.duration) {
        duration.textContent = formatTime(audio.duration);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function changeTime(audioId, input) {
    const audio = document.getElementById(audioId);
    const seekTime = (input.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

// Update progress bar and time display
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('timeupdate', function() {
        const audioId = this.id;
        const percentage = (this.currentTime / this.duration) * 100;
        const progressFill = document.getElementById(`progress-${audioId.split('-')[1]}`);
        const timeDisplay = document.getElementById(`time-${audioId.split('-')[1]}`);
        const progressInput = document.getElementById(`progress-input-${audioId.split('-')[1]}`);
        
        if (progressFill) progressFill.style.width = percentage + '%';
        if (timeDisplay) timeDisplay.textContent = formatTime(this.currentTime);
        if (progressInput) progressInput.value = percentage;
    });

    audio.addEventListener('ended', function() {
        const audioId = this.id;
        const buttonNum = audioId.split('-')[1];
        const playBtn = document.querySelector(`#audio-${buttonNum}`).closest('.podcast-card').querySelector('.play-btn');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
});

// ===== Smooth Scroll Navigation =====
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section containers and cards
document.querySelectorAll('.section-container, .category-card, .podcast-card, .education-card, .profession-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== Navbar Sticky Effect =====
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ===== Dynamic Badge Animation =====
function animateBadges() {
    document.querySelectorAll('.podcast-number').forEach((badge, index) => {
        badge.style.animation = `floatBadge 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

// Add the keyframe animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatBadge {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .category-card {
        animation: slideInLeft 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    animateBadges();
    
    // Add hover effect to all cards
    document.querySelectorAll('.category-card, .podcast-card, .education-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Parallax effect on hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });
});

// ===== Performance Optimization =====
// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Button Click Effects =====
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== Scroll to Top Button (Optional) =====
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.classList.add('scroll-top-btn');
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d97706, #f59e0b);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(217, 119, 6, 0.4);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Audio Metadata Loading =====
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('loadedmetadata', function() {
        console.log(`Audio ${this.id} loaded: ${formatTime(this.duration)}`);
    });

    audio.addEventListener('error', function() {
        console.error(`Error loading audio ${this.id}`);
    });
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Space bar to play/pause active audio
    if (e.code === 'Space' && currentPlayingAudio) {
        e.preventDefault();
        const playBtn = document.querySelector(`[onclick*="${currentPlayingAudio.id}"]`);
        if (playBtn) {
            togglePlay(currentPlayingAudio.id, playBtn.closest('.podcast-card').querySelector('.play-btn'));
        }
    }
});

// ===== Smooth Color Transitions on Scroll =====
const rootElement = document.documentElement;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Optional: Add subtle color shift based on scroll position
    // This can be enhanced based on design requirements
});

console.log('All scripts loaded successfully!');
