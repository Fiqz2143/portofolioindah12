document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typing Effect Logic ---
    const typingText = document.querySelector('.typing-text');
    const words = ["Backend Developer", "UI/UX Enthusiast", "Problem Solver"];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newWordDelay = 2000;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? erasingDelay : typingDelay;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    if(words.length) setTimeout(type, newWordDelay);


    // --- 2. Contact Form & Toast Notification ---
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman

        // Tampilkan Toast
        toast.classList.add('show');

        // Sembunyikan Toast setelah 3 detik
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);

        // Reset form setelah disubmit
        contactForm.reset();
    });
});