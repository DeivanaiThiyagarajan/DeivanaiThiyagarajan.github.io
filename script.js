// Animate skill bars when section is in view
const skillCategories = document.querySelectorAll('.skill-category');

function animateCategories() {
    skillCategories.forEach(category => {
        const rect = category.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            category.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateCategories);
window.addEventListener('load', animateCategories);
