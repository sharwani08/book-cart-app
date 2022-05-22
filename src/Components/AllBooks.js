import React from 'react'
import {Book} from './Book'

export const AllBooks = (props) => {

  return (
    <div className="all-books">
      {props.list.map(item => {
        return (
          <Book book={item} key={item.id}/>
        )
      })}
    </div>
  )
}
