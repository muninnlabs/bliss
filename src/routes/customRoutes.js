import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useNetwork } from '../hooks/useNetwork'
import Offline from '../pages/offline/offline'
import QuestionDetail from '../pages/questionDetail/questionDetail'
import QuestionsList from '../pages/questionsList/questionsList'
import { fetchServerHealth } from '../redux/actions/questionsActions'
import Retry from '../pages/retry/retry'

export default function CustomRoutes() {

  const serverHealth = useSelector(state => state.quiz.serverHealth)
  const dispatch = useDispatch()
  const isOnline = useNetwork()
  const navigate = useNavigate()

  const checkServerHealth = () => {
    dispatch(fetchServerHealth())
  }

  useEffect(() => {
    if (!isOnline) {
      navigate('/offline')
    }
  }, [isOnline])

  useEffect(() => {
    checkServerHealth()
  }, [])

  useEffect(() => {
    if (serverHealth.status === 'NOT OK') {
      navigate('/retry')
    }
  }, [serverHealth.status])


  return (
    <Routes>
      <Route exact path='/questions' element={<QuestionsList />} />
      <Route exact path='/questions:filter?' element={<QuestionsList />} />
      <Route path='/questions/:id' element={<QuestionDetail />} />
      <Route path='/offline' element={<Offline />} />
      <Route path='/retry' element={<Retry />} />
    </Routes>
  )
}
