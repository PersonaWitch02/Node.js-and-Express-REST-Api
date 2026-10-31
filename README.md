Build localized in-memory REST API
Understanding
Create a Node.js/Express API for an in-memory resource collection with five CRUD endpoints, global JSON parsing, request logging middleware, npm scripts/dependencies, and markdown testing evidence using curl or Postman. A GitHub URL can only be documented as a placeholder unless a repository URL is already available.

Assumptions
Use a simple resources collection with generated numeric IDs.
Return JSON responses and conventional 404/201 statuses.
Use curl-based evidence so tests are reproducible without requiring Postman.
Preserve any existing project structure if present.
Approach
Inspect the repository first, then add or adapt the npm project and Express server using the existing conventions. Implement validation-light CRUD behavior against an in-memory array, add timestamp/method/route logging middleware, and document startup plus curl verification commands and expected status codes.

Key Files
package.json - npm metadata, dependency, and start script.
server.js - Express app, middleware, in-memory data, and REST endpoints.
README.md - setup, API contract, and testing evidence.
Risks & Open Questions
A GitHub source link cannot be created from the workspace; document the local implementation and request/provide the repository URL separately if required.
Existing files may define a different entry point or project style and will be respected where practical.
Steps
Inspect the repository structure and existing project files.
Create or update npm project metadata and dependencies.
Implement the Express server and CRUD endpoint matrix.
Add curl-based testing documentation.
Validate the API with build/static checks and endpoint requests.
