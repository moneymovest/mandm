// Firebase Auth Check
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "/mandm/login/index.html";
  }
});

// Copy Link Function
function copyLink() {
  const link = "https://moneymovest.github.io/mandm/";
  navigator.clipboard.writeText(link).then(() => {
    alert("Link copied to clipboard!");
  });
}

// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.insertBefore(renderer.domElement, document.body.firstChild);

// Add floating shapes
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshPhongMaterial({ 
  color: 0x6e48aa, 
  emissive: 0x1a1a1a, 
  flatShading: true 
});

for (let i = 0; i < 5; i++) {
  const shape = new THREE.Mesh(geometry, material);
  shape.position.set(
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * -10
  );
  scene.add(shape);
}

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  scene.children.forEach(child => {
    if (child instanceof THREE.Mesh) {
      child.rotation.x += 0.005;
      child.rotation.y += 0.01;
    }
  });
  renderer.render(scene, camera);
}
animate();

// Color Explosion Transition
function explodeAndRedirect(url) {
  const container = document.createElement("div");
  container.id = "particle-container";
  document.body.appendChild(container);

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: absolute;
      width: 10px;
      height: 10px;
      background: hsl(${Math.random() * 360}, 100%, 50%);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
    `;
    container.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 4;
    
    const animation = particle.animate([
      { transform: 'translate(-50%, -50%)', opacity: 1 },
      { 
        transform: `translate(${Math.cos(angle) * 300}px, ${Math.sin(angle) * 300}px)`,
        opacity: 0 
      }
    ], {
      duration: 1000 + Math.random() * 500,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    animation.onfinish = () => particle.remove();
  }

  setTimeout(() => {
    window.location.href = url;
  }, 800);
}

// Apply to all 3D buttons
document.querySelectorAll(".btn-3d").forEach(btn => {
  if (btn.tagName === 'A') {
    btn.addEventListener("click", (e) => {
      if (!btn.href.includes('#')) { // Skip anchor links
        e.preventDefault();
        explodeAndRedirect(btn.href);
      }
    });
  }
});

// Window Resize Handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
