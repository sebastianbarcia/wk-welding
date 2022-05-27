import { Typography, CardActionArea, Card, CardContent, CardMedia, Grid } from "@mui/material"
import CardItem from '../CardItem/CardItem';
import './CardItemList.scss'
import Colors from "../colors/colors";

const CardItemList = ({image,title,price, stock}) => {
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
          <Grid maxWidth="sx" className="justify-content-center">
          <Colors/>
          </Grid>
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
              <CardItem stock={stock} title={title}/>
            </div>
            
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default CardItemList