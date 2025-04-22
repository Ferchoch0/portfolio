import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Asegurate de tener este CSS importado

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default CustomCursor;