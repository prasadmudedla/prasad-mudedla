# Defects found for the Pet Store API

- Get Inventory API throws 500(Internal server error)  after creating a Order using the Store endpoint.
  - Fix/Suggestion : Need to stop allowing creation of order with empty data

- Deleting a Pet using by ID using the Pet endpoint returns RAW data.
  - Fix/Suggestion : API should return JSON instead of RAW data.

- User logout using the User endpoint returns RAW data.
  - Fix/Suggestion : API should return JSON instead of RAW data.

- User login using the User endpoint returns RAW data.
  - Fix/Suggestion : API should return JSON instead of RAW data.