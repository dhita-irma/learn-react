import React, { useState, useEffect } from 'react';

import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    // Set categories 
    var menuCategories = ['all'];
    for (var i = 0; i < items.length; i++) {
      if (!menuCategories.includes(items[i].category)) {
        menuCategories.push(items[i].category);
      }
    }

    setCategories(menuCategories);
  }, []);

  const filterItems = (category) => {
      if (category === 'all') {
        setMenuItems(items);
      } else {
        const newItems = items.filter(item => item.category === category);
        setMenuItems(newItems);
      }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </main>
  );
}

export default App;
