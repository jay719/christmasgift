import { useEffect, useRef, useState } from "react";

export default function Header() {
  const words = ["Mom", "Queen", "Boss"];
  const prefix = "Merry Christmas, ";
  const typingSpeed = 80;
  const eraseSpeed = 50;
  const holdDelay = 1200;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ prevents double-start in StrictMode dev
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    // kick the loop once
    setText("");
    setIsDeleting(false);
    setWordIndex(0);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), holdDelay);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, eraseSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <header className="app-header">
      <span>{prefix}</span>
      <span>{text}</span>
      <span aria-hidden="true" style={{ marginLeft: 2 }}>
        |
      </span>
    </header>
  );
}
