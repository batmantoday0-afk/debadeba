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
  graphite: {
    name: 'Graphite Executive',
    badge: 'Graphite',
    icon: '🔘',
    accent: '#94a3b8',
    bg: 0x0e1015,
    fog: 0x14171e,
    ambientColor: 0xe2e8f0,
    ambientIntensity: 1.05,
    leftColor: 0xf8fafc,
    leftIntensity: 2.3,
    rightColor: 0x64748b,
    rightIntensity: 2.1,
    topColor: 0xffffff,
    topIntensity: 2.4,
    auraColor: 0x38bdf8,
    auraIntensity: 2.4,
    textMat: {
      color: 0xdbe1e8,
      emissive: 0x141820,
      roughness: 0.16,
      metalness: 0.82,
      clearcoat: 1.0,
    },
    starColor: 0xcfd8dc,
    sassyQuote: 'Graphite Executive. Sleek, matte, and undeniably more competent than management.',
    sassyQuotes: [
      'Graphite Executive. Sleek, matte, and undeniably more competent than management.',
      'Graphite Precision. Aerospace-grade styling for people who pretend to write clean code.',
      'Graphite Titanium. Minimalist luxury for those who charge $200/hr for CSS changes.',
      'Graphite Edition. Understated, razor-sharp, and intimidatingly professional.'
    ]
  },
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
    sassyQuote: 'Obsidian Void. Pitch black, just like your career prospects.',
    sassyQuotes: [
      'Obsidian Void. Pitch black, just like your career prospects.',
      'Obsidian Void. Deep dark void, perfectly matching your sense of humor.',
      'Obsidian Void. The color of your soul after a Monday standup.'
    ]
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
    sassyQuote: 'Crimson Velvet. Seductive ruby red. Did your code crash production again?',
    sassyQuotes: [
      'Crimson Velvet. Seductive ruby red. Did your code crash production again?',
      'Crimson Velvet. Spicy and dramatic. Don’t burn your fragile fingers.',
      'Crimson Velvet. As red as the unread notifications you’re actively avoiding.'
    ]
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
    sassyQuote: 'Cyber Amour. Neon purple. You definitely listen to synthwave while writing 0 code.',
    sassyQuotes: [
      'Cyber Amour. Neon purple. You definitely listen to synthwave while writing 0 code.',
      'Cyber Amour. Neon club vibes! Way too cool for your daily reality.',
      'Cyber Amour. Aesthetic 10/10, actual life stability 2/10.'
    ]
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
    sassyQuote: 'Liquid Gold. Champagne luxury for someone with $4.17 in their savings account.',
    sassyQuotes: [
      'Liquid Gold. Champagne luxury for someone with $4.17 in their savings account.',
      'Liquid Gold. Look at you feeling rich while your card gets declined at Subway.',
      'Liquid Gold. Looks expensive, unlike your hourly wage.'
    ]
  },
  graffiti: {
    name: 'Graffiti Studio',
    badge: 'Graffiti',
    icon: '🎨',
    accent: '#00f0ff',
    bg: 0x0d0d12,
    fog: 0x12121a,
    ambientColor: 0xffffff,
    ambientIntensity: 0.95,
    leftColor: 0x00f0ff,
    leftIntensity: 2.4,
    rightColor: 0xff0055,
    rightIntensity: 2.2,
    topColor: 0xffe600,
    topIntensity: 2.2,
    auraColor: 0xbd00ff,
    auraIntensity: 3.2,
    textMat: {
      color: 0xf0fdf4,
      emissive: 0x002233,
      roughness: 0.18,
      metalness: 0.45,
      clearcoat: 0.9,
    },
    starColor: 0x00f0ff,
    sassyQuote: 'Graffiti Studio. Raw street art meets high-voltage neo-brutalism.',
    sassyQuotes: [
      'Graffiti Studio. Raw street art meets high-voltage neo-brutalism.',
      'Graffiti Edition. Spray paint drips, neon stencils, and absolute creative chaos.',
      'Graffiti Studio. Digital street culture curated with executive finesse.'
    ]
  }
};

let currentThemeKey = 'graphite';

