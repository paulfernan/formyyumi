// 1. Interactive Love Letter Toggle
const openLetterBtn = document.getElementById('openLetterBtn');
const letterContent = document.getElementById('letterContent');

if (openLetterBtn && letterContent) {
  openLetterBtn.addEventListener('click', () => {
    if (letterContent.classList.contains('hidden')) {
      letterContent.classList.remove('hidden');
      openLetterBtn.textContent = 'Close Letter 💌';
    } else {
      letterContent.classList.add('hidden');
      openLetterBtn.textContent = 'Click to Open Your Letter ✨';
    }
  });
}

// Array of 100 Reasons
const loveReasons = [
  "Your adorable, infectious smile you have that lights up every room.",
  "How sweet and kind you are to everyone around you.",
  "The adorable way you laugh when something is super funny.",
  "How comfy and happy I feel whenever I am with you.",
  "Your warm, comforting hugs.",
  "Your sweet hand written letters that never fails to make me cry.",
  "How thoughtful you are with every little thing you do.",
  "Your passion for the things you care about.",
  "How easy it is to talk to you about absolutely anything.",
  "Your cute little habits that make you uniquely you.",
  "The way you support and cheer me on in everything.",
  "How gorgeous you look even when you just woke up. (I don't see u, but I'm sure:))",
  "Your immaculate taste in music hehe.",
  "How you uplift me.",
  "Your soft hands and holding hands with you.",
  "How much you care about your loved ones.",
  "Your playful energy and sense of humor.",
  "The comforting sound of your voice.",
  "How you always remember the smallest details about us.",
  "The way you hold my arms everytime that we're in a crowded place.",
  "Your niche style and how cute you dress that will always make my head turn.",
  "How patient you are with me.",
  "Your random giggles when you're excited.",
  "How you make bad days automatically feel better.",
  "The way we can communicate with just a single look.",
  "Your sweet good morning and goodnight texts.",
  "How intelligent and sharp you are.",
  "Your cute yaps that I can listen to all day.",
  "Your adorable facial expressions.",
  "How genuine and authentic you always are.",
  "Because of how you love cats and dogs.",
  "How much you love God.",
  "Your ability to make me laugh until my stomach hurts.",
  "How you always try to see the good in people.",
  "The way you support me with my walk with God.",
  "How you worship God in the things that you do.",
  "How you bring out the absolute best version of me.",
  "Your gentle nature and gentle heart.",
  "How effortlessly pretty you are.",
  "The memories we’ve made so far, and all the ones to come.",
  "How you make our space feel like home.",
  "Your love for cozy late-night conversations.",
  "How you always check in on me.",
  "Your cute baby voice everytime you talk to cats and dogs.",
  "Your silly jokes that only we understand.",
  "How comfortable we are around each other.",
  "How emotionally intelligent you are.",
  "Your willingness to try new things with me.",
  "The way you lay your head on my shoulders.",
  "Your gorgeous eyes that I could stare into forever.",
  "How you inspire me every single day.",
  "The way you forgive and let go of small mistakes.",
  "Your adorable doe eye stares that I can't forget.",
  "How you match my weird energy perfectly.",
  "How self-less you are.",
  "Because of how you take good care of me.",
  "The way you smell—it’s my favorite scent 🥺.",
  "Your creativity and artistic side.",
  "How you make food taste 10x better just by sharing it.",
  "The sweet nicknames you give me.",
  "Your random compliments that makes me instantly fold.",
  "How brave and strong you are when things get tough.",
  "Your adorable giggles and laughter.",
  "Because of how malambing you are.",
  "Your honesty and how much I can trust you.",
  "How you always make room for me in your life.",
  "The feeling of butterflies you still give me.",
  "Your funny reactions to the reels you're sending me.",
  "How independent you are.",
  "How expressive you are.",
  "How soft and cute your cheeks are.",
  "Your unconditional love.",
  "How well we work together as partners.",
  "Your sweer assurances.",
  "Your sweet laughs when you try to hold back a smile.",
  "How you encourage me to chase my dreams.",
  "Your warm comforting presence.",
  "How you make me feel seen and heard.",
  "Your bright optimistic outlook on life.",
  "The way you remember things I mentioned weeks ago.",
  "Your faith.",
  "How passionate you are to the things that you love.",
  "How you love taking photos to capture our memories.",
  "The cute voice you use when talking to cute things.",
  "How you respect my boundaries and feelings.",
  "Your sweet, kind, loving heart.",
  "How you make every journey enjoyable.",
  "Your head pats.",
  "How you handle challenges with grace.",
  "Your ability to turn a boring day into a special one.",
  "How you always find a way to make me smile.",
  "The way you cuddle up close to me.",
  "Your beautiful soul inside and out.",
  "How you've taught me so much about love.",
  "Your lovely presence in my life.",
  "How every day with you is a gift.",
  "The way you make me feel like the most blessed person alive.",
  "Your endless capacity for love.",
  "The simple fact that you are YOU.",
  "That I get to love you today, tomorrow, and forever."
];

