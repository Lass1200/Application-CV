import React, { useState } from "react";

function GenInfo({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [localData, setLocalData] = useState(data);

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
        name="name"
        value={localData.name}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        name="email"
        value={localData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="phone"
        value={localData.phone}
        onChange={handleChange}
        placeholder="Téléphone"
      />
      <button type="submit">Envoyer</button>
    </form>
  ) : (
    <div>
      <p><strong>Nom :</strong> {localData.name}</p>
      <p><strong>Email :</strong> {localData.email}</p>
      <p><strong>Téléphone :</strong> {localData.phone}</p>
      <button onClick={() => setIsEditing(true)}>Modifier</button>
    </div>
  );
}

export default GenInfo;
