import { FarzaaContext } from '../../context/FarzaaContext';
import React, { useContext } from 'react';

const ProductTag = () => {
  const {selectedTags, handleTagSelection} = useContext(FarzaaContext)
  const tags = [
    'Jam',
    'Special Moron',
    'Luzon',
    'Visayas',
    'Mindanao',
    'Munggo Noodles',
    'Ube Jam',
    
  ];

  return (
    <section className="sidebar-single-area product-tags-area">
      <h3 className="sidebar-single-area__title">Product tags</h3>
      <ul className="tags tags shop-tag-filter">
        {tags.map(tag => (
          <li
            key={tag}
            className={selectedTags.includes(tag) ? 'active' : ''}
            onClick={() => handleTagSelection(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductTag;
