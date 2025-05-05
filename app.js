document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mouseover", e => {
        const rect = card.getBoundingClientRect();
        // UPDATE CSS VARIABLES FOR THE SPOTLIGHT EFFECT
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    })
})          

const video1 = document.getElementById('projectVideo1'); 
const video2 = document.getElementById('projectVideo2'); 
const video3 = document.getElementById('projectVideo3'); 

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    video.addEventListener( "mouseover", function() {
        video.play()
    })

    video.addEventListener( "mouseout", function() {
        video.pause()
    })
})

        
//FORM HANDLING
document.getElementById('contactForm').addEventListener('submit', function(e) {   
    e.preventDefault(); 
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Rest Form
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
})

