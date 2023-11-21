import Link from "next/link";

export default function Root() {
  return (
    <section className="py-5">
      <div>
        <p>
          This site will list all devices currently available and the most recent data obtained from them.
          Each entry will display:
        </p>
        <ul className="list-disc py-2 px-5">
          <li>
            The device ID of the entry
          </li>
          <li>
            The lontitude of the recorded data
          </li>
          <li>
            The longtitude of the recorded data
          </li>
          <li>
            The timestamp of the data entry
          </li>
        </ul>
        <p>
          <span>Select a project from the </span>
          <Link className='underline'href='/projects'>Projects page</Link>
          <span> to view the current data</span>
        </p>
      </div>
    </section>
  )
}