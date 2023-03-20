import React from 'react'
import {Form , FormControl , Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { set } from 'immer/dist/internal'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
    setSearchTerm('')

}


  return (
    <Form onSubmit={handleSubmit} className="d-flex mx-auto">
    <FormControl
      type="search"
      placeholder="Search"
      className="mr-2"
      aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  )
}

export default SearchBar