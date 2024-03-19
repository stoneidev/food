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

const CardHorizontalRatings = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h5' className='mbe-2'>
              Stonei
            </Typography>
            <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2'>
              <Rating name='read-only' value={4} readOnly />
              <Typography>4 Star | 98 reviews</Typography>
            </div>
            <Typography color='text.secondary'>
              오늘 매실청제육불고기는 달지 않으면서도 매우 감칠맛이 뛰어났습니다. 봄에 꼭 맞는 메뉴입니다.
            </Typography>
          </CardContent>
          {/* <CardActions className='card-actions-dense'>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions> */}
        </Grid>
        <Grid item xs={12} md={6} lg={5} className='flex items-center justify-center md:order-[unset] -order-1'>
          <CardContent className='flex items-center justify-center'>
            <Img src='/images/cards/4.png' height={175} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
