import { Typography, CardActionArea, Card, CardContent, CardMedia } from "@mui/material"
import ItemCount from '../itemCount/ItemCount';
import './Card.scss'

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
                <Typography variant={"subtitle1"} color="text.secondary">
                {price}
                </Typography>
            </div>            
            <div>
              <ItemCount stock="5"/>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default CardItem