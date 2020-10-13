import { useColorMode, useColorModeValue } from '@chakra-ui/core'
import { ResponsiveChoropleth } from '@nivo/geo'
import countries from './world_countries'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomChoropleth = ({ data /* see data tab */ }) => {
    const textColor = useColorModeValue('#444444', '#cccccc')
    console.log(textColor)
    return (
        <ResponsiveChoropleth
            data={data}
            features={countries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#777777"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            // enableGraticule={true}
            // graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: textColor,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    )
}

export default CustomChoropleth