// ==========================================================
// 📸 EMPLOYEE PHOTO SYSTEM
// Structure: each employee has normalPhoto and roastPhoto
// Additional employees can easily be added here
// ==========================================================
export const employees = [
  {
    id: "employee1",
    name: "Sathwik",
    role: "Founder & Head of Drama",
    normalPhoto: "images/employee1-normal.jpg",
    roastPhoto: "images/employee1-roast.jpg",
    roast: "Built this whole website just to avoid replying to messages.",
    sound: "goat",
    fallbackNormal: "/photos/sathwik.jpg",
    fallbackRoast: "/team/sarcastic/sathwik.jpeg"
  },
  {
    id: "employee2",
    name: "Sathesh kumar",
    role: "Chief Bug Creator",
    normalPhoto: "images/employee2-normal.jpg",
    roastPhoto: "images/employee2-roast.jpg",
    roast: "Writes 2 lines of code, causes 15 errors, and blames the Wi-Fi.",
    sound: "cat",
    fallbackNormal: "/photos/sathesh.jpg",
    fallbackRoast: "/team/sarcastic/sathesh.png"
  },
  {
    id: "employee3",
    name: "Vamsi",
    role: "Non-Stop Yapper & Cringe Comedian 🎙️",
    normalPhoto: "images/employee3-normal.jpg",
    roastPhoto: "images/employee3-roast.jpg",
    roast: "Never shuts his mouth and tells the worst jokes in human history.",
    sound: "duck",
    fallbackNormal: "/photos/vamsi.jpg",
    fallbackRoast: "/team/sarcastic/vamsi.jpeg"
  },
  {
    id: "employee4",
    name: "Ashwini",
    role: "Merge Conflict Queen",
    normalPhoto: "images/employee4-normal.jpg",
    roastPhoto: "images/employee4-roast.jpg",
    roast: "Tries to merge two simple branches, but ends up breaking git itself.",
    sound: "chicken",
    fallbackNormal: "/photos/amrutha.jpg",
    fallbackRoast: "/team/sarcastic/ashwini.jpeg"
  },
  {
    id: "employee5",
    name: "viswanath",
    role: "Simulation Lead & Demo Destroyer 💥",
    normalPhoto: "images/employee5-normal.jpg",
    roastPhoto: "images/employee5-roast.jpg",
    roast: "Spends weeks building simulations. Crashes the exact second the demo starts.",
    sound: "owl",
    fallbackNormal: "/photos/viswanath.jpg",
    fallbackRoast: "/team/sarcastic/viswanath.jpeg"
  },
  {
    id: "employee6",
    name: "steel Binde",
    role: "High BP & Salty Queen 🧂",
    normalPhoto: "images/employee6-normal.jpg",
    roastPhoto: "images/employee6-roast.jpg",
    roast: "Eats extra salt just to stay angry. One tiny bug and her blood pressure shoots to outer space.",
    sound: "cow",
    fallbackNormal: "/photos/bindu.jpg",
    fallbackRoast: "/team/sarcastic/steelbinde.jpeg"
  },
  {
    id: "employee7",
    name: "Aakash",
    role: "Master of Procrastination",
    normalPhoto: "images/employee7-normal.jpg",
    roastPhoto: "images/employee7-roast.jpg",
    roast: "Starts working 5 minutes before the deadline and calls it 'passion'.",
    sound: "monkey",
    fallbackNormal: "/photos/aakash.jpg",
    fallbackRoast: "/team/sarcastic/aakash.jpeg"
  },
  {
    id: "employee8",
    name: "harshith",
    role: "Pixel Perfectionist (Blind) 🔍",
    normalPhoto: "images/employee8-normal.jpg",
    roastPhoto: "images/employee8-roast.jpg",
    roast: "Spends 5 days adjusting a 1px border that nobody in the world will ever notice.",
    sound: "cat",
    fallbackNormal: "/photos/harshith.jpg",
    fallbackRoast: "/team/sarcastic/harshith.jpeg"
  },
  {
    id: "employee9",
    name: "Harshitha",
    role: "Tire Pressure Destroyer 🛞",
    normalPhoto: "images/employee9-normal.jpg",
    roastPhoto: "images/employee9-roast.jpg",
    roast: "Google Maps doesn’t calculate her route… It calculates the bridge load capacity 😂",
    sound: "cow",
    fallbackNormal: "/photos/harshitha.jpg",
    fallbackRoast: "/team/sarcastic/harshitha.jpeg"
  },
  {
    id: "employee10",
    name: "Muni sankar",
    role: "Monaaa’s #1 Fan 💖",
    normalPhoto: "images/employee10-normal.jpg",
    roastPhoto: "images/employee10-roast.jpg",
    roast: "Types code with one hand while writing love letters to Monaaa with the other.",
    sound: "frog",
    fallbackNormal: "/photos/muni sankar.jpg",
    fallbackRoast: "/team/sarcastic/munisankar.jpeg"
  },
  {
    id: "employee11",
    name: "Hema sri",
    role: "Sephora VIP Ambassador 💄",
    normalPhoto: "images/employee11-normal.jpg",
    roastPhoto: "images/employee11-roast.jpg",
    roast: "Spends 2 hours putting on makeup for a 3-minute meeting where everyone has their camera turned off.",
    sound: "lion",
    fallbackNormal: "/photos/hema.jpg",
    fallbackRoast: "/team/sarcastic/hemasri.jpeg"
  }
];
window.employees = employees;

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
  const initTheme = THEMES[currentThemeKey];
  scene.background = new THREE.Color(initTheme.bg);
  scene.fog = new THREE.Fog(initTheme.fog, 10, 750);

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

  // Password Gateway Access Control
  setupPasswordGate();

  // Anti-Inspect & Screenshot Protection
  setupAntiInspectAndScreenshotProtection();

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
  const t = THEMES[currentThemeKey];

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
    color: THEMES[currentThemeKey].starColor,
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
    const quotes = t.sassyQuotes || (t.sassyQuote ? [t.sassyQuote] : []);
    const quote = quotes.length > 0 ? quotes[Math.floor(Math.random() * quotes.length)] : '';
    showSassyToast(quote, 3000);
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
        const musicOnQuips = [
          'Music on! Try not to headbang directly into your monitor.',
          'Beats activated. Prepare your eardrums for peak corporate chaos.',
          'Soundtrack on! Now you can procrastinate with rhythmic enthusiasm.'
        ];
        showSassyToast(musicOnQuips[Math.floor(Math.random() * musicOnQuips.length)], 2600);
      }).catch(() => {});
    } else {
      bgMusic.muted = !bgMusic.muted;
      if (bgMusic.muted) {
        audioBtn.classList.add('muted');
        audioIcon.innerText = '🔇';
        const musicOffQuips = [
          'Muted? Wow, having fun is strictly illegal in your household, huh?',
          'Muted? Complete silence won’t drown out your inner thoughts, but okay.',
          'Muting the vibe? You must be the absolute life of the funeral.'
        ];
        showSassyToast(musicOffQuips[Math.floor(Math.random() * musicOffQuips.length)], 2600);
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
    const welcomeQuips = [
      'Welcome to DEBBA DEBBA — Executive Graphite Edition. Luxury aesthetics, zero excuses.',
      'Welcome to DEBBA DEBBA. Please lower your expectations immediately.',
      'Graphite Executive activated. Aerospace precision meets corporate reality.',
      'Welcome! Staring is free, but your wasted time won’t be refunded.',
      'Welcome! Try not to stare too hard, it’s rude and embarrassing.',
      'Welcome to the void. We guarantee absolute zero productivity here.',
      'You actually visited this site? Don’t you have real work to finish?'
    ];
    showSassyToast(welcomeQuips[Math.floor(Math.random() * welcomeQuips.length)], 3500);
  }, 1200);

  // Idle Sassy Quip Watcher (triggers if no interaction for 9s)
  const idleQuips = [
    'Staring at the void won’t fix your life or make your crush text back.',
    'Did your brain crash, or are you buffering in 144p resolution? 🔄',
    'Hello? Breathing check? Tap the screen before we call an ambulance.',
    'Staring at this won’t get you promoted, bro. Do something.',
    'Are you being paid by the hour to just stare blankly at this screen?',
    'Even our 404 page has more brain activity than you right now.',
    'Still frozen? Your boss thinks you’re typing furiously right now.',
    'Blink twice if you’re currently stuck in an existential dread loop.',
    'Don’t just sit there drooling on your keyboard... tap something!',
    'Legend says if you stare long enough, you might find a single brain cell.',
    'Your Wi-Fi might be fast, but your reaction time definitely isn’t.',
    'Are you waiting for the text to do a backflip? Poke the screen!'
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
      const doubleTapQuips = [
        'Double tap! Who hurt you? Therapy is cheaper than a new screen.',
        'Calm down, Hulk. It’s just 3D text, not your sworn enemy.',
        'Aggressive double tapping detected. Take a deep breath, champ.',
        'Double tapped! Your anger management counselor would be thrilled.'
      ];
      showSassyToast(doubleTapQuips[Math.floor(Math.random() * doubleTapQuips.length)], 2800);
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
        const holdStartQuips = [
          'Ooh, look at Mr. Strong Finger... don’t chicken out now!',
          'Tension building... keep holding or forever be known as weak.',
          'Hold it down! Let’s see if your attention span lasts 0.6 seconds.'
        ];
        showSassyToast(holdStartQuips[Math.floor(Math.random() * holdStartQuips.length)], 2000);
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
      const releaseQuips = [
        'Letting go already? Classic commitment issues.',
        'Weak grip. Couldn’t even hold down a click for half a second.',
        'Gave up already? No wonder your projects are never finished on time.',
        'Cowardly release detected. Try having some backbone next time.'
      ];
      showSassyToast(releaseQuips[Math.floor(Math.random() * releaseQuips.length)], 2500);
      return;
    }

    // Quick single tap
    if (duration < 500 && tapCount === 1 && !isZooming) {
      if (singleTapTimer) clearTimeout(singleTapTimer);
      singleTapTimer = setTimeout(() => {
        if (tapCount === 1 && !isPressing && !hasCracked) {
          triggerZoom();
          const singleTapQuips = [
            'Is that a tap or did a housefly gently sneeze on the screen?',
            'Weakest tap in human history. Put some protein in your diet.',
            'Stop timidly poking me like I’m hot soup. Press and HOLD it!',
            'My grandma taps harder than that while rejecting spam calls.',
            'Are you scared you’ll break a nail? Hold it down like an adult.',
            'Tapping like a confused pigeon... hold the screen down already!',
            'That gentle tickle won’t do anything. Put some backbone into it!',
            'Poke, poke, poke... is this your entire strategy in life?'
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
      const secretQuips = [
        'Ooh, found the secret corner button? Someone give this 1337 hacker a medal.',
        'Clicking suspicious buttons in dark corners? You’d fall for phishing so fast.',
        'Sneaky click detected. You really have way too much free time on your hands.'
      ];
      showSassyToast(secretQuips[Math.floor(Math.random() * secretQuips.length)], 2600);
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
      const shortcutQuips = [
        'Keyboard shortcuts? Look at mister elite programmer pretending to work.',
        'Pro keyboard shortcut user detected. Someone notify Silicon Valley.',
        'Hitting random keys to look busy in the office? We respect the hustle.'
      ];
      showSassyToast(shortcutQuips[Math.floor(Math.random() * shortcutQuips.length)], 2600);
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

  const shatterQuips = [
    'Great, you shattered the universe. Hope your mom is proud.',
    'Look what you did. Put "Destruction Specialist" on your LinkedIn now.',
    'Congratulations, you completely broke it. This is why we can’t have nice things.',
    'Total structural collapse. Are you happy now, chaos goblin?'
  ];
  showSassyToast(shatterQuips[Math.floor(Math.random() * shatterQuips.length)], 3500);

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
    'Back already? Missed me that much? Go touch some grass. 🌱',
    'Couldn’t survive 5 seconds without staring at DEBBA DEBBA? Obsessed.',
    'Aww, did the real world scare you? Welcome back to the void, coward.',
    'Back already? Your weekly screen time report is going to be humiliating.',
    'Look who crawled back! Nobody even noticed you left, but welcome.',
    'Couldn’t find anything better to do with your life? Expected.',
    'Back so soon? Did HR reject your resignation letter already? 📝',
    'Resetting the void for you. Try not to break it again in 3 seconds.',
    'Back already? We were actually enjoying the peaceful silence.',
    'Returned to the scene of the crime? We all saw you break it.',
    'Back again? Your dopamine receptors are truly beyond repair.',
    'Rebuilding the void because someone can’t handle an existential crisis.'
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
          showSassyToast('HOLD TIGHT! Critical meltdown imminent! Don’t wimp out!', 1800);
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
let isRoastModeUnlocked = false;
let isMemeMode = false;
let cheatBuffer = '';
let currentActiveMemberKey = null;

function toggleMemeMode(forcedState = null) {
  if (!isRoastModeUnlocked) {
    const lockedQuips = [
      '🔒 Nice try! Roast Mode is locked. You gotta earn the disrespect in OFFICE DEVIL first.',
      '🔒 Access denied! Beat Level 3 in OFFICE DEVIL before unlocking the emotional damage.',
      '🔒 Locked tight! Go defeat the OFFICE DEVIL before trying to look at forbidden roasts.'
    ];
    showSassyToast(lockedQuips[Math.floor(Math.random() * lockedQuips.length)], 3400);
    playAnimalSound('duck');
    triggerHaptic([60, 40]);
    return;
  }
  isMemeMode = (forcedState !== null) ? forcedState : !isMemeMode;
  document.body.classList.toggle('meme-mode', isMemeMode && isRoastModeUnlocked);

  if (isMemeMode && isRoastModeUnlocked) {
    const unlockedQuips = [
      '🔥 OFFICE ROAST MODE ACTIVATED: Prepare your feelings to be permanently hurt.',
      '🔥 Sarcastic Photos Unlocked! Warning: Zero HR compliance beyond this point.',
      '🔥 Meme Mode engaged! Tap photos to flip between fake professionalism and pure slander.'
    ];
    showSassyToast(unlockedQuips[Math.floor(Math.random() * unlockedQuips.length)], 3800);
    playAnimalSound('monkey');
    triggerHaptic([50, 50, 100]);
  } else {
    const restoredQuips = [
      '😇 Normal Real Photos Restored. Cowardly retreat back to corporate politeness.',
      '😇 Back to professional mode. Pretending we are civilized colleagues again.',
      '😇 Normal photos restored. HR has entered the chat.'
    ];
    showSassyToast(restoredQuips[Math.floor(Math.random() * restoredQuips.length)], 2800);
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
        const nextSrc = (isMemeMode && isRoastModeUnlocked) ? memberData.sarcasticPhoto : memberData.realPhoto;
        popupImg.src = nextSrc;
        popupImg.onerror = () => { popupImg.src = memberData.realPhoto; };
        setTimeout(() => avatarWrapper.classList.remove('flipping'), 200);
      }, 150);
    }
  }
}

let popupHideTimer = null;
window.currentHoverMemberTarget = null;

function setupPhotoReveal() {
  const popup = document.getElementById('photo-popup');
  const popupImg = document.getElementById('photo-popup-img');
  const popupName = document.getElementById('photo-popup-name');
  const popupRole = document.getElementById('photo-popup-role');
  const popupRoast = document.getElementById('photo-popup-roast');

  if (!popup || !popupImg) return;

  function showPhoto(e) {
    recordUserActivity();
    if (popupHideTimer) {
      clearTimeout(popupHideTimer);
      popupHideTimer = null;
    }

    const target = e.target.closest('[data-member]') || e.target.closest('[data-photo]');
    if (!target) return;

    window.currentHoverMemberTarget = target;
    const memberKey = target.dataset.member || 'sathwik';
    currentActiveMemberKey = memberKey;

    const memberData = TEAM_MEMBERS[memberKey] || {
      name: target.querySelector('.team-name')?.innerText || target.innerText || 'Team Member',
      role: 'Team Member',
      sound: 'goat',
      soundLabel: '🐐 Mystery Beast',
      realPhoto: target.dataset.oldPhoto || `/team/${memberKey}.jpeg`,
      sarcasticPhoto: `/team/sarcastic/${memberKey}.jpeg`,
      roast: 'Too mysterious to roast. Or just hiding from bugs.'
    };

    // The sarcastic photo must NOT be visible initially.
    // Hover shows normal photo unless Level 3 was beaten!
    const oldPhotoSrc = target.dataset.oldPhoto || memberData.realPhoto || `/team/${memberKey}.jpeg`;
    const targetPhoto = (isRoastModeUnlocked && isMemeMode) ? memberData.sarcasticPhoto : oldPhotoSrc;

    popupImg.src = targetPhoto;
    popupImg.onerror = function() {
      if (this.src !== oldPhotoSrc) {
        this.src = oldPhotoSrc;
      }
    };

    if (popupName) popupName.innerText = memberData.name;
    if (popupRole) popupRole.innerText = memberData.role;
    if (popupRoast) popupRoast.innerText = `“${memberData.roast}”`;

    // Sarcastic animal voice
    if (memberData.sound) {
      playAnimalSound(memberData.sound);
    }
    triggerHaptic(40);

    // Position popup card near the hovered element
    const rect = target.getBoundingClientRect();
    const popupWidth = 330;
    const popupHeight = 125;
    const gap = 12;

    let left = rect.left + rect.width / 2 - popupWidth / 2;
    let top = rect.top - popupHeight - gap;

    if (top < 12) {
      top = rect.bottom + gap;
    }

    left = Math.max(12, Math.min(left, window.innerWidth - popupWidth - 12));
    if (top + popupHeight > window.innerHeight - 12) {
      top = Math.max(12, rect.top - popupHeight - gap);
    }

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    popup.classList.add('visible');
  }

  function hidePhoto() {
    if (popupHideTimer) {
      clearTimeout(popupHideTimer);
      popupHideTimer = null;
    }
    popup.classList.remove('visible');
  }

  function scheduleHidePhoto() {
    if (popupHideTimer) clearTimeout(popupHideTimer);
    popupHideTimer = setTimeout(() => {
      popup.classList.remove('visible');
    }, 180);
  }

  function cancelHidePhoto() {
    if (popupHideTimer) {
      clearTimeout(popupHideTimer);
      popupHideTimer = null;
    }
  }

  // Hover and double-click triggers for all team items and founder
  const triggerEls = document.querySelectorAll('[data-member], [data-photo]');
  triggerEls.forEach((el) => {
    el.addEventListener('mouseenter', showPhoto);
    el.addEventListener('mouseleave', scheduleHidePhoto);
    // Double-click on name or row directly opens new photo modal
    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      window.openPhotoModal(el);
    });
  });

  // Keeping mouse over popup prevents it from vanishing
  popup.addEventListener('mouseenter', cancelHidePhoto);
  popup.addEventListener('mouseleave', scheduleHidePhoto);

  // Clicking or double-clicking on the hover popup directly opens the new photo modal window!
  popup.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.currentHoverMemberTarget) {
      window.openPhotoModal(window.currentHoverMemberTarget);
    }
  });

  popup.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    if (window.currentHoverMemberTarget) {
      window.openPhotoModal(window.currentHoverMemberTarget);
    }
  });

  // Dismiss popup if tapping elsewhere
  document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('#photo-popup') && !e.target.closest('[data-member]') && !e.target.closest('[data-photo]')) {
      hidePhoto();
    }
  });
}

