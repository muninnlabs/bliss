import React from 'react'
import './loadingSpiner.scss'

export default function LoadingSpiner() {
    return (
        <div className='loading-wrapper'>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
