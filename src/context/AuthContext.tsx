import { auth, firebase } from 'services/firebase'
import { createContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  avatar: string
}

type CreateContextProps = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

export const RoomContext = createContext({} as CreateContextProps)

const AuthContext = ({ children }: any) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)
    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <RoomContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </RoomContext.Provider>
  )
}

export { AuthContext }
