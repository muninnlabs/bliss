import React from 'react'
import './retry.scss'
import { useNavigate } from 'react-router-dom'

export default function Retry() {
  const navigate = useNavigate()

  const refresh = () => {
    navigate('/')
  }

  return (
    <div className='retry'>
      <h3>Looks like we're facing some issues with our server, please retry</h3>
      <button type="button" onClick={() => { refresh() }} className="btn btn-primary">Retry</button>
    </div>
  )
}
