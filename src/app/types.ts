export interface FetchData {
  url: string,
  tags: string[]
}

// Noticing some data is missing, will flag this in the UI since I can't fix in the API
export interface Feed {
  device_id?: string,
  s_t0?: number,
  s_h0?: number,
  s_d0?: number,
  gps_lat?: number,
  gps_lon?: number,
  timestamp?: string
}

interface Description {
  URL: string,
  c_d0_method?: string,
  c_d0?: string,
}

export interface ProjectDataType {
  source: string,
  c_d0_source: string,
  num_of_records: number,
  feeds: Feed[],
  descriptions: Description,
  version: string
}