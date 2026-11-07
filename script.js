/*!
 * Animated Portfolio JavaScript
 * For Shreyas Gawade - Graphic Designer Portfolio
 */

/* Check for reduced motion preference */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Particles Canvas Animation */
function initParticlesCanvas() {
  if (prefersReducedMotion) return;
  
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  let animationId = null;
  
  // Set canvas dimensions
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Create particles
  function createParticles() {
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
    particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: `rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2})`
      });
    }
  }
  createParticles();
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      // Move particle
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.opacity;
      ctx.fill();
    });
    
    // Draw connections between nearby particles
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
    
    animationId = requestAnimationFrame(animate);
  }
  
  animate();
  
  // Cleanup on unmount
  return () => {
    if (animationId) cancelAnimationFrame(animationId);
  };
}

/* Project Modal functionality */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = modal.querySelector('.close-btn');
  
  // Project data
  const projectsData = [
    {
      title: 'Event Poster Series',
      description: 'Brand posters with clear typography and layout design. Created using Photoshop with focus on typography hierarchy and visual balance.',
      tags: ['Photoshop', 'Typography', 'Layout'],
      image: 'https://picsum Photos/600/400?random=1'
    },
    {
      title: 'Instagram Campaign',
      description: 'Posts and banners made in Canva and Photoshop for social media engagement. Focus on consistent visual identity and platform-specific dimensions.',
      tags: ['Canva', 'Photoshop', 'Social Media'],
      image: 'https://picsum Photos/600/400?random=2'
    },
    {
      title: 'Procreate Illustration',
      description: 'Hand-drawn style illustrations created in Procreate. Exploring digital drawing techniques and character design.',
      tags: ['Procreate', 'Illustration', 'Digital Art'],
      image: 'https://picsum Photos/600/400?random=3'
    },
    {
      title: 'Photo Editing & Manipulation',
      description: 'Image editing and manipulation in Photoshop. Working with layers, filters, and adjustment tools to create compelling visuals.',
      tags: ['Photoshop', 'Photo Editing', 'Manipulation'],
      image: 'https://picsum Photos/600/400?random=4'
    }
  ];
  
  // Open project modal
  function openProjectModal(index) {
    const project = projectsData[index - 1];
    modalBody.innerHTML = `
      <div class="project-modal-content">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10; margin-bottom: 2rem; height: 200px; object-fit: cover;">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">View Details</button>
      </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal
  function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  // Event listeners
  document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => openProjectModal(index + 1));
  });
  
  closeBtn.addEventListener('click', closeProjectModal);
  
  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeProjectModal();
    }
  });
}

/* Scroll reveal with Intersection Observer */
function initScrollReveal() {
  if (prefersReducedMotion) return;
  
  const revealElements = document.querySelectorAll('.intro-image, .project-card, .cta-btn, .thankyou-content');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* Smooth link scrolling for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* Navigation background change on scroll */
function initNavBackground() {
  const main = document.querySelector('main');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      main.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
      main.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  }, {
    passive: true
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  initParticlesCanvas();
  initProjectModal();
  initScrollReveal();
  initSmoothScroll();
  initNavBackground();
});