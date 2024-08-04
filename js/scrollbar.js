function getScrollbarWidth() {
   const outer = document.createElement('div');
   outer.style.visibility = 'hidden';
   outer.style.overflow = 'scroll';
   document.body.appendChild(outer);

   const inner = document.createElement('div');
   outer.appendChild(inner);

   const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

   document.body.removeChild(outer);

   return scrollbarWidth;
}

function compensateScrollbar() {
   const scrollbarWidth = getScrollbarWidth();
   if (scrollbarWidth > 0) {
      document.body.classList.add('scroll-compensate');
      document.body.style.paddingRight = `${scrollbarWidth}px`;
   }
}

window.addEventListener('load', compensateScrollbar);