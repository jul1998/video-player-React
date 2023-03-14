import CategoryNavbar from "./CategoryNavbar";
import OffCanvasComp from "./OffCanvasComp";
import VerticalNav from "./VerticalNav";
import DisplayVideosComp from "./DisplayVideosComp";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { fetchFromAPI } from "../utils/getYTData";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      const response = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(response.items);
      setIsLoading(false);
    };
    fetchVideos();
  }, [selectedCategory]);

  return (
    <div>
      <CategoryNavbar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="container-fluid">
        <div className="row">
          <div
            style={{ width: "100px", marginRight: "50px",  paddingTop: "56px" }}
            className="col-lg-3"
          >
            <VerticalNav />
          </div>
          <div className="col-lg-9">
            {isLoading ? (
              <Spinner className="d-flex justify-content-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Row>
                <Col>
                <h1>{selectedCategory} videos</h1>
                  <DisplayVideosComp videos={videos} />
                </Col>
              </Row>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
