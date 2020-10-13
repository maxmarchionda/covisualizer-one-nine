import { Center, Grid } from '@chakra-ui/core'
import { useState } from 'react'
import Timeline from './timeline'
import { FulfillingSquareSpinner } from 'react-epic-spinners'
import { useContinentSummary, useCountrySummary } from '../utils/firebase/db'
import CustomBar from './customBar'
import CustomChoropleth from './geo/customChloropleth'
import { generateChoroplethData } from './geo/dataGenerator'

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const { data: countrySummaries, status } = useCountrySummary()
    const cS = countrySummaries && countrySummaries
    const covidData =
        cS &&
        cS.map((summary) => ({
            id: summary.CountryName,
            value: summary.Confirmed,
        }))
    const data = generateChoroplethData()
    console.log(covidData)
    const keys = ['Confirmed', 'Recovered', 'Active', 'Deaths']
    const index = 'id'
    return status === 'loading' ? (
        <Center mt="40vh">
            <FulfillingSquareSpinner
                size={100}
                color={'black'}
                animationDuration={2500}
            />
        </Center>
    ) : (
        <Center width="800px" height="400px">
            <CustomChoropleth data={covidData} />
        </Center>

        // <CustomBar data={continentSummaries} keys={keys} indexBy={index} />
        // <Grid templateColumns="repeat(1, 1fr)" gap={20} alignItems="center">

        // </Grid>
    )
}
export default Dashboard
