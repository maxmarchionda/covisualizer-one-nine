import { Box, Text } from '@chakra-ui/core'
import useRequest from '../libs/useRequest'
import CustomLine from './customStream'
import CustomStream from './customStream'

function parseISOString(s) {
    var b = s.split('T')
    return b[0]
}

function TimeLine() {
    const { data } = useRequest({
        url: '/api/data',
    })
    if (data) {
        console.log(data)
        const newData =
            data &&
            data.map((status, i) => {
                if (i % 10 == 0) {
                    const date = parseISOString(status.Date)
                    return { x: date, y: status.Cases }
                }
            })
        const lineData = {
            id: data[0].Country,
            color: '#000000',
            data: newData,
        }
        console.log(lineData)
        return (
            <Box width="800px" height="400px">
                <CustomLine data={[lineData]}></CustomLine>
            </Box>
        )
    }
    return 'loading...'
}

export default TimeLine
