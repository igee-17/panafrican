import React from "react";

function LanguageSwitcher({ onLanguageChange }) {
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    onLanguageChange(newLanguage);
  };

  return (
    <div>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
