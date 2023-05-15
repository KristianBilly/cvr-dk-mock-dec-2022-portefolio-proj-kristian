import cc from 'classcat'

export const VirkopediaTab = ({
  heading,
  index,
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  const isActiveButton = index === activeButtonIndex

  return (
    <button
      onClick={() => setActiveButtonIndex(index)}
      className={cc([
        'article-btn',
        {
          'active-btn': isActiveButton,
        },
      ])}
    >
      {heading}
    </button>
  )
}
