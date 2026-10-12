/* ===== ADD / EDIT YOUR PROJECTS HERE =====
   To add a project: save a screenshot in the images folder, copy one block below and edit it. */
const projects = [
  {
    title: "Pagify - Online Bookstore",
    desc: "Full-stack MERN bookstore for browsing and buying books, with a cart that syncs in real time with the backend, RESTful APIs and a responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Axios"],
    image: "images/pagify.png",
    github: "https://github.com/srinanty-1369/PAGIFY",
    live: "https://pagify-eosin.vercel.app/"
  },
  {
    title: "SkyCast - Weather App",
    desc: "Search any city and get real-time weather, humidity and wind speed from an external API, wrapped in a glassmorphism UI with a sky-inspired backdrop.",
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    image: "images/skycast.png",
    github: "https://github.com/srinanty-1369/skycast",
    live: "https://srinanty-1369.github.io/skycast/"
  },
  {
    title: "Guess My Number",
    desc: "Retro pixel-style number guessing game (0 to 1000) with live score, highscore tracking, and instant feedback after every guess.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "images/guess-number.png",
    github: "https://github.com/srinanty-1369/guess-my-number",
    live: "https://srinanty-1369.github.io/guess-my-number/"
  }

  // ===== EXPENSE TRACKER (React): add later =====
  // 1. Save a screenshot as images/expense-tracker.png
  // 2. Fill in the real github/live links
  // 3. Remove the // at the start of each line below, and add a comma after the "}" of the project above
  //
  // ,{
  //   title: "Expense Tracker",
  //   desc: "A React app to record income and expenses and keep track of where your money goes.",
  //   tech: ["React", "JavaScript", "CSS"],
  //   image: "images/expense-tracker.png",
  //   github: "",   // add repo link
  //   live: ""      // add live link
  // }
];

const grid = document.getElementById('grid');
projects.forEach(p => {
  const el = document.createElement('article');
  el.className = 'card rv';
  el.innerHTML = `
    <div class="media">
      <img src="${p.image}" alt="${p.title} screenshot" loading="lazy">
      <span>Add screenshot<br>${p.image}</span>
    </div>
    <div class="body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="chips">${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      <div class="links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub &#8599;</a>` : ''}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live demo &#8599;</a>` : ''}
      </div>
    </div>`;
  const media = el.querySelector('.media');
  const img = media.querySelector('img');
  img.addEventListener('error', () => media.classList.add('empty'));
  media.addEventListener('click', () => {
    if (media.classList.contains('empty')) return;
    const lb = document.getElementById('lb');
    lb.querySelector('img').src = p.image;
    lb.classList.add('on');
  });
  grid.appendChild(el);
});
document.getElementById('lb').addEventListener('click', e => e.currentTarget.classList.remove('on'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.getElementById('lb').classList.remove('on'); });

/* typing effect */
const words = ["full-stack web apps.", "MERN applications.", "clean, responsive UIs.", "REST APIs."];
const typed = document.getElementById('typed');
let w = 0, c = 0, del = false;
(function tick(){
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 35 : 75);
})();

/* scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* cursor glow */
const glow = document.getElementById('glow');
addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

document.getElementById('yr').textContent = new Date().getFullYear();


/* journey tabs */
const tabs=[...document.querySelectorAll('.tab')], pill=document.querySelector('.pill');
function movePill(){const a=document.querySelector('.tab.active');pill.style.width=a.offsetWidth+'px';pill.style.transform=`translateX(${a.offsetLeft-5}px)`}
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active')); t.classList.add('active');
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('show'));
  document.getElementById(t.dataset.tab).classList.add('show'); movePill();
}));
addEventListener('load',movePill); addEventListener('resize',movePill);

/* copy email */
document.getElementById('copyMail').addEventListener('click',e=>{
  const b=e.currentTarget;
  navigator.clipboard.writeText('srinantyghosh@gmail.com').then(()=>{b.textContent='Copied!';setTimeout(()=>b.textContent='Copy',1600)});
});