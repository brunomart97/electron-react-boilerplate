import { useState, useEffect } from 'react'

export const useHelloWorldContext = () => {
  const [helloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    const request = async () => {
      const helloWorldResponse = await window.helloWorldContext.helloWorld

      if (!helloWorldResponse) {
        return
      }

      setHelloWorld(helloWorldResponse)
    }

    request()
  }, [])

  return { helloWorld }
}