import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

let scene, camera, renderer;
let textContainer = null;
let wordGroup = null;
let cachedTotalWidth = 10;
let textMaterial = null;

// Deep Space Zoom Configuration
const START_Z = -650;
const TARGET_Z = 0;
const ZOOM_DURATION = 2.4;

let animStartTime = 0;
let isZooming = true;
let hasArrived = false;
let arrivalTime = 0;

const CAM_BASE_Z = 16;
let starsMesh = null;

// Audio System (Jump_Cut_Flip.mp3)
let bgMusic = null;
let isMusicPlaying = false;

// Multi-Trigger Easter Egg State (Double Tap, Hold, Corner Star, Key C, Hash)
let isPressing = false;
let pressStartTime = 0;
let tapCount = 0;
let lastTapTime = 0;
const LONG_PRESS_DURATION = 600; // 0.6s fast hold to crack
const QUICK_TAP_MAX = 220; // quick tap
let lastVibrateStep = 0;
let hasCracked = false;

// 3D Shards
let activeShards = [];

function init() {
  const container = document.getElementById('canvas-container');

  // Pure pitch-black scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 10, 750);

  // Camera
  camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.set(0, 0, CAM_BASE_Z);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  container.appendChild(renderer.domElement);

  // Studio Lighting
  setupStudioLighting();

  // Speed Dust
  createSpeedDust();

  // Root container for zoom and physics
  textContainer = new THREE.Group();
  textContainer.position.set(0, 0, START_Z);
  scene.add(textContainer);

  // Load Typography
  loadTypography();

  // Setup Audio
  setupAudio();

  // Setup Interactions & Secret Gesture
  setupInteractions();

  // Setup Photo Reveal on Credits Page
  setupPhotoReveal();

  // Start Animation Loop
  animStartTime = performance.now();
  requestAnimationFrame(animate);
}

function setupStudioLighting() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambient);

  const leftSoftbox = new THREE.DirectionalLight(0xffffff, 1.8);
  leftSoftbox.position.set(-10, 8, 18);
  scene.add(leftSoftbox);

  const rightSoftbox = new THREE.DirectionalLight(0xffffff, 1.8);
  rightSoftbox.position.set(10, 8, 18);
  scene.add(rightSoftbox);

  const topRim = new THREE.DirectionalLight(0xffffff, 1.4);
  topRim.position.set(0, 16, 4);
  scene.add(topRim);
}

function createSpeedDust() {
  const count = 350;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    pos[i] = (Math.random() - 0.5) * 40;
    pos[i + 1] = (Math.random() - 0.5) * 25;
    pos[i + 2] = -Math.random() * 600;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.15,
    transparent: true,
    opacity: 0.35,
  });

  starsMesh = new THREE.Points(geo, mat);
  scene.add(starsMesh);
}

function loadTypography() {
  const loader = new FontLoader();
  loader.load('/fonts/gentilis_bold.typeface.json', (font) => {
    textMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x1f1f1f,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.05,
    });

    const textOptions = {
      font: font,
      size: 1.8,
      depth: 0.28,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.015,
      bevelOffset: 0,
      bevelSegments: 6,
    };

    wordGroup = new THREE.Group();

    const geo1 = new TextGeometry('DEBA', textOptions);
    geo1.computeBoundingBox();
    geo1.computeVertexNormals();

    const geo2 = new TextGeometry('DEBA', textOptions);
    geo2.computeBoundingBox();
    geo2.computeVertexNormals();

    const box1 = geo1.boundingBox;
    const width1 = box1.max.x - box1.min.x;

    const box2 = geo2.boundingBox;
    const width2 = box2.max.x - box2.min.x;

    const wordGap = 1.3;
    cachedTotalWidth = width1 + wordGap + width2;

    const mesh1 = new THREE.Mesh(geo1, textMaterial);
    mesh1.position.set(-cachedTotalWidth / 2 - box1.min.x, -textOptions.size / 2, 0);

    const mesh2 = new THREE.Mesh(geo2, textMaterial);
    mesh2.position.set(-cachedTotalWidth / 2 + width1 + wordGap - box2.min.x, -textOptions.size / 2, 0);

    wordGroup.add(mesh1);
    wordGroup.add(mesh2);
    textContainer.add(wordGroup);

    adjustScale();
    triggerZoom();
  });
}

