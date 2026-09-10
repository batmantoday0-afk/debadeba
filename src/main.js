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
// 🕵️ OFFICE ROAST: SECRET MISSION GAME ENGINE
// ==========================================================
function setupOfficeRoastMission() {
  const pixelBtn = document.getElementById('suspicious-pixel');
  const overlay = document.getElementById('mission-overlay');
  const closeBtn = document.getElementById('mission-close-btn');
  const stageBox = document.getElementById('mission-stage-box');

  if (!pixelBtn || !overlay || !stageBox) return;

  let currentStage = 0;
  let ratAnimId = null;
  let activeDanceStep = 0;
  const danceSequence = ['ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  const danceLabels = ['↑', '↓', '↑', '↓', '←', '→', '←', '→'];
  let currentShowcaseMemberIndex = 0;
  const memberKeys = Object.keys(TEAM_MEMBERS);

  // Synthesized Sound Effects for Mission
  function playMissionBeep(freq = 440, type = 'sine', dur = 0.15) {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + dur);
    } catch (_) {}
  }

  function playBuzzer() {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.linearRampToValueAtTime(90, t + 0.35);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
    } catch (_) {}
  }

  function playRatSqueak() {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      for (let i = 0; i < 2; i++) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2200 + i * 400, t + i * 0.08);
        osc.frequency.exponentialRampToValueAtTime(4500, t + i * 0.08 + 0.06);
        gain.gain.setValueAtTime(0.3, t + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + i * 0.08);
        osc.stop(t + i * 0.08 + 0.06);
      }
    } catch (_) {}
  }

  function playDiscoChime() {
    const notes = [440, 554, 659, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => playMissionBeep(freq, 'triangle', 0.2), idx * 100);
    });
  }

  function playSiren() {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, t);
      osc.frequency.linearRampToValueAtTime(850, t + 0.2);
      osc.frequency.linearRampToValueAtTime(400, t + 0.4);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.5);
    } catch (_) {}
  }

  function openMission() {
    recordUserActivity();
    currentStage = 1;
    overlay.classList.remove('hidden');
    playMissionBeep(600, 'sine', 0.2);
    triggerHaptic([50, 50, 100]);
    showSassyToast('🕵️ MISSION INITIATED: Find the truth...', 3000);
    renderStage1ForbiddenPath();
  }

  function closeMission() {
    overlay.classList.add('hidden');
    if (ratAnimId) cancelAnimationFrame(ratAnimId);
    window.removeEventListener('keydown', handleDanceKey);
  }

  pixelBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openMission();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMission);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeMission();
    }
  });

  // --------------------------------------------------------
  // STAGE 1: 🚶 Walk the Forbidden Path
  // --------------------------------------------------------
  function renderStage1ForbiddenPath() {
    currentStage = 1;
    let currentStep = 1;

    stageBox.innerHTML = `
      <div class="mission-title">🚶 Walk the Forbidden Path</div>
      <div class="mission-desc">Click the 3 mystery runes in the exact sequence: <b>1 → 2 → 3</b>. Don't embarrass yourself.</div>
      <div id="forbidden-arena" class="forbidden-path-arena"></div>
    `;

    const arena = document.getElementById('forbidden-arena');
    const positions = [
      { left: 15 + Math.random() * 20, top: 20 + Math.random() * 50 },
      { left: 45 + Math.random() * 15, top: 15 + Math.random() * 55 },
      { left: 70 + Math.random() * 15, top: 25 + Math.random() * 45 }
    ];

    // Shuffle display order for mystery
    const numbers = [1, 2, 3];
    numbers.sort(() => Math.random() - 0.5);

    numbers.forEach((num, index) => {
      const node = document.createElement('div');
      node.className = 'path-node';
      node.innerText = num;
      node.style.left = `${positions[index].left}%`;
      node.style.top = `${positions[index].top}%`;

      node.addEventListener('click', (e) => {
        e.stopPropagation();
        recordUserActivity();

        if (num === currentStep) {
          // Correct spot clicked!
          node.classList.add('completed');
          playMissionBeep(450 + currentStep * 150, 'triangle', 0.15);
          triggerHaptic(40);
          currentStep++;

          if (currentStep > 3) {
            playDiscoChime();
            setTimeout(renderStage2CatchRat, 600);
          }
        } else {
          // Wrong spot clicked!
          playBuzzer();
          triggerHaptic([80, 50, 80]);
          arena.classList.add('shake-error');
          showSassyToast('Bro, that was not the mission. 😭', 3200);

          setTimeout(() => {
            renderStage1ForbiddenPath(); // Reset sequence
          }, 450);
        }
      });

      arena.appendChild(node);
    });
  }

  // --------------------------------------------------------
  // STAGE 2: 🐀 Catch the Office Rat
  // --------------------------------------------------------
  function renderStage2CatchRat() {
    currentStage = 2;
    stageBox.innerHTML = `
      <div class="mission-title">🐀 Catch the Office Rat</div>
      <div class="mission-desc">A wild office rat is running around leaking your Slack messages! Catch it before it escapes!</div>
      <div id="rat-arena" class="rat-arena">
        <div id="office-rat" class="office-rat">
          <span>🐀</span>
          <span class="rat-bubble" id="rat-bubble">Reporting to HR!</span>
        </div>
      </div>
    `;

    const arena = document.getElementById('rat-arena');
    const rat = document.getElementById('office-rat');
    const bubble = document.getElementById('rat-bubble');

    let posX = 80;
    let posY = 80;
    let vx = (Math.random() > 0.5 ? 1 : -1) * (3.8 + Math.random() * 2);
    let vy = (Math.random() > 0.5 ? 1 : -1) * (3.5 + Math.random() * 2);

    const ratQuips = [
      'Reporting to HR! 📝',
      'Who wrote this PR?! 😭',
      'I saw your lunch break! 👀',
      'Sathwik is watching! 👑',
      'Merge conflict incoming! 💥'
    ];
    let lastQuipTime = 0;

    function animateRat(time) {
      if (currentStage !== 2 || !arena || !rat) return;

      const arenaRect = arena.getBoundingClientRect();
      const maxX = arenaRect.width - 50;
      const maxY = arenaRect.height - 50;

      posX += vx;
      posY += vy;

      if (posX <= 10) { posX = 10; vx = Math.abs(vx); }
      else if (posX >= maxX) { posX = maxX; vx = -Math.abs(vx); }

      if (posY <= 10) { posY = 10; vy = Math.abs(vy); }
      else if (posY >= maxY) { posY = maxY; vy = -Math.abs(vy); }

      rat.style.left = `${posX}px`;
      rat.style.top = `${posY}px`;
      rat.style.transform = vx > 0 ? 'scaleX(-1)' : 'scaleX(1)';

      if (time - lastQuipTime > 2200) {
        lastQuipTime = time;
        if (bubble) bubble.innerText = ratQuips[Math.floor(Math.random() * ratQuips.length)];
      }

      ratAnimId = requestAnimationFrame(animateRat);
    }

    ratAnimId = requestAnimationFrame(animateRat);

    rat.addEventListener('click', (e) => {
      e.stopPropagation();
      recordUserActivity();
      cancelAnimationFrame(ratAnimId);

      playRatSqueak();
      triggerHaptic([60, 40, 120]);
      rat.style.transform = 'scale(2.2) rotate(720deg)';
      rat.style.opacity = '0';
      rat.style.transition = 'all 0.4s ease';

      if (bubble) bubble.innerText = 'SQUEAK! Caught! 💥';
      showSassyToast('🐀 Rat captured! Slack secrets safe for now.', 2500);

      setTimeout(renderStage3StupidDance, 700);
    });
  }

  // --------------------------------------------------------
  // STAGE 3: 🕺 Do the Stupid Dance
  // --------------------------------------------------------
  function handleDanceKey(e) {
    if (currentStage !== 3) return;

    const key = e.key;
    const expected = danceSequence[activeDanceStep];

    // Match arrow keys or WASD
    const keyMap = {
      'w': 'ArrowUp', 'W': 'ArrowUp',
      's': 'ArrowDown', 'S': 'ArrowDown',
      'a': 'ArrowLeft', 'A': 'ArrowLeft',
      'd': 'ArrowRight', 'D': 'ArrowRight'
    };
    const normalizedKey = keyMap[key] || key;

    if (normalizedKey === expected) {
      processDanceStepSuccess();
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(key.toLowerCase())) {
      processDanceStepFail();
    }
  }

  function processDanceStepSuccess() {
    recordUserActivity();
    const hudPills = document.querySelectorAll('.dance-step-key');
    if (hudPills[activeDanceStep]) {
      hudPills[activeDanceStep].classList.remove('active');
      hudPills[activeDanceStep].classList.add('done');
    }

    playMissionBeep(500 + activeDanceStep * 80, 'sine', 0.12);
    triggerHaptic(35);
    activeDanceStep++;

    if (activeDanceStep < danceSequence.length) {
      if (hudPills[activeDanceStep]) hudPills[activeDanceStep].classList.add('active');
    } else {
      // Completed Dance!
      window.removeEventListener('keydown', handleDanceKey);
      playDiscoChime();
      triggerHaptic([50, 50, 150]);

      const titleEl = document.querySelector('.mission-title');
      const descEl = document.querySelector('.mission-desc');
      if (titleEl) titleEl.innerText = '🕺 Excellent. HR has been notified.';
      if (descEl) descEl.innerText = 'Security cameras logged your majestic dance moves.';

      showSassyToast('🕺 Excellent. HR has been notified.', 3500);
      setTimeout(renderStage4IQTest, 1400);
    }
  }

  function processDanceStepFail() {
    playBuzzer();
    triggerHaptic([60, 40, 60]);
    activeDanceStep = 0;
    const hudPills = document.querySelectorAll('.dance-step-key');
    hudPills.forEach((p, i) => {
      p.classList.remove('done', 'active');
      if (i === 0) p.classList.add('active');
    });
    showSassyToast('Missed the step! Try again: ↑ ↓ ↑ ↓ ← → ← →', 2500);
  }

  function renderStage3StupidDance() {
    currentStage = 3;
    activeDanceStep = 0;

    stageBox.innerHTML = `
      <div class="mission-title">🕺 Do the Stupid Dance</div>
      <div class="mission-desc">Follow the rhythm: <b>↑ ↓ ↑ ↓ ← → ← →</b> to confuse office cameras.</div>
      <div class="dance-sequence-hud" id="dance-hud">
        ${danceLabels.map((lbl, i) => `<div class="dance-step-key ${i === 0 ? 'active' : ''}">${lbl}</div>`).join('')}
      </div>
      <div class="dance-dpad">
        <button class="dpad-btn dpad-up" data-dir="ArrowUp">↑</button>
        <button class="dpad-btn dpad-left" data-dir="ArrowLeft">←</button>
        <button class="dpad-btn dpad-down" data-dir="ArrowDown">↓</button>
        <button class="dpad-btn dpad-right" data-dir="ArrowRight">→</button>
      </div>
    `;

    window.removeEventListener('keydown', handleDanceKey);
    window.addEventListener('keydown', handleDanceKey);

    // On-screen D-Pad listeners for mobile / mouse
    document.querySelectorAll('.dpad-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dir = btn.dataset.dir;
        if (dir === danceSequence[activeDanceStep]) {
          processDanceStepSuccess();
        } else {
          processDanceStepFail();
        }
      });
    });
  }

  // --------------------------------------------------------
  // STAGE 4: 🧠 IQ Test
  // --------------------------------------------------------
  function renderStage4IQTest() {
    currentStage = 4;
    window.removeEventListener('keydown', handleDanceKey);

    stageBox.innerHTML = `
      <div class="mission-title">🧠 Mandatory Corporate IQ Test</div>
      <div class="mission-desc">Please answer honestly. Your response is 100% confidential (we will show it to everyone).</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 1.2rem;">
        “Are you actually working?”
      </div>
      <div class="iq-options-grid">
        <button class="iq-option-btn" data-ans="yes"><span>YES</span> <span>(Lying)</span></button>
        <button class="iq-option-btn" data-ans="no"><span>NO</span> <span>(Honest)</span></button>
        <button class="iq-option-btn" data-ans="coffee"><span>I NEED COFFEE</span> <span>☕</span></button>
      </div>
    `;

    document.querySelectorAll('.iq-option-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        recordUserActivity();
        playMissionBeep(320, 'triangle', 0.4);
        triggerHaptic([60, 40, 100]);

        stageBox.innerHTML = `
          <div class="mission-title" style="font-size: 2rem; color: #ff3366; margin-top: 1rem;">Suspicious… 🧐</div>
          <div class="mission-desc" style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">
            Logging answer in permanent disciplinary records...
          </div>
        `;

        showSassyToast('Suspicious… 🧐', 2500);
        setTimeout(renderStage5FinalBoss, 1500);
      });
    });
  }

  // --------------------------------------------------------
  // STAGE 5: 💀 Final Boss
  // --------------------------------------------------------
  function renderStage5FinalBoss() {
    currentStage = 5;

    stageBox.innerHTML = `
      <div class="mission-title">💀 The Final Boss</div>
      <div class="mission-desc">Whatever you do, absolutely under no circumstances touch this button.</div>
      <button id="final-boss-btn" class="final-boss-btn">
        ⚠️ DO NOT CLICK THIS ⚠️
      </button>
    `;

    const bossBtn = document.getElementById('final-boss-btn');
    if (bossBtn) {
      bossBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        recordUserActivity();
        playSiren();
        triggerHaptic([100, 50, 200]);

        stageBox.innerHTML = `
          <div class="mission-title" style="font-size: 1.8rem; color: #ff1744; margin-top: 1rem;">
            “You were specifically told not to.” 💀
          </div>
          <div class="mission-desc" style="font-size: 1rem; color: #ffffff; margin-top: 0.5rem;">
            Initiating catastrophic sarcasm payload...
          </div>
        `;

        showSassyToast('You were specifically told not to.', 3000);
        setTimeout(renderStage6RoastLoading, 1400);
      });
    }
  }

  // --------------------------------------------------------
  // STAGE 6: 🔥 ROAST LOADING…
  // --------------------------------------------------------
  function renderStage6RoastLoading() {
    currentStage = 6;

    stageBox.innerHTML = `
      <div class="mission-title">🔥 ROAST LOADING…</div>
      <div class="mission-desc">Scanning personnel records for maximum emotional damage.</div>
      <div class="hacker-terminal">
        <div id="terminal-logs" class="terminal-logs"></div>
        <div class="roast-progress-bar-wrap">
          <div id="roast-progress-bar" class="roast-progress-bar"></div>
        </div>
      </div>
    `;

    const logsContainer = document.getElementById('terminal-logs');
    const progressBar = document.getElementById('roast-progress-bar');

    const roastSteps = [
      { text: '> Analyzing employee...', progress: 18, delay: 400 },
      { text: '> Checking attendance records...', progress: 36, delay: 900 },
      { text: '> Scanning excuses file...', progress: 54, delay: 1400 },
      { text: '> Calculating productivity: 0.00001%...', progress: 72, delay: 1900 },
      { text: '> Consulting HR legal department...', progress: 85, delay: 2400 },
      { text: '> Downloading roast payload... 97%', progress: 97, delay: 2900 },
      { text: '> 🚨 ERROR: Too much potential content detected. 😂', progress: 97, delay: 3500, isError: true }
    ];

    roastSteps.forEach((step) => {
      setTimeout(() => {
        if (currentStage !== 6 || !logsContainer) return;

        playMissionBeep(step.isError ? 220 : 600 + Math.random() * 200, 'sawtooth', 0.08);
        const item = document.createElement('div');
        item.className = `terminal-log-item ${step.isError ? 'terminal-log-error' : ''}`;
        item.innerText = step.text;
        logsContainer.appendChild(item);

        if (progressBar) {
          progressBar.style.width = `${step.progress}%`;
        }

        if (step.isError) {
          triggerHaptic([80, 50, 150]);
          setTimeout(renderStage7SecretUnlocked, 1600);
        }
      }, step.delay);
    });
  }

  // --------------------------------------------------------
  // STAGE 7: 📸 SECRET PHOTO UNLOCKED
  // --------------------------------------------------------
  function renderStage7SecretUnlocked() {
    currentStage = 7;
    toggleMemeMode(true); // Unlock sarcastic meme mode globally!
    playDiscoChime();
    triggerHaptic([100, 50, 100, 50, 200]);

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
        <div class="mission-title" style="color: #ff3366;">SECRET PHOTO UNLOCKED</div>
        <div class="mission-desc" style="color: #fff; font-size: 0.95rem; margin-bottom: 0.8rem;">
          “Congratulations. You wasted 47 seconds of company time.”
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
}

// Start Deba Deba Engine
init();

