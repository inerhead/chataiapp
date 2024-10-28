# Chatbot Virtual Assistant

This application is a chatbot or virtual assistant that consumes the Azure OpenAI service to return responses to questions asked from the application.

## Features

- **User Interface**: Allows the user to enter a prompt and view the chatbot's responses in a grid of cards.
- **API Consumption**: Uses Azure OpenAI to process and generate responses to the prompts entered by the user.

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1.22 or higher)

## Installation

Follow these steps to install dependencies and run the application:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/inerhead/chataiapp.git
   cd chataiapp

2. **Clone the repository:**
   ```sh
   npm install / yarn install

3. **Configure environment variables:**
    Create a file named .env
    - AZURE_AI_URL=your_azure_ai_url
    - AZURE_AI_KEY=your_azure_ai_key

4. **Run the application: Using npm:**
    ```sh
    yarn dev
    The application will be available at http://localhost:3000