function adjustScale() {
  if (!textContainer) return;

  const fov = (camera.fov * Math.PI) / 180;
  const visibleHeight = 2 * Math.tan(fov / 2) * camera.position.z;
  const visibleWidth = visibleHeight * camera.aspect;

  const maxAllowed = visibleWidth * 0.82;
  if (cachedTotalWidth > maxAllowed) {
    const s = maxAllowed / cachedTotalWidth;
    textContainer.scale.set(s, s, s);
  } else {
    textContainer.scale.set(1, 1, 1);
  }
}

function triggerZoom() {
  animStartTime = performance.now();
  isZooming = true;
  hasArrived = false;
  if (textContainer) {
    textContainer.position.set(0, 0, START_Z);
    textContainer.rotation.set(0, 0, 0);
  }
}

// Audio Handling
function setupAudio() {
  bgMusic = new Audio('/Jump_Cut_Flip.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.65;

  const audioBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!isMusicPlaying) {
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        audioBtn.classList.remove('muted');
        audioIcon.innerText = '🎵';
      }).catch(() => {});
    } else {
      bgMusic.muted = !bgMusic.muted;
      if (bgMusic.muted) {
        audioBtn.classList.add('muted');
        audioIcon.innerText = '🔇';
      } else {
        audioBtn.classList.remove('muted');
        audioIcon.innerText = '🎵';
      }
    }
  });
}

function startMusicOnUserGesture() {
  if (bgMusic && !isMusicPlaying) {
    bgMusic.play().then(() => {
      isMusicPlaying = true;
    }).catch(() => {});
  }
}

// Haptic vibration helper for mobile devices
function triggerHaptic(pattern) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch (_) {}
  }
}

// Mobile-First Touch, Double-Tap & Long-Press Interactions
function setupInteractions() {
  window.addEventListener('resize', onWindowResize);

  // Prevent long-press context menu on mobile
  window.addEventListener('contextmenu', (e) => e.preventDefault());

  let singleTapTimer = null;
  let holdStartTimer = null; // Delays hold-shake so double-tap gets priority

  window.addEventListener('pointerdown', (e) => {
    // If clicking inside credits modal, audio button, or secret button, ignore
    if (e.target.closest('#credits-overlay') && !e.target.classList.contains('credits-overlay')) {
      return;
    }
    if (e.target.closest('#audio-toggle') || e.target.closest('#secret-trigger')) {
      return;
    }

    startMusicOnUserGesture();

    if (hasCracked) return;

    const now = performance.now();
    const timeSinceLastTap = now - lastTapTime;

    if (timeSinceLastTap < 400) {
      tapCount++;
    } else {
      tapCount = 1;
    }
    lastTapTime = now;

    // 1. DOUBLE TAP DETECTED -> SHATTER IMMEDIATELY!
    if (tapCount >= 2) {
      if (singleTapTimer) clearTimeout(singleTapTimer);
      if (holdStartTimer) clearTimeout(holdStartTimer);
      tapCount = 0;
      isPressing = false;
      triggerHaptic([60, 40, 140]);
      shatterAndRevealCredits();
      return;
    }

    // 2. DON'T start hold-shake immediately — wait 420ms to let double-tap window pass
    //    This prevents the shake from fighting with rapid taps
    if (holdStartTimer) clearTimeout(holdStartTimer);
    isPressing = false; // Don't shake yet
    pressStartTime = now;
    lastVibrateStep = 0;

    holdStartTimer = setTimeout(() => {
      // If finger is still down after double-tap window, start the hold-shake
      if (!hasCracked && tapCount === 1) {
        isPressing = true;
        pressStartTime = performance.now(); // Reset to now so hold timer is accurate
        lastVibrateStep = 0;
      }
    }, 420);
  });

  const handlePointerEnd = () => {
    if (holdStartTimer) {
      clearTimeout(holdStartTimer);
      holdStartTimer = null;
    }

    if (hasCracked) {
      isPressing = false;
      return;
    }

    const wasPressing = isPressing;
    isPressing = false;

    const duration = performance.now() - pressStartTime;

    // If we were in a hold-shake, reset position
    if (wasPressing && !hasCracked) {
      if (textContainer) {
        textContainer.position.set(0, 0, TARGET_Z);
        textContainer.rotation.set(0, 0, 0);
      }
      return;
    }

    // Quick single tap: wait to make sure no second tap is coming, then replay zoom
    if (duration < 500 && tapCount === 1 && !isZooming) {
      if (singleTapTimer) clearTimeout(singleTapTimer);
      singleTapTimer = setTimeout(() => {
        if (tapCount === 1 && !isPressing && !hasCracked) {
          triggerZoom();
        }
      }, 450);
    }
  };

  window.addEventListener('pointerup', handlePointerEnd);
  window.addEventListener('pointercancel', handlePointerEnd);

  // Discreet Corner Star Button
  const secretBtn = document.getElementById('secret-trigger');
  if (secretBtn) {
    secretBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerHaptic([60, 40, 140]);
      shatterAndRevealCredits();
    });
  }

  // Return button / Escape key to close credits
  document.getElementById('btn-return').addEventListener('click', returnToVoid);

  document.getElementById('credits-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'credits-overlay') {
      returnToVoid();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hasCracked) {
      returnToVoid();
    } else if ((e.key === 'c' || e.key === 'C' || e.key === 't' || e.key === 'T') && !hasCracked) {
      triggerHaptic([60, 40, 140]);
      shatterAndRevealCredits();
    }
  });

  // Direct URL Hash check (e.g. debadeba.in#team or debadeba.in#credits)
  if (window.location.hash === '#team' || window.location.hash === '#credits') {
    setTimeout(() => {
      shatterAndRevealCredits();
    }, 600);
  }
}

