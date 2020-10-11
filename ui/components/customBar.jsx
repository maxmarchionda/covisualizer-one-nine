import { Box, Center } from '@chakra-ui/core'
import { ResponsiveBar } from '@nivo/bar'

function CustomBar({ data, keys, indexBy }) {
    return (
        <Center width="800px" height="400px">
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={indexBy}
                groupMode="grouped"
                enableLabel={false}
                margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
                padding={0.3}
                colors={{ scheme: 'blues', size: 4 }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'totals',
                    legendPosition: 'middle',
                    legendOffset: -70,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                enableGridY={false}
                tickSize={0}
            />
        </Center>
    )
}

export default CustomBar
