import CategoryNavbar from "./CategoryNavbar";
import OffCanvasComp from "./OffCanvasComp";
import VerticalNav from "./VerticalNav";
import DisplayVideosComp from "./DisplayVideosComp";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { fetchFromAPI } from "../utils/getYTData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      const response = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}`
      );
      setVideos(response.items);
      setIsLoading(false);
    };
    fetchVideos();
  }, [searchTerm]);

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
                <h1>Search results for: {searchTerm}</h1>
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

export default SearchFeed;
