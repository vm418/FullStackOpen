sequenceDiagram
  participant User as User
  participant Browser as Browser
  participant Server as Server

  User->>Browser: Open page /notes
  Browser->>Server: GET /notes
  activate Server
  Server-->>Browser: HTML document
  deactivate Server

  User->>Browser: Enter note text
  User->>Browser: Click submit button
  Browser->>Browser: Validate input

  Browser->>Server: POST /notes
  activate Server
  Server->>Server: Validate and store new note
  Server-->>Browser: Success response
  deactivate Server

  Browser-->>Browser: Update UI with new note