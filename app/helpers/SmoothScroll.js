export function disableScroll() {
  // Prevent default scrolling behavior
  document.body.style.overflow = "hidden";
}

export function enableScroll() {
  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

export default function smoothScroll(target, duration, delay) {
  const startPosition = window.pageYOffset;
  const targetPosition =
    target.getBoundingClientRect().top -
    parseFloat(getComputedStyle(document.documentElement).fontSize);
  const startTime = performance.now();

  disableScroll(); // Disable scrolling when animation starts

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const ease = easeInOutCubic(Math.min(elapsed / duration, 1));
    window.scrollTo(0, startPosition + targetPosition * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    } else {
      setTimeout(() => enableScroll(), delay); // Re-enable scrolling once animation finishes
    }
  }

  requestAnimationFrame(scrollStep);
}

// Easing function for smooth effect
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
