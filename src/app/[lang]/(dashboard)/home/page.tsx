// MUI Imports
import Grid from '@mui/material/Grid'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import ApexMenuBarChart from '@/views/charts/apex/ApexMenuBarChart'
import FoodStatisticsCard from '@/views/dashboards/ecommerce/FoodStatisticsCard'
import CardHorizontalRatings from '@/views/pages/widget-examples/basic/CardHorizontalRatings'
import CardHorizontalRatings1 from '@/views/pages/widget-examples/basic/CardHorizontalRatings1'

const Home = async () => {
  const serverMode = getServerMode()

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 381)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <ApexMenuBarChart
          serverMode={serverMode}
          menu='G Menu'
          food='매실청제육불고기'
          count={generateRandomNumber()}
          total={380}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ApexMenuBarChart
          serverMode={serverMode}
          menu='R Menu'
          food='베이컨깍두기볶음밥'
          count={generateRandomNumber()}
          total={380}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ApexMenuBarChart
          serverMode={serverMode}
          menu='E Menu'
          food='주꾸미한마리짬뽕'
          count={generateRandomNumber()}
          total={380}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FoodStatisticsCard />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings1 />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
    </Grid>
  )
}

export default Home
