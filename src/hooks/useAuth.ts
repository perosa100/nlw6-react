import { RoomContext } from 'context/AuthContext'
import { useContext } from 'react'

export const useAuthGoogle = () => useContext(RoomContext)
