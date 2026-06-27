"use client";
import { useState, useEffect } from "react";

export default function TypeWriter() {
  const words = ["Cloud Solutions", "AI/ML Experts", "Cybersecurity", "Modern Software"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span id="typed-wrap">
      <span id="typed-word">{currentWord}</span>
      <span id="typed-cursor">|</span>
    </span>
  );
}
