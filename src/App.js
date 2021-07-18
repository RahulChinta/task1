import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Main from "./components/Main/Main";
import menuItems from "./data/menu-details";
import "./App.css";

function App() {
  const [menuItemsData, setMenuItemsData] = useState(menuItems || []);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const prevItemClickHandler = () => {
    const currentIndex = activeMenuIndex;
    menuItemsData[currentIndex - 1].isPathActive = false;
    menuItemsData[currentIndex].isActive = false;
    setMenuItemsData([...menuItemsData]);
    setActiveMenuIndex((prevState) => prevState - 1);
  };
  const nextItemClickHandler = () => {
    const currentIndex = activeMenuIndex;
    menuItemsData[currentIndex].isPathActive = true;
    menuItemsData[currentIndex + 1].isActive = true;
    setMenuItemsData([...menuItemsData]);
    setActiveMenuIndex((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <NavBar />
      <LeftMenu menuItems={menuItemsData} />
      <Main
        currentItem={menuItems[activeMenuIndex]}
        prevItem={menuItems[activeMenuIndex - 1]}
        nextItem={menuItems[activeMenuIndex + 1]}
        prevItemClick={prevItemClickHandler}
        nextItemClick={nextItemClickHandler}
      />
    </div>
  );
}

export default App;
