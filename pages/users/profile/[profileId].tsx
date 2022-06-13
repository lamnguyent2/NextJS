import { useRouter } from 'next/router'
import React from 'react'
// rfc
export default function IdProfilePage() {
    const Idrouterprofile = useRouter()
    return (
        <div className='Profile-page'>Profile Page {Idrouterprofile.query.profileId}</div>
    )
}