// ==========================================================
// 😈 OFFICE DEVIL — ROAST EDITION (LEVEL DEVIL TROLL ENGINE)
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
  let currentShowcaseIndex = 0;
  let isLevelTransitioning = false;
  let levelTransitionTimer = null;
  let activeCleanupKeyListeners = null;

  const TROLL_DEATH_MESSAGES = [
    "You trusted the floor. Rookie mistake.",
    "Gravity says hello.",
    "That platform had other plans.",
    "Congratulations. You lost to a rectangle.",
    "That looked easier in your imagination.",
    "The floor has resigned.",
    "Gravity remains undefeated.",
    "You had ONE job.",
    "That wasn't a bug. That was personal.",
    "The game saw you coming.",
    "Nice jump. Wrong universe.",
    "You trusted the EXIT sign. 😂",
    "Even the NPC is disappointed.",
    "HR has been notified.",
    "Productivity detected. This is unusual."
  ];

  // Screen shake on major troll events
  function triggerScreenShake() {
    const box = document.getElementById('troll-canvas-box') || document.querySelector('.troll-canvas-container');
    if (box) {
      box.classList.remove('screen-shake');
      void box.offsetWidth;
      box.classList.add('screen-shake');
    }
  }

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
      } else if (type === 'blip') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.05);
      }
    } catch (_) {}
  }

  function openMission() {
    recordUserActivity();
    deathsCount = 0;
    currentLevel = 1;
    if (levelTransitionTimer) {
      clearTimeout(levelTransitionTimer);
      levelTransitionTimer = null;
    }
    isLevelTransitioning = false;
    overlay.classList.remove('hidden');
    playSound('jump');
    const devilQuips = [
      '😈 OFFICE DEVIL: Entering the arena. Try not to rage-quit within 10 seconds.',
      '😈 Welcome to the corporate grinder. Hope your emotional resilience is high.',
      '😈 OFFICE DEVIL: Good luck, you will definitely need a miracle.'
    ];
    showSassyToast(devilQuips[Math.floor(Math.random() * devilQuips.length)], 3200);
    startPlatformerGame();
  }

  function closeMission() {
    overlay.classList.add('hidden');
    overlay.classList.remove('screen-darken');
    gameRunning = false;
    if (gameAnimId) {
      cancelAnimationFrame(gameAnimId);
      gameAnimId = null;
    }
    if (levelTransitionTimer) {
      clearTimeout(levelTransitionTimer);
      levelTransitionTimer = null;
    }
    isLevelTransitioning = false;
    if (activeCleanupKeyListeners) {
      activeCleanupKeyListeners();
      activeCleanupKeyListeners = null;
    }
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

  // Secret shortcut trigger: press ✨ button or type 'devil' / 'troll'
  const secretTrigger = document.getElementById('secret-trigger');
  if (secretTrigger) {
    secretTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      openMission();
    });
  }

  // ========================================================
  // 🎮 2D PLATFORMER CORE ENGINE
  // ========================================================
  function startPlatformerGame() {
    const levelMeta = {
      1: {
        pill: 'LEVEL 1',
        name: 'JUST WALK 🚶',
        sub: '“How hard can this be?”'
      },
      2: {
        pill: 'LEVEL 2',
        name: 'TRUST NOTHING 💀',
        sub: '“Everything is probably lying.”'
      },
      3: {
        pill: 'FINAL LEVEL',
        name: 'THE EMPLOYEE TEST 💀',
        sub: '“Complete this and you\'ll discover something you probably shouldn\'t.”'
      }
    };

    stageBox.innerHTML = `
      <div class="troll-game-wrapper">
        <div class="troll-hud">
          <div class="troll-level-header">
            <div class="troll-level-title">
              <span class="troll-level-pill" id="troll-level-pill">${levelMeta[currentLevel].pill}</span>
              <span id="troll-level-name">${levelMeta[currentLevel].name}</span>
            </div>
            <span id="troll-level-sub" class="troll-level-sub">${levelMeta[currentLevel].sub}</span>
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
    function drawRoundRect(x, y, w, h, r = 6) {
      if (typeof ctx.roundRect === 'function') {
        try {
          ctx.roundRect(x, y, w, h, r);
          return;
        } catch (_) {}
      }
      ctx.rect(x, y, w, h);
    }
    const deathsEl = document.getElementById('troll-deaths');
    const levelPill = document.getElementById('troll-level-pill');
    const levelName = document.getElementById('troll-level-name');
    const levelSub = document.getElementById('troll-level-sub');
    const bannerSlot = document.getElementById('troll-banner-slot');
    const retryBtn = document.getElementById('troll-retry-btn');

    const keys = { left: false, right: false, jump: false };
    let player = {
      x: 35, y: 230, vx: 0, vy: 0,
      w: 18, h: 28, isGrounded: false,
      coyote: 0, facing: 1, anim: 0,
      isDying: false
    };

    let levelData = {};
    let particles = [];
    let floatingTexts = [];

    function loadLevel(lvl) {
      if (levelTransitionTimer) {
        clearTimeout(levelTransitionTimer);
        levelTransitionTimer = null;
      }
      isLevelTransitioning = false;

      currentLevel = lvl;
      keys.left = false;
      keys.right = false;
      keys.jump = false;
      if (levelPill) levelPill.innerText = levelMeta[lvl].pill;
      if (levelName) levelName.innerText = levelMeta[lvl].name;
      if (levelSub) levelSub.innerText = levelMeta[lvl].sub;
      if (bannerSlot) bannerSlot.innerHTML = '';
      particles = [];
      floatingTexts = [];
      player.isDying = false;

      if (lvl === 1) {
        player.x = 35; player.y = 230; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            { x: 15, y: 275, w: 90, h: 22, type: 'normal' },
            // Troll 1: First platform looks completely safe but vanishes on step
            { x: 125, y: 275, w: 75, h: 22, type: 'disappear', vanished: false, flash: 0 },
            // Troll 2: Platform moves sideways when player approaches
            { x: 225, y: 260, w: 75, h: 22, type: 'dodge', targetX: 225, dodged: false },
            // Troll 3: Surprise invisible platform in impossible gap
            { x: 375, y: 235, w: 80, h: 20, type: 'surprise', revealed: false },
            // Landing platform after fake wall
            { x: 460, y: 260, w: 110, h: 22, type: 'normal' },
            // Far platform where moving door flees to
            { x: 595, y: 260, w: 75, h: 22, type: 'normal' }
          ],
          // Troll 6: Harmless-looking coffee object that launches player backward
          springObject: { x: 305, y: 236, w: 24, h: 24, label: 'FREE COFFEE ☕' },
          // Troll 5: Fake wall that looks solid but can actually be walked through
          fakeWall: { x: 472, y: 155, w: 22, h: 105, label: 'WALL 🧱', triggered: false },
          // Troll 4: EXIT sign moves slightly farther away when player gets close
          door: { x: 535, y: 220, w: 28, h: 40, targetX: 535, moved: false, isReal: true }
        };
      } else if (lvl === 2) {
        player.x = 30; player.y = 230; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            { x: 15, y: 270, w: 70, h: 22, type: 'normal' },
            // Troll 1: Fake floor that collapses
            { x: 105, y: 270, w: 80, h: 22, type: 'fake_floor', triggered: false, vy: 0 },
            // Troll 2: Invisible platform revealed only when falling near it
            { x: 120, y: 215, w: 65, h: 18, type: 'invisible', revealed: false },
            { x: 200, y: 225, w: 70, h: 18, type: 'normal' },
            // Troll 7: Platform that only moves after jumping onto it
            { x: 295, y: 195, w: 70, h: 18, type: 'elevator', triggered: false, vx: 0, vy: 0 },
            { x: 410, y: 135, w: 65, h: 18, type: 'normal' },
            // Lower trap ledge for fake win
            { x: 430, y: 245, w: 75, h: 20, type: 'normal' },
            // Solvable genuine path to real door
            { x: 580, y: 130, w: 85, h: 20, type: 'normal' }
          ],
          // Troll 3: SAFE CHECKPOINT button that sends player backward
          fakeCheckpoint: { x: 225, y: 200, w: 34, h: 24, triggered: false, label: 'SAFE CHECKPOINT 💾' },
          // Troll 4: Fake door that teleports player backward
          fakeDoor: { x: 480, y: 92, w: 26, h: 40, label: 'EXIT 🚪' },
          // Troll 5: Fake finish line that says "YOU WIN! 🏆"
          fakeWin: { x: 450, y: 215, w: 32, h: 30, label: 'YOU WIN! 🏆' },
          // Troll 6: Moving obstacle that suddenly reverses direction
          hazard: { x: 440, y: 105, w: 22, h: 22, vx: 1.2, minX: 375, maxX: 505, reversed: false },
          // Troll 8: Real exit
          realDoor: { x: 615, y: 90, w: 26, h: 40, isReal: true }
        };
      } else if (lvl === 3) {
        player.x = 25; player.y = 220; player.vx = 0; player.vy = 0;
        levelData = {
          platforms: [
            // Starting platform
            { x: 10, y: 260, w: 90, h: 22, type: 'normal' },
            // Stepping platform 1
            { x: 115, y: 240, w: 75, h: 20, type: 'normal' },
            // Stepping platform 2
            { x: 205, y: 215, w: 75, h: 20, type: 'normal' },
            // Stepping platform 3
            { x: 295, y: 190, w: 80, h: 20, type: 'normal' },
            // Upper ledge before runway
            { x: 390, y: 165, w: 85, h: 20, type: 'normal' },
            // 🛋️ Office Safety Beanbag (Bouncy safety net across mid gap so falling isn't lethal!)
            { x: 95, y: 288, w: 385, h: 20, type: 'trampoline' },
            // Real runway platform leading to the EMPLOYEE
            { x: 485, y: 210, w: 185, h: 22, type: 'normal' }
          ],
          // Comic Checkpoint in Level 3 (Harmless laugh)
          fakeCheckpoint: { x: 400, y: 142, w: 32, h: 20, triggered: false, label: 'CHECKPOINT 💾' },
          // Comic Fake Door in Level 3 (Harmless teleport onto safe platform)
          fakeDoor: { x: 442, y: 125, w: 26, h: 40, label: 'EXIT 🚪' },
          // Cute slow moving office printer hazard
          hazard: { x: 320, y: 172, w: 18, h: 18, vx: 0.6, minX: 300, maxX: 360, reversed: false },
          // Final Target: The runaway employee (Tuned to be easily caught)
          target: {
            x: 565, y: 180, w: 24, h: 26, vx: 0,
            speech: 'Catch me for appraisal! 📈',
            timer: 0,
            stamina: 100
          }
        };
      }

      gameRunning = true;
      if (!gameAnimId) {
        gameAnimId = requestAnimationFrame(gameLoop);
      }
    }

    function addFloatingText(text, x, y, color = '#ff3366') {
      floatingTexts.push({ text, x, y, vy: -1.2, alpha: 1.0, color });
    }

    function spawnDeathParticles(x, y) {
      for (let i = 0; i < 18; i++) {
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

    function killPlayer(customReason = null) {
      if (player.isDying || isLevelTransitioning) return;
      player.isDying = true;
      player.vx = 0;
      player.vy = 0;
      deathsCount++;
      if (deathsEl) deathsEl.innerText = `💀 Fails: ${deathsCount}`;

      const reason = customReason || TROLL_DEATH_MESSAGES[Math.floor(Math.random() * TROLL_DEATH_MESSAGES.length)];
      playSound('die');
      triggerScreenShake();
      triggerHaptic([80, 50, 100]);
      spawnDeathParticles(player.x + player.w / 2, player.y + player.h / 2);
      addFloatingText(reason, Math.max(20, player.x - 30), Math.max(30, player.y - 15), '#ff3366');

      // Quick snappy respawn
      setTimeout(() => {
        loadLevel(currentLevel);
      }, 260);
    }

    function completeLevel(lvl) {
      if (isLevelTransitioning) return;
      isLevelTransitioning = true;
      player.vx = 0;
      player.vy = 0;

      playSound('win');
      triggerHaptic([60, 40, 120]);

      if (lvl === 1) {
        bannerSlot.innerHTML = `
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 1 COMPLETE 🎉</div>
            <div class="troll-banner-sub">“That was the easy one. Don't celebrate yet.”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 2: Trust Nothing 💀 →</button>
          </div>
        `;
        const nxt = document.getElementById('next-lvl-btn');
        if (nxt) {
          nxt.addEventListener('click', () => {
            if (levelTransitionTimer) {
              clearTimeout(levelTransitionTimer);
              levelTransitionTimer = null;
            }
            bannerSlot.innerHTML = '';
            loadLevel(2);
          });
        }
        // Auto-proceed after brief pause
        levelTransitionTimer = setTimeout(() => {
          if (currentLevel === 1) {
            bannerSlot.innerHTML = '';
            loadLevel(2);
          }
        }, 1800);
      } else if (lvl === 2) {
        bannerSlot.innerHTML = `
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 2 PASSED 🧠</div>
            <div class="troll-banner-sub">“Okay… you're getting suspicious.”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 3: The Employee Test 💀 →</button>
          </div>
        `;
        const nxt = document.getElementById('next-lvl-btn');
        if (nxt) {
          nxt.addEventListener('click', () => {
            if (levelTransitionTimer) {
              clearTimeout(levelTransitionTimer);
              levelTransitionTimer = null;
            }
            bannerSlot.innerHTML = '';
            loadLevel(3);
          });
        }
        levelTransitionTimer = setTimeout(() => {
          if (currentLevel === 2) {
            bannerSlot.innerHTML = '';
            loadLevel(3);
          }
        }, 1800);
      } else if (lvl === 3) {
        // Dramatic Final Analysis Climax
        triggerClimaxRoastSequence();
      }
    }

    // ========================================================
    // 🔥 OFFICE ROAST MODE ACTIVATION SEQUENCE
    // ========================================================
    function triggerClimaxRoastSequence() {
      gameRunning = false;
      overlay.classList.add('screen-darken');
      playSound('alarm');
      triggerScreenShake();
      triggerHaptic([100, 50, 100, 50, 200]);

      stageBox.innerHTML = `
        <div class="hacker-terminal" style="max-width: 520px; width: 100%; margin: 1rem 0;">
          <div style="color: #ff3366; font-weight: bold; margin-bottom: 0.6rem; font-size: 1rem; letter-spacing: 1px;">
            🚨 SYSTEM OVERRIDE: THE EMPLOYEE TEST PASSED!
          </div>
          <div id="climax-logs" class="terminal-logs" style="min-height: 165px;"></div>
          <div id="climax-progress-wrap" class="roast-progress-bar-wrap" style="display: none; margin-top: 0.8rem;">
            <div id="climax-progress-bar" class="roast-progress-bar"></div>
          </div>
        </div>
      `;

      const logsEl = document.getElementById('climax-logs');
      const progressWrap = document.getElementById('climax-progress-wrap');
      const progressBar = document.getElementById('climax-progress-bar');

      const climaxMessages = [
        "EMPLOYEE IDENTIFIED...",
        "RUNNING BACKGROUND CHECK...",
        "CHECKING PRODUCTIVITY...",
        "CHECKING ATTENDANCE...",
        "CHECKING WORK HISTORY...",
        "CHECKING OFFICE BEHAVIOUR...",
        "CALCULATING ROAST POTENTIAL..."
      ];

      climaxMessages.forEach((msg, idx) => {
        setTimeout(() => {
          if (!logsEl) return;
          playSound('blip');
          const row = document.createElement('div');
          row.className = 'terminal-log-item';
          row.innerText = `> ${msg}`;
          logsEl.appendChild(row);
        }, idx * 450);
      });

      // Progress bar & Database Found step
      setTimeout(() => {
        if (!logsEl || !progressWrap || !progressBar) return;
        playSound('alarm');
        const dbRow = document.createElement('div');
        dbRow.className = 'terminal-log-item terminal-log-error';
        dbRow.style.fontSize = '1.05rem';
        dbRow.style.marginTop = '0.5rem';
        dbRow.innerText = '⚠️ ROAST DATABASE FOUND';
        logsEl.appendChild(dbRow);

        const progressLabel = document.createElement('div');
        progressLabel.className = 'terminal-log-item';
        progressLabel.style.color = '#00e676';
        progressLabel.style.fontWeight = 'bold';
        progressLabel.style.marginTop = '0.4rem';
        progressLabel.innerText = 'Progress bar:';
        logsEl.appendChild(progressLabel);

        const progressAscii = document.createElement('div');
        progressAscii.className = 'terminal-log-item';
        progressAscii.style.color = '#00e676';
        progressAscii.style.fontWeight = 'bold';
        progressAscii.style.letterSpacing = '1px';
        progressAscii.innerText = '████████████████████ 100%';
        logsEl.appendChild(progressAscii);

        progressWrap.style.display = 'block';
        setTimeout(() => {
          progressBar.style.width = '100%';
        }, 80);
      }, climaxMessages.length * 450 + 200);

      // Final Mode Activation announcement
      setTimeout(() => {
        if (!logsEl) return;
        playSound('win');
        triggerHaptic([100, 100, 250]);

        const finalRow = document.createElement('div');
        finalRow.className = 'terminal-log-item terminal-log-error';
        finalRow.style.fontSize = '1.2rem';
        finalRow.style.marginTop = '0.7rem';
        finalRow.innerHTML = '🔓 <b>OFFICE ROAST MODE ACTIVATED</b><br><span style="color: #fff; font-size: 0.92rem; font-weight: 600;">“You survived 3 levels just to unlock this.”</span>';
        logsEl.appendChild(finalRow);

        setTimeout(renderFinalSarcasticShowcase, 2000);
      }, climaxMessages.length * 450 + 1700);
    }

    // ========================================================
    // 📸 REVEAL SARCASTIC PHOTO SHOWCASE
    // ========================================================
    function renderFinalSarcasticShowcase() {
      // Officially unlock roast mode for the session!
      isRoastModeUnlocked = true;
      toggleMemeMode(true);
      playSound('win');

      function updateShowcaseCard() {
        const emp = employees[currentShowcaseIndex];
        const imgEl = document.getElementById('showcase-img');
        const nameEl = document.getElementById('showcase-name');
        const roleEl = document.getElementById('showcase-role');
        const roastEl = document.getElementById('showcase-roast');
        const pillEl = document.getElementById('showcase-index');

        if (imgEl && emp) {
          // Display the sarcastic photo as required!
          imgEl.src = emp.roastPhoto;
          imgEl.onerror = function() {
            // Graceful fallback to existing assets if user hasn't copied custom photos yet
            this.src = emp.fallbackRoast || emp.fallbackNormal;
          };
        }
        if (nameEl && emp) nameEl.innerText = emp.name;
        if (roleEl && emp) roleEl.innerText = emp.role;
        if (roastEl && emp) roastEl.innerText = `“${emp.roast}”`;
        if (pillEl) pillEl.innerText = `${currentShowcaseIndex + 1} / ${employees.length}`;

        if (emp && emp.sound) {
          playAnimalSound(emp.sound);
        }
      }

      stageBox.innerHTML = `
        <div class="secret-unlocked-card">
          <div class="unlocked-trophy">📸 🏆</div>
          <div class="mission-title" style="color: #ff3366; font-size: 1.35rem; font-weight: 800;">OFFICE ROAST MODE ACTIVATED</div>
          <div class="mission-desc" style="color: #ffffffe6; font-size: 0.95rem; margin-bottom: 0.6rem; font-style: italic;">
            “You survived 3 levels just to unlock this.”
          </div>

          <div class="sarcastic-showcase-box">
            <div class="showcase-avatar-frame">
              <img id="showcase-img" class="showcase-avatar-img" src="" alt="Sarcastic Roast" />
            </div>
            <div class="showcase-member-name" id="showcase-name">Employee Name</div>
            <div class="showcase-member-role" id="showcase-role">Employee Role</div>
            <div class="showcase-member-roast" id="showcase-roast">“Roast quote goes here”</div>

            <div class="showcase-nav-row">
              <button id="showcase-prev-btn" class="showcase-nav-btn" title="Previous Employee">←</button>
              <span id="showcase-index" class="showcase-index-pill">1 / ${employees.length}</span>
              <button id="showcase-next-btn" class="showcase-nav-btn" title="Next Employee">→</button>
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
          currentShowcaseIndex = (currentShowcaseIndex - 1 + employees.length) % employees.length;
          updateShowcaseCard();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          recordUserActivity();
          currentShowcaseIndex = (currentShowcaseIndex + 1) % employees.length;
          updateShowcaseCard();
        });
      }

      if (resetRealityBtn) {
        resetRealityBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          recordUserActivity();
          toggleMemeMode(false);
          closeMission();
          const restoreQuips = [
            '😇 Normal Photos Restored. Cowardly retreat back to corporate safety.',
            '😇 Back to reality. Let’s pretend you never saw those roasts.',
            '😇 Professionalism restored before HR investigates.'
          ];
          showSassyToast(restoreQuips[Math.floor(Math.random() * restoreQuips.length)], 3000);
        });
      }
    }

    function retryGame() {
      if (levelTransitionTimer) {
        clearTimeout(levelTransitionTimer);
        levelTransitionTimer = null;
      }
      isLevelTransitioning = false;
      currentLevel = 1;
      deathsCount = 0;
      if (deathsEl) deathsEl.innerText = '💀 Fails: 0';
      if (bannerSlot) bannerSlot.innerHTML = '';
      playSound('jump');
      const retryQuips = [
        '🔄 Restarting from Level 1? Embarrassing, but we respect the sheer delusion.',
        '🔄 Back to square one. Maybe try keeping your eyes open this time?',
        '🔄 Resetting! Hope you brought some extra dignity.'
      ];
      showSassyToast(retryQuips[Math.floor(Math.random() * retryQuips.length)], 2500);
      loadLevel(1);
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
      if (e.key === 'r' || e.key === 'R') retryGame();
    }

    function handleKeyUp(e) {
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.left = false;
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.right = false;
      if (['ArrowUp', 'w', 'W', ' ', 'Spacebar'].includes(e.key)) keys.jump = false;
    }

    if (activeCleanupKeyListeners) activeCleanupKeyListeners();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    activeCleanupKeyListeners = () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };

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
      retryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        retryGame();
      });
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
      gameAnimId = requestAnimationFrame(gameLoop);

      try {
        if (!player.isDying && !isLevelTransitioning) {
        // 1. Horizontal Movement
        const targetVx = (keys.right ? 3.6 : 0) - (keys.left ? 3.6 : 0);
        player.vx = player.vx * 0.72 + targetVx * 0.28;
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
          player.coyote = 6;
        } else if (player.coyote > 0) {
          player.coyote--;
        }

        if (keys.jump && player.coyote > 0) {
          player.vy = -9.1;
          player.coyote = 0;
          player.isGrounded = false;
          playSound('jump');
        }

        // Apply Movement
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

            if (p.type === 'elevator' && p.triggered) {
              p.x += p.vx;
              p.y += p.vy;
            }

            if (p.type === 'dodge') {
              // Troll 2: Platform slides sideways away as player approaches!
              if (player.x > 150 && player.x < 250 && !p.dodged) {
                p.dodged = true;
                p.targetX = 285;
                addFloatingText('BYE! ➡️', p.x, p.y - 12);
              }
              p.x += (p.targetX - p.x) * 0.12;
            }

            if (p.type === 'surprise') {
              // Troll 3: Invisible platform reveals when jumping into the impossible gap
              if (!p.revealed && player.x > 345 && player.x < 465 && player.y > 170) {
                p.revealed = true;
                playSound('win');
                addFloatingText('SURPRISE! ✨', p.x + 10, p.y - 12);
              }
              if (!p.revealed) return;
            }

            if (p.type === 'invisible') {
              // Level 2 Troll 2: Invisible safety platform revealed when falling near it
              if (!p.revealed && player.y > 165 && player.x > 95 && player.x < 195) {
                p.revealed = true;
                playSound('win');
                addFloatingText('SAVED! ✨', p.x + 10, p.y - 12);
              }
              if (!p.revealed) return;
            }

            if (p.type === 'fake_floor' && p.triggered) {
              p.vy += 0.55;
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

              // Trigger Disappearing Platform
              if (p.type === 'disappear' && !p.vanished) {
                p.vanished = true;
                playSound('die');
                triggerScreenShake();
                addFloatingText('NOPE! 💨', p.x + 20, p.y - 10);
              } else if (p.type === 'fake_floor' && !p.triggered) {
                p.triggered = true;
                p.vy = 4;
                playSound('troll');
                triggerScreenShake();
                addFloatingText('TRICKED! 🤡', p.x + 20, p.y - 10);
              } else if (p.type === 'elevator' && !p.triggered) {
                p.triggered = true;
                p.vx = 2.4;
                p.vy = -1.0;
                playSound('spring');
                addFloatingText('HOLD ON! 🚀', p.x + 10, p.y - 12);
              } else if (p.type === 'trampoline') {
                player.vy = -9.6;
                playSound('spring');
                triggerScreenShake();
                triggerHaptic(50);
                addFloatingText('BOING! 🛋️', p.x + p.w / 2 - 25, p.y - 14, '#00e676');
              }
            }
          });
        }

        // Level 1 Traps
        if (currentLevel === 1) {
          // Spring Object (FREE COFFEE ☕ catapults player backward)
          const so = levelData.springObject;
          if (so && Math.hypot((player.x + player.w / 2) - (so.x + so.w / 2), (player.y + player.h / 2) - (so.y + so.h / 2)) < 24) {
            playSound('spring');
            triggerScreenShake();
            triggerHaptic(60);
            player.vx = -15;
            player.vy = -6;
            addFloatingText('SPRING TRAP! 💥', so.x - 15, so.y - 20);
          }

          // Fake Wall (can be walked through)
          const fw = levelData.fakeWall;
          if (fw && !fw.triggered && player.x + player.w > fw.x && player.x < fw.x + fw.w && player.y + player.h > fw.y) {
            fw.triggered = true;
            addFloatingText('GHOST WALL 👻', fw.x - 10, fw.y - 10);
          }

          // Moving EXIT door
          if (levelData.door) {
            const d = levelData.door;
            const dist = Math.hypot((player.x + player.w / 2) - (d.x + d.w / 2), (player.y + player.h / 2) - (d.y + d.h / 2));

            if (dist < 85 && !d.moved) {
              d.moved = true;
              d.targetX = 625;
              playSound('troll');
              addFloatingText('NOPE! 🏃‍♂️', d.x, d.y - 15);
            }

            d.x += (d.targetX - d.x) * 0.14;

            // Reached real exit
            if (!isLevelTransitioning && Math.abs(player.x - d.x) < 26 && Math.abs(player.y - d.y) < 32) {
              completeLevel(1);
            }
          }
        }

        // Level 2 Traps
        if (currentLevel === 2) {
          // SAFE CHECKPOINT button betrayal
          const fc = levelData.fakeCheckpoint;
          if (fc && !fc.triggered && Math.hypot((player.x + player.w / 2) - (fc.x + fc.w / 2), (player.y + player.h / 2) - (fc.y + fc.h / 2)) < 24) {
            fc.triggered = true;
            addFloatingText('Checkpoint saved! ✅', fc.x, fc.y - 14, '#00e676');
            setTimeout(() => {
              playSound('troll');
              triggerScreenShake();
              addFloatingText('Saved? Absolutely not. 😂', player.x, player.y - 18, '#ff3366');
              player.vx = -16;
              player.vy = -6;
            }, 240);
          }

          // Moving hazard reversing direction
          const hz = levelData.hazard;
          if (hz) {
            hz.x += hz.vx;
            if (hz.x <= hz.minX || hz.x >= hz.maxX) hz.vx *= -1;

            const distHz = Math.hypot((player.x + player.w / 2) - (hz.x + hz.w / 2), (player.y + player.h / 2) - (hz.y + hz.h / 2));
            if (distHz < 70 && !hz.reversed && !player.isGrounded) {
              hz.reversed = true;
              hz.vx = (player.x > hz.x ? 3.8 : -3.8);
              playSound('alarm');
              addFloatingText('SURPRISE REVERSE! 🔄', hz.x, hz.y - 12);
            }

            if (distHz < 20) {
              killPlayer('Hit by rogue office machinery.');
            }
          }

          // Fake Door (Teleport trap)
          const fd = levelData.fakeDoor;
          if (fd && Math.hypot((player.x + player.w / 2) - (fd.x + fd.w / 2), (player.y + player.h / 2) - (fd.y + fd.h / 2)) < 26) {
            playSound('troll');
            triggerScreenShake();
            addFloatingText('Door was a lie. 🌀 TELEPORTED!', player.x - 20, player.y - 16);
            player.x = 215;
            player.y = 195;
            player.vx = -4;
          }

          // Fake Win Trophy (resets player slightly backward as requested)
          const fw = levelData.fakeWin;
          if (fw && Math.hypot((player.x + player.w / 2) - (fw.x + fw.w / 2), (player.y + player.h / 2) - (fw.y + fw.h / 2)) < 28) {
            playSound('troll');
            triggerScreenShake();
            addFloatingText('“HAHA. You actually believed that?”', fw.x - 30, fw.y - 18, '#ff3366');
            player.x = 220;
            player.y = 195;
            player.vx = -7;
            player.vy = -3;
          }

          // Real Door
          const rd = levelData.realDoor;
          if (rd && !isLevelTransitioning && Math.hypot((player.x + player.w / 2) - (rd.x + rd.w / 2), (player.y + player.h / 2) - (rd.y + rd.h / 2)) < 28) {
            completeLevel(2);
          }
        }

        // Level 3 Traps & Target (Tuned to be fair, hilarious, and fun to beat)
        if (currentLevel === 3) {
          // Fake Checkpoint in Level 3 (Comic roast, safe bounce)
          const fc3 = levelData.fakeCheckpoint;
          if (fc3 && !fc3.triggered && Math.hypot((player.x + player.w / 2) - (fc3.x + fc3.w / 2), (player.y + player.h / 2) - (fc3.y + fc3.h / 2)) < 24) {
            fc3.triggered = true;
            playSound('troll');
            addFloatingText('“HR rejected this checkpoint! 😂”', fc3.x - 20, fc3.y - 14, '#ff3366');
            player.vx = -3;
            player.vy = -2;
          }

          // Fake Door in Level 3 (Harmless teleport onto safe upper platform)
          const fd3 = levelData.fakeDoor;
          if (fd3 && Math.hypot((player.x + player.w / 2) - (fd3.x + fd3.w / 2), (player.y + player.h / 2) - (fd3.y + fd3.h / 2)) < 26) {
            playSound('troll');
            triggerScreenShake();
            addFloatingText('Shortcut denied by Management! 🌀', player.x - 30, player.y - 16);
            player.x = 395;
            player.y = 135;
            player.vx = 0;
            player.vy = 0;
          }

          // Moving Hazard in Level 3 (Office printer jam bump, non-lethal!)
          const hz3 = levelData.hazard;
          if (hz3) {
            hz3.x += hz3.vx;
            if (hz3.x <= hz3.minX || hz3.x >= hz3.maxX) hz3.vx *= -1;
            const distHz = Math.hypot((player.x + player.w / 2) - (hz3.x + hz3.w / 2), (player.y + player.h / 2) - (hz3.y + hz3.h / 2));
            if (distHz < 18) {
              playSound('spring');
              addFloatingText('Printer Jam! 🖨️', hz3.x - 10, hz3.y - 12);
              player.vx = player.x > hz3.x ? 3.5 : -3.5;
              player.vy = -2;
            }
          }

          // Final Target: The Employee (Fun, fair, and easy to catch)
          if (levelData.target) {
            const tgt = levelData.target;
            const dx = (player.x + player.w / 2) - (tgt.x + tgt.w / 2);
            const dy = (player.y + player.h / 2) - (tgt.y + tgt.h / 2);
            const dist = Math.hypot(dx, dy);

            tgt.timer += 0.02;

            // Target runs away when player approaches at a gentle, catchable speed
            if (dist < 140) {
              tgt.vx = (dx > 0 ? -1.8 : 1.8);
              tgt.stamina = (tgt.stamina !== undefined ? tgt.stamina : 100) - 1;

              if (tgt.stamina <= 0) {
                // Employee exhausts after a brief chase!
                tgt.vx *= 0.2;
                tgt.speech = 'I surrender! Take my appraisal! 🥵📈';
              } else if (Math.random() < 0.04) {
                const quips = [
                  'Catch me for appraisal! 📈',
                  'I was on mute! 🎙️',
                  'Wait, don\'t ping me on Slack! 🏃‍♂️',
                  'Friday 5 PM speed! 💨',
                  'Take my leaves, not my soul! 😭'
                ];
                tgt.speech = quips[Math.floor(Math.random() * quips.length)];
              }
            } else {
              tgt.vx *= 0.85;
            }

            tgt.x += tgt.vx;
            // Kept safely on the runway
            tgt.x = Math.max(490, Math.min(640, tgt.x));

            // Wide generous catch radius (dist < 48 instead of 28)
            if (!isLevelTransitioning && dist < 48) {
              completeLevel(3);
            }
          }
        }

        // Void death check
        if (!player.isDying && !isLevelTransitioning && player.y > (currentLevel === 3 ? 318 : 295)) {
          if (currentLevel === 3) {
            killPlayer('Bro escaped from work faster than from responsibility.');
          } else {
            killPlayer();
          }
        }
      }

      // ========================================================
      // RENDER CANVAS
      // ========================================================
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Office Cyber Grid Background
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
          if ((p.type === 'surprise' || p.type === 'invisible') && !p.revealed) {
            // Subtle shimmering hint
            ctx.fillStyle = 'rgba(255, 51, 102, 0.05)';
            ctx.fillRect(p.x, p.y, p.w, p.h);
            return;
          }

          // Trampoline Bouncy Platform (Level 3 Safety Net)
          if (p.type === 'trampoline') {
            ctx.fillStyle = 'rgba(16, 32, 48, 0.95)';
            ctx.beginPath();
            drawRoundRect(p.x, p.y, p.w, p.h, 8);
            ctx.fill();

            // Neon cyan bouncy rim
            ctx.strokeStyle = '#00f0ff';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(p.x + 4, p.y + 1);
            ctx.lineTo(p.x + p.w - 4, p.y + 1);
            ctx.stroke();

            // Centered beanbag label
            ctx.fillStyle = '#00f0ff';
            ctx.font = 'bold 9px sans-serif';
            ctx.fillText('🛋️ OFFICE SAFETY BEANBAG (BOUNCE TO RECOVER)', p.x + p.w / 2 - 110, p.y + 13);
            return;
          }

          // Platform Body
          ctx.fillStyle = p.flash > 0 ? '#ff3366' : 'rgba(30, 30, 44, 0.94)';
          ctx.beginPath();
          drawRoundRect(p.x, p.y, p.w, p.h, 6);
          ctx.fill();

          // Top Neon Border
          ctx.strokeStyle = (p.type === 'elevator' || p.type === 'surprise') ? '#bd00ff' : '#00e676';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x + 4, p.y + 1);
          ctx.lineTo(p.x + p.w - 4, p.y + 1);
          ctx.stroke();
        });
      }

      // Render Spring Object (Level 1)
      if (levelData.springObject) {
        const so = levelData.springObject;
        ctx.font = '20px sans-serif';
        ctx.fillText('☕', so.x, so.y + 18);
        ctx.fillStyle = '#ffe082';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText('FREE COFFEE', so.x - 12, so.y + 28);
      }

      // Render Fake Wall (Level 1)
      if (levelData.fakeWall) {
        const fw = levelData.fakeWall;
        ctx.fillStyle = 'rgba(60, 60, 80, 0.85)';
        ctx.fillRect(fw.x, fw.y, fw.w, fw.h);
        ctx.strokeStyle = '#ff3366';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(fw.x, fw.y, fw.w, fw.h);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('WALL', fw.x - 1, fw.y + 50);
      }

      // Render Checkpoint Button (Level 2)
      if (levelData.fakeCheckpoint) {
        const fc = levelData.fakeCheckpoint;
        ctx.fillStyle = '#00e676';
        ctx.beginPath();
        drawRoundRect(fc.x, fc.y, fc.w, fc.h, 6);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText('CHECKPOINT', fc.x + 2, fc.y + 14);
      }

      // Render Moving Hazard (Level 2)
      if (levelData.hazard) {
        const hz = levelData.hazard;
        ctx.font = '22px sans-serif';
        ctx.fillText('🖨️', hz.x, hz.y + 18);
      }

      // Render Fake Win Trophy (Level 2)
      if (levelData.fakeWin) {
        const fw = levelData.fakeWin;
        ctx.font = '24px sans-serif';
        ctx.fillText('🏆', fw.x, fw.y + 20);
        ctx.fillStyle = '#ffe082';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText('YOU WIN!', fw.x - 2, fw.y + 30);
      }

      // Render Doors
      if (levelData.door) {
        const d = levelData.door;
        ctx.fillStyle = '#00e676';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 5, d.y + 26);
      }

      if (levelData.fakeDoor) {
        const d = levelData.fakeDoor;
        ctx.fillStyle = '#ff3366';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#fff';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 5, d.y + 26);
      }

      if (levelData.realDoor) {
        const d = levelData.realDoor;
        ctx.fillStyle = '#00e676';
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('🚪', d.x + 5, d.y + 26);
      }

      // Render Employee Target (Level 3)
      if (levelData.target) {
        const tgt = levelData.target;
        ctx.font = '24px sans-serif';
        ctx.fillText('👔', tgt.x, tgt.y + 20);

        // Speech Bubble
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        drawRoundRect(tgt.x - 45, tgt.y - 18, 125, 16, 8);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText(tgt.speech, tgt.x - 40, tgt.y - 7);

        // "EMPLOYEE" label badge
        ctx.fillStyle = '#ff3366';
        ctx.font = 'bold 8px monospace';
        ctx.fillText('EMPLOYEE', tgt.x - 6, tgt.y + 28);

        // Prominent "CATCH THEM." Objective Indicator
        ctx.save();
        ctx.fillStyle = '#ff3366';
        ctx.font = 'bold 15px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        const pulse = 1 + Math.sin(Date.now() * 0.007) * 0.08;
        ctx.translate(585, 48);
        ctx.scale(pulse, pulse);
        ctx.shadowColor = 'rgba(255, 51, 102, 0.8)';
        ctx.shadowBlur = 12;
        ctx.fillText('🏃 CATCH THEM. 🏃', 0, 0);
        ctx.restore();
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
      } catch (err) {
        console.error('Troll game loop error:', err);
      }
    }

    // Start the Game Loop immediately!
    if (gameAnimId) cancelAnimationFrame(gameAnimId);
    gameAnimId = requestAnimationFrame(gameLoop);
  }
}

