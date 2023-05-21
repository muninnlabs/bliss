import React, { useEffect, useState } from 'react'
import './questionDetail.scss'
import { useNavigate, useParams } from 'react-router-dom';
import CustomMenu from '../../components/customMenu/customMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionDetail, sendVote, shareQuestion } from '../../redux/actions/questionsActions';
import Modal from 'react-modal';


export default function QuestionDetail() {
  const { id } = useParams();
  const questionDetail = useSelector(state => state.quiz.question)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('')
  const [sharedEmail, setSharedEmail] = useState('')
  const [displayAlert, setDisplayAlert] = useState(false)
  let emailShare;
 
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(fetchQuestionDetail(id))
  }, [])

  const selectChoice = (choice) => {
    setSelected(choice)
  }

  const handleVote = () => {
    const question = questionDetail
    let choices = question.choices
    choices.map(el => {
      el.votes = el.choice === selected ? 1 : 0
      return el;
    })
    question.choices = choices
    dispatch(sendVote(id, question))
    setDisplayAlert(true)
  }

  const handleShareQuestion = () => {
    dispatch(shareQuestion(window.location.href, sharedEmail))
    closeModal()
  }

  return (
    <>
      <CustomMenu showFilter={false} />
      <div className='question-detail'>
        <div className='container '>
          <div className='row'>
            <div className="col-xs-12">
              <div className="p-3 pb-md-4 mx-auto text-center">
                {displayAlert && (
                  <div className="alert alert-success vote-success" role="alert">
                    A simple success alert—check it out!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDisplayAlert(false)}></button>
                  </div>

                )}
                <h1 className="display-4 fw-normal">
                  {Object.keys(questionDetail).length > 0 && questionDetail.question}
                </h1>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <img
                src={Object.keys(questionDetail).length > 0 ? questionDetail.image_url : ''}
                className='img-fluid image-detail'
              />
            </div>
            <div className="col-xs-12 col-sm-6 options-list">
              <ul>
                {Object.keys(questionDetail).length > 0 && questionDetail.choices.length > 0 && questionDetail.choices.map(question => (
                  <li
                    onClick={() => selectChoice(question.choice)}
                    key={question.choice}
                    className={question.choice === selected ? 'active' : ''}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={question.choice}
                        id="flexCheckDefault"
                        checked={question.choice === selected}
                        onChange={() => selectChoice(question.choice)}
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        <div>
                          {question.choice}
                        </div>
                      </label>
                      {selected !== "" && (
                        <span className="votes">
                          Total votes: {question.votes}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="button-wrapper flex-wrap align-items-center justify-content-end">
              {selected !== '' && (
                <button type="button" onClick={() => handleVote()} className="btn btn-outline-primary me-2">Confirm vote</button>
              )}
              <button type="button" onClick={openModal} className="btn btn-primary" >Share</button>
            </div>
          </div>
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 >Share this question</h2>
            <form>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control" onChange={e=>setSharedEmail(e.target.value)} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="button-wrapper flex-wrap align-items-center justify-content-end">
                <button type="button" onClick={() => { handleShareQuestion(emailShare, ) }} className="btn btn-primary me-2">Share</button>
                <button type="button" onClick={() => { closeModal()}} className="btn btn-outline-primary me-2">Close</button>

              </div>
            </form>
          </Modal>
        </div>
      </div>

    </>
  )
}
