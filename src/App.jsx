import "./App.css";
function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Srilatha.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>Dharavath Srilatha</h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="description">
            Passionate about Python, Java, Machine Learning,
            Artificial Intelligence and ServiceNow.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science and Engineering student interested in
          software development, Machine Learning, Artificial Intelligence
          and ServiceNow technologies.
        </p>
      </section>

      {/* Skills Section */}
<section id="skills" className="section">
  <div className="section-title">
    <p>WHAT I KNOW</p>
    <h2>My Skills</h2>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-icon">💻</div>
      <h3>Programming</h3>
      <p>Java, Python, C</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🧠</div>
      <h3>Core CS</h3>
      <p>Data Structures, DBMS, Operating Systems</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🤖</div>
      <h3>AI & Machine Learning</h3>
      <p>Machine Learning, Artificial Intelligence</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">📊</div>
      <h3>Data & Analytics</h3>
      <p>Pandas, NumPy, Matplotlib, Power BI</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🛠️</div>
      <h3>Tools</h3>
      <p>Git, GitHub, VS Code</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">☁️</div>
      <h3>ServiceNow</h3>
      <p>CSA, CAD</p>
    </div>

  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="section">
  <div className="section-title">
    <p>MY WORK</p>
    <h2>Featured Projects</h2>
  </div>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-number">01</div>

      <h3>Road Accident Analysis using Machine Learning</h3>

      <p>
        Developed Machine Learning models to analyze road accident
        patterns and identify important risk factors using data analysis.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>Data Analysis</span>
      </div>

      <a
        href="#"
        className="project-link"
      >
        View Project →
      </a>
    </div>


    <div className="project-card">
      <div className="project-number">02</div>

      <h3>AI-Based Proactive Bus Scheduling System</h3>

      <p>
        Designed an AI-based system to predict passenger demand and
        optimize bus scheduling efficiency, resource utilization
        and fuel usage.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>AI</span>
        <span>Machine Learning</span>
      </div>

      <a
        href="#"
        className="project-link"
      >
        View Project →
      </a>
    </div>

  </div>
</section>

      {/* Certifications Section */}
<section id="certifications" className="section">
  <div className="section-title">
    <p>MY ACHIEVEMENTS</p>
    <h2>Certifications</h2>
  </div>

  <div className="certifications-grid">

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>

      <h3>ServiceNow Certified System Administrator</h3>

      <p>CSA</p>

      <span>ServiceNow</span>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>

      <h3>ServiceNow Certified Application Developer</h3>

      <p>CAD</p>

      <span>ServiceNow</span>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">📜</div>

      <h3>NPTEL Certifications</h3>

      <p>Python • Java • DBMS • Operating Systems</p>

      <span>NPTEL</span>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">📜</div>

      <h3>Programming Essentials in C</h3>

      <p>Programming Fundamentals</p>

      <span>Cisco</span>
    </div>


    <div className="certificate-card">
      <div className="certificate-icon">📊</div>

      <h3>Power BI Basics</h3>

      <p>Data Visualization & Analytics</p>

      <span>Power BI</span>
    </div>

  </div>
</section>
{/* Education Section */}
<section id="education" className="section">
  <div className="section-title">
    <p>MY JOURNEY</p>
    <h2>Education</h2>
  </div>

  <div className="education-card">
    <div className="education-year">
      2023 - 2027
    </div>

    <div className="education-content">
      <h3>Bachelor of Technology - Computer Science and Engineering</h3>

      <h4>Vignan Institute of Technology and Science</h4>

      <p>
        Computer Science and Engineering student with a strong interest
        in Software Development, Artificial Intelligence, Machine Learning
        and ServiceNow.
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="section contact-section">
  <div className="section-title">
    <p>GET IN TOUCH</p>
    <h2>Let's Connect</h2>
  </div>

  <p className="contact-intro">
    I'm open to opportunities, internships, collaborations and
    interesting projects. Feel free to connect with me.
  </p>

  <div className="contact-grid">

    <a
      href="mailto:your-email@gmail.com"
      className="contact-card"
    >
      <div className="contact-icon">📧</div>
      <h3>Email</h3>
      <p>Send me an Email</p>
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <div className="contact-icon">💻</div>
      <h3>GitHub</h3>
      <p>View my projects</p>
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <div className="contact-icon">🔗</div>
      <h3>LinkedIn</h3>
      <p>Connect with me</p>
    </a>

  </div>
</section>
    </>
  );
}

export default App;