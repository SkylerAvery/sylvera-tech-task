import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>
        404 - This page is not found
      </p>
      <Link href="/">
        Go back home
      </Link>
    </>
  )
}