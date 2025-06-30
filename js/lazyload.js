// Створив IntersectionObserver
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      img.src = img.dataset.src;

      img.onload = () => {
        img.classList.add('loaded');
      };

      obs.unobserve(img);
    }
  });
}, {
  rootMargin: "100px",
  threshold: 0.1
});

// Обирання всіх зображень з datasrc
const lazyImages = document.querySelectorAll('img[data-src]');
lazyImages.forEach(img => observer.observe(img));

// Завантаження по кнопці
document.getElementById('loadImagesButton').addEventListener('click', () => {
  lazyImages.forEach(img => {
    if (!img.src) {
      img.src = img.dataset.src;
      img.onload = () => {
        img.classList.add('loaded');
      };
      observer.unobserve(img);
    }
  });
});
