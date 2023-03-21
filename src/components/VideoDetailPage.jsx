import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useFetcher, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Stack from "react-bootstrap/Stack";



import  DisplayVideosComp  from "./DisplayVideosComp";
import { fetchFromAPI } from "../utils/getYTData";

const VideoDetailPage = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((response) => {
      setVideo(response.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((response) => {
      setRelatedVideos(response.items);
    });
  }, [id]);

  if (!video) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="500px"
            controls
          />
          <h1>{video?.snippet.title}</h1>
          <Row>
            <Col lg={8}>
              <Link to={`/channel/id/${video?.snippet.channelId}`}>
                {video?.snippet.channelTitle}
              </Link>
            </Col>
            <Stack direction="horizontal" gap={3}>
              <div className="ms-auto">
                <p>
                  {parseInt(video?.statistics.viewCount).toLocaleString()} views
                </p>
              </div>

              <p>
                {parseInt(video?.statistics.likeCount).toLocaleString()} likes
              </p>
              <p>{video?.statistics.dislikeCount} dislikes</p>
              
            </Stack>
          </Row>
          <Col>
          <p>{video?.statistics.commentCount} comments</p>

          </Col>
        </Col>
        <Col lg={4}>
          {/* Suggested videos component */}
          {/* Comment section component */}
          

          <Stack gap={3}>
          <DisplayVideosComp videos={relatedVideos} direction="vertical" />
          
          
    </Stack>

        </Col>
      </Row>
    </Container>
  );
};

export default VideoDetailPage;
