import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import Funct from './Funct'

const TestePage = async () => {

  const currentUser = await getCurrentUser()

  if(!currentUser){
    return (
      <Funct />
    )
  }

  return (
    <div className='mt-40'>TestePage</div>
  )
}

export default TestePage