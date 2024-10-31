import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(response => {
        setAnime(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching anime details", error);
      });
  }, [id]);

  if (!anime) return <p className="text-center text-white">Loading...</p>;

  return (
    <Container className="mt-5">
      <Card className="shadow-lg bg-dark text-light">
        <CardImg
          top
          width="100%"
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          style={{
            height: '500px',
            objectFit: 'contain', 
            objectPosition: 'center' 
          }}
        />
        <CardBody>
          <CardTitle tag="h3">{anime.title}</CardTitle>
          <CardText><strong>Type:</strong> {anime.type}</CardText>
          <CardText><strong>Episodes:</strong> {anime.episodes}</CardText>
          <CardText><strong>Status:</strong> {anime.status}</CardText>
          <CardText><strong>Synopsis:</strong> {anime.synopsis}</CardText>
          <Link to="/">
            <Button color="secondary" className="mt-3">Back to List</Button>
          </Link>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AnimeDetail;