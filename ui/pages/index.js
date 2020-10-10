import Head from 'next/head'
import Dashboard from '../components/dashboard'

import Nav from '../components/nav'

function Home() {
    return (
        <>
            {/* <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <Nav />
            <Dashboard />
        </>
    )
}

export default Home
