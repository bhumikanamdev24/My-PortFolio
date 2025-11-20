import React from "react";

const projects = [
  {
    id: 1,
    title: "Myntra Clone",
    desc: "Responsive e-commerce homepage built with HTML & CSS. Includes navigation, product cards and banners.",
    img: null,
    link: "#"
  },
  {
    id: 2,
    title: "Image Gallery",
    desc: "A stylish image gallery using CSS Grid & Flexbox with hover effects and responsiveness.",
    img: null,
    link: "#"
  },
  {
    id: 3,
    title: "Mini Web App",
    desc: "A small interactive UI project built with React focusing on component design.",
    img: null,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-light">
      <div className="container">
        <div className="section-card">
          <h2>Projects</h2>
          <p>Some projects I have built — click to see details.</p>

          <div className="row mt-3 g-3">
            {projects.map(p => (
              <div key={p.id} className="col-md-4">
                <div className="p-3 h-100 d-flex flex-column">
                  <div className="project-img mb-3">
                    <div>{p.title} Image</div>
                  </div>
                  <h5>{p.title}</h5>
                  <p className="mb-3" style={{flex:1}}>{p.desc}</p>
                  <div className="mt-auto">
                    <a className="btn btn-outline-primary btn-sm me-2" href={p.link} target="_blank" rel="noreferrer">View</a>
                    <a className="btn btn-primary btn-sm" href={p.link} target="_blank" rel="noreferrer">Live</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-muted">Tip: Replace project placeholders with screenshots in <code>/src/assets/</code>.</p>
        </div>
      </div>
    </section>
  );
}
