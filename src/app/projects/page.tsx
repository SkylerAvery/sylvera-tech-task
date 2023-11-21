import Link from "next/link"
import { fetchData, parseBody } from "../utils/fetch"

export default async function ProjectsPage() {
  const projectDataResponse = await fetchData({
    url: 'https://pm25.lass-net.org/API-1.0.0/project/all/',
    tags: ['projects']
  })
  if (!projectDataResponse) {
    throw new Error('Problem fetching project data')
  }

  const projectData: string | undefined = await parseBody(projectDataResponse);
  if (!projectData) {
    throw new Error('Problem parsing data')
  }

  const formattedData = projectData.split('\n');
  formattedData.splice(-1);

  return (
    <section>
      <h2 className="pb-3 font-bold capitalize text-xl">Projects</h2>
      <ul className="list-none grid grid-cols-3 gap-3 justify-between">
        {formattedData.map((project, index) => (
          <li key={index}>
            <Link
              href={`/project/${project}`}
            >
              <p className="text-center p-2 capitalize bg-cyan-900 text-gray-100 rounded">
                {project}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}