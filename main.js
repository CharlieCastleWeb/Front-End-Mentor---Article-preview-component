
const shareButton = document.querySelector('.share-button');
const shareButtonIcon = document.querySelector('.share-button-icon');
const socialMediaShare = document.querySelector('.social-media-share');

shareButton.addEventListener('mouseover', () => {
        socialMediaShare.classList.add("animation");
        shareButton.classList.add('share-button-active');
        shareButtonIcon.classList.add('share-button-icon-active');
        
});

socialMediaShare.addEventListener('mouseout', () => {
    socialMediaShare.classList.remove("animation");
    shareButton.classList.remove('share-button-active');
    shareButtonIcon.classList.remove('share-button-icon-active');

});