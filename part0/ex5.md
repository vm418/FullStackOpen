graph TD
  A[User] -->|1. Access| B(Single-page app)
  B -->|2. Fetch data| C(Server)
  C -->|3. JSON data| B
  A -->|4. Create new note| B
  B -->|5. Send data| C
  C -->|6. Update data| B
