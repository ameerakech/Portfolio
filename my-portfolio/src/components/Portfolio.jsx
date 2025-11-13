import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      img: "/Images/iRecycle.png",
      title: "iRecycle",
      description: "A platform connecting second-hand clothing traders with recycling companies to promote circular fashion and reduce textile waste.",
      githubLink: "https://github.com/akirachix/imperial-mobile"
    },
    {
      img: "/Images/fruitguard.png",
      title: "FruitGuard",
      description: "An IoT system for smallholder mango farmers to track fruit fly traps and receive real-time alerts via an SMS.",
      liveLink: "https://fruitguard-mocha.vercel.app/",
      githubLink: "https://github.com/akirachix/fruitguard-frontend"
    },
    {
      img: "/Images/titanic.png",
      title: "Titanic Survival prediction",
      description: "Cleaned, explored, and modeled the Titanic dataset to predict survival using Python and scikit-learn — with full reproducibility and model comparison.",
      githubLink: "https://github.com/ameerakech/Titanic_data_cleaning/tree/master"
    },
    {
      img: "/Images/iRecycle-API.png",
      title: "iRecycle API",
      description: "RESTful API powering the iRecycle platform with secure endpoints for traders and recyclers.",
      githubLink: "https://github.com/akirachix/imperial_backend"
    },
    {
      img: "/Images/Ankole.png",
      title: "Ankole Grill Informational Website",
      description: "A responsive website for a local restaurant built with React and modern CSS.",
      liveLink: "https://lucky-babka-7c09f6.netlify.app/",
      githubLink: "https://github.com/ameerakech/Ankole-Informational-Website"
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="card portfolio-item">
            {project.img && <img src={project.img} alt={project.title} />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio-buttons">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                  View Site
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;