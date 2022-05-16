import { Button , Typography, CardActionArea } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './card.scss'

const CardItem = ({image,title,price}) => {
  
    return(        
        <Card sx={{ maxWidth: 300}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            width= "300"
            image={`/card/${image}`}
            alt="swk 200"
          />
          <CardContent className="area-grid">
            <div>
                <Typography gutterBottom variant="h6" component="div">
                {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                {price}
                </Typography>
            </div>
            <div>
                <Button variant="contained" id= "colorBtnAddToCart">Add to cart</Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default CardItem