// ==========================================================
// FULL-SIZE PHOTO MODAL & WINDOW LOGIC
// ==========================================================
window.openPhotoModal = function(target) {
  const photoModal = document.getElementById('photo-modal');
  const photoModalImg = document.getElementById('photo-modal-img');
  const photoModalName = document.getElementById('photo-modal-name');
  const photoModalRole = document.getElementById('photo-modal-role');
  const photoPopup = document.getElementById('photo-popup');
  if (!target || !photoModal) return;

  // Dismiss hover popup immediately
  if (photoPopup) {
    photoPopup.classList.remove('visible');
  }

  // Get the new photo from photos folder
  const photoSrc = target.getAttribute('data-new-photo') || target.getAttribute('data-photo');
  if (!photoSrc) return;

  const nameText = target.querySelector('.team-name')?.innerText || target.innerText || 'Team Member';
  const numText = target.querySelector('.team-num')?.innerText;

  if (photoModalImg) {
    photoModalImg.classList.remove('zoomed');
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

window.openPhotoModalFromPopup = function() {
  if (window.currentHoverMemberTarget) {
    window.openPhotoModal(window.currentHoverMemberTarget);
  }
};

window.closePhotoModal = function() {
  const photoModal = document.getElementById('photo-modal');
  if (photoModal) {
    photoModal.classList.add('hidden');
  }
};

// Double-click on photo in modal to toggle zoom
const modalImg = document.getElementById('photo-modal-img');
if (modalImg) {
  modalImg.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    modalImg.classList.toggle('zoomed');
    triggerHaptic(50);
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closePhotoModal();
  }
});

