import { contentData } from '../../Constants/contentData'
import { Placeholder } from '../../Components/Placeholder/Placeholder'
import { PlaceholderWrapper } from '../../Components/Placeholder/PlaceholderWrapper'

const placeholderWrapperData = [
  contentData.placeholderData.rowOne,
  contentData.placeholderData.rowTwo,
  contentData.placeholderData.rowThree,
]

export const Placeholders = () => (
  <>
    {placeholderWrapperData.map((placeholders) => (
      <PlaceholderWrapper key={placeholders}>
        {placeholders.map(({ className, title }) => (
          <Placeholder key={title} className={className} title={title} />
        ))}
      </PlaceholderWrapper>
    ))}
  </>
)
