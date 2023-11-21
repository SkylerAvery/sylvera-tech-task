"use client";
import { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string },
  reset: () => void
}

export default function Error({
  error,
  reset
}: ErrorProps) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h2>Opps, something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}