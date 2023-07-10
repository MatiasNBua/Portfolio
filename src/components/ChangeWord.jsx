import React, { useState, useEffect } from 'react';
import './ChangeWord.css'

export default function ChangeWord ({ words })  {
  // const [words, setWords] = useState(['Developer', 'Front-end', 'Back-end', 'Freelancer']);
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
  }, [words]);
  


  return (
    <h1 className='change-word'>{currentWord}</h1>
  );
};

