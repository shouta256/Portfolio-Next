import { client } from '@/libs/client'

export default async function Home() {
  const data = await client.get({
    endpoint: 'works',
  })

  return (
    data
  )
}