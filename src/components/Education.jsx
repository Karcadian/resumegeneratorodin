import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";

function Education({ onChange }) {
  const [education, setEducation] = useState({
    university: "",
    startDate: "",
    gradDate: "",
    major: "",
    details: "",
  });

  useEffect(() => {
    onChange(education);
  }, [education]);

  const handleChange = (key, value) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [key]: value,
    }));
  };

  return (
    <div>
      <CustomInput
        label="University"
        value={education.university}
        onChange={(value) => handleChange("university", value)}
      />
      <CustomInput
        label="Start Date"
        value={education.startDate}
        onChange={(value) => handleChange("startDate", value)}
      />
      <CustomInput
        label="Graduation Date"
        value={education.gradDate}
        onChange={(value) => handleChange("gradDate", value)}
      />
      <CustomInput
        label="Major"
        value={education.major}
        onChange={(value) => handleChange("major", value)}
      />
      <CustomInput
        label="Details"
        value={education.details}
        onChange={(value) => handleChange("details", value)}
      />
    </div>
  );
}

export default Education;
