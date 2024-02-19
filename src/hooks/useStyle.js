import { useEffect, useState } from "react";

function useStyle(styles) {
  const [styleElement, setStyleElement] = useState(null);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.id = "dynamic-update-styles";
    styleTag.innerHTML = styles;

    setStyleElement(styleTag);

    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
}

export default useStyle;
