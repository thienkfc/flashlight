const flashlightCSS = `
.flashlight {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background: radial-gradient(circle 5vmax at var(--pointerX) var(--pointerY), rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 80%,rgba(0,0,0,1) 100%);
}`;

const styleTag = document.createElement('style');
styleTag.textContent = flashlightCSS;
document.head.appendChild(styleTag);

const overlay = document.createElement('div');
overlay.classList.add('flashlight');
document.body.appendChild(overlay);

window.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--pointerX', e.clientX + 'px')
    document.documentElement.style.setProperty('--pointerY', e.clientY + 'px')
})