// ==========================================================
// PASSWORD GATEWAY AUTHENTICATION
// ==========================================================
window.handlePasswordSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('gate-password-input');
  const gate = document.getElementById('password-gate');
  const card = document.querySelector('.password-gate-card');
  const errorMsg = document.getElementById('gate-error-msg');
  const errorText = document.getElementById('gate-error-text');
  const gateIcon = document.getElementById('gate-icon');
  const inputWrap = document.querySelector('.gate-input-wrap');

  if (!input || !gate) return false;

  const enteredPassword = input.value.trim();

  // Required password: strictly "PASSWORD" (case-sensitive)
  if (enteredPassword === 'PASSWORD') {
    if (errorMsg) errorMsg.classList.add('hidden');
    if (inputWrap) inputWrap.classList.remove('error');
    if (card) card.classList.add('success');
    if (gateIcon) gateIcon.innerText = '🔓';

    playHeartbeat(110, 0.25, 0.6);
    triggerHaptic([40, 60]);

    // Show Cumin & Coriander Warning Pop-up Modal before opening website
    const corianderPopup = document.getElementById('coriander-popup');
    const acceptBtn = document.getElementById('coriander-accept-btn');
    if (corianderPopup) {
      corianderPopup.classList.remove('hidden');
      if (acceptBtn) {
        setTimeout(() => acceptBtn.focus(), 120);
      }
    } else {
      // Direct fallback if popup DOM is not found
      window.handleAcceptWarning();
    }

    return false;
  } else {
    // Sarcastic error message for wrong password
    if (errorMsg) {
      errorMsg.classList.remove('hidden');
      if (errorText) {
        errorText.innerHTML = "🔐 <b>Hint:</b> The password is… well, the password. You can type it and open. 😂";
      }
    }
    if (inputWrap) inputWrap.classList.add('error');
    if (card) {
      card.classList.remove('shake');
      void card.offsetWidth; // Force re-flow
      card.classList.add('shake');
    }

    playAnimalSound('duck');
    triggerHaptic([80, 50, 80]);
    input.select();
    return false;
  }
};

