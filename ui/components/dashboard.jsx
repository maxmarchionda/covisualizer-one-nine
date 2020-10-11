import { Center, Grid } from '@chakra-ui/core'
import { useState } from 'react'
import Timeline from './timeline'
import { FulfillingSquareSpinner } from 'react-epic-spinners'
import { useContinentSummary, useCountrySummary } from '../utils/firebase/db'
import CustomBar from './customBar'

const Dashboard = () => {
    // const [loading, setLoading] = useState(true)
    const { data: continentSummaries, status } = useContinentSummary()
    console.log(continentSummaries)
    const keys = ['Confirmed', 'Recovered', 'Active', 'Deaths']
    const index = 'id'
    return status === 'loading' ? (
        <Center mt="40vh">
            <FulfillingSquareSpinner
                loading={true}
                size={100}
                color={'black'}
                animationDuration={2500}
            />
        </Center>
    ) : (
        <CustomBar data={continentSummaries} keys={keys} indexBy={index} />
        // <Grid templateColumns="repeat(1, 1fr)" gap={20} alignItems="center">

        // </Grid>
    )
}
export default Dashboard