let currentReasonIndex = 0;

const reasonNumber = document.getElementById('reasonNumber');
const reasonText = document.getElementById('reasonText');
const nextReasonBtn = document.getElementById('nextReasonBtn');
const toggleAllBtn = document.getElementById('toggleAllBtn');
const allReasonsList = document.getElementById('allReasonsList');

// Cycle to next reason
if (nextReasonBtn && reasonNumber && reasonText) {
  nextReasonBtn.addEventListener('click', () => {
    currentReasonIndex = (currentReasonIndex + 1) % loveReasons.length;
    reasonNumber.textContent = `Reason #${currentReasonIndex + 1}`;
    reasonText.textContent = loveReasons[currentReasonIndex];
  });
}

// Populate and Toggle the Full 100 List Grid
let isGridPopulated = false;

if (toggleAllBtn && allReasonsList) {
  toggleAllBtn.addEventListener('click', () => {
    if (!isGridPopulated) {
      loveReasons.forEach((reason, index) => {
        const item = document.createElement('div');
        item.classList.add('reason-item');
        item.innerHTML = `<strong>#${index + 1}:</strong> ${reason}`;
        allReasonsList.appendChild(item);
      });
      isGridPopulated = true;
    }

    if (allReasonsList.classList.contains('hidden')) {
      allReasonsList.classList.remove('hidden');
      toggleAllBtn.textContent = 'Hide Full List 📜';
    } else {
      allReasonsList.classList.add('hidden');
      toggleAllBtn.textContent = 'View All 100 Reasons 📜';
    }
  });
}

// 2b. Polaroid Tap-to-Flip (hover doesn't exist on touchscreens, so phones
// and tablets need a click/tap to flip the photo and reveal the memory).
const polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach((polaroid) => {
  polaroid.addEventListener('click', () => {
    polaroid.classList.toggle('flipped');
  });
});

// 3. Floating Background Hearts Generator (FIXED CLEANUP)
const bgHearts = document.getElementById('bgHearts');

function createHeart() {
  if (!bgHearts) return;

  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';

  const duration = Math.random() * 3 + 4; // 4-7 seconds
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = duration + 's';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';

  bgHearts.appendChild(heart);

  // Clean up exact time when the animation ends
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

if (bgHearts) {
  setInterval(createHeart, 600);
}

// --- SNOOPY LOGIN LOGIC ---

const SECRET_PASSCODE = "062525";

const pinInputs = document.querySelectorAll('.pin-input');
const unlockBtn = document.getElementById('unlockBtn');
const loginOverlay = document.getElementById('loginOverlay');
const errorMessage = document.getElementById('errorMessage');

// Auto-advance cursor & enhanced Backspace handling
pinInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    input.style.borderColor = "";

    if (e.target.value.length === 1 && index < pinInputs.length - 1) {
      pinInputs[index + 1].focus();
    }
    checkFullPinAuto();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (!input.value && index > 0) {
        pinInputs[index - 1].focus();
        pinInputs[index - 1].value = ""; // Clear previous field immediately
      }
    }
  });
});

