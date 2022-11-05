
window.onload = function() {
    
    document.body.classList.remove("preload");

    const shareButton = document.querySelector('.share-button');
    const shareButtonIcon = document.querySelector('.share-button-icon');
    const socialMediaShare = document.querySelector('.social-media-share');
    
    shareButton.addEventListener('click', () => {
        socialMediaShare.classList.toggle("animation");
        shareButton.classList.toggle('share-button-active');
        shareButtonIcon.classList.toggle('share-button-icon-active');
    });
}