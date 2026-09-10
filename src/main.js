import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// ==========================================================
// STATE & CONFIGURATION
// ==========================================================
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
let starsMaterial = null;

// Lighting References for Dynamic Mood Interpolation
let ambientLight, leftSoftbox, rightSoftbox, topRim, moodAuraLight;

// Audio System
let bgMusic = null;
let isMusicPlaying = false;
let audioCtx = null;

// Multi-Trigger Easter Egg & Physics State
let isPressing = false;
let pressStartTime = 0;
let tapCount = 0;
let lastTapTime = 0;
const LONG_PRESS_DURATION = 600; // 0.6s hold to crack
let lastVibrateStep = 0;
let hasCracked = false;
let lastHoldToastStep = 0;

// 3D Shards
let activeShards = [];

// Idle Tracker for Sassy Quips
let lastInteractionTime = performance.now();
let idleTimerInterval = null;

// ==========================================================
// THEMES & COLOR PALETTES
// ==========================================================
const THEMES = {
  obsidian: {
    name: 'Obsidian Void',
    badge: 'Void',
    icon: '🌑',
    accent: '#ffffff',
    bg: 0x000000,
    fog: 0x000000,
    ambientColor: 0xffffff,
    ambientIntensity: 0.9,
    leftColor: 0xffffff,
    leftIntensity: 1.8,
    rightColor: 0xffffff,
    rightIntensity: 1.8,
    topColor: 0xffffff,
    topIntensity: 1.4,
    auraColor: 0xffffff,
    auraIntensity: 1.5,
    textMat: {
      color: 0xffffff,
      emissive: 0x1f1f1f,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
    },
    starColor: 0xffffff,
    sassyQuote: 'Obsidian Void. Deep black, just like your dark humor.'
  },
  crimson: {
    name: 'Crimson Velvet',
    badge: 'Crimson',
    icon: '🍷',
    accent: '#ff3366',
    bg: 0x0c0104,
    fog: 0x120206,
    ambientColor: 0xffe5ec,
    ambientIntensity: 0.85,
    leftColor: 0xff3366,
    leftIntensity: 2.2,
    rightColor: 0x990033,
    rightIntensity: 2.0,
    topColor: 0xff6688,
    topIntensity: 1.6,
    auraColor: 0xff2255,
    auraIntensity: 3.2,
    textMat: {
      color: 0xffccd5,
      emissive: 0x330010,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 1.0,
    },
    starColor: 0xff7799,
    sassyQuote: 'Crimson Velvet. Spicy and dramatic. Don’t burn your fingers.'
  },
  cyber: {
    name: 'Cyber Amour',
    badge: 'Cyber',
    icon: '💜',
    accent: '#bd00ff',
    bg: 0x04010b,
    fog: 0x070212,
    ambientColor: 0xe0f7ff,
    ambientIntensity: 0.8,
    leftColor: 0x00e5ff,
    leftIntensity: 2.2,
    rightColor: 0xbd00ff,
    rightIntensity: 2.2,
    topColor: 0xff00cc,
    topIntensity: 1.6,
    auraColor: 0x9d00ff,
    auraIntensity: 3.0,
    textMat: {
      color: 0xf0f5ff,
      emissive: 0x1a0033,
      roughness: 0.12,
      metalness: 0.15,
      clearcoat: 1.0,
    },
    starColor: 0x00f0ff,
    sassyQuote: 'Cyber Amour. Neon club vibes! Way too cool for you.'
  },
  gold: {
    name: 'Liquid Gold',
    badge: 'Gold',
    icon: '⚜️',
    accent: '#e5b95f',
    bg: 0x080602,
    fog: 0x0f0b03,
    ambientColor: 0xfff8e7,
    ambientIntensity: 0.9,
    leftColor: 0xffe082,
    leftIntensity: 2.2,
    rightColor: 0xd49a37,
    rightIntensity: 2.0,
    topColor: 0xfff0b3,
    topIntensity: 1.6,
    auraColor: 0xffb74d,
    auraIntensity: 3.0,
    textMat: {
      color: 0xfff3d6,
      emissive: 0x2e1e05,
      roughness: 0.14,
      metalness: 0.35,
      clearcoat: 1.0,
    },
    starColor: 0xffe57f,
    sassyQuote: 'Liquid Gold. Look at you feeling rich with $0 in your bank account.'
  }
};

let currentThemeKey = 'obsidian';

// ==========================================================
// TEAM ROASTS & CHEEKY BIOS
// ==========================================================
const TEAM_MEMBERS = {
  sathwik: {
    name: 'Sathwik',
    role: 'Founder & Head of Drama',
    sound: 'goat',
    soundLabel: '🐐 Screaming Goat',
    realPhoto: '/team/sathwik.jpeg',
    sarcasticPhoto: '/team/sarcastic/sathwik.jpeg',
    roast: 'Built this whole website just to avoid replying to messages.'
  },
  sathesh: {
    name: 'Sathesh kumar',
    role: 'Chief Bug Creator',
    sound: 'cat',
    soundLabel: '🐱 Drama Cat',
    realPhoto: '/team/sathesh.png',
    sarcasticPhoto: '/team/sarcastic/sathesh.png',
    roast: 'Writes 2 lines of code, causes 15 errors, and blames the Wi-Fi.'
  },
  vamsi: {
    name: 'Vamsi',
    role: 'Non-Stop Yapper & Cringe Comedian 🎙️',
    sound: 'duck',
    soundLabel: '🦆 Sarcastic Quack',
    realPhoto: '/team/vamsi.jpeg',
    sarcasticPhoto: '/team/sarcastic/vamsi.jpeg',
    roast: 'Never shuts his mouth and tells the worst jokes in human history.\nEven the Wi-Fi disconnects just to escape his humor.'
  },
  ashwini: {
    name: 'Ashwini',
    role: 'Merge Conflict Queen',
    sound: 'chicken',
    soundLabel: '🐔 Panicking Chicken',
    realPhoto: '/team/ashwini.jpeg',
    sarcasticPhoto: '/team/sarcastic/ashwini.jpeg',
    roast: 'Tries to merge two simple branches, but by the end, the whole team has to fix both the code and her.'
  },
  viswanath: {
    name: 'viswanath',
    role: 'Simulation Lead & Demo Destroyer 💥',
    sound: 'owl',
    soundLabel: '🦉 Quantum Owl',
    realPhoto: '/team/viswanath.jpeg',
    sarcasticPhoto: '/team/sarcastic/viswanath.jpeg',
    roast: 'Spends weeks building simulations.\nCrashes the exact second the demo starts.'
  },
  steelbinde: {
    name: 'steel Binde',
    role: 'High BP & Salty Queen 🧂',
    sound: 'cow',
    soundLabel: '🐮 Grumpy Cow',
    realPhoto: '/team/steelbinde.jpeg',
    sarcasticPhoto: '/team/sarcastic/steelbinde.jpeg',
    roast: 'Eats extra salt just to stay angry. One tiny bug and her blood pressure shoots to outer space.'
  },
  aakash: {
    name: 'Aakash',
    role: 'Master of Procrastination',
    sound: 'monkey',
    soundLabel: '🐵 Chaotic Monkey',
    realPhoto: '/team/aakash.jpeg',
    sarcasticPhoto: '/team/sarcastic/aakash.jpeg',
    roast: 'Starts working 5 minutes before the deadline and calls it "passion".'
  },
  harshith: {
    name: 'harshith',
    role: 'Pixel Perfectionist (Blind) 🔍',
    sound: 'cat',
    soundLabel: '🐱 Blind Cat',
    realPhoto: '/team/harshith.jpeg',
    sarcasticPhoto: '/team/sarcastic/harshith.jpeg',
    roast: 'Spends 5 days adjusting a 1px border that nobody in the world will ever notice.'
  },
  harshitha: {
    name: 'Harshitha a women 💅',
    role: 'Tire Pressure Destroyer 🛞',
    sound: 'cow',
    soundLabel: '🐮 Heavy Duty Moo',
    realPhoto: '/team/harshitha.jpeg',
    sarcasticPhoto: '/team/sarcastic/harshitha.jpeg',
    roast: 'Google Maps doesn’t calculate her route…\nIt calculates the bridge load capacity 😂'
  },
  munisankar: {
    name: 'Muni sankar',
    role: 'Monaaa’s #1 Fan 💖',
    sound: 'frog',
    soundLabel: '🐸 Lovesick Frog',
    realPhoto: '/team/munisankar.jpeg',
    sarcasticPhoto: '/team/sarcastic/munisankar.jpeg',
    roast: 'Types code with one hand while writing love letters to Monaaa with the other.'
  },
  hemasri: {
    name: 'Hema sri',
    role: 'Sephora VIP Ambassador 💄',
    sound: 'lion',
    soundLabel: '🦁 Glamour Queen',
    realPhoto: '/team/hemasri.jpeg',
    sarcasticPhoto: '/team/sarcastic/hemasri.jpeg',
    roast: 'Spends 2 hours putting on makeup for a 3-minute meeting where everyone has their camera turned off.'
  }
};

