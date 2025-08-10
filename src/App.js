import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaDesktop, FaServer, FaTools, FaUserCog, FaDatabase, FaNodeJs, FaFire, FaJs, FaHtml5, FaCss3Alt, FaReact, FaCodeBranch, FaEye, FaPhone, FaFacebook, FaInstagram, FaGithub, FaCopy } from "react-icons/fa";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./App.css";
import emailjs from "emailjs-com";

function AnimatedName() {
  const name = "Eugenia Michelle Masiyemvura";
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1 className="animated-name">{displayed}</h1>
      <h2 className="subtitle">Software Developer</h2>
      <div className="home-desc">A software developer who loves turning ideas into smooth, user-friendly digital experiences.</div>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const handleProjects = () => navigate("/projects");
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <AnimatedName />
      <div className="home-btns">
        <button className="btn projects-btn" onClick={handleProjects}>View My Projects</button>
        <a className="btn cv-btn" href="/Eugenia%20M%20Masiyemvura%20CV.pdf" target="_blank" rel="noopener noreferrer">Download My CV</a>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about-terminal">
      <div className="terminal-header">
        <span className="console-prefix">&gt;_</span> ABOUT_SYSTEM
      </div>
      <div className="about-bio-block">
        <div className="about-bio-title">Eugenia Michelle Masiyemvura</div>
        <div className="about-bio-desc">I'm Eugenia Michelle Masiyemvura, a Software Developer with a passion for crafting innovative digital experiences.</div>
        <div className="about-info-cards">
          <div className="info-card"><span className="info-label">01</span> Years of Experience</div>
          <div className="info-card"><span className="info-label">10+</span> Projects</div>
          <div className="info-card"><span className="info-label">100%</span> Client Satisfaction</div>
          <div className="info-card"><span className="info-label">24/7</span> Learning Mindset</div>
        </div>
      </div>
      <div className="about-init-seq">
        <span className="init-label">Initialization Sequence:</span> After joining Uncommon.org's bootcamp, I began my journey into software development.
      </div>
      <div className="about-programs">
        <span className="programs-label">Executed Programs:</span>
        <ul>
          <li><b>Simba</b>: A web showcase for Simba, the popular chips brand from South Africa (like Doritos).</li>
          <li><b>Bakers Inn</b>: A digital menu and ordering system for a local restaurant.</li>
          <li><b>Habit Tracker</b>: A gamified habit tracker for building and maintaining daily rituals.</li>
          <li><b>Tech Connect</b>: A networking platform connecting tech enthusiasts and professionals.</li>
        </ul>
      </div>
      <div className="about-future">
        <span className="future-label">Future Protocols:</span> I'm eager to build impactful digital experiences, explore new tech, and contribute to innovation.
      </div>
    </section>
  );
}

const skillCategories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "<svg width='20' height='20' fill='none' stroke='#50c878'><rect x='3' y='3' width='14' height='14' rx='2' stroke-width='2'/></svg>",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Styled Components", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: "<svg width='20' height='20' fill='none' stroke='#50c878'><circle cx='10' cy='10' r='8' stroke-width='2'/></svg>",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Firebase", level: 75 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    key: "tools",
    label: "Tools & Methods",
    icon: "<svg width='20' height='20' fill='none' stroke='#50c878'><path d='M4 16l12-12M4 4h12v12' stroke-width='2'/></svg>",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Agile/Scrum", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    key: "personal",
    label: "Personal Skills",
    icon: "<svg width='20' height='20' fill='none' stroke='#50c878'><circle cx='10' cy='7' r='4' stroke-width='2'/><path d='M2 18c0-3.3 3.6-6 8-6s8 2.7 8 6' stroke-width='2'/></svg>",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 95 },
    ],
  },
];

