import React from 'react'
import {GenreBar} from './GenreBar'
import {AllBooks} from './AllBooks'
import '../CSS/MainScreen.css'

export const MainScreen = (props) => {

  return (
    <>
      <div className="row container">
        <div className="col-lg-3 col-md-4 genre-bar">
          <GenreBar />
        </div>
        <div className="col-lg-9 col-md-8 all-books">
          <AllBooks list={props.list}/>
        </div>
      </div>
    </>

  )
}