// ==========================================================
// INITIALIZATION
// ==========================================================
function init() {
  const container = document.getElementById('canvas-container');

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(THEMES.obsidian.bg);
  scene.fog = new THREE.Fog(THEMES.obsidian.fog, 10, 750);

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

  // Lighting
  setupStudioLighting();

  // Speed Dust
  createSpeedDust();

  // Root container for zoom and physics
  textContainer = new THREE.Group();
  textContainer.position.set(0, 0, START_Z);
  scene.add(textContainer);

  // Typography
  loadTypography();

  // Audio System & Synthesizer
  setupAudio();

  // Interactions, Gestures & Easter Eggs
  setupInteractions();

  // Mood Palette Controls
  setupMoodControls();

  // Fluid Ribbon & Particle Trail Canvas
  setupFluidCanvas();

  // Photo Reveal with Sarcastic Bios
  setupPhotoReveal();

  // Office Roast: Secret Mission Game Engine
  setupOfficeRoastMission();

  // Sassy Whispers Toast Engine & Idle Watcher
  setupSassyEngine();

  // Start Animation Loop
  animStartTime = performance.now();
  requestAnimationFrame(animate);
}

// ==========================================================
// STUDIO LIGHTING SETUP
// ==========================================================
function setupStudioLighting() {
  const t = THEMES.obsidian;

  ambientLight = new THREE.AmbientLight(t.ambientColor, t.ambientIntensity);
  scene.add(ambientLight);

  leftSoftbox = new THREE.DirectionalLight(t.leftColor, t.leftIntensity);
  leftSoftbox.position.set(-10, 8, 18);
  scene.add(leftSoftbox);

  rightSoftbox = new THREE.DirectionalLight(t.rightColor, t.rightIntensity);
  rightSoftbox.position.set(10, 8, 18);
  scene.add(rightSoftbox);

  topRim = new THREE.DirectionalLight(t.topColor, t.topIntensity);
  topRim.position.set(0, 16, 4);
  scene.add(topRim);

  moodAuraLight = new THREE.PointLight(t.auraColor, t.auraIntensity, 35, 1.2);
  moodAuraLight.position.set(0, 0, 4);
  scene.add(moodAuraLight);
}

// ==========================================================
// SPEED DUST PARTICLES
// ==========================================================
function createSpeedDust() {
  const count = 400;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    pos[i] = (Math.random() - 0.5) * 45;
    pos[i + 1] = (Math.random() - 0.5) * 30;
    pos[i + 2] = -Math.random() * 650;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  starsMaterial = new THREE.PointsMaterial({
    color: THEMES.obsidian.starColor,
    size: 0.16,
    transparent: true,
    opacity: 0.45,
  });

  starsMesh = new THREE.Points(geo, starsMaterial);
  scene.add(starsMesh);
}

// ==========================================================
// 3D TYPOGRAPHY
// ==========================================================
function loadTypography() {
  const loader = new FontLoader();
  loader.load('/fonts/gentilis_bold.typeface.json', (font) => {
    const t = THEMES[currentThemeKey];

    textMaterial = new THREE.MeshPhysicalMaterial({
      color: t.textMat.color,
      emissive: t.textMat.emissive,
      roughness: t.textMat.roughness,
      metalness: t.textMat.metalness,
      clearcoat: t.textMat.clearcoat,
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

    const geo1 = new TextGeometry('DEBBA', textOptions);
    geo1.computeBoundingBox();
    geo1.computeVertexNormals();

    const geo2 = new TextGeometry('DEBBA', textOptions);
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

// ==========================================================
// DYNAMIC MOOD CONTROLLER
// ==========================================================
function applyTheme(themeKey, notify = true) {
  if (!THEMES[themeKey]) return;
  currentThemeKey = themeKey;
  const t = THEMES[themeKey];

  // Update HTML data-theme attribute for CSS styling
  document.body.setAttribute('data-theme', themeKey);

  // Update Mood Toggle Icon & Badge
  const moodIcon = document.getElementById('mood-icon');
  const moodBadge = document.getElementById('mood-badge');
  if (moodIcon) moodIcon.innerText = t.icon;
  if (moodBadge) moodBadge.innerText = t.badge;

  // Update Active Item in Mood Menu
  document.querySelectorAll('.mood-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.mood === themeKey);
  });

  // Three.js Scene Background & Fog
  if (scene) {
    scene.background.setHex(t.bg);
    scene.fog.color.setHex(t.fog);
  }

  // Three.js Lights
  if (ambientLight) {
    ambientLight.color.setHex(t.ambientColor);
    ambientLight.intensity = t.ambientIntensity;
  }
  if (leftSoftbox) {
    leftSoftbox.color.setHex(t.leftColor);
    leftSoftbox.intensity = t.leftIntensity;
  }
  if (rightSoftbox) {
    rightSoftbox.color.setHex(t.rightColor);
    rightSoftbox.intensity = t.rightIntensity;
  }
  if (topRim) {
    topRim.color.setHex(t.topColor);
    topRim.intensity = t.topIntensity;
  }
  if (moodAuraLight) {
    moodAuraLight.color.setHex(t.auraColor);
    moodAuraLight.intensity = t.auraIntensity;
  }

  // 3D Text Material
  if (textMaterial) {
    textMaterial.color.setHex(t.textMat.color);
    textMaterial.emissive.setHex(t.textMat.emissive);
    textMaterial.roughness = t.textMat.roughness;
    textMaterial.metalness = t.textMat.metalness;
    textMaterial.clearcoat = t.textMat.clearcoat;
  }

  // Speed Dust Particles
  if (starsMaterial) {
    starsMaterial.color.setHex(t.starColor);
  }

  if (notify) {
    showSassyToast(t.sassyQuote, 3000);
  }
}

function setupMoodControls() {
  const moodToggle = document.getElementById('mood-toggle');
  const moodMenu = document.getElementById('mood-menu');

  if (moodToggle && moodMenu) {
    moodToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      moodMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mood-option').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const moodKey = opt.dataset.mood;
        applyTheme(moodKey);
        moodMenu.classList.add('hidden');
      });
    });

    // Close menu when clicking outside
    window.addEventListener('click', (e) => {
      if (!e.target.closest('#mood-menu') && !e.target.closest('#mood-toggle')) {
        moodMenu.classList.add('hidden');
      }
    });
  }

  // Keyboard shortcut: 'M' switches through themes
  const themeKeys = Object.keys(THEMES);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'm' || e.key === 'M') {
      const curIdx = themeKeys.indexOf(currentThemeKey);
      const nextIdx = (curIdx + 1) % themeKeys.length;
      applyTheme(themeKeys[nextIdx]);
    }
  });
}

