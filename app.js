
document.addEventListener("DOMContentLoaded", ()=> {
  const menuButton = document.querySelector('.view-sm');
  const navMiddle = document.querySelector('.nav-middle');

  menuButton?.addEventListener('click', () => {
    navMiddle.classList.toggle('active');
    // Toggle visibility
    if (navMiddle.classList.contains('active')) {
      navMiddle.style.display = 'block';
    } else {
      navMiddle.style.display = '';
    }
  });

  // Optional: Close menu if clicking outside or on a link
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !navMiddle.contains(e.target)) {
      navMiddle.classList.remove('active');
      navMiddle.style.display = '';
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.querySelectorAll('.course-card, .reating-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = 20;
  });
  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '';
  });
});

<button id="backToTop" style="display:none;position:fixed;bottom:40px;right:40px;z-index:999;">↑ Top</button>

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function animateNumber(el, target, duration = 1200) {
  let start = 0, startTime = null;
  function update(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (target - start) + start);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + '+';
  }
  requestAnimationFrame(update);
}

let statsAnimated = false;
window.addEventListener('scroll', () => {
  const statSection = document.querySelector('.enrolment');
  if (!statsAnimated && statSection && statSection.getBoundingClientRect().top < window.innerHeight) {
    statsAnimated = true;
    animateNumber(document.querySelector('.active-stud strong'), 10000, 1000);
    animateNumber(document.querySelector('.expert-inst strong'), 500, 1000);
    animateNumber(document.querySelector('.courses-av strong'), 1000, 1000);
  }
});
