import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const CompanyInfo = ({ shortText, longText, lorem }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='company-info'>
      <article className='container'>
        <h3 className='short-text'>{shortText}</h3>
        <h3 className='long-text'>{longText}</h3>
        <button
          className='show-hide-btn'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </article>
      {showInfo && <p className='content'> {lorem} </p>}
    </div>
  )
}
