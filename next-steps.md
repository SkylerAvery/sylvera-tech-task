# Next Steps

Detailed in this document are the further additions I would make to this project if I were working on this beyond a technical task.

## Projects Page

### Search for a project
While the API was returning a manageable number of projects, it would be good to handle the scenario of if we had many more projects.
We could add an input field that could search through the returned projects or add a new `/projects/search` route that could interface into the API directly.

## Project Page

### Pagination for further records
Likewise, for the project page, we only show the top 10 feeds returned for the project.
We should add in pagination to look at historic data entries as well. 
Also, allowing the user to select the number of entries shown on any page would be a nice addition.


### Search between values
For a more granular approach, allowing the users to search for feed entries would be a good addition.
For example, filtering entries between specific years/times, lon/lat coordinates and device IDs.

## Utils

### Force clear cache
While the cache is being revalidated automatically every hour, we should add the ability to fetch new data on demand via a refresh button.
Since I added tags, we can revalidate each cache separately from each other on each route or revalidate everything in case of a global error.

