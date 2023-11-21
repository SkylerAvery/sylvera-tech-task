export default function ProjectHeaders () {
  const headerClasses = 'break-words border p-2 font-bold text-center bg-cyan-900 text-gray-100'

  return (
    <div role="row" className="grid grid-cols-4 justify-between">
      <li role="cell" className={headerClasses}>
        Device ID
      </li>
      <li role="cell" className={headerClasses}>
        Latitude
      </li>
      <li role="cell" className={headerClasses}>
        Longitude
      </li>
      <li role="cell" className={headerClasses}>
        Timestamp
      </li>
    </div>
  )
}