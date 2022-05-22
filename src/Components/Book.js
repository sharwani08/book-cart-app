import React, {useState} from 'react'
import {Cart} from '../Components/Cart'
import '../CSS/Book.css'

export const Book = (props) => {
    const [count, setCount] = useState(0)

    const handleChange = (e) => {
        const changeType = e.target.name
        
        if(changeType === "increment")
            setCount(count + 1)
        else if(count > 0)
            setCount(count - 1)
    }

  return (
      <>
        <div className="book">
            <div className="book-cover">
                {/* {const imagePath = } */}
                <img src={require('../Images/' + props.book.imagePath)} alt="book-cover" height={200} width={200}/>
            </div>
            <h3>{props.book.name}</h3>
            <h5>{props.book.author}</h5>
            <p>{props.book.content}</p>
            <button name="decrement" className="btn btn-primary btn-sm decrement" onClick={handleChange}>-</button>
            <span className="quantity">         {count}         </span>
            <button name="increment" className="btn btn-primary btn-sm increment" onClick={handleChange}>+</button>
        </div>
        <Cart/>
      </>
  )
}
