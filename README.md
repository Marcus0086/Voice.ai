# Voice AI

Voice AI is an open-source project that leverages FastAPI, Uvicorn, and Next.js to create a responsive and interactive AI voice assistant. This project is designed to showcase the integration of modern web technologies for building powerful AI-driven applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following tools installed:
- [Poetry](https://python-poetry.org/docs/)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Marcus0086/khtxsm.git
    cd khtxsm
    ```

2. **Set Up Environment Variables**

    - Copy the `.env.example` file to a new file named `.env`.
    - Add your OpenAI API key and other necessary environment variables in the `.env` file.

3. **Backend Setup**

    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install the dependencies using Poetry:
      ```bash
      poetry install
      ```
    - Start the Poetry shell:
      ```bash
      poetry shell
      ```
    - Run the FastAPI server using Uvicorn:
      ```bash
      uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
      ```

4. **Frontend Setup**

    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - Install the dependencies:
      ```bash
      npm install
      # Or, if using pnpm
      pnpm i
      # Or, if using yarn
      yarn install
      ```
    - Start the frontend development server:
      ```bash
      npm run dev
      # Or, if using pnpm
      pnpm dev
      # Or, if using yarn
      yarn dev
      ```

## Usage

After starting both the backend and frontend servers, you can access the Voice AI application at `http://localhost:3000` (or another port if you configured it differently).

