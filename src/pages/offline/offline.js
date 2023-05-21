import React, { useEffect } from 'react'
import { useNetwork } from '../../hooks/useNetwork'
import { useNavigate } from 'react-router-dom'
import "./offline.scss";

export default function Offline() {

    const isOnline = useNetwork()
    const navigate = useNavigate()


    useEffect(() => {
        if (isOnline) {
            navigate(-1)
        }
    }, [isOnline])

    return (

        <div id='offline'>
            <h1>You're Offline</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 144 144" version="1.1">
                <path d="M0,142L8,142L8,144L0,144L0,142ZM28,142L32,142L32,144L28,144L28,142ZM96,142L104,142L104,144L96,144L96,142ZM80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100ZM82,140L84,140L84,142L82,142L82,140ZM12,136L20,136L20,138L12,138L12,136ZM110,134L116,134L116,136L110,136L110,134ZM0,128L32,128L32,130L0,130L0,128ZM72,128L128,128L128,130L72,130L72,128ZM68,64L68,68L72,68L72,64L68,64Z" stroke="none" fill="#535353" />
            </svg>
        </div>
    )
}
