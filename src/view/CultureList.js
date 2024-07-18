import React, { useState } from 'react';
import '../css/CultureList.css'; // Create a separate CSS file for styling

const CultureList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
  { title: 'People First', description: 'I enjoy interacting with people most in my professional life. I get excited over finding solutions together.' },
  { title: 'Embrace Change', description: 'I understand technology is constantly changing and make it a point to adapt to quality new ideas.' },
  { title: 'Accountability', description: 'I take my promises very seriously, I grew up deciding to become a reliable person true to my word.' },
  { title: 'Empowerment', description: 'I believe the sharing of knowledge and ideas is a core human virtue.' }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          {item.title}
          <div className={`description ${index === activeIndex ? 'active' : ''}`}>
            {item.description}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default CultureList;
