import FeedEntry from "@/app/components/feedEntry"
import ProjectHeaders from "@/app/components/projectHeaders"
import { Feed, ProjectDataType } from "@/app/types"
import { fetchData, parseJSON } from "@/app/utils/fetch"

interface ProjectPageParams {
  params: {
    project: string
  }
}

export default async function ProjectPage({
  params
}: ProjectPageParams) {
  const { project } = params
  if (!project) {
    throw new Error('Missing project data');
  }

  const projectData = await fetchData({
    url: `https://pm25.lass-net.org/API-1.0.0/project/${project}/latest/`,
    tags: ['project', project]
  })
  if (!projectData) {
    throw new Error('Failure to fetch project data');
  }

  const parsedData: ProjectDataType = await parseJSON(projectData);
  if (!parsedData) {
    throw new Error('Failure to parse project data');
  }

  let filteredFeeds: Feed[] = parsedData.num_of_records > 10
    ? parsedData.feeds.slice(0, 10)
    : parsedData.feeds

  return (
    <section>
      <h2 className='pb-3 font-bold capitalize text-xl'>
        Project
      </h2>
      <h3 className="pb-3 font-semi-bold capitalize text-lg">
        {project}
      </h3>
      <p className="pb-2">
        {`Showing top 10 feeds out of ${parsedData.num_of_records}`}
      </p>
      <ul className="list-none grid grid-cols-4 justify-between">
        <>
          <ProjectHeaders />
          {filteredFeeds.map((feedData, index) => (
            <FeedEntry key={index} data={feedData} />
          ))}
        </>
      </ul>
    </section>
  )
}