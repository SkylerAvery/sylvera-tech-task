import { Feed } from "../types";

interface FeedEntryProps {
  data: Feed
}

export default function FeedEntry({
  data
}: FeedEntryProps) {
  if (!data) return undefined

  const {
    device_id,
    gps_lat,
    gps_lon,
    timestamp
  } = data

  const entryClasses = 'break-words border p-2'

  return (
    <div role="row">
      <li role="cell" className={entryClasses}>
        {device_id ? device_id : 'Device ID of entry not found'}
      </li>
      <li role="cell" className={entryClasses}>
        {gps_lat ? gps_lat : 'Latitude data of entry not found'}
      </li>
      <li role="cell" className={entryClasses}>
        {gps_lon ? gps_lon : 'Longitude data of entry not found'}
      </li>
      <li role="cell" className={entryClasses}>
        {timestamp ? timestamp : 'Timestamp of entry not found'}
      </li>
    </div>
  )
}