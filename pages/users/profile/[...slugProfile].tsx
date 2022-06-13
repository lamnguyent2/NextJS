import { useRouter } from 'next/router'
import React from 'react'

export default function SlugProfilePage() {
    const slugrouterProfile = useRouter()
  return (
    <div>Profile Page by slug: {slugrouterProfile.query.slugProfile}</div>
  )
}
