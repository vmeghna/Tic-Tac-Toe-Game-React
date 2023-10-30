// import img
import friends from "/assets/friends.webp";
// style
import "./App.css";
import { useState } from "react";

const App = () => {
  // state
  const [turn, setTurn] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(false);

  const messageToggle = () => {
    setTurn(!turn);
  };

  const checkForWinner = (squares) => {
    // console.log(squares);

    // combinations of winning options
    let combinations = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combinations) {
      combinations[combo].forEach((pattern) => {
        // console.log("pattern 0",squares[pattern[0]]);
        // console.log("pattern 1",squares[pattern[1]]);
        // console.log("pattern 2",squares[pattern[2]]);

        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          // if turn = true ===> that's X
          if (turn === true) {
            setTurn(true);
            setWinner(true);

            // if turn = false ===> that's O
          } else if (turn === false) {
            setTurn(false);
            setWinner(true);
          }
        }
      });
    }
  };

  const handleClick = (num) => {
    // validating
    if (cells[num] !== "") {
      return;
    }

    // message toggle for the players
    messageToggle();

    // values on grid
    let squares = [...cells];

    if (turn === true) {
      squares[num] = "X";
      setTurn(false);
    } else {
      squares[num] = "O";
      setTurn(true);
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const restart = () => {
    setTurn(true);
    setCells(Array(9).fill(""));
    setWinner(false);
  };

  // cell component
  const Cell = ({ num }) => {
    return (
      <div
        className="cell w-[100px] h-[100px] shadow-sm flex justify-center items-center bg-white font-game text-[2rem] text-darkPurple"
        onClick={() => handleClick(num)}
      >
        {cells[num]}
      </div>
    );
  };

  return (
    <>
      <div className="game h-screen bg-lightBlue">
        {/* heading */}
        <h1 className="font-game text-[6vw] text-center text-darkPurple">
          Tic Tac Toe
        </h1>

        {/* game section */}
        <div className="game-section flex justify-center items-center h-[80vh] gap-[8rem]">
          {/* left */}
          <div className="left-section w-[500px] relative">
            {/* message */}
            <div className="font-speech text-[2rem]">
              {turn ? (
                <h3 className="message absolute top-1 -left-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">
                  {winner ? "Nice! I won!" : "It's your turn, player X"}
                </h3>
              ) : (
                <h3 className="message absolute top-1 -right-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">
                  {winner ? "Wohoo! I made it!" : "Now you, player O!"}
                </h3>
              )}
            </div>
            <img src={friends} alt="friends" />
          </div>

          {/* right */}
          <div className="flex flex-col items-center">
            <div className="xo-grid w-[330px] flex flex-col gap-1 bg-darkPurple p-2">
              <div className="flex justify-between">
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
              </div>
              <div className="flex justify-between">
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </div>
              <div className="flex justify-between">
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </div>
            </div>
            <button
              className="px-4 py-3 mt-5 bg-darkPurple text-white rounded-lg"
              onClick={restart}
            >
              Restart Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
