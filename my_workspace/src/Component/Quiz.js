import "./Quiz.css";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import questions from '../assests/questions';
import { useDispatch } from 'react-redux';
import { scored, socredout } from "../Features/userSlicer";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [qsts, setQsts] = useState([]);
  const dispatch = useDispatch(); 
   
  useEffect(() => {
    setQsts(questions[Math.floor(Math.random() * 4)]);
    }, []);
const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
     
      dispatch(scored({
        score:score+1 ,
        outof:qsts.length,
        }))
    }
    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < qsts.length) {

      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //DashBoard Material UI
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(socredout({
      score:0,
    }))
    localStorage.clear()
    navigate('/')

  }

  let navigate = useNavigate();

  return (
    <>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      <h1 className="header">Quiz</h1>
      {qsts.length > 0 && <div className="app">
          {showScore ?  (
            <div className="score-section">
             You scored {score} out of {qsts.length}
            </div>
            ):(
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question</span>
                </div>
                <div className="question-text">
                  {qsts[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {qsts[currentQuestion].answerOptions.map((answerOptions, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                      >
                    {answerOptions.answerText}
                  </button>

                ))}</div>

            </>
          )}
        </div>
      }
    </>
  );
}

export default Quiz;
