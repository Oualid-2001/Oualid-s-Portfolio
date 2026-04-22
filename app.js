// ==========================================
// SPOTLIGHT EFFECT ON CARDS
// ==========================================
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
    
    card.addEventListener("mouseover", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});


// ==========================================
// VIDEO AUTO-PLAY ON HOVER
// ==========================================
const video1 = document.getElementById('projectVideo1'); 
const video2 = document.getElementById('projectVideo2'); 
const video3 = document.getElementById('projectVideo3'); 

const videoList = [video1, video2, video3].filter(v => v !== null);

videoList.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play().catch(err => console.log('Video play error:', err));
    });

    video.addEventListener("mouseout", function() {
        video.pause();
    });
});


// ==========================================
// FORM HANDLING WITH EMAILJS
// ==========================================
document.getElementById('contact-form').addEventListener('submit', function(e) {   
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');
    
    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Hide previous messages
    successMsg.style.display = 'none';
    successMsg.classList.remove('error-message');
    successMsg.classList.add('success-message');
    
    // Send with EmailJS
    emailjs.sendForm('service_fg13jqc', 'template_ouca1f9', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            successMsg.style.display = 'block';
            successMsg.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
            successMsg.style.color = '#10b981';
            successMsg.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            
            // Reset form
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            successMsg.style.display = 'block';
            successMsg.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            successMsg.style.color = '#ef4444';
            successMsg.textContent = 'Failed to send message. Please try again.';
        })
        .finally(function() {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide message after 5 seconds
            setTimeout(function() {
                successMsg.style.display = 'none';
            }, 5000);
        });
});


// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================
document.querySelector('.contact-btn').addEventListener('click', function() {
    document.querySelector('.contact-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.contact-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(19, 19, 20, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
    }
});
