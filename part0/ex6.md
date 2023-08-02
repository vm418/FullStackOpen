sequenceDiagram
  participant A as User
  participant B as Single-page app
  participant C as Server

  A->>B: Enter note text and click submit
  B->>B: Validate and process input
  B->>C: POST new note data
  activate C
  C->>C: Validate and store new data
  C-->>B: Success response
  deactivate C
  B-->>A: Show success message and update UI
