import React from 'react'

import './SearchInput.css'

import { InputGroup, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput ({
  label = 'Buscar'
} = {}) {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder={label}
        aria-describedby="SearchIcon"
      />

      <InputGroup.Append>
        <InputGroup.Text id="SearchIcon">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
}