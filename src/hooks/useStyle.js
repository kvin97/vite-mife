import { useEffect } from "react";

function useStyle(styles) {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.id = "dynamic-update-styles";
    styleTag.innerHTML = styles;

    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);
}

export default useStyle;
