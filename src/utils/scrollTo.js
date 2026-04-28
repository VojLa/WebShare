export function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const nav = document.querySelector('nav');
  const navHeight = nav ? nav.offsetHeight : 0;

  const isMobile = window.innerWidth < 768;
  const offset = isMobile ? 64 : navHeight;

  const target = el.getBoundingClientRect().top + window.scrollY - offset;
  const start = window.scrollY;
  const distance = target - start;
  const duration = 800;
  let startTime = null;

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}