function getEnteredPin() {
  let pin = "";
  pinInputs.forEach(input => pin += input.value);
  return pin;
}

function verifyPin() {
  const enteredPin = getEnteredPin();

  if (enteredPin === SECRET_PASSCODE) {
    if (errorMessage) errorMessage.classList.add('hidden');
    if (loginOverlay) loginOverlay.classList.add('unlocked');
  } else {
    if (errorMessage) errorMessage.classList.remove('hidden');
    pinInputs.forEach(input => {
      input.value = "";
      input.style.borderColor = "#ff4d6d";
    });
    if (pinInputs.length > 0) pinInputs[0].focus();
  }
}

function checkFullPinAuto() {
  if (getEnteredPin().length === 6) {
    verifyPin();
  }
}

if (unlockBtn) {
  unlockBtn.addEventListener('click', verifyPin);
}

// --- MUSIC PLAYER LOGIC ---

const playlist = [
  {
    title: "Old With You",
    artist: "grentperez",
    src: "song1.mp3"
  },
  {
    title: "Meant to be",
    artist: "Jeremy Passion",
    src: "song2.mp3"
  },
  {
    title: "Kahel na langit",
    artist: "MAKI",
    src: "song3.mp3"
  },
  {
    title: "If You're Too Shy (let me know)",
    artist: "The 1975",
    src: "song4.mp3"
  },
   {
    title: "Reason Why",
    artist: "grentperez",
    src: "song5.mp3"
  },
   {
    title: "Natural",
    artist: "GSoul",
    src: "song6.mp3"
  },
   {
    title: "Room for You",
    artist: "grentperez, ft. Lyn Lapid",
    src: "song7.mp3"
  },
   {
    title: "SUPERNATURAL",
    artist: "NewJeans",
    src: "song8.mp3"
  }
];

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const vinylRecord = document.getElementById('vinylRecord');

const miniPlayerBar = document.getElementById('miniPlayerBar');
const miniVinyl = document.getElementById('miniVinyl');
const miniSongTitle = document.getElementById('miniSongTitle');
const miniPlayBtn = document.getElementById('miniPlayBtn');

// Fixed default volume now that the volume slider has been removed.
if (audioPlayer) audioPlayer.volume = 0.8;

function syncMiniPlayer() {
  if (miniSongTitle && songTitle) miniSongTitle.textContent = songTitle.textContent;
  if (miniPlayBtn) miniPlayBtn.textContent = isPlaying ? '⏸️' : '▶️';
  if (miniVinyl) miniVinyl.classList.toggle('playing', isPlaying);
}

function loadSong(song) {
  if (songTitle) songTitle.textContent = song.title;
  if (songArtist) songArtist.textContent = song.artist;
  if (audioPlayer) audioPlayer.src = song.src;
  syncMiniPlayer();
}

function playSong() {
  if (!audioPlayer) return;
  isPlaying = true;
  audioPlayer.play().catch(err => console.log("Audio playback blocked or failed:", err));
  if (playPauseBtn) playPauseBtn.textContent = '⏸️';
  if (vinylRecord) vinylRecord.classList.add('playing');
  syncMiniPlayer();
}

function pauseSong() {
  if (!audioPlayer) return;
  isPlaying = false;
  audioPlayer.pause();
  if (playPauseBtn) playPauseBtn.textContent = '▶️';
  if (vinylRecord) vinylRecord.classList.remove('playing');
  syncMiniPlayer();
}

if (miniPlayBtn) {
  miniPlayBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
}

if (playPauseBtn) {
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    if (isPlaying) playSong();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    if (isPlaying) playSong();
  });
}

if (audioPlayer) {
  audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    playSong();
  });

  loadSong(playlist[currentSongIndex]);
}

