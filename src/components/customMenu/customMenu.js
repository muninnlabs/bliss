import React, { useState } from 'react'
import './customMenu.scss'
import { Link, useNavigate } from 'react-router-dom'

export default function CustomMenu({ showFilter = true }) {
  const navigate = useNavigate()
  const [filter, setFilter] = useState()
  const hadleSearch = () => {
    navigate(`/questions?filter=${filter}`)
  }



  return (
    <header className="p-1 custom-menu">
      <div className="container">
        {!showFilter ? (
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to='/' className="nav-link px-2 text-secondary">All questions</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="d-flex flex-wrap align-items-center justify-content-end">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={(e) => setFilter(e.target.value)} />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-primary" onClick={() => hadleSearch()}>Search</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