// ==========================================================
// CUMIN & CORIANDER SURVIVAL ADVISORY CONFIRMATION
// ==========================================================
window.handleAcceptWarning = function(e) {
  if (e) e.preventDefault();
  const corianderPopup = document.getElementById('coriander-popup');
  const gate = document.getElementById('password-gate');

  if (corianderPopup) {
    corianderPopup.classList.add('hidden');
  }

  const accessQuips = [
    'Access Granted! Hide your cumin & coriander... you’ve entered the danger zone. 😭💀',
    'Access Granted! Protect your spices and your sanity at all costs. 🌿💀',
    'Entered the void! We take zero responsibility for lost coriander or lost brain cells.'
  ];
  showSassyToast(accessQuips[Math.floor(Math.random() * accessQuips.length)], 3800);
  playAnimalSound('goat');
  playHeartbeat(120, 0.25, 0.7);
  triggerHaptic([40, 60, 120]);

  if (gate) {
    gate.classList.add('unlocked');
  }
  startMusicOnUserGesture();
  triggerZoom();
};

function setupPasswordGate() {
  const input = document.getElementById('gate-password-input');

  // Auto-focus input on page open
  if (input) {
    setTimeout(() => input.focus(), 250);
  }

  // Allow Enter key to confirm Cumin & Coriander advisory when popup is active
  window.addEventListener('keydown', (e) => {
    const corianderPopup = document.getElementById('coriander-popup');
    if (corianderPopup && !corianderPopup.classList.contains('hidden')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.handleAcceptWarning();
      }
    }
  });
}

// ==========================================================
// ANTI-INSPECT & DEFENSE SHIELD (Screenshots Enabled)
// ==========================================================
function setupAntiInspectAndScreenshotProtection() {
  const shield = document.getElementById('screenshot-shield');
  if (shield) {
    shield.classList.add('hidden');
    shield.style.display = 'none';
  }

  function spawnRightClickDengey(x, y) {
    const el = document.createElement('div');
    el.className = 'dengey-popup';
    el.innerText = 'Dengey.....';
    el.style.left = `${x || window.innerWidth / 2}px`;
    el.style.top = `${y || window.innerHeight / 2}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1250);
  }

  // Right-Click feedback
  window.addEventListener('contextmenu', (e) => {
    spawnRightClickDengey(e.clientX, e.clientY);
  }, true);

  // Console notice
  console.log('%cdebadeba IT solutions', 'color: #00f0ff; font-size: 24px; font-weight: 800;');
}

// Start Deba Deba Engine
init();

