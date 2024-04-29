import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Typography,Card,CardActionArea,CardMedia,CardContent,Chip} from '@mui/material';

export default function CardBox({card}) {
    console.log(card)

  return (
    <>
        <Tooltip title="Add" arrow>
            <div>
                <Card>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            height = "150px"
                            image={card.image}
                            alt={card.title}
                            />
                            <CardContent>
                                <Chip label={`${card.follows} follows`} sx= {{background:"black", color:"white"}} />
                            </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <Typography variant='h5'
            sx={{
                color:"white",
                textAlign:"center"
            }}>
                {card.title}
            </Typography>
        </Tooltip>
    </>
  );
}


// array palidrone  matrix search in sort (min width substing)  (marge intervel)
// string two pointer
// renderHook use ref use spaificty grid center meta tag lifecycle method 