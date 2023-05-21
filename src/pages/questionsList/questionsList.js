import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './questionsList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../../redux/actions/questionsActions'
import CustomMenu from '../../components/customMenu/customMenu'
import LoadingSpiner from '../../components/loadingSpiner/loadingSpiner'


export default function QuestionsList() {
    const questions = useSelector(state => state.quiz.questions)
    const isLoading = useSelector(state => state.quiz.loading)
    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams()
    
    useEffect(() => {
        dispatch(fetchQuestions(searchParams.get('filter')))
    }, [searchParams])

    if (isLoading) {
        return (
            <LoadingSpiner />
        )
    }

    return (
        <>
            <CustomMenu />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="p-3 pb-md-4 mx-auto text-center">
                            <h1 className="display-4 fw-normal">
                                Select one question
                            </h1>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <ul className='question-list'>
                            {questions && questions.map(question => (
                                <li key={question.id}>
                                    <Link to={`/questions/${question.id}`}>
                                        <div className="image-wrapper">
                                            <img
                                                src={question.thumb_url}
                                                className='img-fluid image-list'
                                            />
                                        </div>
                                        <h5>
                                            {question.question}
                                        </h5>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
