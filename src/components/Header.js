import { Sparkles, Search } from 'heroicons-react'
import { useState } from 'react'

const Header = ({ onFilter }) => {
  const [filterValue, setfilterValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(filterValue)
    onFilter({ filterValue })
  }
  const onChangeValue = (e) => {
    setfilterValue(e.target.value)
  }

  return (
    <div className='header'>
      <h5 className='header_name'>
        <Sparkles />
        Recipe finder
      </h5>
      <div className='header_search'>
        <div className='header_search_icon'>
          <Search />
        </div>
        <div className='header_search_form'>
          <form className='header_search_form' onSubmit={onSubmit}>
            <input
              className='header_search_input'
              type='text'
              placeholder='Search recipe'
              onChange={onChangeValue}
              value={filterValue}
            />
            <input className='header_search_submit' type='submit' value='Go' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
