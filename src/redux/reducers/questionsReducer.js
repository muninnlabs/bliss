import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_FAILURE,
    FETCH_SERVER_HEALTH_SUCCESS,
    FETCH_SERVER_HEALTH_REQUEST,
    FETCH_SERVER_HEALTH_FAILURE,
    FETCH_QUESTION_DETAIL_REQUEST,
    FETCH_QUESTION_DETAIL_SUCCESS,
    FETCH_QUESTION_DETAIL_FAILURE,
    SEND_VOTE_SUCCESS,
    SEND_VOTE_REQUEST,
    SEND_VOTE_FAILURE,
    SHARE_EMAIL_SUCCESS,
    SHARE_EMAIL_REQUEST,
    SHARE_EMAIL_FAILURE
} from '../types'

const initialState = {
    serverHealth: {},
    error: '',
    loading: true,
    questions: [],
    question: {},
    newVote: {},
    shareEmail:{},
    urlSearchParams:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
            }
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload
            }
        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                questions: [],
                error: action.payload
            }
        case FETCH_QUESTION_DETAIL_REQUEST:
            return {
                ...state,
            }
        case FETCH_QUESTION_DETAIL_SUCCESS:
            return {
                ...state,
                question: action.payload
            }
        case FETCH_QUESTION_DETAIL_FAILURE:
            return {
                ...state,
                question: {},
                error: action.payload
            }

        case SEND_VOTE_REQUEST:
            return {
                ...state,
            }
        case SEND_VOTE_SUCCESS:
            return {
                ...state,
                newVote: action.payload
            }
        case SEND_VOTE_FAILURE:
            return {
                ...state,
                newVote: {},
                error: action.payload
            }

        case SHARE_EMAIL_REQUEST:
            return {
                ...state,
            }
        case SHARE_EMAIL_SUCCESS:
            return {
                ...state,
                shareEmail: action.payload
            }
        case SHARE_EMAIL_FAILURE:
            return {
                ...state,
                shareEmail: {},
                error: action.payload
            }

        case FETCH_SERVER_HEALTH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SERVER_HEALTH_SUCCESS:
            return {
                ...state,
                loading: false,
                serverHealth: action.payload,
            }
        case FETCH_SERVER_HEALTH_FAILURE:
            return {
                loading: false,
                serverHealth: action.payloadq,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;