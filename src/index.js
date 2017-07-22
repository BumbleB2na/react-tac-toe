import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            isAscending: true,
        };
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winningSquares = calculateWinner(current.squares);

        let status;
        if(winningSquares) {
            status = 'Winner: ' + current.squares[winningSquares[0]];
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const coord = history[move].coordClicked;
            const desc = move ?
                'Move (' + coord.x + ',' + coord.y + ')' :
                'Game start';
            let bold = (move === this.state.stepNumber) ? 'bold' : '';

            return (
                <li key={move}>
                    <button className={bold} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        
        //render moves in either ascending or descending order.
        if (!this.state.isAscending) {
            moves.sort(function(a,b) {
                return b.key - a.key;
            });
        } 

        return (
            <h1>React-Tac-Toe</h1>
            <div className="game">
            <div className="game-board">
                <Board 
                    winningSquares={winningSquares} 
                    squares={current.squares} 
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol reversed={!this.state.isAscending}>{moves}</ol>
                Toggle order: <button onClick={() => this.handleToggleOrder()}>
                    {(this.state.isAscending) ? 'descending' : 'ascending'}
                </button>
            </div>
            </div>
        );
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                coordClicked: calculateCoordClicked(i),
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    handleToggleOrder() {
        this.setState({
            isAscending: !this.state.isAscending,
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
}

class Board extends React.Component {
    render() {
        return (
            <div>
                {[...Array(3)].map((x, i) => //for(let i = 0; i < 3; i++) - Like an inline for loop in render statement: https://stackoverflow.com/a/29629588/285714
                    this.renderRow(i)
                )}
            </div>
        );
    }
    renderRow(i) {
        return (
            <div className="board-row" key={i}>
                {[...Array(3)].map((x, j) => //for(let j = 0; j < 3; j++) - Like an inline for loop in render statement: https://stackoverflow.com/a/29629588/285714
                    this.renderSquare((i*3) + j)
                )}
            </div>
        );
    }
    renderSquare(i) {
        var winningSquare = 'square';
        if(this.props.winningSquares)
            for(let j = 0; j < this.props.winningSquares.length; j++)
                if(i === this.props.winningSquares[j])
                    winningSquare = 'square winner';

        return (
            <Square 
                className={winningSquare} 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)} 
                key={i}
            />
        );
    }
}
  
function Square(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}

//take square # from 1 to 9 and calculate x,y coordinate clicked in gameboard grid
function calculateCoordClicked(i) {
    i++;  //incremember up 1 from 0-index
    return {
        'x': (i > 6) ? (i - 6) : ((i > 3) ? (i - 3) : i),
        'y': (i > 6) ? '3' : ((i > 3) ? '2' : '1'),
    };
}

// ========================================
   
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  