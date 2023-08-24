# React django web app
This is a web application built with Django and React.

## technology used in this app 
### Backend : 
    Django ,Django rest framework
### Frontend :
    Reactjs, Axios

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js

### Backend Setup
1. Clone the repository:
    ```
    git clone <repository_url>
    cd django-react-project

    ```
2. Create and activate a virtual environment:
    ```
    python3 -m venv nameofenv
    nameofenv\Scripts\activate
    ```
    
3. Install backend dependencies(after activateing the env):
    ```
    pip install -r requirements.txt

    ```

4. Apply migrations:
    ```
    python manage.py migrate
    ```

5. Run the Django development server:
    ```
    python manage.py runserver
    ```

The Django backend will now be running at http://localhost:8000/.

### Frontend Setup

1. Navigate to the frontend directory:
    ```
    cd frontendapp

    ```

2. Install frontend dependencies:
    ```
    npm install
    ```

3. Start the React development server:
    ```
    npm start
    ```

The React frontend will now be running at http://localhost:3000/.

## Usage

- Access the Django admin panel at http://localhost:8000/admin/.
- Access the React app at http://localhost:3000/.

## Contributors

- @hacetheworld 


# Notes 

This is just simple todo application in the future i will add authentication and authorization for sure 





