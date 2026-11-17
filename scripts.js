// scripts.js – simple intersection observer to trigger animations
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements with data-anim attribute will receive the animation class
  document.querySelectorAll('[data-anim]').forEach(el => {
    observer.observe(el);
  });

  // Also animate elements with predefined animation classes when page loads
  document.querySelectorAll('.fade-in, .slide-up, .zoom-in').forEach(el => {
    // Delay to allow CSS keyframes to run after load
    setTimeout(() => el.classList.add('animate'), 100);
  });
});