// --- MINIMIZE MUSIC PLAYER LOGIC ---
const minimizeBtn = document.getElementById('minimizeBtn');
const musicCard = document.getElementById('musicCard');
const playerBody = document.getElementById('playerBody');

if (minimizeBtn && musicCard) {
  minimizeBtn.addEventListener('click', () => {
    musicCard.classList.toggle('minimized');
    const isMinimized = musicCard.classList.contains('minimized');

    if (miniPlayerBar) miniPlayerBar.classList.toggle('hidden', !isMinimized);

    if (isMinimized) {
      minimizeBtn.textContent = '➕';
      minimizeBtn.setAttribute('aria-label', 'Expand Player');
      syncMiniPlayer();
    } else {
      minimizeBtn.textContent = '➖';
      minimizeBtn.setAttribute('aria-label', 'Minimize Player');
    }
  });
}

// --- IDLE HINT SHAKE LOGIC ---
const hintToggle = document.getElementById('hintToggle');

let idleTimer = null;
const IDLE_DELAY_MS = 5000;

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  if (hintToggle) hintToggle.classList.remove('hint-shake');

  const isFilled = Array.from(pinInputs).every(input => input.value.trim().length > 0);

  if (!isFilled && hintToggle && !hintToggle.open) {
    idleTimer = setTimeout(() => {
      if (!hintToggle.open) {
        hintToggle.classList.add('hint-shake');
      }
    }, IDLE_DELAY_MS);
  }
}

pinInputs.forEach(input => {
  input.addEventListener('input', resetIdleTimer);
  input.addEventListener('keydown', resetIdleTimer);
});

if (hintToggle) {
  hintToggle.addEventListener('toggle', () => {
    if (hintToggle.open) {
      hintToggle.classList.remove('hint-shake');
      if (idleTimer) clearTimeout(idleTimer);
    } else {
      resetIdleTimer();
    }
  });
}

resetIdleTimer();

// Request persistent storage from the browser
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((isPersisted) => {
    if (isPersisted) {
      console.log("Storage is persisted! Browser will not auto-clear data.");
    } else {
      console.log("Storage is temporary. Browser may clear data under storage pressure.");
    }
  });
}

// Helper function to check remaining storage quota in MB
async function checkStorageQuota() {
  if (navigator.storage && navigator.storage.estimate) {
    const { quota, usage } = await navigator.storage.estimate();
    const usageMB = (usage / (1024 * 1024)).toFixed(2);
    const quotaMB = (quota / (1024 * 1024)).toFixed(2);
    console.log(`Using ${usageMB} MB out of ${quotaMB} MB allocated.`);
  }
}
checkStorageQuota();

// --- PHOTO/VIDEO ALBUM UPLOAD LOGIC (IndexedDB-enabled) ---
const mediaUploadInput = document.getElementById('mediaUploadInput');
const mediaAlbumGrid = document.getElementById('mediaAlbumGrid');
const emptyAlbumMsg = document.getElementById('emptyAlbumMsg');
const mediaLightbox = document.getElementById('mediaLightbox');
const lightboxContent = document.getElementById('lightboxContent');
const closeLightbox = document.getElementById('closeLightbox');

let db = null;

// 1. Initialize IndexedDB
const request = indexedDB.open("LoveLetterAlbumDB", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  if (!db.objectStoreNames.contains("media")) {
    db.createObjectStore("media", { keyPath: "id", autoIncrement: true });
  }
};

request.onsuccess = (event) => {
  db = event.target.result;
  loadSavedMedia(); // Render saved photos/videos on load
};

request.onerror = (event) => {
  console.error("IndexedDB error:", event.target.error);
};

