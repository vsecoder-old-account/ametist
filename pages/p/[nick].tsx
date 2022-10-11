import { useRouter } from 'next/router'

const Player = () => {
  const router = useRouter()
  const { nick } = router.query

  return <p>Player: {nick}</p>
}

export default Player
