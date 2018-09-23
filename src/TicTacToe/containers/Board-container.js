import React, {Component} from 'react'
import Board from '../components/Board'
import Modal from '../../Modal/components/Modal'
class BoardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(3).fill(Array(3).fill("⬜️")),
      player: "❌",
      gameStatus: 'playing'
    }
    this.baseState = this.state
  }
  handleSquareClick = event => {
    if(event.target.innerHTML === "⬜️"){
      event.target.innerHTML = this.state.player
      event.target.classList.add('marked')
      this.gameOverCheck()
      if(this.state.gameStatus === 'playing'){
        if(this.state.player === "❌"){
          this.setState({
            player:"⭕️"
          })
        } else{
          this.setState({
            player: "❌"
          })
        }
      }
    }
  }

  gameOverCheck = () => {
    function checkDiagonals(squaresList){
      if(squaresList[4].innerHTML !== "⬜️"){
        if([
          // Left top to rigth bottom
            [squaresList[0].innerHTML,
              squaresList[4].innerHTML,  
              squaresList[8].innerHTML].every(elem => 
                elem === squaresList[4].innerHTML)
            ,
            // Rigth top to left bottom
            [squaresList[2].innerHTML,
              squaresList[4].innerHTML,
              squaresList[6].innerHTML].every(elem =>
                elem === squaresList[2].innerHTML)
            ].some(elem => elem)){ // checks if any of them becomes true
                return true
        }
      }
    }
    function checkHorizontal(matrix){
      // here we check horizontal marked squares
      if(matrix.some(
        xelements => 
          xelements.every(elem=>
              elem.innerHTML === xelements[0].innerHTML &&
                elem.innerHTML !== "⬜️" ) )){
        return true
      }
    }
    function checkVertical(matrix){
       // Now let's check vertical ones
       for(let i = 0; i<matrix.length ; i++){
        if(matrix[0][i].innerHTML !=="⬜️"){
          if([matrix[0][i].innerHTML,
              matrix[1][i].innerHTML,
              matrix[2][i].innerHTML].every(elem =>
               elem ===matrix[0][i].innerHTML)){
            return true
          } 
        }
      }
    }
    const squaresList = Array.from(document.getElementsByClassName('Square'))
    const markedSquares = squaresList.filter(square => Array.from(square.classList).includes('marked'))
    const matrix = [ squaresList.slice(0,3) , squaresList.slice(3,6) , squaresList.slice(6)]
    if(checkDiagonals(squaresList)){
      this.setState({ gameStatus: this.state.player}) 
    } else if(checkHorizontal(matrix)){
      this.setState({ gameStatus: this.state.player}) 
    } else if(checkVertical(matrix)) {
      this.setState({ gameStatus: this.state.player}) 
    } else if(squaresList.length === markedSquares.length){
      this.setState({ gameStatus: 'match'}) 
    } else{
      this.setState({ gameStatus: 'playing'}) 
    }
  }
  handlePlayAgainClick =  event =>{
    this.setState(
      ...this.baseState
    )
    const squaresList = Array.from(document.getElementsByClassName("Square"))
    squaresList.map(square =>{
      square.classList.remove('marked')
      square.innerHTML="⬜️"
    })
  }
  render(){
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        {
        this.state.gameStatus !== 'playing' &&
          (this.state.gameStatus === 'match' ?
            <Modal 
              modalMessage={`Rematch?`} 
              winner={`🎊 All wins!🎊`}
              handlePlayAgainClick={this.handlePlayAgainClick}
              />
            :
            <Modal 
              modalMessage={`Good luck next time ${this.state.gameStatus === "❌" ? "⭕️" : "❌"} !`} 
              winner={`🎊 ${this.state.gameStatus} wins !🎊`}
              handlePlayAgainClick={this.handlePlayAgainClick}
              />)
        } 
        <Board 
          squares={this.state.squares}
          handleSquareClick={this.handleSquareClick}
         />
      </div>
    )
  }
}

export default BoardContainer