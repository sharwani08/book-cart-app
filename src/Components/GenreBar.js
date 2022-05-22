import React from 'react'
import '../CSS/Genre.css'

export const GenreBar = () => {
  return (
    <div className="row genre-container">
      <ul className="genre-list">
        <li>Romance</li>
        <li>Action</li>
        <li>Thriller</li>
        <li>Science Fiction</li>
        <li>Mystery</li>
      </ul>
    </div>
  )
}
