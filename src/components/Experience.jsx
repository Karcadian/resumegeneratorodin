import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";

function Experience({ onChange }) {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    onChange(experience);
  }, [experience]);

  const handleChange = (key, value) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      [key]: value,
    }));
  };

  return (
    <div>
      <CustomInput
        label="Company Name"
        value={experience.companyName}
        onChange={(value) => handleChange("companyName", value)}
      />
      <CustomInput
        label="Position Title"
        value={experience.positionTitle}
        onChange={(value) => handleChange("positionTitle", value)}
      />
      <CustomInput
        label="Main Responsibilities"
        value={experience.responsibilities}
        onChange={(value) => handleChange("responsibilities", value)}
      />
      <CustomInput
        label="Start Date"
        value={experience.startDate}
        onChange={(value) => handleChange("startDate", value)}
      />
      <CustomInput
        label="End Date"
        value={experience.endDate}
        onChange={(value) => handleChange("endDate", value)}
      />
    </div>
  );
}

export default Experience;
