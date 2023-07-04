import React, { useState, useEffect } from 'react';

export default function ChangeWord ()  {
  const [words, setWords] = useState(['Palabra 1', 'Palabra 2', 'Palabra 3']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[newIndex]);
        return newIndex;
      });
    }, 2000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  


  return (
    <h1>{currentWord}</h1>
  );
};

