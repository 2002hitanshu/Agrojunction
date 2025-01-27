let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const scrollHandler = () => {
    let value = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    if (value < scrollableHeight) {
        const maxMarginTop = 850; 
        const maxLeafTop = 500;
        const maxLeafLeft = 500; 
        const maxHillLeft = 500;

        text.style.marginTop = Math.min(value * 2.5, maxMarginTop) + 'px';
        leaf.style.top = Math.max(Math.min(value * -1.5, maxLeafTop), -maxLeafTop) + 'px';
        leaf.style.left = Math.min(value * 1.5, maxLeafLeft) + 'px';
        hill5.style.left = Math.min(value * 1.5, maxHillLeft) + 'px';
        hill4.style.left = Math.max(Math.min(value * -1.5, maxHillLeft), -maxHillLeft) + 'px';
        hill1.style.top = Math.min(value * 1.0, maxMarginTop) + 'px';
    }
};

window.addEventListener('scroll', scrollHandler);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !menuToggle.contains(e.target)) {
        navigation.classList.remove('active');
    }
});