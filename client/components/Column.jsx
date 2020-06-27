import React, { Component } from "react";
import { render } from "react-dom";
import Sticky from "./Sticky.jsx";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import  { Box } from '@chakra-ui/core';


// class Column extends Component {
//   render() {
//     return (
//       <div className= "column">
//         <h1>{this.props.name}</h1>
//         <Sticky />
//         {/* have to figure out how to get all the sticky notes for the exact column using the data key: column. the value is the column name */}
const ItemTypes = {
  STICKY:'sticky'
}

const Column = (props) => {

  const [{ isOver }, drop, drop1] = useDrop({
    accept: ItemTypes.STICKY,
    drop: (item, monitor) => 

    props.setColumn(item.text,props.column),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }) 

  return (
    <div>
      {/* have to figure out how to get all the sticky notes for the exact column using the data key: column. the value is the column name */}
      <div  style={{border: 'solid'}} className='box'>
        <h1>{props.column}</h1>
        <Box className='box' ref={drop}   w="30%" p={2} color="black"><h1 className='test'> {props.children}</h1>
        </Box>

      </div>
    </div>
  );
}

{/* <Box bg="tomato" w="100%" p={4} color="white">
This is the Box from the chakra-ui library
</Box> */}

export default Column;

{/* <div className='box'>
  <Box className='box' ref={drop} style={{backgroundColor: isOver ? "#ABABAB" : '#f5f5f1'}}  w="20%" p={2} color="black"><h1 className='test'> {props.children}</h1>
  </Box>
</div> */}

// export default function Card({ isDragging, text }) {
//   const [{ opacity }, dragRef] = useDrag({
//     item: { type: ItemTypes.CARD, text },
//     collect: (monitor) => ({
//       opacity: monitor.isDragging() ? 0.5 : 1
//     })
//   })
//   return (
//     <div ref={dragRef} style={{ opacity }}>
//       {text}
//     </div>
//   )
// }