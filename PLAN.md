# Infrastructure Overview
This application consists of a single NestJS module managing a resource called 'items'.

## Data Models
- Item
  - id: number
  - name: string
  - description: string

## API Design
- **GET /items**: Returns a list of items.
- **POST /items**: Accepts a JSON object to create a new item.
- **GET /items/:id**: Returns a single item by ID.
- **PUT /items/:id**: Accepts a JSON object to update an item by ID.
- **DELETE /items/:id**: Deletes an item by ID.

## Key Decisions
- Using in-memory storage for simplicity.
- Basic error handling included.