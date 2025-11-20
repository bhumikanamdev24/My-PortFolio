import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Git", "VS Code", "Responsive Design", "Problem Solving"
];

const soft = ["Communication", "Teamwork", "Leadership", "Problem Solving", "Creativity"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-card">
          <h2>Skills</h2>
          <p>Technologies and tools I work with:</p>

          <div className="mt-3">
            {skills.map(s => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Frontend</h5>
              <p>React, component design, responsive layouts, accessibility</p>
            </div>

            <div className="col-md-6">
              <h5>Tools & Soft Skills</h5>
              <p>
                {soft.map(x => <span key={x} style={{display:"inline-block", marginRight:8, color:"var(--muted)"}}>{x} •</span>)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