// ==========================================================
// AUDIO SYSTEM & WEB AUDIO HEARTBEAT SYNTHESIZER
// ==========================================================
function setupAudio() {
  bgMusic = new Audio('/Jump_Cut_Flip.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.65;

  const audioBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    initAudioContext();
    if (!isMusicPlaying) {
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        audioBtn.classList.remove('muted');
        audioIcon.innerText = '🎵';
        showSassyToast('Music on! Try not to dance too hard.', 2500);
      }).catch(() => {});
    } else {
      bgMusic.muted = !bgMusic.muted;
      if (bgMusic.muted) {
        audioBtn.classList.add('muted');
        audioIcon.innerText = '🔇';
        showSassyToast('Muted? Wow, you must be really fun at parties.', 2200);
      } else {
        audioBtn.classList.remove('muted');
        audioIcon.innerText = '🎵';
      }
    }
  });
}

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Sub-bass Heartbeat pulse synthesizer
function playHeartbeat(freq = 62, duration = 0.18, vol = 0.3) {
  try {
    initAudioContext();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (_) {}
}

// Procedural Sarcastic Animal Voice Synthesizer
function playAnimalSound(type) {
  try {
    initAudioContext();
    if (!audioCtx) return;

    const t = audioCtx.currentTime;

    if (type === 'goat') {
      // 🐐 Screaming Goat: High pitch wobble scream dropping down
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.linearRampToValueAtTime(620, t + 0.15);
      osc.frequency.exponentialRampToValueAtTime(260, t + 0.65);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(18, t);
      lfoGain.gain.setValueAtTime(45, t);
      lfo.connect(osc.frequency);
      lfo.start(t);
      lfo.stop(t + 0.65);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, t);
      filter.Q.setValueAtTime(3.5, t);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.linearRampToValueAtTime(0.45, t + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.65);

    } else if (type === 'cat') {
      // 🐱 Drama Cat Meow: Rising then falling pitch
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, t);
      osc.frequency.exponentialRampToValueAtTime(780, t + 0.22);
      osc.frequency.exponentialRampToValueAtTime(380, t + 0.55);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, t);
      filter.frequency.exponentialRampToValueAtTime(2100, t + 0.22);
      filter.frequency.exponentialRampToValueAtTime(650, t + 0.55);
      filter.Q.setValueAtTime(4.0, t);

      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.4, t + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.55);

    } else if (type === 'duck') {
      // 🦆 Sarcastic Double Quack
      const playQuackPulse = (offset, freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t + offset);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.7, t + offset + 0.14);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400, t + offset);
        filter.Q.setValueAtTime(5, t + offset);

        gain.gain.setValueAtTime(0.4, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.14);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + 0.14);
      };
      playQuackPulse(0, 260);
      playQuackPulse(0.16, 220);

    } else if (type === 'chicken') {
      // 🐔 Panicking Chicken Cluck
      const playCluck = (offset, startF, endF, dur) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(startF, t + offset);
        osc.frequency.exponentialRampToValueAtTime(endF, t + offset + dur);

        gain.gain.setValueAtTime(0.4, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + dur);
      };
      playCluck(0, 600, 320, 0.08);
      playCluck(0.1, 650, 340, 0.08);
      playCluck(0.22, 900, 420, 0.18);

    } else if (type === 'owl') {
      // 🦉 Silent Owl Hoot
      const playHoot = (offset, f, dur) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t + offset);
        osc.frequency.exponentialRampToValueAtTime(f * 0.85, t + offset + dur);

        gain.gain.setValueAtTime(0.01, t + offset);
        gain.gain.linearRampToValueAtTime(0.4, t + offset + dur * 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + dur);
      };
      playHoot(0, 280, 0.18);
      playHoot(0.24, 340, 0.45);

    } else if (type === 'cow') {
      // 🐮 Grumpy Cow Moo
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.linearRampToValueAtTime(135, t + 0.25);
      osc.frequency.exponentialRampToValueAtTime(80, t + 0.75);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, t);
      filter.frequency.linearRampToValueAtTime(750, t + 0.25);
      filter.frequency.exponentialRampToValueAtTime(250, t + 0.75);
      filter.Q.setValueAtTime(3.0, t);

      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.45, t + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.75);

    } else if (type === 'monkey') {
      // 🐵 Chaotic Monkey Chatter
      for (let i = 0; i < 4; i++) {
        const offset = i * 0.11;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(700 + i * 150, t + offset);
        osc.frequency.exponentialRampToValueAtTime(1400 + i * 100, t + offset + 0.08);

        gain.gain.setValueAtTime(0.3, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.08);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + 0.08);
      }

    } else if (type === 'pig') {
      // 🐷 Hungry Pig Snort
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(85, t + 0.35);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(38, t);
      lfoGain.gain.setValueAtTime(80, t);
      lfo.connect(osc.frequency);
      lfo.start(t);
      lfo.stop(t + 0.35);

      gain.gain.setValueAtTime(0.45, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.35);

    } else if (type === 'dolphin') {
      // 🐬 Sassy Dolphin Chirp
      for (let i = 0; i < 5; i++) {
        const offset = i * 0.08;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, t + offset);
        osc.frequency.exponentialRampToValueAtTime(3600, t + offset + 0.05);

        gain.gain.setValueAtTime(0.25, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.05);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + 0.05);
      }

    } else if (type === 'frog') {
      // 🐸 Sad Frog Ribbit
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(75, t + 0.45);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(28, t);
      lfoGain.gain.setValueAtTime(45, t);
      lfo.connect(osc.frequency);
      lfo.start(t);
      lfo.stop(t + 0.45);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(500, t);
      filter.Q.setValueAtTime(4, t);

      gain.gain.setValueAtTime(0.45, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.45);

    } else if (type === 'lion') {
      // 🦁 Boss Roar
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(75, t);
      osc.frequency.linearRampToValueAtTime(95, t + 0.2);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.65);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, t);
      filter.frequency.linearRampToValueAtTime(800, t + 0.25);
      filter.frequency.exponentialRampToValueAtTime(180, t + 0.65);
      filter.Q.setValueAtTime(4.5, t);

      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.5, t + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.65);
    }
  } catch (_) {}
}

function startMusicOnUserGesture() {
  initAudioContext();
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

// ==========================================================
// SASSY WHISPERS TOAST SYSTEM
// ==========================================================
let sassyTimeout = null;

function showSassyToast(message, duration = 3200) {
  const banner = document.getElementById('sassy-banner');
  const textEl = document.getElementById('sassy-text');
  if (!banner || !textEl) return;

  if (sassyTimeout) {
    clearTimeout(sassyTimeout);
  }

  textEl.innerText = message;
  banner.classList.remove('hidden');

  sassyTimeout = setTimeout(() => {
    banner.classList.add('hidden');
  }, duration);
}

function setupSassyEngine() {
  // Initial Arrival Toast
  setTimeout(() => {
    showSassyToast('Welcome! Try not to stare, it’s rude.', 3500);
  }, 1200);

  // Idle Sassy Quip Watcher (triggers if no interaction for 9s)
  const idleQuips = [
    'Are you asleep or just staring at a black screen for fun?',
    'Hello? Anyone home? Touch the screen already.',
    'Staring at this won’t fix your life problems, tap something!',
    'Did you freeze, or is your Wi-Fi as slow as you are?',
    'Don’t just sit there... poke the screen!'
  ];

  idleTimerInterval = setInterval(() => {
    if (!hasCracked && !isPressing && !isZooming) {
      const idleTime = performance.now() - lastInteractionTime;
      if (idleTime > 9000 && idleTime < 13000) {
        const randomQuip = idleQuips[Math.floor(Math.random() * idleQuips.length)];
        showSassyToast(randomQuip, 3200);
        lastInteractionTime = performance.now() - 14000; // avoid immediate repeat
      }
    }
  }, 3000);
}

function recordUserActivity() {
  lastInteractionTime = performance.now();
}

// ==========================================================
// FLUID SILK & TOUCH LIGHT TRAILS (2D GPU Canvas)
// ==========================================================
let fluidCanvas, fluidCtx;
let fluidPoints = [];
let fluidRipples = [];

function setupFluidCanvas() {
  fluidCanvas = document.getElementById('fluid-canvas');
  if (!fluidCanvas) return;
  fluidCtx = fluidCanvas.getContext('2d');

  function resizeFluid() {
    fluidCanvas.width = window.innerWidth;
    fluidCanvas.height = window.innerHeight;
  }
  resizeFluid();
  window.addEventListener('resize', resizeFluid);

  const addFluidPoint = (x, y) => {
    recordUserActivity();
    const t = THEMES[currentThemeKey];
    fluidPoints.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.5,
      radius: Math.random() * 8 + 6,
      alpha: 0.65,
      color: t.accent,
      decay: 0.02 + Math.random() * 0.015,
    });
    if (fluidPoints.length > 80) fluidPoints.shift();
  };

  window.addEventListener('pointermove', (e) => {
    if (e.buttons > 0 || Math.random() > 0.4) {
      addFluidPoint(e.clientX, e.clientY);
    }
  });

  window.addEventListener('pointerdown', (e) => {
    addFluidPoint(e.clientX, e.clientY);
    createRipple(e.clientX, e.clientY);
  });
}

function createRipple(x, y) {
  const t = THEMES[currentThemeKey];
  fluidRipples.push({
    x,
    y,
    radius: 5,
    maxRadius: 120,
    alpha: 0.7,
    color: t.accent,
    growth: 4.5,
  });
}

