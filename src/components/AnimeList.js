import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => {
        setAnimes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching anime list", error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {animes.map(anime => (
          <Col sm="6" md="4" lg="3" className="mb-4" key={anime.mal_id}>
            <Card className="shadow-lg bg-dark text-light">
              <CardImg
                top
                width="100%"
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                style={{
                  height: '300px',
                  objectFit: 'cover', 
                  objectPosition: 'center' 
                }}
              />
              <CardBody>
                <CardTitle tag="h5" className="text-truncate">{anime.title}</CardTitle>
                <Link to={`/anime/${anime.mal_id}`}>
                  <Button color="secondary" className="mt-3">View Details</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AnimeList;