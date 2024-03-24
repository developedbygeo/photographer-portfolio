import { ZOOM_CURSOR_ELEMENTS } from '@/data/enums';
import { isClient } from '@/lib/utils';

export const initCursor = () => {
  const isRunningOnClient = isClient();

  if (!isRunningOnClient) return;

  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;

  let cursor = {
    el: document.querySelector('.cursor'),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 30,
    h: 30,
    update: function () {
      let l = this.x - this.w / 2;
      let t = this.y - this.h / 2;

      if (!this.el) return;
      const castedEl = this.el as HTMLElement;
      castedEl.style.transform = 'translate3d(' + l + 'px,' + t + 'px, 0)';
    },
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const link = document.querySelectorAll(
    `${ZOOM_CURSOR_ELEMENTS.ANCHOR_TAG}, ${ZOOM_CURSOR_ELEMENTS.BUTTON}, ${ZOOM_CURSOR_ELEMENTS.HOVER_CURSOR}, ${ZOOM_CURSOR_ELEMENTS.CLICK_CURSOR}`
  );

  const lightElements = document.querySelectorAll('[data-bg-color="light"]');

  lightElements.forEach((lightElement) => {
    lightElement.addEventListener('mouseenter', () => {
      if (!cursor.el) return;
      cursor.el.classList.add('cursor-dark');
    });
    lightElement.addEventListener('mouseleave', () => {
      if (!cursor.el) return;
      cursor.el.classList.remove('cursor-dark');
    });
  });

  link.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (!cursor.el) return;
      cursor.el.classList.add('cursor-zoom');
    });
    link.addEventListener('mouseleave', () => {
      if (!cursor.el) return;
      cursor.el.classList.remove('cursor-zoom');
    });
  });

  setInterval(move, 1000 / 60);
  function move() {
    cursor.x = lerp(cursor.x, mouseX, 0.1);
    cursor.y = lerp(cursor.y, mouseY, 0.1);
    cursor.update();
  }
  function lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }
};

export const activeAnimation = () => {
  const progress_inner = document.querySelectorAll('.scroll-animate'),
    triggerBottom = (window.innerHeight / 5) * 4.5 - 19.5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      const foundBox = box as HTMLElement;
      foundBox.style.visibility = 'visible';
      box.classList.add('animate__active');
    }
  });
};
