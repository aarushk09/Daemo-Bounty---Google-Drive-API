# Daemo Google Drive Knowledge Agent

**Note: This agent provides tools to search, read, and organize Google Drive files. Actual summarization logic relies on the Daemo Engine's processing of the text content retrieved by this agent.**

## Description
This project implements an AI-powered knowledge agent using the Daemo Engine and Google Drive API. It enables users to interact with their Google Drive to:
*   **Search:** Find documents using natural language queries.
*   **Summarize:** Retrieve text content from documents (Google Docs, plain text) for the AI to summarize.
*   **Organize:** Create folders and move files to keep your Drive structured.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aarushk09/Daemo-Bounty---Google-Drive-Knowledge-Agent.git
    cd Daemo-Bounty---Google-Drive-Knowledge-Agent
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory (you can use `src/env.example` as a reference). You will need:
    *   `DAEMO_AGENT_API_KEY`: Your Daemo API key.
    *   `GOOGLE_CLIENT_ID`: OAuth2 Client ID from Google Cloud Console.
    *   `GOOGLE_CLIENT_SECRET`: OAuth2 Client Secret.
    *   `GOOGLE_REFRESH_TOKEN`: A valid refresh token for the Google Drive API.

    To get the Google credentials, set up a project in the [Google Cloud Console](https://console.cloud.google.com/), enable the **Google Drive API**, and create OAuth 2.0 credentials with appropriate scopes (e.g., `https://www.googleapis.com/auth/drive`).

4.  **Run the Agent:**
    ```bash
    npm start
    ```

## Features
*   **Search Files:** Find files by name or content.
*   **Read Content:** Extract text from Google Docs and text files for the AI to process.
*   **Create Folders:** Generate new folder structures on demand.
*   **Move Files:** Organize files into folders.

## Technologies
*   Node.js & TypeScript
*   Daemo Engine SDK
*   Google APIs Node.js Client (Drive v3)
*   Zod (Schema Validation)

