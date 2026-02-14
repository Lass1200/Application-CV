import React, { useState } from "react";

function Path({ data, setData }) {
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
        name="school"
        value={localData.school}
        onChange={handleChange}
        placeholder="École"
      />
      <input
        name="title"
        value={localData.title}
        onChange={handleChange}
        placeholder="Titre d’étude"
      />
      <input
        type="date"
        name="date"
        value={localData.date}
        onChange={handleChange}
      />
      <button type="submit">Envoyer</button>
    </form>
  ) : (
    <div>
      <p><strong>École :</strong> {localData.school}</p>
      <p><strong>Titre :</strong> {localData.title}</p>
      <p><strong>Date :</strong> {localData.date}</p>
      <button onClick={() => setIsEditing(true)}>Modifier</button>
    </div>
  );
}

export default Path;