// 2. Helper to Save Media File Blob to DB
function saveMediaToDB(file) {
  if (!db) return;
  const transaction = db.transaction(["media"], "readwrite");
  const store = transaction.objectStore("media");

  const record = {
    file: file,
    type: file.type,
    name: file.name,
    timestamp: Date.now()
  };

  const addRequest = store.add(record);
  addRequest.onsuccess = (e) => {
    // Render media card after it's saved
    renderMediaCard(file, file.type, e.target.result);
  };
}

// 3. Load All Saved Media on Page Refresh
function loadSavedMedia() {
  if (!db) return;
  const transaction = db.transaction(["media"], "readonly");
  const store = transaction.objectStore("media");
  const getAllRequest = store.getAll();

  getAllRequest.onsuccess = () => {
    const records = getAllRequest.result;
    if (records.length > 0 && emptyAlbumMsg) {
      emptyAlbumMsg.classList.add('hidden');
    }
    records.forEach(record => {
      renderMediaCard(record.file, record.type, record.id);
    });
  };
}

// Function to Delete Media Record from IndexedDB and DOM
function deleteMediaFromDB(recordId, mediaCardElement) {
  if (!db) return;

  const transaction = db.transaction(["media"], "readwrite");
  const store = transaction.objectStore("media");
  const deleteRequest = store.delete(recordId);

  deleteRequest.onsuccess = () => {
    // Remove card from the DOM
    mediaCardElement.remove();

    // Show empty album message if no items remain
    if (mediaAlbumGrid && mediaAlbumGrid.children.length <= 1) {
      if (emptyAlbumMsg) emptyAlbumMsg.classList.remove('hidden');
    }
  };

  deleteRequest.onerror = (e) => {
    console.error("Failed to delete record:", e.target.error);
  };
}

// 4. Render Media Cards in DOM
function renderMediaCard(fileBlob, fileType, recordId) {
  if (emptyAlbumMsg) {
    emptyAlbumMsg.classList.add('hidden');
  }

  const fileUrl = URL.createObjectURL(fileBlob);
  const isVideo = fileType.startsWith('video/');

  const mediaCard = document.createElement('div');
  mediaCard.classList.add('media-card');
  mediaCard.dataset.id = recordId;

  if (isVideo) {
    const video = document.createElement('video');
    video.src = fileUrl;
    video.muted = true;
    video.autoplay = false;
    mediaCard.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = fileUrl;
    img.alt = "Uploaded Memory";
    mediaCard.appendChild(img);
  }

  // Create Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-media-btn');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = 'Delete Memory';

  // Handle Delete Click (stop event propagation so it doesn't open the lightbox)
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this memory? 💖")) {
      deleteMediaFromDB(recordId, mediaCard);
    }
  });

  mediaCard.appendChild(deleteBtn);

  // Open Lightbox on Click
  mediaCard.addEventListener('click', () => {
    if (!lightboxContent || !mediaLightbox) return;
    lightboxContent.innerHTML = '';

    if (isVideo) {
      const fullVideo = document.createElement('video');
      fullVideo.src = fileUrl;
      fullVideo.controls = true;
      fullVideo.autoplay = true;
      lightboxContent.appendChild(fullVideo);
    } else {
      const fullImg = document.createElement('img');
      fullImg.src = fileUrl;
      lightboxContent.appendChild(fullImg);
    }

    mediaLightbox.classList.remove('hidden');
  });

  if (mediaAlbumGrid) {
    mediaAlbumGrid.appendChild(mediaCard);
  }
}

// 5. Handle File Uploads
if (mediaUploadInput) {
  mediaUploadInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      saveMediaToDB(file);
    });
  });
}

// 6. Close Lightbox modal
if (closeLightbox && mediaLightbox) {
  closeLightbox.addEventListener('click', () => {
    mediaLightbox.classList.add('hidden');
    if (lightboxContent) lightboxContent.innerHTML = '';
  });

  mediaLightbox.addEventListener('click', (e) => {
    if (e.target === mediaLightbox) {
      mediaLightbox.classList.add('hidden');
      if (lightboxContent) lightboxContent.innerHTML = '';
    }
  });
}