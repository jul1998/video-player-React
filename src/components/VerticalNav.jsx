import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

import {sideBarData} from "../utils/mockVideoData";


function VerticalNav() {
  const [sidebarItems, setSidebarItems] = useState(sideBarData);


  const handleClick = (index) => {
    const updatedSidebarItems = [...sidebarItems];
    
    updatedSidebarItems.forEach((item, i) => {
      if (i === index) {
        item.is_active = true;
      } else {
        item.is_active = false;
      }

      console.log(item.is_active);
    });
    setSidebarItems(updatedSidebarItems);
  }
  
  return (
    <div style={{ zIndex: 1, position: 'sticky', top: 130 }}>
    <Nav defaultActiveKey="/home" className="flex-column" >
      {sideBarData?.map((item, i) => (
        <Nav.Link 
          key={i}
          active={item.is_active}
          className={item.is_active ? 'active' : ''}
          onClick={() => handleClick(i)}
        >
          {item.name}
        </Nav.Link>
      ))}
    </Nav>
    </div>
  );
}

export default VerticalNav;