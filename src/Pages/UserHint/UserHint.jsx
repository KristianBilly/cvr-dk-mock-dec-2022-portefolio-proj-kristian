import { useNavigate } from 'react-router-dom'
import { SmallContainer } from '../../Components/Other/SmallContainer'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'
import { useSearchContext } from '../../Context/SearchContext'

export const UserHint = () => {
  const navigate = useNavigate()
  const { allCompanies } = useSearchContext()

  const companyNames = allCompanies.map(({ companyName, index }) => (
    <p key={companyName + index}>{companyName}</p>
  ))

  return (
    <SmallContainer
      title='Beneath are the companies in the database'
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnText='To Frontpage'
      content={companyNames}
    />
  )
}
