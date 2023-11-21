import { FetchData } from "../types";

export async function fetchData({
  url,
  tags
}: FetchData) {
  if (!url) return undefined
  const response = await fetch(url, {
    next: {
      revalidate: 3600,
      tags
    }
  })
  if (!response.ok) {
    throw new Error('Problem fetching requested data')
  }

  return response
}

export async function parseJSON(response: Response) {
  return await response.json()
}

export async function parseBody(response: Response) {
  return await response.text()
}