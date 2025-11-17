import React from 'react';

const WhatIDo = () => {
const services = [
  {
    title: "ML Engineer",
    desc: "I build end-to-end ML models, like my Titanic survival predictor, from raw data to clear insights."
  },
  {
    title: "Frontend Mobile Development",
    desc: "I create responsive, user-friendly mobile interfaces using Kotlin, ensuring seamless experiences."
  },
  {
    title: "Web Development",
    desc: "I develop full-stack web applications with React, Node.js, and RESTful APIs, focused on performance, accessibility, and real-world usability."
  },
  {
    title: "UI/UX Design",
    desc: "I design intuitive, human-centered interfaces that prioritize clarity and task efficiency."
  },
  {
    title: "Quality Assurance",
    desc: "I ensure reliability through automated testing, edge-case validation."
  },
  {
    title: "Backend Development",
    desc: "I build reliable APIs and server logic with Node.js, powering apps like iRecycle and FruitGuard with secure, scalable backend systems"
  }
];

  return (
    <section id="what-i-do" className="section">
      <h2 className="section-title">What I Do</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="card">
            <div className="service-icon"></div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;