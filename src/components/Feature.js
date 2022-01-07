import React from 'react'
import "../styles/Feature.css"
import FeatureItem from './FeatureItem'

const Feature = () => {
    return (
        <div className='Features'>
            <h2>Power, Security and Flexibility</h2>
            <p>Take advantage of the Appwrite products to speed up your development on any platform</p>

            <div className='Features-container'>
                <FeatureItem icon='fas fa-database' title='Database' description='Store, query and manage access control to your app documents' />
            </div>

        </div>
    )
}

export default Feature