function Skills() {
  const [selected, setSelected] = useState("frontend");
  const category = skillCategories.find((c) => c.key === selected);
  return (
    <section className="skills-matrix-bg">
      <div className="skills-matrix-container">
        <div className="skills-sidebar">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              className={`skills-cat-btn${selected === cat.key ? " active" : ""}`}
              onClick={() => setSelected(cat.key)}
              dangerouslySetInnerHTML={{ __html: cat.icon + " " + cat.label }}
            />
          ))}
        </div>
        <div className="skills-main">
          <div className="skills-header">
            <span className="console-prefix">&gt;_</span> <span className="skills-title">SKILL_MATRIX</span>
          </div>
          <div className="skills-desc">SELECT CATEGORY TO VIEW DETAILED ANALYSIS</div>
          <div className="skills-list">
            {category.skills.map((skill) => (
              <div className="skill-bar-row" key={skill.name}>
                <div className="skill-label">{skill.name}</div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                  <span className="skill-bar-percent">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="skills-matrix-status">SKILL_MATRIX.STATUS: <span className="status-operational">OPERATIONAL</span></div>
    </section>
  );
}

const projectData = [
  {
    name: "Simba",
    type: ["frontend", "backend", "fullstack"],
    url: "https://simba2-lac.vercel.app/",
    desc: "A web showcase for Simba, the popular chips brand from South Africa (like Doritos).",
  },
  {
    name: "Bakers Inn",
    type: ["frontend"],
    url: "https://bakersinn-r2s4.vercel.app/",
    desc: "A digital menu and ordering system for a local restaurant.",
  },
  {
    name: "Habit Tracker",
    type: ["frontend"],
    url: "https://habit-tracker-nu-seven.vercel.app/",
    desc: "A gamified habit tracker for building and maintaining daily rituals.",
  },
  {
    name: "Tech Connect",
    type: ["frontend", "backend", "fullstack"],
    url: "https://tech-connect-blond.vercel.app/",
    desc: "A networking platform connecting tech enthusiasts and professionals.",
  },
  {
    name: "Cudberry Redesign",
    type: ["frontend"],
    url: "https://cudberry.vercel.app/",
    desc: "A complete website redesign for Cudberry using React, focusing on modern UI/UX principles and responsive design.",
  },
  {
    name: "ZUWIB Organization",
    type: ["frontend"],
    url: "https://zuwmib.vercel.app/",
    desc: "Website for Zimbabwe Unrecognised Men and Women in Business, founded by Primrose January, empowering entrepreneurs.",
  },
  {
    name: "Smart Appointment Scheduler",
    type: ["frontend", "backend", "fullstack"],
    url: "https://schedule-appointments-tawny.vercel.app/",
    desc: "Inspired by the need to streamline scheduling processes, this smart appointment system helps businesses manage bookings efficiently.",
  },
  {
    name: "Daniel Portfolio",
    type: ["frontend"],
    url: "https://daniel-smoky-delta.vercel.app/",
    desc: "A portfolio website created for a colleague at school, showcasing collaborative development skills and teamwork.",
  },
  {
    name: "Food Vibe",
    type: ["frontend"],
    url: "https://food-lovat-iota.vercel.app/",
    desc: "A food-themed project inspired by a coding challenge from my instructor, demonstrating creative problem-solving and technical skills.",
  },
];

const projectFilters = [
  { key: "all", label: "ALL" },
  { key: "frontend", label: "<>&nbsp;FRONTEND" },
  { key: "backend", label: "&#x1F5C3; BACKEND" },
  { key: "fullstack", label: "FULL STACK" },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projectData : projectData.filter(p => p.type.includes(filter));
  return (
    <section className="projects-matrix-bg">
      <div className="projects-matrix-header">
        <div className="console-prefix">&gt;_</div>
        <span className="projects-matrix-title">EMM</span>
      </div>
      <div className="projects-matrix-box">
        <div className="projects-matrix-title-row">
          <span className="projects-matrix-title-main">&lt;&gt; PROJECT_MATRIX</span>
          <div className="projects-matrix-sub">EXECUTING PROJECT VISUALIZATION SEQUENCE</div>
        </div>
        <div className="projects-matrix-filters">
          {projectFilters.map(f => (
            <button
              key={f.key}
              className={`projects-matrix-filter${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
              dangerouslySetInnerHTML={{ __html: f.label }}
            />
          ))}
        </div>
        <div className="projects-matrix-cards">
          {filtered.map((proj, i) => (
            <div className="project-card" key={proj.name}>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <div className="project-card-eye"><FaEye /></div>
                <div className="project-card-content">
                  <div className="project-card-title">{proj.name}</div>
                  <div className="project-card-desc">{proj.desc}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-matrix-status">PROJECT_MATRIX.STATUS: <span className="status-operational">OPERATIONAL</span></div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "YOUR_SERVICE_ID", // replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "YOUR_USER_ID" // replace with your EmailJS public key
    ).then(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMsg("Copied!");
    setTimeout(() => setCopyMsg(""), 1200);
  };

  return (
    <section className="contact-terminal">
      <div className="contact-header">
        <span className="console-prefix">&gt;_</span> <span className="contact-title">EMM</span>
      </div>
      <div className="contact-box">
        <div className="contact-info">
          <div className="contact-info-block">
            <FaEnvelope className="contact-icon" /> EMAIL
            <div className="contact-info-value">
              <span>masiyemvuraeugeniamichelle@gmail.com</span>
              <button className="copy-btn" onClick={() => handleCopy("masiyemvuraeugeniamichelle@gmail.com")}>{copyMsg ? copyMsg : <FaCopy />}</button>
            </div>
          </div>
          <div className="contact-info-block">
            <FaPhone className="contact-icon" /> PHONE
            <div className="contact-info-value">
              <span>+263 789 756 916</span>
              <button className="copy-btn" onClick={() => handleCopy("+263789756916")}>{copyMsg ? copyMsg : <FaCopy />}</button>
            </div>
          </div>
          <div className="contact-socials">
            <a href="https://www.facebook.com/euge.mitchell/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/mychie04/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/michiemasiye" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>NAME
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" />
          </label>
          <label>EMAIL
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" />
          </label>
          <label>MESSAGE
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Enter your message" rows={5} />
          </label>
          <button className="send-btn" type="submit">{sent ? "MESSAGE SENT!" : <><FaEnvelope style={{marginRight:8}}/>SEND MESSAGE</>}</button>
        </form>
      </div>
    </section>
  );
}

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">EMM</div>
      <ul>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}><FaHome style={{verticalAlign:'middle', marginRight:6}}/>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}><FaUser style={{verticalAlign:'middle', marginRight:6}}/>About</Link></li>
        <li><Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}><FaCode style={{verticalAlign:'middle', marginRight:6}}/>Skills</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}><FaProjectDiagram style={{verticalAlign:'middle', marginRight:6}}/>Projects</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}><FaEnvelope style={{verticalAlign:'middle', marginRight:6}}/>Contact</Link></li>
      </ul>
      <div className="nav-icons">{/* Add social icons here if needed */}</div>
    </nav>
  );
}

function ParticleBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  return (
    <Particles
      className="animated-bg"
      init={particlesInit}
      options={{
        background: { color: { value: "#101820" } },
        fpsLimit: 60,
        interactivity: {
          events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
          color: { value: ["#50c878", "#d4af37"] },
          links: { enable: true, color: "#d4af37", distance: 150, opacity: 0.3, width: 1 },
          collisions: { enable: true },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1.2, straight: false },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 4 } }
        },
        detectRetina: true
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <ParticleBg />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
