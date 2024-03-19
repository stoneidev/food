'use client'

// MUI Imports

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'

const Img = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const CardHorizontalRatings1 = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h5' className='mbe-2'>
              Tailwind
            </Typography>
            <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2'>
              <Rating name='read-only' value={4} readOnly />
              <Typography>3 Star | 50 reviews</Typography>
            </div>
            <Typography color='text.secondary'>
              오늘 베이컨 깍두기 볶음밥은 매우 참심한 메뉴였습니다. 밖에 퓨전 한식집에서 볼 수 있는 메뉴였습니다. 하지만
              개인적으로는 저의 입맛에는 약간 맞지는 않은 것 같습니다.
            </Typography>
          </CardContent>
          {/* <CardActions className='card-actions-dense'>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions> */}
        </Grid>
        <Grid item xs={12} md={6} lg={5} className='flex items-center justify-center md:order-[unset] -order-1'>
          <CardContent className='flex items-center justify-center'>
            <Img src='/images/food/bbq.jpg' height={175} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings1
