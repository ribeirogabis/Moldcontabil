'use client'
import React from 'react'
import { AxisOptions, Chart } from 'react-charts'

type DataType = {
  month: string
  value: number
}

type SeriesType = {
  label: string
  data: DataType[]
}

export const BarChart = () => {
  const data: SeriesType[] = React.useMemo(
    () => [
      {
        label: 'Tickets Abertos',
        data: [
          { month: 'Janeiro', value: 30 },
          { month: 'Fevereiro', value: 20 },
          { month: 'Março', value: 25 },
          { month: 'Abril', value: 40 },
          { month: 'Maio', value: 35 },
        ],
      },
      {
        label: 'Tickets Fechados',
        data: [
          { month: 'Janeiro', value: 15 },
          { month: 'Fevereiro', value: 25 },
          { month: 'Março', value: 30 },
          { month: 'Abril', value: 20 },
          { month: 'Maio', value: 50 },
        ],
      },
    ],
    [],
  )

  const primaryAxis = React.useMemo(
    (): AxisOptions<DataType> => ({
      getValue: (datum) => datum.month,
    }),
    [],
  )

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DataType>[] => [
      {
        getValue: (datum) => datum.value,
        elementType: 'bar',
        min: 0,
      },
    ],
    [],
  )

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )
}
