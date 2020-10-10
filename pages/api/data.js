import fetch from 'isomorphic-unfetch'

const projects = [
    'facebook/flipper',
    'vuejs/vuepress',
    'rust-lang/rust',
    'zeit/next.js',
]

const data = (req, res) => {
    // a slow endpoint for getting repo data
    return new Promise((resolve) => {
        console.log(req.method)
        switch (req.method) {
            case 'POST':
            case 'GET': {
                console.log('here at data')
                fetch(
                    `https://api.covid19api.com/total/dayone/country/ireland/status/confirmed`
                )
                    .then((resp) => resp.json())
                    .then((data) => {
                        res.json(data)
                        return resolve()
                    })
                    .catch((error) => {
                        Log.error(error) // Can be a simple console.error too
                        res.status(500).end()
                        return resolve()
                    })
            }
        }
        // res.status(405).end()
        return resolve()
    })
}

export default data
