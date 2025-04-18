{
  "UserSession": {
    "sessionId": "string",
    "startTime": "timestamp",
    "endTime": "timestamp",
    "active": "boolean",
    "anonymousUserId": "string"
  },

  "Message": {
    "messageId": "string",
    "sessionId": "string",
    "timestamp": "timestamp",
    "sender": "string (User | Persona)",
    "content": "string"
  },

  "Persona": {
    "personaId": "string",
    "name": "string",
    "bio": "string",
    "traits": ["string"]
  },

  "CrisisAlert": {
    "alertId": "string",
    "sessionId": "string",
    "timestamp": "timestamp",
    "triggeringMessageId": "string",
    "crisisType": "string",
    "referredToSupport": "boolean"
  },

  "Feedback": {
    "feedbackId": "string",
    "sessionId": "string",
    "timestamp": "timestamp",
    "rating": "string (positive | negative | neutral)",
    "comments": "string (optional)"
  }
}
