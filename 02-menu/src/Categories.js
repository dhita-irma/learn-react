import React from 'react';

const Categories = ({ categories, filterItems }) => {

  return(
    <div className="btn-container">
      {categories.map(( category, index ) => 
        <button key={`cat-${index}`} className="filter-btn" onClick={() => filterItems(category)}>
          {category}
        </button>
      )}
    </div>
  );
};

export default Categories;
