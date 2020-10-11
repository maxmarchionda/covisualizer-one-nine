import Head from 'next/head'
import Dashboard from '../components/dashboard'

import Nav from '../components/nav'

function Home() {
    return (
        <div className="container">
            <main>
                <Nav />
                <Dashboard />
            </main>
        </div>
    )
}

export default Home
