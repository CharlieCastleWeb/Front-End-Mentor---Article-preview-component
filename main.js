
const shareButton = document.querySelector('.share-button-image');
const socialMediaShare = document.querySelector('.social-media-share');

shareButton.addEventListener('mouseover', () => {
        socialMediaShare.classList.add("animation");
        shareButton.style.backgroundColor = "hsl(212, 23%, 69%)";
});

shareButton.addEventListener('mouseout', () => {
    socialMediaShare.classList.remove("animation");
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
});