import { useState } from 'react'
import { contentData } from '../../Constants/contentData'
import { VirkopediaArticle } from './VirkopediaArticle'
import { VirkopediaTab } from './VirkopediaTab'

const allArticles = contentData.virkopediaData

export const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { paragraphs, heading } = allArticles[activeButtonIndex]

  return (
    <div className='virkopedia'>
      <h2>Virkopedia</h2>
      <div className='virkopedia-container'>
        <div className='btn-container'>
          {allArticles.map(({ heading }, index) => (
            <VirkopediaTab
              key={heading + index}
              setActiveButtonIndex={setActiveButtonIndex}
              heading={heading}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle heading={heading} paragraphs={paragraphs} />
      </div>
    </div>
  )
}
