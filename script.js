// DOM Elements
const videoElement = document.getElementById('video');
const buttonContainer = document.getElementById('button-container');
const button = document.getElementById('button');

// Prompt media screen and pass selected option to video element and play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

// Event listener

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Request Picture in Picture
    await videoElement.requestPictureInPicture();
    // Enable Button
    button.disabled = false;
});

// On Load
selectMediaStream();