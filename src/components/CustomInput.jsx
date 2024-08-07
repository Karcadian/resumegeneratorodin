function CustomInput({ label, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default CustomInput;
