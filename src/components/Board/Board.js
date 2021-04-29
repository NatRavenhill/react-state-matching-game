import React from 'react'
import './Board.css';
import Tile from '../Tile/Tile';

const Board = (props) => {

  const thing = props.tiles.map(tile => <Tile {...tile} />);

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {thing}
    </div>
  )
}

export default Board
