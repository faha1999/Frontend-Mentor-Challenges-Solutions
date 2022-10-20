import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };
  return (
    <div className="toggler" onClick={changeTheme}>
      {darkMode ? (
        <div className="toggleLight">
          <FaSun /> <p>Light Mode</p>
        </div>
      ) : (
        <div className="toggleDark">
          <FaMoon />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
}
