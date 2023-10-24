import React from 'react'
import Section from './Section'
import Header from './Header'

const Home = () => {
    return (
        <>
            <Header />
            <Section
                title="model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText=" Custom Order"
                rightButtonText="Existing Inventory"
            />

            <Section
                title="model x"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText=" Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="new interior design"
                description="Order Online for Touchless Delivery"
                backgroundImage="new-interior.jpg"
                leftButtonText=" Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Solar Roof "
                description="Order Online for Touchless Delivery"
                backgroundImage="solar-roof.jpg"
                leftButtonText=" Custom Order"
                rightButtonText="Existing Inventory"
            />
        </>
    )
}

export default Home
