import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductDetails from '../ProductDetails/ProductDetails';

function ProductCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    const { id } = props.Items;
   
      navigate(`/men/productDetails/${id}`);
    
    
  }

  return (
    <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Product Image" height="140" image={props.Items.imageUrl} />
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

export default ProductCard;
