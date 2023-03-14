import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/getYTData'
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import DisplayVideosComp from './DisplayVideosComp'
const DisplayChannelComp = () => {

    const [channel, setChannel] = useState()
    const [videos, setVideos] = useState([])
    const {id} = useParams()

    useEffect(() => {
        async function fetchChannel() {
            const response = await fetchFromAPI(`channels?part=snippet&id=${id}`)
            setChannel(response.items[0])
        }
        fetchChannel()
    }, [id])

useEffect(() => {
    async function fetchVideos() {
        const response = await fetchFromAPI(`search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date`)
        setVideos(response.items)
    }
    fetchVideos()
}, [id])




    console.log(channel)
    

    return (
        <Container>
          <Row className="mt-3">
            <Col md={4}>
              <Image
                src={channel?.snippet.thumbnails.medium.url}
                roundedCircle
                className="mb-3"
              />
              <h3>{channel?.snippet.title}</h3>
              <p>{channel?.statistics.subscriberCount} subscribers</p>
              <Button variant="outline-primary" className="mr-2">
                Subscribe
              </Button>
              <Button variant="outline-secondary">Add Friend</Button>
            </Col>
            <Col md={8}>
              <Image src={channel?.brandingSettings.image.bannerExternalUrl} fluid />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>About</Card.Title>
                  <Card.Text>
                   {channel?.snippet.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9}>
              <h4>Latest Videos</h4>
              <DisplayVideosComp videos={videos}/>
            </Col>
          </Row>
        </Container>
      );
    };


export default DisplayChannelComp