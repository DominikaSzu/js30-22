const trigger = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    const link = this.getBoundingClientRect();
    const coords = {
      height: link.height,
      width: link.width,
      top: link.top + window.scrollY,
      left: link.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

trigger.forEach(trigg => trigg.addEventListener('mouseenter', highlightLink));