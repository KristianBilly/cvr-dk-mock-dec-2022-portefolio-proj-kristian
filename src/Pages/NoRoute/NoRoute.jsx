import { useNavigate, useParams } from 'react-router-dom'
import { SmallContainer } from '../../Components/Other/SmallContainer'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'

export const NoRoute = () => {
  const { routeParams } = useParams()
  const navigate = useNavigate()

  return (
    <SmallContainer
      title={`Sorry, there is no site here: /${routeParams}.`}
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnText='To Frontpage'
    />
  )
}
