const video = document.getElementById('video');
const paly = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video

function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}
// Update Play/Pause Icon

function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x play-icon"></i>';
    }
    else {
        play.innerHTML = '<i class="fas fa-pause fa-2x pause-icon"></i>';
    }
}

// Update Progress & Timestamp

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get Mins

    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // Get Secs

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}
// Set Video Time Progress

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}
// Stop Video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listener 

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("click", setVideoProgress);



