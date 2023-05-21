import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_FAILURE,
    FETCH_SERVER_HEALTH_SUCCESS,
    FETCH_SERVER_HEALTH_REQUEST,
    FETCH_SERVER_HEALTH_FAILURE,
    FETCH_QUESTION_DETAIL_SUCCESS,
    FETCH_QUESTION_DETAIL_REQUEST,
    FETCH_QUESTION_DETAIL_FAILURE,
    SEND_VOTE_SUCCESS,
    SEND_VOTE_REQUEST,
    SEND_VOTE_FAILURE,
    SHARE_EMAIL_SUCCESS,
    SHARE_EMAIL_REQUEST,
    SHARE_EMAIL_FAILURE
} from '../types'
import axios from 'axios'

export const fetchQuestions = (filter) => (dispatch) => {
    dispatch(fetchQuestionsRequest())
    axios
        .get(`https://private-anon-200412f8af-blissrecruitmentapi.apiary-mock.com/questions?filter=${filter}`)
        .then(res => {
            const questions = res.data
            dispatch(fetchQuestionsSuccess(questions))
        })
        .catch(err => {
            console.error('error fetching questions', err)
            dispatch(fetchQuestionsFailure(err))
        })
}

export const fetchQuestionsRequest = () => {
    return {
        type: FETCH_QUESTIONS_REQUEST
    }
}

export const fetchQuestionsSuccess = (questions) => {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        payload: questions
    }
}

export const fetchQuestionsFailure = (error) => {
    return {
        type: FETCH_QUESTIONS_FAILURE,
        payload: error
    }
}

export const fetchQuestionDetail = (id) => (dispatch) => {
    dispatch(fetchQuestionDetailRequest())
    axios
        .get(`https://private-anon-b149007a95-blissrecruitmentapi.apiary-mock.com/questions/${id}`)
        .then(res => {
            const question = res.data
            dispatch(fetchQuestionDetailSuccess(question))
        })
        .catch(err => {
            console.error('error fetching questions', err)
            dispatch(fetchQuestionDetailFailure(err))
        })
}

export const fetchQuestionDetailRequest = () => {
    return {
        type: FETCH_QUESTION_DETAIL_REQUEST
    }
}

export const fetchQuestionDetailSuccess = (questions) => {
    return {
        type: FETCH_QUESTION_DETAIL_SUCCESS,
        payload: questions
    }
}

export const fetchQuestionDetailFailure = (error) => {
    return {
        type: FETCH_QUESTION_DETAIL_FAILURE,
        payload: error
    }
}

export const sendVote = (id, question) => (dispatch) => {
    dispatch(sendVoteRequest())
    axios
        .put(`https://private-anon-b149007a95-blissrecruitmentapi.apiary-mock.com/questions/${id}`, question)
        .then(res => {
            dispatch(sendVoteSuccess(res.data))
        })
        .catch(err => {
            dispatch(sendVoteError(err))
        })
}

export const sendVoteRequest = () => {
    return {
        type: SEND_VOTE_REQUEST
    }
}

export const sendVoteSuccess = (question) => {
    return {
        type: SEND_VOTE_SUCCESS,
        payload: question
    }
}

export const sendVoteError = (err) => {
    return {
        type: SEND_VOTE_FAILURE,
        payload: err
    }
}

export const shareQuestion = (url, email) => (dispatch) => {
    console.log('shared call', url, email);
    dispatch(sharedEmailRequest())
    axios
        .post(`https://private-anon-b149007a95-blissrecruitmentapi.apiary-mock.com/share?destination_email=${email}&content_url=${url}`)
        .then(res => {
            dispatch(sharedEmailSuccess(res.data))
        })
        .catch(err => {
            console.error('Error while trying share the question ', err)
            dispatch(sharedEmailError(err))
        })
}

const sharedEmailRequest = () => {
    return {
        type: SHARE_EMAIL_REQUEST
    }
}

const sharedEmailSuccess = (shareStatus) => {
    return {
        type: SHARE_EMAIL_SUCCESS,
        payload: shareStatus
    }
}

const sharedEmailError = (err) => {
    return {
        type: SHARE_EMAIL_FAILURE,
        payload: err
    }
 }

export const fetchServerHealth = () => (dispatch) => {
    dispatch(fetchServerHealthRequest())
    axios
        .get('https://private-anon-b149007a95-blissrecruitmentapi.apiary-mock.com/health')
        .then(res => {
            const serverHealth = res.data
            dispatch(fetchServerHealthSuccess(serverHealth))
        })
        .catch(err => {
            console.error('Error fetching Server Health', err)
            dispatch(fetchQuestionsFailure(err))
        })
}

const fetchServerHealthRequest = () => {
    return {
        type: FETCH_SERVER_HEALTH_REQUEST
    }
}

const fetchServerHealthSuccess = (serverHealth) => {
    return {
        type: FETCH_SERVER_HEALTH_SUCCESS,
        payload: serverHealth
    }
}

const fetchServerHealthFailure = (error) => {
    return {
        type: FETCH_SERVER_HEALTH_FAILURE,
        payload: error
    }
}


