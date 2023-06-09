import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = useRef( null )

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect( () => {
        searchValue.current.focus()
    }, [] )

    const searchCocktail = () => {
        setSearchTerm( searchValue.current.value )
    }
    return (
        <section className='section'>
            <form className='search-form' onSubmit={ handleSubmit }>
                <div className="form-control">
                    <label htmlFor="name">
                        search your favorite cocktail
                    </label>
                    <input
                        type="text"
                        id='name'
                        ref={ searchValue }
                        onChange={ searchCocktail }/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
