"use client";
import { useState, useEffect } from "react";

const searchTerms = [
  "Search for 'Sofa Cleaning'...",
  "Search for 'ac repair'...",
  "Search for 'pest control'...",
  "Search for 'house Cleaning'..."
];

export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState("");
  const [termIndex, setTermIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentTerm = searchTerms[termIndex];

    const timer = setTimeout(() => {
      if (!isWaiting) {
        // Typing (fast)
        setPlaceholder(currentTerm.substring(0, placeholder.length + 1));

        // If word is fully typed, pause before resetting
        if (placeholder === currentTerm) {
          setIsWaiting(true);
        }
      } else {
        // Instantly disappear and move to next word
        setPlaceholder("");
        setIsWaiting(false);
        setTermIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
      }
    }, isWaiting ? 1500 : 50); // 1.5s pause when fully typed, 50ms typing speed

    return () => clearTimeout(timer);
  }, [placeholder, termIndex, isWaiting]);

  return (
    <div className="bg-surface rounded-xl shadow-md p-2 flex items-center mb-6 max-w-md border border-border">
      <svg className="w-6 h-6 text-text-muted ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-none focus:outline-none px-4 text-text-main"
      />
      <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition whitespace-nowrap">
        Search
      </button>
    </div>
  );
}
