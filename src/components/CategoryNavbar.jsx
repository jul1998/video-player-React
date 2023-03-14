import { videoData } from "../utils/mockVideoData";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
const CategoryNavbar = ({ setSelectedCategory, selectedCategory }) => {

  
  return (
    <Navbar style={{ position: "sticky", top: "0", zIndex: 1 }} bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {videoData.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              variant="outline-secondary"
              style={{gap: "10px", margin: "5px"}}
            >
              {category.name}
            </Button>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CategoryNavbar;
