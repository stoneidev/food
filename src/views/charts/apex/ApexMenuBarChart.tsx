'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Type Imports
import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const radialBarColors = {
  series1: '#fdd835',
  series2: '#32baff',
  series3: '#00d4bd',
  series4: '#7367f0',
  series5: '#FFA1A1'
}

const ApexMenuBarChart = ({
  serverMode,
  menu,
  food,
  count,
  total
}: {
  serverMode: SystemMode
  menu: string
  food: string
  count: number
  total: number
}) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const textSecondary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)

  const options: ApexOptions = {
    stroke: { lineCap: 'round' },
    labels: ['영업중'],

    legend: {
      show: true,
      fontSize: '13px',
      position: 'bottom',
      labels: {
        colors: textSecondary
      },
      markers: {
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      itemMargin: {
        horizontal: 9
      }
    },
    colors: [
      menu === 'G Menu'
        ? radialBarColors.series1
        : menu === 'R Menu'
          ? radialBarColors.series2
          : radialBarColors.series3
    ],
    plotOptions: {
      radialBar: {
        hollow: { size: '50%' },
        track: {
          margin: 15,
          background: theme.palette.customColors.trackBg
        },
        dataLabels: {
          name: {
            fontSize: '2rem'
          },
          value: {
            fontSize: '15px',
            fontWeight: 500,
            color: textSecondary
          },
          total: {
            show: true,
            fontWeight: 500,
            label: food,
            fontSize: '1rem',
            color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
            formatter: function (w) {
              const totalValue =
                w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b
                }, 0) / w.globals.series.length

              if (totalValue % 1 === 0) {
                return count + '/' + total
              } else {
                return totalValue.toFixed(2) + '%'
              }
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    }
  }

  return (
    <Card>
      <CardHeader title={menu} />
      <CardContent>
        <AppReactApexCharts
          type='radialBar'
          width='100%'
          height={400}
          options={options}
          series={[Math.trunc((count / total) * 100)]}
        />
      </CardContent>
    </Card>
  )
}

export default ApexMenuBarChart
