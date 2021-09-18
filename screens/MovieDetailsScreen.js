import React from 'react'

import MovieDetailsDisplay from '../lists/MovieDetailDisplay'

export default function MovieDetailsScreen({ route, navigation }) {
  const { item } = route.params

  return (
    < MovieDetailsDisplay item={item} navigation={navigation} />
  )
}