import React from 'react';

const Resume = () => {
  const education = [
    { 
      degree: "Diploma in Information Technology", 
      school: "AkiraChix", 
      year: "2025 – Present" 
    },
  ];

  return (
    <section id="resume" className="section">
      <h2 className="section-title">My Resume</h2>
      
      <div className="resume-content">
      
        {education.map((item, idx) => (
          <div key={idx} className="card resume-item">
            <h3>{item.degree}</h3>
            {item.school && <p>{item.school}</p>}
            {item.year && <span>{item.year}</span>}
          </div>
        ))}

        <div className="card resume-item resume-download-card">
          <h3>Full Professional Resume</h3>
          <p>Download my complete resume with detailed projects, skills, and experience.</p>
          <a 
            href="/Images/Data-CV.pdf" 
            download="Ameer_Akech_Resume"
            className="btn resume-download-btn"
          >
            <i className="fas fa-file-pdf"></i> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;