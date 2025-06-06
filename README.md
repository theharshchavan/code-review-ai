# AI Code Reviewer

AI-powered code review tool leveraging Google Gemini AI to provide instant, high-quality feedback on your code.

**🔗 [Live Project](https://code-review-ai-frontend-8uxo.onrender.com)**

## Features

- **AI-Powered Reviews:** Uses Google Gemini AI to analyze and review code.
- **Constructive Feedback:** Highlights issues, suggests improvements, and provides best practices.
- **Modern UI:** React-based frontend with live code editor and markdown-rendered feedback.
- **Easy Integration:** Simple REST API for code review requests.

## Project Structure

```
BackEnd/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── ai.controller.js
│   ├── routes/
│   │   └── ai.routes.js
│   └── services/
│       └── ai.service.js
├── server.js
└── package.json

Frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
└── package.json
```