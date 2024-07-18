import React, { useState } from 'react';
import '../css/DynamicList.css'; // Create a separate CSS file for styling

const DynamicList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
  { title: 'People Person', description: 'I am an extroverted developerI enjoy interacting with clients, team members and am generally extroverted.' },
  { title: 'Enjoy Fullstack', description: 'I like seeing every aspect of a product and web application and respect every step along the way.' },
  { title: 'Solution Oriented', description: 'I design software with the problem in mind and seek an efficient clean solution.' },
	{ title: 'Direct and Honest', description: 'I speak on the honesty of the situation. I am not a "yes man".' },
	{ title: 'Provides Documentation', description: 'When given the chance, I create documentation for the code and use of my software.' },
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

export default DynamicList;
