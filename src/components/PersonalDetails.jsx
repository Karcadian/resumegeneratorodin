import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";

function PersonalDetails({ onChange }) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    github: "",
    linkedIn: "",
  });

  useEffect(() => {
    onChange(details);
  }, [details]);

  const handleChange = (key, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  return (
    <div>
      <CustomInput
        label="First Name"
        value={details.firstName}
        onChange={(value) => handleChange("firstName", value)}
      />
      <CustomInput
        label="Last Name"
        value={details.lastName}
        onChange={(value) => handleChange("lastName", value)}
      />
      <CustomInput
        label="Phone Number"
        value={details.phoneNumber}
        onChange={(value) => handleChange("phoneNumber", value)}
      />
      <CustomInput
        label="Email"
        value={details.email}
        onChange={(value) => handleChange("email", value)}
      />
      <CustomInput
        label="GitHub"
        value={details.github}
        onChange={(value) => handleChange("github", value)}
      />
      <CustomInput
        label="LinkedIn"
        value={details.linkedIn}
        onChange={(value) => handleChange("linkedIn", value)}
      />
    </div>
  );
}

export default PersonalDetails;
