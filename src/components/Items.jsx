import React from 'react';

const Items = ({ items }) => {
  return (
    <div className="row bg-white m-1">
      <div className="col-8">
        {items.map((item, index) => (
          <div key={index}>
            <p> {item.name} {item.age}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Items