// 3D Shatter Effect & Reveal Credits
function shatterAndRevealCredits() {
  hasCracked = true;
  tapCount = 0;
  isPressing = false;

  // Hide solid 3D text
  if (wordGroup) {
    wordGroup.visible = false;
  }

  // Spawn 65 crystalline 3D shards
  const shardCount = 65;
  const shardGeoList = [
    new THREE.TetrahedronGeometry(0.35, 0),
    new THREE.ConeGeometry(0.3, 0.6, 4),
    new THREE.DodecahedronGeometry(0.28, 0),
    new THREE.BoxGeometry(0.4, 0.4, 0.2),
  ];

  const shardMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    emissive: 0x222222,
    roughness: 0.1,
    metalness: 0.1,
    clearcoat: 1.0,
    reflectivity: 1.0,
  });

  for (let i = 0; i < shardCount; i++) {
    const geo = shardGeoList[Math.floor(Math.random() * shardGeoList.length)];
    const mesh = new THREE.Mesh(geo, shardMat);

    // Initial position along the "DEBA DEBA" text area
    const posX = (Math.random() - 0.5) * cachedTotalWidth * 0.9;
    const posY = (Math.random() - 0.5) * 2.0;
    const posZ = (Math.random() - 0.5) * 0.5;

    mesh.position.set(posX, posY, posZ);

    // Explosive velocity outward towards camera and void
    const dirX = posX * 0.08 + (Math.random() - 0.5) * 0.4;
    const dirY = posY * 0.08 + (Math.random() - 0.5) * 0.4;
    const dirZ = (Math.random() * 0.7) + 0.35; // Explodes forward past camera

    mesh.userData = {
      vx: dirX,
      vy: dirY,
      vz: dirZ,
      rx: (Math.random() - 0.5) * 0.3,
      ry: (Math.random() - 0.5) * 0.3,
      rz: (Math.random() - 0.5) * 0.3,
    };

    scene.add(mesh);
    activeShards.push(mesh);
  }

  // Reveal Credits Overlay with staggered animation
  setTimeout(() => {
    const overlay = document.getElementById('credits-overlay');
    if (overlay) {
      overlay.classList.remove('hidden');
    }
  }, 350);
}

function updateShards() {
  for (let i = activeShards.length - 1; i >= 0; i--) {
    const s = activeShards[i];
    const u = s.userData;

    s.position.x += u.vx;
    s.position.y += u.vy;
    s.position.z += u.vz;

    s.rotation.x += u.rx;
    s.rotation.y += u.ry;
    s.rotation.z += u.rz;

    // Remove if flew far beyond camera
    if (s.position.z > 35) {
      scene.remove(s);
      activeShards.splice(i, 1);
    }
  }
}

function returnToVoid() {
  const overlay = document.getElementById('credits-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
  }

  // Clear all remaining shards
  activeShards.forEach((s) => scene.remove(s));
  activeShards = [];

  // Restore 3D text and re-zoom
  if (wordGroup) {
    wordGroup.visible = true;
  }
  hasCracked = false;
  isPressing = false;

  triggerZoom();
}

