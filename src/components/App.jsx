import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import '../styles/App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const handlePersonalDetailsChange = (details) => setPersonalDetails(details);
  const handleEducationChange = (details) => setEducation(details);
  const handleExperienceChange = (details) => setExperience(details);

  return (
    <div className="app">
      <div className="sidebar">
        <div className="card">
          <h3>Personal Details</h3>
          <PersonalDetails onChange={handlePersonalDetailsChange} />
        </div>
        <div className="card">
          <h3>Education</h3>
          <Education onChange={handleEducationChange} />
        </div>
        <div className="card">
          <h3>Experience</h3>
          <Experience onChange={handleExperienceChange} />
        </div>
      </div>
      <div className="resume-container">
        <h2>Resume Preview</h2>
        <div className="resume-preview">
          <h3>{personalDetails.firstName} {personalDetails.lastName}</h3>
          <p>{personalDetails.phoneNumber}</p>
          <p>{personalDetails.email}</p>
          <p>{personalDetails.github}</p>
          <p>{personalDetails.linkedIn}</p>

          <h3>Education</h3>
          <p>{education.university}</p>
          <p>{education.startDate} - {education.gradDate}</p>
          <p>{education.major}</p>
          <p>{education.details}</p>

          <h3>Experience</h3>
          <p>{experience.companyName}</p>
          <p>{experience.positionTitle}</p>
          <p>{experience.startDate} - {experience.endDate}</p>
          <p>{experience.responsibilities}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
