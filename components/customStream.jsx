import { ResponsiveLineCanvas } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomLine = ({ data /* see data tab */ }) => (
    <ResponsiveLineCanvas
        data={data}
        margin={{ top: 50, right: 60, bottom: 50, left: 120 }}
        xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
            stacked: true,
        }}
        xFormat="time:%m/%d"
        axisBottom={{
            orient: 'bottom',
            format: '%m/%d',
        }}
        curve="natural"
        lineWidth={5}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaOpacity={0.8}
    />
)

export default CustomLine
