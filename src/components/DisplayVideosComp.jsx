import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayVideosComp = ({ videos, direction }) => {
  return (
    <Container>
      {direction === "horizontal" ? (
        <Row>
          {videos.map((video) => (
            <Col key={video.id.videoId} md={4}>
              <Card style={{ height: "400px", marginBottom: "30px" }}>
                <Card.Img
                  variant="top"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  style={{ height: "50%", objectFit: "cover" }}
                />
                <Card.Body style={{ height: "50%" }}>
                  <Link to={`/video/${video.id.videoId}`} className="link-muted">
                    <Card.Title>{video.snippet.title}</Card.Title>
                    <Card.Text
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {video.snippet.description}
                    </Card.Text>
                  </Link>

                  <Card.Text>
                    <small className="text-muted">
                      <Link
                        to={`/channel/id/${video.snippet.channelId}`}
                        className="link-muted"
                      >
                        {video.snippet.channelTitle}
                      </Link>
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Col>
          {videos.map((video) => (
            <Row key={video.id.videoId} style={{ marginBottom: "30px" }}>
              <Col md={4}>
                <Card style={{ height: "200px" }}>
                  <Card.Img
                    variant="top"
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Link to={`/video/${video.id.videoId}`} className="link-muted">
                  <Card.Title>{video.snippet.title}</Card.Title>
                </Link>
                <Card.Text>
                  <small className="text-muted">
                    <Link
                      to={`/channel/id/${video.snippet.channelId}`}
                      className="link-muted"
                    >
                      {video.snippet.channelTitle}
                    </Link>
                  </small>
                </Card.Text>
                <Card.Text
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {video.snippet.description}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Col>
      )}
    </Container>
  );
};

export default DisplayVideosComp;
