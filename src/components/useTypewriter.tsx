import { useState, useEffect } from "react";



export default function useTypewriter(strings: string[], speed = 80) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    const timeout = setTimeout(() => {
      if (!deleting && display === current) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && display === "") {
        setDeleting(false);
        setIdx(i => i + 1);
      } else {
        setDisplay(deleting
          ? current.slice(0, display.length - 1)
          : current.slice(0, display.length + 1)
        );
      }
    }, deleting ? speed / 2 : speed + Math.random() * 20);
    return () => clearTimeout(timeout);
  }, [display, deleting, idx]);

  return display;
}

