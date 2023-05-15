import { useSearchContext } from '../../Context/SearchContext'
import { TextInput } from '../Other/TextInput'
import { Search } from './Search'

export const SearchWrapper = () => {
  const { searchField, setSearchField } = useSearchContext()

  return (
    <div className='search'>
      <div className='search-container'>
        <h2 className='search-title'>Search the CVR</h2>
        <TextInput
          search
          type='search'
          value={searchField}
          placeholder='Search for the company here...'
          onChange={(e) => setSearchField(e.target.value)}
          autoFocus
        />
        <Search />
      </div>
    </div>
  )
}
