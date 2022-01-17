import React from 'react'
import "../styles/Feature.css"
import FeatureItem from './FeatureItem'

const Feature = () => {
    return (
        <div className='Features'>
            <div className='features-heading'>
                <h2>Power, Security and Flexibility</h2>
                <p>Take advantage of the Appwrite products to speed up your development on any platform</p>
            </div>

            <div className='Features-container'>
                <FeatureItem icon='fas fa-database fa-2x' title='Database' description='Upload, download and preview your app and users files and media' />
                <FeatureItem icon='fas fa-hdd fa-2x' title='Storage' description='Store, query and manage access control to your app documents' />
                <FeatureItem icon='fas fa-user-friends fa-2x' title='Users' description='Authenticate, confirm and manage your users using multiple signin methods' />
                <FeatureItem icon='fas fa-location-arrow fa-2x' title='GEO & Localization' description='Detect your users location, locale and fetch GEO related data' />
                <FeatureItem icon='fas fa-bolt fa-2x' title='Functions' description='Run your backend code in a secure and isolated environment to customize your app' />
                <FeatureItem icon='fas fa-terminal fa-2x' title='Console' description='Track your backend API usage and manage your project resources from a modern UI' />
                <FeatureItem icon='fas fa-lock fa-2x' title='Privacy' description='Own your data. Easily setup Appwrite self-hosted solution on your infrastructure' />
                <FeatureItem icon='fas fa-shield-alt fa-2x' title='Security' description='Built in end to end security for your backend API both in transit and at rest' />
            </div>

        </div>
    )
}

export default Feature
