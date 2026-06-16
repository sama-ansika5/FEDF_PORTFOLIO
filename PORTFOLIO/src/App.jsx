import "./App.css";

export default function App() {
  return (
    <div className="portfolio">

      {/* Hero Section */}
      <header className="hero">
        <h1>ANSIKA REDDY</h1>
        <h3>React Developer | Electronics and Communication Student</h3>

        <p>
          Passionate about creating modern web applications using
          React, JavaScript, HTML, CSS, Context API and Vite.
        </p>
      </header>

      {/* About */}
      <section className="card">
        <h2>About Me</h2>

        <p>
          I am a Electronics and Communication student with a strong interest in
          Frontend Development. I enjoy building responsive and
          user-friendly web applications using modern technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Technical Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Context API</span>
          <span>Vite</span>
          <span>GitHub</span>
          <span>Python</span>
          <span>SQL</span>
        </div>
      </section>

      {/* Projects */}
      <section className="card">
        <h2>Projects</h2>

        <div className="project">
          <h3> SmartCare Hospital Management System</h3>

          <p>
            Developed a React-based Hospital Management System to manage
            patients, doctors and appointments efficiently.
          </p>

          <h4>Project Features</h4>

          <ul>
            <li>Add Patient Module</li>
            <li>Doctor Management</li>
            <li>Appointment Booking</li>
            <li>Dashboard Statistics</li>
            <li>Responsive UI</li>
            <li>State Management with Context API</li>
            <li>Error Boundary Implementation</li>
            <li>Local Storage Integration</li>
          </ul>
        </div>
      </section>

     

      {/* Education */}
      <section className="card">
        <h2>Education</h2>

        <p><strong>Degree:</strong> B.Tech - Electronics and Communication Engineering</p>

        <p><strong>Graduation Year:</strong> 2029</p>
      </section>

      {/* Contact */}
      <section className="card">
        <h2>Contact Information</h2>

        <p>Email: samaansika4@gmail.com</p>
        <p>Phone: 9391834029</p>
        <p>GitHub: github.com/yourprofile</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <footer>
        © 2026 Ansika Reddy | Portfolio
      </footer>

    </div>
  );
}
