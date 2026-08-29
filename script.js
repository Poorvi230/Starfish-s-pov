const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.4 });
sections.forEach(section => {
    observer.observe(section);
});
const musicBtn = document.getElementById('cute-music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        bgMusic.innerText = 'Playitt';
    } else {
        bgMusic.play();
        musicBtn.innerText = 'Pause huh'
    } isPlaying = !isPlaying
});
