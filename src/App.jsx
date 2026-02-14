import React, { useState } from "react";
import "./styles/App.css";
import GenInfo from "./components/GenInfo";
import Path from "./components/Path";
import PersonExp from "./components/PersonExp";
import CVPreview from "./components/CVpreview";

function App() {

  const [genInfo, setGenInfo] = useState({ name: "", email: "", phone: "" });


  const [educationList, setEducationList] = useState([
    { school: "", title: "", date: "" }
  ]);


  const [experienceList, setExperienceList] = useState([
    { company: "", position: "", responsibilities: "", from: "", until: "" }
  ]);


  const addEducation = () => {
    setEducationList([...educationList, { school: "", title: "", date: "" }]);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      { company: "", position: "", responsibilities: "", from: "", until: "" }
    ]);
  };

  return (
    <div className="App">
      <div className="cv-container">
        {/* CV à gauche */}
        <div className="preview-section">
          <CVPreview
            generalInfo={genInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>

        {/* Formulaire à droite */}
        <div className="form-section">
          <h1>Mon CV</h1>

          <section>
            <h2>Informations générales</h2>
            <GenInfo data={genInfo} setData={setGenInfo} />
          </section>

          <section>
            <h2>Éducation</h2>
            {educationList.map((edu, index) => (
              <Path
                key={index}
                data={edu}
                setData={(newData) => {
                  const newList = [...educationList];
                  newList[index] = newData;
                  setEducationList(newList);
                }}
              />
            ))}
            <button onClick={addEducation}>Ajouter une formation</button>
          </section>

          <section>
            <h2>Expérience professionnelle</h2>
            {experienceList.map((exp, index) => (
              <PersonExp
                key={index}
                data={exp}
                setData={(newData) => {
                  const newList = [...experienceList];
                  newList[index] = newData;
                  setExperienceList(newList);
                }}
              />
            ))}
            <button onClick={addExperience}>Ajouter une expérience</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
