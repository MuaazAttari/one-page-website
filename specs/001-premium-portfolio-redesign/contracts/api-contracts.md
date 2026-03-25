# API Contracts: Premium Portfolio Redesign

**Feature**: 001-premium-portfolio-redesign
**Date**: 2026-02-13

## Overview
API contracts for potential future enhancements to the portfolio site. Currently, the site is frontend-only with static content, but these contracts define potential API endpoints for future functionality.

## Contact Form Submission (Future Enhancement)

### POST /api/contact

Submit a contact form message.

**Request**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response (400 Bad Request)**:
```json
{
  "success": false,
  "errors": {
    "email": "Invalid email format",
    "message": "Message is required"
  }
}
```

## Project Filtering (Future Enhancement)

### GET /api/projects

Retrieve filtered list of projects.

**Query Parameters**:
- category: string (optional)
- limit: number (optional)
- offset: number (optional)

**Response (200 OK)**:
```json
{
  "projects": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "technologies": ["string"],
      "link": "string",
      "category": "string"
    }
  ],
  "total": "number"
}
```