// Hypersonic exponential deceleration
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function animate(currentTime) {
  requestAnimationFrame(animate);

  if (textContainer && wordGroup) {
    if (isPressing && !hasCracked) {
      // Violent pre-crack shake & strain during long press
      const timeHeld = currentTime - pressStartTime;

      if (timeHeld > 120) {
        const progress = Math.min((timeHeld - 120) / (LONG_PRESS_DURATION - 120), 1);
        const intensity = Math.pow(progress, 2.0) * 0.42;

        textContainer.position.set(
          (Math.random() - 0.5) * intensity,
          (Math.random() - 0.5) * intensity,
          TARGET_Z + (Math.random() - 0.5) * intensity
        );
        textContainer.rotation.set(
          (Math.random() - 0.5) * intensity * 0.4,
          (Math.random() - 0.5) * intensity * 0.4,
          (Math.random() - 0.5) * intensity * 0.5
        );

        // Haptic feedback pulses as tension builds
        const currentStep = Math.floor(progress * 4);
        if (currentStep > lastVibrateStep) {
          lastVibrateStep = currentStep;
          triggerHaptic(20 + currentStep * 15);
        }

        if (progress >= 1) {
          triggerHaptic([60, 40, 140]);
          isPressing = false;
          shatterAndRevealCredits();
        }
      }
    } else if (isZooming && !hasCracked) {
      const elapsed = (currentTime - animStartTime) / 1000;
      const progress = Math.min(elapsed / ZOOM_DURATION, 1);
      const eased = easeOutExpo(progress);

      const currentZ = START_Z + (TARGET_Z - START_Z) * eased;
      textContainer.position.z = currentZ;

      const stretch = (1 - eased) * 1.4;
      textContainer.scale.z = 1 + stretch;

      if (starsMesh) {
        starsMesh.position.z = eased * 200;
      }

      if (progress >= 1) {
        isZooming = false;
        hasArrived = true;
        arrivalTime = currentTime;
        textContainer.position.z = TARGET_Z;
        textContainer.scale.z = 1;
      }
    } else if (hasArrived && !hasCracked) {
      const timeSinceArrival = (currentTime - arrivalTime) / 1000;

      if (timeSinceArrival < 0.28) {
        const shakeDecay = 1 - timeSinceArrival / 0.28;
        camera.position.z = CAM_BASE_Z + Math.sin(timeSinceArrival * 45) * 0.1 * shakeDecay;
      } else {
        camera.position.z = CAM_BASE_Z;
      }

      const t = currentTime * 0.001;
      textContainer.position.y = Math.sin(t * 1.5) * 0.06;
      textContainer.rotation.y = Math.cos(t * 1.0) * 0.015;
    }
  }

  // Update flying shatter shards
  updateShards();

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  adjustScale();
}

// Press-to-Reveal Photo Popup System
function setupPhotoReveal() {
  const popup = document.getElementById('photo-popup');
  const popupImg = document.getElementById('photo-popup-img');
  if (!popup || !popupImg) return;

  let activeTarget = null;

  function showPhoto(e) {
    const target = e.target.closest('[data-photo]');
    if (!target) return;

    const photoSrc = target.dataset.photo;
    if (!photoSrc) return;

    e.preventDefault();
    e.stopPropagation();

    const alreadyVisible = popup.classList.contains('visible');
    activeTarget = target;
    popupImg.src = photoSrc;

    // Position the popup next to the pressed element
    const rect = target.getBoundingClientRect();
    const popupSize = 106; // 100px + 6px border
    const gap = 12;

    // Try to place above the element, centered horizontally
    let left = rect.left + rect.width / 2 - popupSize / 2;
    let top = rect.top - popupSize - gap;

    // If it goes off the top, place below
    if (top < 8) {
      top = rect.bottom + gap;
    }

    // Clamp to viewport horizontally
    left = Math.max(8, Math.min(left, window.innerWidth - popupSize - 8));

    // Clamp to viewport vertically
    if (top + popupSize > window.innerHeight - 8) {
      top = rect.top - popupSize - gap;
    }

    // If already showing a photo, move instantly without animation
    if (alreadyVisible) {
      popup.style.transition = 'none';
    }

    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    popup.classList.add('visible');

    // Restore transition after instant reposition
    if (alreadyVisible) {
      void popup.offsetWidth; // force reflow
      popup.style.transition = '';
    }
  }

  function hidePhoto() {
    popup.classList.remove('visible');
    activeTarget = null;
  }

  // Attach to the credits overlay so it only works when credits are visible
  const creditsOverlay = document.getElementById('credits-overlay');
  if (!creditsOverlay) return;

  creditsOverlay.addEventListener('pointerdown', showPhoto);
  creditsOverlay.addEventListener('pointerup', hidePhoto);
  creditsOverlay.addEventListener('pointercancel', hidePhoto);
  creditsOverlay.addEventListener('pointerleave', hidePhoto);

  // Also hide on touch move (finger dragged away)
  creditsOverlay.addEventListener('touchend', hidePhoto);
}

// Start
init();
