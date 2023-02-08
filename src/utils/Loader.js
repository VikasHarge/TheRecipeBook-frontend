import React from 'react'
import { Dna } from 'react-loader-spinner'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderWrapper>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
        />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
    width : 100%;
    height : 100vh;
    display : flex; 
    justify-content : center;
    align-items : center;
`

export default Loader