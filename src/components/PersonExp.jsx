import React, { useState } from "react";

function PersonExp({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [localData, setLocalData] = useState(data); // state local

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(localData);
    setIsEditing(false);
  };

  return isEditing ? (
    <form onSubmit={handleSubmit}>
      <input
        name="company"
        value={localData.company}
        onChange={handleChange}
        placeholder="Entreprise"
      />
      <input
        name="position"
        value={localData.position}
        onChange={handleChange}
        placeholder="Poste"
      />
      <textarea
        name="responsibilities"
        value={localData.responsibilities}
        onChange={handleChange}
        placeholder="Responsabilités"
      />
      <input
        type="date"
        name="from"
        value={localData.from}
        onChange={handleChange}
      />
      <input
        type="date"
        name="until"
        value={localData.until}
        onChange={handleChange}
      />
      <button type="submit">Envoyer</button>
    </form>
  ) : (
    <div>
      <p><strong>Entreprise :</strong> {localData.company}</p>
      <p><strong>Poste :</strong> {localData.position}</p>
      <p><strong>Responsabilités :</strong> {localData.responsibilities}</p>
      <p><strong>De :</strong> {localData.from} <strong>À :</strong> {localData.until}</p>
      <button onClick={() => setIsEditing(true)}>Modifier</button>
    </div>
  );
}

export default PersonExp;
