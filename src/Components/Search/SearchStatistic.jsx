import { useSearchContext } from '../../Context/SearchContext'
import { countBy } from 'lodash'

export const SearchStatistic = () => {
  const { companies } = useSearchContext()
  const statsObject = countBy(companies, 'companyType')
  const statsArray = Object.entries(statsObject)

  return (
    <>
      <div className='search-statistics'>
        <h3 className='stats-heading'>Distribution of companies</h3>
        {statsArray.map(([key, value], index) => {
          const modifiedKey = `No. of ${key.slice(0, -1)}ies`

          return (
            <div className='stats-container' key={value + index + key}>
              <p className='stats-title'> {modifiedKey} </p>
              <p> {value} </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
