import React from "react";

export default function CVPreview({ generalInfo, educationList, experienceList }) {
  return (
    <div>
      <h2>CV Complet</h2>

      <section>
        <h3>Informations générales</h3>
        <p><strong>Nom :</strong> {generalInfo.name}</p>
        <p><strong>Email :</strong> {generalInfo.email}</p>
        <p><strong>Téléphone :</strong> {generalInfo.phone}</p>
      </section>

      <section>
        <h3>Éducation</h3>
        {educationList.map((edu, index) => (
          <div key={index}>
            <p><strong>École :</strong> {edu.school}</p>
            <p><strong>Titre :</strong> {edu.title}</p>
            <p><strong>Date :</strong> {edu.date}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Expérience professionnelle</h3>
        {experienceList.map((exp, index) => (
          <div key={index}>
            <p><strong>Entreprise :</strong> {exp.company}</p>
            <p><strong>Poste :</strong> {exp.position}</p>
            <p><strong>Responsabilités :</strong> {exp.responsibilities}</p>
            <p><strong>De :</strong> {exp.from} <strong>À :</strong> {exp.until}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
