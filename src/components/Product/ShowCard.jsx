import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Productcard.css'; // Import CSS for hover effect

function ShowCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    const { id } = props.Items;
    navigate(`/shoe/productDetails/${id}`);
  };

  return (
    <Card
      className="product-card"
      onClick={handleClick}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
    sx={{ margin: 2 }}
        component="img"
        alt="Product Image"
        height="140"
        image={props.Items.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Items.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.Items.price}</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}

export default ShowCard;