function renderFluidCanvas() {
  if (!fluidCtx || !fluidCanvas) return;
  fluidCtx.clearRect(0, 0, fluidCanvas.width, fluidCanvas.height);

  // Render Silky Particles
  for (let i = fluidPoints.length - 1; i >= 0; i--) {
    const p = fluidPoints[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.decay;

    if (p.alpha <= 0) {
      fluidPoints.splice(i, 1);
      continue;
    }

    fluidCtx.save();
    fluidCtx.beginPath();
    fluidCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    fluidCtx.fillStyle = p.color;
    fluidCtx.globalAlpha = p.alpha;
    fluidCtx.shadowBlur = 15;
    fluidCtx.shadowColor = p.color;
    fluidCtx.fill();
    fluidCtx.restore();
  }

  // Render Expanding Shockwave Ripples
  for (let i = fluidRipples.length - 1; i >= 0; i--) {
    const r = fluidRipples[i];
    r.radius += r.growth;
    r.alpha -= 0.022;

    if (r.alpha <= 0 || r.radius >= r.maxRadius) {
      fluidRipples.splice(i, 1);
      continue;
    }

    fluidCtx.save();
    fluidCtx.beginPath();
    fluidCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    fluidCtx.strokeStyle = r.color;
    fluidCtx.lineWidth = 2.5;
    fluidCtx.globalAlpha = r.alpha;
    fluidCtx.shadowBlur = 18;
    fluidCtx.shadowColor = r.color;
    fluidCtx.stroke();
    fluidCtx.restore();
  }
}

// ==========================================================
// TOUCH & GESTURE INTERACTIONS
// ==========================================================
function setupInteractions() {
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('contextmenu', (e) => e.preventDefault());

  let singleTapTimer = null;
  let holdStartTimer = null;

  window.addEventListener('pointerdown', (e) => {
    recordUserActivity();

    // Ignore clicks inside credits overlay card or control buttons
    if (e.target.closest('#credits-overlay') && !e.target.classList.contains('credits-overlay')) return;
    if (e.target.closest('.action-dock') || e.target.closest('#secret-trigger') || e.target.closest('#mood-menu')) return;

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

    // 1. DOUBLE TAP DETECTED -> SHATTER
    if (tapCount >= 2) {
      if (singleTapTimer) clearTimeout(singleTapTimer);
      if (holdStartTimer) clearTimeout(holdStartTimer);
      tapCount = 0;
      isPressing = false;
      triggerHaptic([60, 40, 140]);
      playHeartbeat(85, 0.25, 0.6);
      showSassyToast('Double tap! Someone is aggressive today.', 2500);
      shatterAndRevealCredits();
      return;
    }

    // 2. LONG PRESS PRE-HOLD TIMER
    if (holdStartTimer) clearTimeout(holdStartTimer);
    isPressing = false;
    pressStartTime = now;
    lastVibrateStep = 0;
    lastHoldToastStep = 0;

    holdStartTimer = setTimeout(() => {
      if (!hasCracked && tapCount === 1) {
        isPressing = true;
        pressStartTime = performance.now();
        lastVibrateStep = 0;
        lastHoldToastStep = 0;
        playHeartbeat(58, 0.2, 0.35);
        showSassyToast('Ooh, getting brave... keep holding!', 2000);
      }
    }, 420);
  });

  const handlePointerEnd = () => {
    recordUserActivity();

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

    // If we were holding and released before crack
    if (wasPressing && !hasCracked) {
      if (textContainer) {
        textContainer.position.set(0, 0, TARGET_Z);
        textContainer.rotation.set(0, 0, 0);
      }
      showSassyToast('Letting go already? Weak.', 2000);
      return;
    }

    // Quick single tap
    if (duration < 500 && tapCount === 1 && !isZooming) {
      if (singleTapTimer) clearTimeout(singleTapTimer);
      singleTapTimer = setTimeout(() => {
        if (tapCount === 1 && !isPressing && !hasCracked) {
          triggerZoom();
          const singleTapQuips = [
            'Is that all you got? My grandma taps harder than that.',
            'Why are you poking me? Hold it down!',
            'That tickles. Press harder or go home.',
            'Stop tapping like a bird and hold the screen!'
          ];
          showSassyToast(singleTapQuips[Math.floor(Math.random() * singleTapQuips.length)], 2800);
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
      recordUserActivity();
      triggerHaptic([60, 40, 140]);
      playHeartbeat(80, 0.25, 0.5);
      showSassyToast('Look at you, clicking secret buttons like a hacker.', 2500);
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

  // Cheat Code Buffer & Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key.length === 1) {
      cheatBuffer += e.key.toLowerCase();
      if (cheatBuffer.length > 15) {
        cheatBuffer = cheatBuffer.slice(-15);
      }

      const cheatTriggers = ['roast', 'meme', 'spicy', 'debba', 'cheat', 'troll', '69'];
      if (cheatTriggers.some(trigger => cheatBuffer.endsWith(trigger)) || e.key.toLowerCase() === 'x' || e.key.toLowerCase() === 'r') {
        cheatBuffer = '';
        toggleMemeMode();
        return;
      }
    }

    if (e.key === 'Escape' && hasCracked) {
      returnToVoid();
    } else if ((e.key === 'c' || e.key === 'C' || e.key === 't' || e.key === 'T') && !hasCracked) {
      recordUserActivity();
      triggerHaptic([60, 40, 140]);
      playHeartbeat(80, 0.25, 0.5);
      showSassyToast('Keyboard shortcuts? Look at mister fancy pants.', 2500);
      shatterAndRevealCredits();
    }
  });

  // Triple Click on Founder to Toggle Sarcastic Meme Mode
  let founderClickCount = 0;
  let lastFounderClickTime = 0;
  const founderName = document.querySelector('.founder-name');
  const founderTag = document.querySelector('.founder-tag');
  [founderName, founderTag].forEach((el) => {
    if (el) {
      el.addEventListener('click', () => {
        const now = performance.now();
        if (now - lastFounderClickTime < 450) {
          founderClickCount++;
          if (founderClickCount >= 3) {
            founderClickCount = 0;
            toggleMemeMode();
          }
        } else {
          founderClickCount = 1;
        }
        lastFounderClickTime = now;
      });
    }
  });

  // Direct URL Hash check (e.g. debadeba.in#team or debadeba.in#meme)
  if (window.location.hash.includes('meme') || window.location.hash.includes('roast') || window.location.hash.includes('spicy')) {
    setTimeout(() => {
      toggleMemeMode(true);
      if (!hasCracked) shatterAndRevealCredits();
    }, 600);
  } else if (window.location.hash === '#team' || window.location.hash === '#credits') {
    setTimeout(() => {
      shatterAndRevealCredits();
    }, 600);
  }
}

// ==========================================================
// 3D SHATTER EFFECT & REVEAL CREDITS
// ==========================================================
function shatterAndRevealCredits() {
  hasCracked = true;
  tapCount = 0;
  isPressing = false;

  if (wordGroup) {
    wordGroup.visible = false;
  }

  const t = THEMES[currentThemeKey];

  // Spawn 65 crystalline 3D shards with current theme material
  const shardCount = 65;
  const shardGeoList = [
    new THREE.TetrahedronGeometry(0.35, 0),
    new THREE.ConeGeometry(0.3, 0.6, 4),
    new THREE.DodecahedronGeometry(0.28, 0),
    new THREE.BoxGeometry(0.4, 0.4, 0.2),
  ];

  const shardMat = new THREE.MeshPhysicalMaterial({
    color: t.textMat.color,
    emissive: t.textMat.emissive,
    roughness: 0.1,
    metalness: 0.2,
    clearcoat: 1.0,
    reflectivity: 1.0,
  });

  for (let i = 0; i < shardCount; i++) {
    const geo = shardGeoList[Math.floor(Math.random() * shardGeoList.length)];
    const mesh = new THREE.Mesh(geo, shardMat);

    const posX = (Math.random() - 0.5) * cachedTotalWidth * 0.9;
    const posY = (Math.random() - 0.5) * 2.0;
    const posZ = (Math.random() - 0.5) * 0.5;

    mesh.position.set(posX, posY, posZ);

    const dirX = posX * 0.08 + (Math.random() - 0.5) * 0.4;
    const dirY = posY * 0.08 + (Math.random() - 0.5) * 0.4;
    const dirZ = (Math.random() * 0.7) + 0.35;

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

  showSassyToast('Great, you broke it. Hope your mom is proud.', 3500);

  // Reveal Credits Overlay
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

    if (s.position.z > 35) {
      scene.remove(s);
      activeShards.splice(i, 1);
    }
  }
}

function returnToVoid() {
  recordUserActivity();
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

  const returnQuips = [
    'Back already? Missed me that much?',
    'You couldn’t stay away, could you?',
    'Resetting everything because you asked so nicely.'
  ];
  showSassyToast(returnQuips[Math.floor(Math.random() * returnQuips.length)], 3200);
}

// Hypersonic exponential deceleration
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

// ==========================================================
// ANIMATION LOOP
// ==========================================================
function animate(currentTime) {
  requestAnimationFrame(animate);

  if (textContainer && wordGroup) {
    if (isPressing && !hasCracked) {
      const timeHeld = currentTime - pressStartTime;

      if (timeHeld > 120) {
        const progress = Math.min((timeHeld - 120) / (LONG_PRESS_DURATION - 120), 1);
        const intensity = Math.pow(progress, 2.0) * 0.45;

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

        // Haptic & Synthesized Audio Heartbeat Tension Pulses
        const currentStep = Math.floor(progress * 5);
        if (currentStep > lastVibrateStep) {
          lastVibrateStep = currentStep;
          triggerHaptic(20 + currentStep * 15);
          playHeartbeat(55 + currentStep * 10, 0.14, 0.25 + currentStep * 0.08);
        }

        // Sassy hold-tension whispers
        if (progress > 0.65 && lastHoldToastStep === 0) {
          lastHoldToastStep = 1;
          showSassyToast('Hold tight! It’s gonna blow!', 1800);
        }

        if (progress >= 1) {
          triggerHaptic([60, 40, 140]);
          playHeartbeat(90, 0.3, 0.65);
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

      // Sultry rhythmic breathing & gentle floating oscillation
      const t = currentTime * 0.001;
      textContainer.position.y = Math.sin(t * 1.5) * 0.06;
      textContainer.rotation.y = Math.cos(t * 1.0) * 0.015;

      // Subtle dynamic aura pulse
      if (moodAuraLight) {
        const theme = THEMES[currentThemeKey];
        moodAuraLight.intensity = theme.auraIntensity + Math.sin(t * 2.5) * 0.4;
      }
    }
  }

  // Update flying shatter shards
  updateShards();

  // Render 3D Scene
  renderer.render(scene, camera);

  // Render 2D Fluid Silk Trails & Shockwaves
  renderFluidCanvas();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  adjustScale();
}

// ==========================================================
// MEME MODE CHEAT ENGINE & PHOTO REVEAL SYSTEM
// ==========================================================
let isMemeMode = false;
let cheatBuffer = '';
let currentActiveMemberKey = null;

function toggleMemeMode(forcedState = null) {
  isMemeMode = (forcedState !== null) ? forcedState : !isMemeMode;
  document.body.classList.toggle('meme-mode', isMemeMode);

  if (isMemeMode) {
    showSassyToast('🔥 CHEAT UNLOCKED: Sarcastic Meme Mode Active! Tap photos to flip.', 3800);
    playAnimalSound('monkey');
    triggerHaptic([50, 50, 100]);
  } else {
    showSassyToast('😇 Normal Real Photos Restored.', 2500);
    triggerHaptic([40]);
  }

  // If a popup card is currently open, refresh the photo with 3D flip animation
  if (currentActiveMemberKey && TEAM_MEMBERS[currentActiveMemberKey]) {
    const memberData = TEAM_MEMBERS[currentActiveMemberKey];
    const popupImg = document.getElementById('photo-popup-img');
    const avatarWrapper = document.querySelector('.photo-avatar-wrapper');

    if (popupImg && avatarWrapper) {
      avatarWrapper.classList.add('flipping');
      setTimeout(() => {
        const nextSrc = isMemeMode ? memberData.sarcasticPhoto : memberData.realPhoto;
        popupImg.src = nextSrc;
        popupImg.onerror = () => { popupImg.src = memberData.realPhoto; };
        setTimeout(() => avatarWrapper.classList.remove('flipping'), 200);
      }, 150);
    }
  }
}

function setupPhotoReveal() {
  const popup = document.getElementById('photo-popup');
  const popupImg = document.getElementById('photo-popup-img');
  const popupName = document.getElementById('photo-popup-name');
  const popupRole = document.getElementById('photo-popup-role');
  const popupRoast = document.getElementById('photo-popup-roast');
  const avatarWrapper = document.querySelector('.photo-avatar-wrapper');

  if (!popup || !popupImg) return;

  // Clicking directly on the avatar in the popup flips between real and sarcastic photo!
  if (avatarWrapper) {
    avatarWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleMemeMode();
    });
  }

  function showPhoto(e) {
    recordUserActivity();
    const target = e.target.closest('[data-photo]');
    if (!target) return;

    const memberKey = target.dataset.member || 'sathwik';
    currentActiveMemberKey = memberKey;
    const memberData = TEAM_MEMBERS[memberKey] || {
      name: target.innerText || 'Team Member',
      role: 'Mystery Prodigy',
      sound: 'goat',
      soundLabel: '🐐 Mystery Beast',
      realPhoto: target.dataset.photo || '/team/sathwik.jpeg',
      sarcasticPhoto: '/team/sarcastic/' + (target.dataset.member || 'sathwik') + '.jpeg',
      roast: 'Too mysterious to roast. Or just hiding from bugs.'
    };

    e.preventDefault();
    e.stopPropagation();

    // Select Real vs Sarcastic Meme Photo based on Cheat Code State
    const targetPhoto = isMemeMode ? memberData.sarcasticPhoto : memberData.realPhoto;
    popupImg.src = targetPhoto;
    popupImg.onerror = () => { popupImg.src = memberData.realPhoto; }; // Graceful fallback

    if (popupName) popupName.innerText = memberData.name;
    if (popupRole) popupRole.innerText = memberData.role;
    if (popupRoast) popupRoast.innerText = `“${memberData.roast}”`;

    // Play funny sarcastic animal voice
    if (memberData.sound) {
      playAnimalSound(memberData.sound);
    }
    triggerHaptic(40);

    // Position the luxury card near the element
    const rect = target.getBoundingClientRect();
    const popupWidth = 320;
    const popupHeight = 110;
    const gap = 14;

    let left = rect.left + rect.width / 2 - popupWidth / 2;
    let top = rect.top - popupHeight - gap;

    if (top < 12) {
      top = rect.bottom + gap;
    }

    left = Math.max(12, Math.min(left, window.innerWidth - popupWidth - 12));
    if (top + popupHeight > window.innerHeight - 12) {
      top = rect.top - popupHeight - gap;
    }

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    popup.classList.add('visible');
  }

  function hidePhoto() {
    popup.classList.remove('visible');
  }

  const creditsOverlay = document.getElementById('credits-overlay');
  if (!creditsOverlay) return;

  creditsOverlay.addEventListener('pointerdown', showPhoto);
  creditsOverlay.addEventListener('pointerup', hidePhoto);
  creditsOverlay.addEventListener('pointercancel', hidePhoto);
  creditsOverlay.addEventListener('pointerleave', hidePhoto);
  creditsOverlay.addEventListener('touchend', hidePhoto);

  // Desktop hover triggers
  document.querySelectorAll('[data-photo]').forEach((el) => {
    el.addEventListener('mouseenter', showPhoto);
    el.addEventListener('mouseleave', hidePhoto);
  });
}

// ==========================================================
// 🕵️ LEVEL 1, 2, 3 TROLL PLATFORMER & OFFICE ROAST ENGINE
// ==========================================================
function setupOfficeRoastMission() {
  const pixelBtn = document.getElementById('suspicious-pixel');
  const overlay = document.getElementById('mission-overlay');
  const closeBtn = document.getElementById('mission-close-btn');
  const stageBox = document.getElementById('mission-stage-box');

  if (!pixelBtn || !overlay || !stageBox) return;

  let currentLevel = 1;
  let deathsCount = 0;
  let gameRunning = false;
  let gameAnimId = null;
  let currentShowcaseMemberIndex = 0;
  const memberKeys = Object.keys(TEAM_MEMBERS);

  // Audio Synthesizers
  function playSound(type) {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;

      if (type === 'jump') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(160, t);
        osc.frequency.exponentialRampToValueAtTime(480, t + 0.1);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.1);
      } else if (type === 'die') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(60, t + 0.28);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.28);
      } else if (type === 'spring') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, t);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.25);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.25);
      } else if (type === 'troll') {
        [220, 180, 140].forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, t + i * 0.08);
          gain.gain.setValueAtTime(0.2, t + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 0.1);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(t + i * 0.08);
          osc.stop(t + i * 0.08 + 0.1);
        });
      } else if (type === 'win') {
        [330, 392, 523, 659].forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t + i * 0.1);
          gain.gain.setValueAtTime(0.25, t + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.2);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(t + i * 0.1);
          osc.stop(t + i * 0.1 + 0.2);
        });
      } else if (type === 'alarm') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(450, t);
        osc.frequency.linearRampToValueAtTime(900, t + 0.2);
        osc.frequency.linearRampToValueAtTime(450, t + 0.4);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.45);
      }
    } catch (_) {}
  }

  function openMission() {
    recordUserActivity();
    deathsCount = 0;
    currentLevel = 1;
    overlay.classList.remove('hidden');
    playSound('jump');
    showSassyToast('🕵️ MISSION INITIATED: Good luck, you will need it.', 3000);
    startPlatformerGame();
  }

  function closeMission() {
    overlay.classList.add('hidden');
    gameRunning = false;
    if (gameAnimId) cancelAnimationFrame(gameAnimId);
  }

  pixelBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openMission();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMission);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeMission();
    }
  });

  // ========================================================
  // 🎮 2D PLATFORMER CORE ENGINE
  // ========================================================
  function startPlatformerGame() {
    stageBox.innerHTML = `
      <div class="troll-game-wrapper">
        <div class="troll-hud">
          <div class="troll-level-title">
            <span class="troll-level-pill" id="troll-level-pill">LEVEL ${currentLevel}</span>
            <span id="troll-level-name">“JUST WALK”</span>
          </div>
          <div class="troll-stats">
            <span class="troll-deaths" id="troll-deaths">💀 Fails: 0</span>
            <button class="troll-retry-btn" id="troll-retry-btn">🔄 Retry (R)</button>
          </div>
        </div>

        <div class="troll-canvas-container" id="troll-canvas-box">
          <canvas id="troll-game-canvas" width="680" height="340"></canvas>
          <div id="troll-banner-slot"></div>
        </div>

        <div class="troll-controls-bar">
          <span class="troll-keys-hint">Move: <b>← → / A D</b> | Jump: <b>SPACE / ↑ / W</b></span>
          <div class="troll-dpad-group">
            <button class="troll-ctrl-btn" id="btn-left">◀</button>
            <button class="troll-ctrl-btn" id="btn-right">▶</button>
            <button class="troll-ctrl-btn troll-jump-btn" id="btn-jump">⬆ JUMP</button>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('troll-game-canvas');
    const ctx = canvas.getContext('2d');
    const deathsEl = document.getElementById('troll-deaths');
    const levelPill = document.getElementById('troll-level-pill');
    const levelName = document.getElementById('troll-level-name');
    const bannerSlot = document.getElementById('troll-banner-slot');
    const retryBtn = document.getElementById('troll-retry-btn');

    const keys = { left: false, right: false, jump: false };
    let player = {
      x: 40, y: 230, vx: 0, vy: 0,
      w: 18, h: 28, isGrounded: false,
      coyote: 0, facing: 1, anim: 0,
      isDying: false
    };

    let levelData = {};
    let particles = [];
    let floatingTexts = [];

    const levelTitles = {
      1: { name: '“JUST WALK”', sub: 'Easy, right? Just walk to the exit.' },
      2: { name: '“TRUST NOTHING”', sub: 'Trust issues guaranteed.' },
      3: { name: '“THE EMPLOYEE TEST” 💀', sub: 'The ultimate corporate gauntlet.' }
    };

    function loadLevel(lvl) {
      currentLevel = lvl;
      if (levelPill) levelPill.innerText = `LEVEL ${lvl}`;
      if (levelName) levelName.innerText = levelTitles[lvl].name;
      particles = [];
      floatingTexts = [];
      player.isDying = false;

      if (lvl === 1) {
        player.x = 40; player.y = 230; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            { x: 20, y: 280, w: 100, h: 22, type: 'normal' },
            { x: 160, y: 280, w: 85, h: 22, type: 'disappear', vanished: false, flash: 0 },
            { x: 280, y: 250, w: 80, h: 22, type: 'falling', triggered: false, vy: 0 },
            { x: 220, y: 180, w: 60, h: 18, type: 'normal' },
            { x: 380, y: 200, w: 80, h: 18, type: 'normal' },
            { x: 500, y: 260, w: 160, h: 24, type: 'normal' }
          ],
          door: { x: 550, y: 220, w: 26, h: 40, targetX: 550, moved: false },
          traps: []
        };
      } else if (lvl === 2) {
        player.x = 35; player.y = 230; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            { x: 15, y: 280, w: 80, h: 22, type: 'normal' },
            { x: 110, y: 280, w: 100, h: 22, type: 'fake_floor', triggered: false, vy: 0 },
            { x: 140, y: 205, w: 65, h: 18, type: 'invisible', revealed: false },
            { x: 240, y: 210, w: 70, h: 18, type: 'normal' },
            { x: 340, y: 150, w: 65, h: 18, type: 'normal' },
            { x: 450, y: 120, w: 70, h: 18, type: 'normal' },
            { x: 580, y: 140, w: 85, h: 20, type: 'normal' }
          ],
          spring: { x: 265, y: 196, w: 24, h: 14, label: 'FREE COFFEE ☕' },
          fakeCheckpoint: { x: 360, y: 122, w: 26, h: 28, triggered: false, label: '💾 CHECKPOINT SAVED!' },
          fakeDoor: { x: 470, y: 80, w: 26, h: 40, label: 'EXIT 🚪' },
          realDoor: { x: 620, y: 100, w: 26, h: 40, isReal: true },
          traps: []
        };
      } else if (lvl === 3) {
        player.x = 35; player.y = 230; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            { x: 15, y: 280, w: 80, h: 22, type: 'normal' },
            { x: 130, y: 250, w: 75, h: 18, type: 'moving', vx: 1.5, minX: 120, maxX: 230 },
            { x: 260, y: 210, w: 75, h: 18, type: 'normal' },
            { x: 370, y: 170, w: 80, h: 18, type: 'moving', vx: -1.5, minX: 340, maxX: 470 },
            { x: 490, y: 220, w: 90, h: 18, type: 'normal' },
            { x: 210, y: 130, w: 70, h: 18, type: 'normal' },
            { x: 570, y: 150, w: 90, h: 20, type: 'normal' }
          ],
          target: {
            x: 520, y: 190, w: 24, h: 24, vx: 0,
            speech: 'Catch me for appraisal! 📈',
            timer: 0
          }
        };
      }
    }

    function addFloatingText(text, x, y, color = '#ff3366') {
      floatingTexts.push({ text, x, y, vy: -1.2, alpha: 1.0, color });
    }

    function spawnDeathParticles(x, y) {
      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = 2 + Math.random() * 4;
        particles.push({
          x, y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          life: 1.0,
          color: Math.random() > 0.5 ? '#ff3366' : '#ffffff'
        });
      }
    }

    function killPlayer(reason = 'Skill issue.') {
      if (player.isDying) return;
      player.isDying = true;
      deathsCount++;
      if (deathsEl) deathsEl.innerText = `💀 Fails: ${deathsCount}`;
      playSound('die');
      triggerHaptic([80, 50, 100]);
      spawnDeathParticles(player.x + player.w / 2, player.y + player.h / 2);
      addFloatingText(reason, player.x, Math.max(30, player.y - 10), '#ff3366');

      // Instant quick respawn
      setTimeout(() => {
        loadLevel(currentLevel);
      }, 200);
    }

    function completeLevel(lvl) {
      playSound('win');
      triggerHaptic([60, 40, 120]);

      if (lvl === 1) {
        bannerSlot.innerHTML = `
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 1 PASSED 🎉</div>
            <div class="troll-banner-sub">“That was the easy level. 😂”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 2: Trust Nothing →</button>
          </div>
        `;
        document.getElementById('next-lvl-btn').addEventListener('click', () => {
          bannerSlot.innerHTML = '';
          loadLevel(2);
        });
      } else if (lvl === 2) {
        bannerSlot.innerHTML = `
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 2 PASSED 🧠</div>
            <div class="troll-banner-sub">“Okay… you're getting suspicious.”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 3: The Employee Test 💀 →</button>
          </div>
        `;
        document.getElementById('next-lvl-btn').addEventListener('click', () => {
          bannerSlot.innerHTML = '';
          loadLevel(3);
        });
      } else if (lvl === 3) {
        // Grand Finale Climax!
        triggerClimaxRoastSequence();
      }
    }

    function triggerClimaxRoastSequence() {
      gameRunning = false;
      playSound('alarm');
      triggerHaptic([100, 50, 100, 50, 200]);

      stageBox.innerHTML = `
        <div class="hacker-terminal" style="max-width: 520px; width: 100%; margin: 1rem 0;">
          <div style="color: #ff3366; font-weight: bold; margin-bottom: 0.6rem; font-size: 1rem;">
            🚨 SYSTEM OVERRIDE: THE EMPLOYEE TEST PASSED!
          </div>
          <div id="climax-logs" class="terminal-logs" style="min-height: 140px;"></div>
        </div>
      `;

      const logsEl = document.getElementById('climax-logs');
      const climaxSteps = [
        { text: '> 🚨 EMPLOYEE IDENTIFIED.', delay: 400 },
        { text: '> 🔍 RUNNING BACKGROUND CHECK…', delay: 1000 },
        { text: '> 📉 CHECKING PRODUCTIVITY… (0.0001%)', delay: 1600 },
        { text: '> 📁 CHECKING WORK HISTORY…', delay: 2200 },
        { text: '> 🔥 ROAST DATABASE UNLOCKED.', delay: 2800 },
        { text: '> 🔓 OFFICE ROAST MODE ACTIVATED! 😂', delay: 3400, isFinal: true }
      ];

      climaxSteps.forEach((step) => {
        setTimeout(() => {
          if (!logsEl) return;
          playSound('jump');
          const row = document.createElement('div');
          row.className = `terminal-log-item ${step.isFinal ? 'terminal-log-error' : ''}`;
          row.innerText = step.text;
          logsEl.appendChild(row);

          if (step.isFinal) {
            triggerHaptic([100, 100, 250]);
            setTimeout(renderFinalSarcasticShowcase, 1600);
          }
        }, step.delay);
      });
    }

    function renderFinalSarcasticShowcase() {
      toggleMemeMode(true); // Unlock meme mode globally!
      playSound('win');

      function updateShowcaseCard() {
        const key = memberKeys[currentShowcaseMemberIndex];
        const member = TEAM_MEMBERS[key];
        const imgEl = document.getElementById('showcase-img');
        const nameEl = document.getElementById('showcase-name');
        const roleEl = document.getElementById('showcase-role');
        const roastEl = document.getElementById('showcase-roast');
        const pillEl = document.getElementById('showcase-index');

        if (imgEl && member) {
          imgEl.src = member.sarcasticPhoto;
          imgEl.onerror = () => { imgEl.src = member.realPhoto; };
        }
        if (nameEl && member) nameEl.innerText = member.name;
        if (roleEl && member) roleEl.innerText = member.role;
        if (roastEl && member) roastEl.innerText = `“${member.roast}”`;
        if (pillEl) pillEl.innerText = `${currentShowcaseMemberIndex + 1} / ${memberKeys.length}`;

        if (member && member.sound) {
          playAnimalSound(member.sound);
        }
      }

      stageBox.innerHTML = `
        <div class="secret-unlocked-card">
          <div class="unlocked-trophy">📸 🏆</div>
          <div class="mission-title" style="color: #ff3366;">OFFICE ROAST MODE ACTIVATED</div>
          <div class="mission-desc" style="color: #fff; font-size: 0.95rem; margin-bottom: 0.6rem;">
            “Congratulations. You wasted company time and unlocked everyone's roast.”
          </div>

          <div class="sarcastic-showcase-box">
            <div class="showcase-avatar-frame">
              <img id="showcase-img" class="showcase-avatar-img" src="" alt="Sarcastic Roast" />
            </div>
            <div class="showcase-member-name" id="showcase-name">Sathwik</div>
            <div class="showcase-member-role" id="showcase-role">Head of Drama</div>
            <div class="showcase-member-roast" id="showcase-roast">“Roast content”</div>

            <div class="showcase-nav-row">
              <button id="showcase-prev-btn" class="showcase-nav-btn" title="Previous Victim">←</button>
              <span id="showcase-index" class="showcase-index-pill">1 / 11</span>
              <button id="showcase-next-btn" class="showcase-nav-btn" title="Next Victim">→</button>
            </div>
          </div>

          <button id="btn-reset-reality" class="btn-reset-reality">
            <span>🔄 Return to Normal Reality</span>
          </button>
        </div>
      `;

      updateShowcaseCard();

      const prevBtn = document.getElementById('showcase-prev-btn');
      const nextBtn = document.getElementById('showcase-next-btn');
      const resetRealityBtn = document.getElementById('btn-reset-reality');

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          recordUserActivity();
          currentShowcaseMemberIndex = (currentShowcaseMemberIndex - 1 + memberKeys.length) % memberKeys.length;
          updateShowcaseCard();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          recordUserActivity();
          currentShowcaseMemberIndex = (currentShowcaseMemberIndex + 1) % memberKeys.length;
          updateShowcaseCard();
        });
      }

      if (resetRealityBtn) {
        resetRealityBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          recordUserActivity();
          toggleMemeMode(false);
          closeMission();
          showSassyToast('😇 Normal Real Photos Restored.', 3000);
        });
      }
    }

    // Input Handlers
    function handleKeyDown(e) {
      if (!gameRunning) return;
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.left = true;
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.right = true;
      if (['ArrowUp', 'w', 'W', ' ', 'Spacebar'].includes(e.key)) {
        e.preventDefault();
        keys.jump = true;
      }
      if (e.key === 'r' || e.key === 'R') loadLevel(currentLevel);
    }

    function handleKeyUp(e) {
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.left = false;
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.right = false;
      if (['ArrowUp', 'w', 'W', ' ', 'Spacebar'].includes(e.key)) keys.jump = false;
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // On-screen touch buttons
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnJump = document.getElementById('btn-jump');

    if (btnLeft) {
      btnLeft.addEventListener('pointerdown', () => keys.left = true);
      btnLeft.addEventListener('pointerup', () => keys.left = false);
      btnLeft.addEventListener('pointerleave', () => keys.left = false);
    }
    if (btnRight) {
      btnRight.addEventListener('pointerdown', () => keys.right = true);
      btnRight.addEventListener('pointerup', () => keys.right = false);
      btnRight.addEventListener('pointerleave', () => keys.right = false);
    }
    if (btnJump) {
      btnJump.addEventListener('pointerdown', () => keys.jump = true);
      btnJump.addEventListener('pointerup', () => keys.jump = false);
      btnJump.addEventListener('pointerleave', () => keys.jump = false);
    }
    if (retryBtn) {
      retryBtn.addEventListener('click', () => loadLevel(currentLevel));
    }
    if (canvas) {
      canvas.addEventListener('click', () => {
        if (player.isDying) loadLevel(currentLevel);
      });
    }

    // ========================================================
    // MAIN GAME LOOP (Physics & Render)
    // ========================================================
    loadLevel(1);
    gameRunning = true;

    function gameLoop() {
      if (!gameRunning) return;

      if (!player.isDying) {
        // 1. Horizontal Movement
        const targetVx = (keys.right ? 3.6 : 0) - (keys.left ? 3.6 : 0);
        player.vx = player.vx * 0.7 + targetVx * 0.3;
        if (Math.abs(targetVx) > 0.1) {
          player.facing = targetVx > 0 ? 1 : -1;
          player.anim += 0.25;
        } else {
          player.anim = 0;
        }

        // 2. Vertical Movement & Gravity
        player.vy += 0.42;
        if (player.vy > 9.5) player.vy = 9.5;

        if (player.isGrounded) {
          player.coyote = 5;
        } else if (player.coyote > 0) {
          player.coyote--;
        }

        if (keys.jump && player.coyote > 0) {
          player.vy = -8.8;
          player.coyote = 0;
          player.isGrounded = false;
          playSound('jump');
        }

        // Apply Movement & Collision
        player.x += player.vx;
        player.y += player.vy;
        player.isGrounded = false;

        // Platform Collisions & Traps
        if (levelData.platforms) {
          levelData.platforms.forEach((p) => {
            if (p.type === 'moving') {
              p.x += p.vx;
              if (p.x <= p.minX || p.x >= p.maxX) p.vx *= -1;
            }

            if (p.type === 'falling' && p.triggered) {
              p.vy += 0.45;
              p.y += p.vy;
            }

            if (p.type === 'disappear' && p.vanished) return;

            // AABB check
            const prevY = player.y - player.vy;
            const isAbove = prevY + player.h <= p.y + 8;
            const isWithinX = player.x + player.w > p.x + 2 && player.x < p.x + p.w - 2;

            if (isWithinX && isAbove && player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + 8 && player.vy >= 0) {
              player.y = p.y - player.h;
              player.vy = 0;
              player.isGrounded = true;

              // Trigger Level 1 Traps
              if (p.type === 'disappear' && !p.vanished) {
                p.flash++;
                if (p.flash > 4) {
                  p.vanished = true;
                  playSound('die');
                  addFloatingText('NOPE! 💨', p.x + 20, p.y - 10);
                }
              } else if (p.type === 'falling' && !p.triggered) {
                p.triggered = true;
                p.vy = 2;
                addFloatingText('BYE! ⬇️', p.x + 20, p.y - 10);
              } else if (p.type === 'fake_floor' && !p.triggered) {
                p.triggered = true;
                p.vy = 4;
                playSound('troll');
                addFloatingText('TRICKED! 🤡', p.x + 20, p.y - 10);
              } else if (p.type === 'invisible') {
                p.revealed = true;
              }
            }
          });
        }

        // Level 1: Fleeing Finish Door
        if (currentLevel === 1 && levelData.door) {
          const d = levelData.door;
          const dist = Math.hypot((player.x + player.w / 2) - (d.x + d.w / 2), (player.y + player.h / 2) - (d.y + d.h / 2));

          if (dist < 75 && !d.moved) {
            d.moved = true;
            d.targetX = 630;
            playSound('troll');
            addFloatingText('NOPE! 🏃', d.x, d.y - 15);
          }

          d.x += (d.targetX - d.x) * 0.15;

          // Reach exit
          if (Math.abs(player.x - d.x) < 22 && Math.abs(player.y - d.y) < 32) {
            completeLevel(1);
            return;
          }
        }

        // Level 2: Spring Pad, Fake Door, Fake Checkpoint, Real Door
        if (currentLevel === 2) {
          const s = levelData.spring;
          if (s && player.x + player.w > s.x && player.x < s.x + s.w && player.y + player.h >= s.y && player.y + player.h <= s.y + s.h + 6) {
            playSound('spring');
            triggerHaptic(60);
            player.vx = -16;
            player.vy = -6;
            addFloatingText('BOING! 🚀', s.x - 10, s.y - 20);
          }

          const fc = levelData.fakeCheckpoint;
          if (fc && !fc.triggered && Math.hypot(player.x - fc.x, player.y - fc.y) < 24) {
            fc.triggered = true;
            playSound('troll');
            killPlayer('Saved to Trash! 🗑️');
            return;
          }

          const fd = levelData.fakeDoor;
          if (fd && Math.hypot(player.x - fd.x, player.y - fd.y) < 26) {
            playSound('troll');
            killPlayer('Door was a lie. 🤡');
            return;
          }

          const rd = levelData.realDoor;
          if (rd && Math.hypot(player.x - rd.x, player.y - rd.y) < 28) {
            completeLevel(2);
            return;
          }
        }

        // Level 3: Tiny Running Target
        if (currentLevel === 3 && levelData.target) {
          const tgt = levelData.target;
          const dx = (player.x + player.w / 2) - (tgt.x + tgt.w / 2);
          const dy = (player.y + player.h / 2) - (tgt.y + tgt.h / 2);
          const dist = Math.hypot(dx, dy);

          tgt.timer += 0.02;

          // Target runs away when player approaches!
          if (dist < 110) {
            tgt.vx = (dx > 0 ? -3.4 : 3.4);
            if (Math.random() < 0.05) {
              const quips = ['Catch me for appraisal! 📈', '404: Promotion not found!', 'Talk to HR! 📝', 'Overtime required! 💀'];
              tgt.speech = quips[Math.floor(Math.random() * quips.length)];
            }
          } else {
            tgt.vx *= 0.9;
          }

          tgt.x += tgt.vx;
          tgt.x = Math.max(30, Math.min(630, tgt.x));

          // When caught!
          if (dist < 26) {
            completeLevel(3);
            return;
          }
        }

        // Void death check (Immediate trigger when falling below platforms)
        if (player.y > 292) {
          killPlayer('Fell into the abyss.');
          return;
        }
      }

      // ========================================================
      // RENDER CANVAS
      // ========================================================
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cyber Grid Background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 34) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 34) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Render Platforms
      if (levelData.platforms) {
        levelData.platforms.forEach((p) => {
          if (p.type === 'disappear' && p.vanished) return;
          if (p.type === 'invisible' && !p.revealed) {
            // Subtle shimmer
            ctx.fillStyle = 'rgba(255, 51, 102, 0.06)';
            ctx.fillRect(p.x, p.y, p.w, p.h);
            return;
          }

          // Platform Body
          ctx.fillStyle = p.flash > 0 ? '#ff3366' : 'rgba(30, 30, 42, 0.92)';
          ctx.beginPath();
          ctx.roundRect(p.x, p.y, p.w, p.h, 6);
          ctx.fill();

          // Top Neon Highlight
          ctx.strokeStyle = p.flash > 0 ? '#ffffff' : (p.type === 'moving' ? '#bd00ff' : '#00e676');
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x + 4, p.y + 1);
          ctx.lineTo(p.x + p.w - 4, p.y + 1);
          ctx.stroke();
        });
      }

      // Render Spring Pad (Level 2)
      if (levelData.spring) {
        const s = levelData.spring;
        ctx.fillStyle = '#ffe082';
        ctx.fillRect(s.x, s.y, s.w, s.h);
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText('☕', s.x + 7, s.y + 10);
      }

      // Render Doors & Checkpoints
      if (levelData.door) {
        const d = levelData.door;
        ctx.fillStyle = '#00e676';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 4, d.y + 26);
      }

      if (levelData.fakeDoor) {
        const d = levelData.fakeDoor;
        ctx.fillStyle = '#ff3366';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#fff';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 4, d.y + 26);
      }

      if (levelData.realDoor) {
        const d = levelData.realDoor;
        ctx.fillStyle = '#00e676';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 4, d.y + 26);
      }

      if (levelData.fakeCheckpoint) {
        const fc = levelData.fakeCheckpoint;
        ctx.font = '20px sans-serif';
        ctx.fillText('🚩', fc.x, fc.y + 20);
      }

      // Render Target (Level 3)
      if (levelData.target) {
        const tgt = levelData.target;
        ctx.font = '24px sans-serif';
        ctx.fillText('🎯', tgt.x, tgt.y + 20);

        // Speech Bubble
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.roundRect(tgt.x - 40, tgt.y - 18, 110, 16, 8);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText(tgt.speech, tgt.x - 34, tgt.y - 7);
      }

      // Render Player Character
      ctx.save();
      ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
      ctx.scale(player.facing, 1);

      // Body / Suit
      ctx.fillStyle = '#f0f0f5';
      ctx.fillRect(-7, -12, 14, 18);

      // Head
      ctx.fillStyle = '#ffd1a4';
      ctx.beginPath();
      ctx.arc(0, -17, 7, 0, Math.PI * 2);
      ctx.fill();

      // Eye
      ctx.fillStyle = '#111';
      ctx.fillRect(2, -19, 2, 3);

      // Tie blowing in wind 👔
      const tieWave = Math.sin(player.anim) * 4;
      ctx.fillStyle = '#ff3366';
      ctx.beginPath();
      ctx.moveTo(-1, -12);
      ctx.lineTo(2, -12);
      ctx.lineTo(tieWave + 1, -2);
      ctx.lineTo(-1, -4);
      ctx.fill();

      // Legs animation
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 3;
      const legOffset = Math.sin(player.anim) * 5;
      ctx.beginPath();
      ctx.moveTo(-4, 6); ctx.lineTo(-4 - legOffset, 14);
      ctx.moveTo(3, 6); ctx.lineTo(3 + legOffset, 14);
      ctx.stroke();

      ctx.restore();

      // Render Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= 0.035;
        if (pt.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.life;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3 * pt.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // Render Floating Sassy Texts
      for (let i = floatingTexts.length - 1; i >= 0; i--) {
        const ft = floatingTexts[i];
        ft.y += ft.vy;
        ft.alpha -= 0.025;
        if (ft.alpha <= 0) {
          floatingTexts.splice(i, 1);
          continue;
        }
        ctx.fillStyle = ft.color;
        ctx.globalAlpha = ft.alpha;
        ctx.font = 'bold 12px "Space Grotesk", sans-serif';
        ctx.fillText(ft.text, ft.x, ft.y);
      ctx.globalAlpha = 1.0;
    }

    gameAnimId = requestAnimationFrame(gameLoop);
  }
}
}

window.openPhotoModal = function(target) {
  const photoModal = document.getElementById('photo-modal');
  const photoModalImg = document.getElementById('photo-modal-img');
  const photoModalName = document.getElementById('photo-modal-name');
  const photoModalRole = document.getElementById('photo-modal-role');
  if (!target || !photoModal) return;

  const photoSrc = target.getAttribute('data-photo');
  if (!photoSrc) return;

  const nameText = target.querySelector('.team-name')?.innerText || target.innerText || 'Team Member';
  const numText = target.querySelector('.team-num')?.innerText;

  if (photoModalImg) {
    photoModalImg.triedPhotos = false;
    photoModalImg.triedImages = false;
    photoModalImg.src = photoSrc;
    photoModalImg.onerror = function() {
      const filename = photoSrc.split('/').pop();
      if (!this.triedPhotos) {
        this.triedPhotos = true;
        this.src = '/photos/' + filename;
      } else if (!this.triedImages) {
        this.triedImages = true;
        this.src = '/images/' + filename;
      }
    };
  }

  if (photoModalName) photoModalName.innerText = nameText.trim();

  if (photoModalRole) {
    if (numText) {
      photoModalRole.innerText = `TEAM DEBA DEBA • MEMBER ${numText}`;
    } else {
      photoModalRole.innerText = 'FOUNDER • CREATOR • MAKER';
    }
  }

  photoModal.classList.remove('hidden');
};

window.closePhotoModal = function() {
  const photoModal = document.getElementById('photo-modal');
  if (photoModal) {
    photoModal.classList.add('hidden');
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closePhotoModal();
  }
});

// Start Deba Deba Engine
init();

