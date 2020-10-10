import { Center, Grid } from '@chakra-ui/core'
import { useState } from 'react'
import Timeline from './timeline'
import { FulfillingSquareSpinner } from 'react-epic-spinners'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    return loading ? (
        <Center mt="40vh">
            <FulfillingSquareSpinner
                loading={true}
                size={100}
                color={'black'}
                animationDuration={2500}
            />
        </Center>
    ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap={20}>
            {/* <Timeline /> */}
        </Grid>
    )
}
export default Dashboard
