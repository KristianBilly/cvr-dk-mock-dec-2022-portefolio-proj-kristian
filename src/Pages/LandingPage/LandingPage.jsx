import { SearchWrapper } from '../../Components/Search/SearchWrapper'
import { useSearchContext } from '../../Context/SearchContext'
import { Placeholders } from './Placeholders'

export const LandingPage = () => {
  const { isSearchFieldEmpty, isCompaniesFound } = useSearchContext()

  return (
    <>
      <SearchWrapper />
      {(isSearchFieldEmpty || !isCompaniesFound) && <Placeholders />}
    </>
  )
}
