# ECO-AFRIQA
ECO-AFRIQA is an e-commerce farming platform built with Django, MySQL, and Django REST Framework. The platform allows farmers to list their products and customers to place orders seamlessly.

# Table of Contents
- Features
- Technology Stack
- Installation
- Running the Application
- Directory Structure
- Contributing
- License

# Features
## Public Pages (Accessible to All Visitors)
- Home Page: Introduction to Freshly, highlight of key services, and a call to action for sign-up.
- About Page: Company history, mission and vision, team members, and contact information.
- Blogs Page: List of blog posts with categories, tags, and search functionality. Individual blog post pages.
- Sign Up Page: Sign-up form (name, email, password, etc.), benefits of signing up, and a link to login for existing users.

# Private Pages (Accessible to Registered Users Only)
Accessible after successful registration and email verification:
- Products Page: Add, view, edit, and delete user-added products.
- Gardens Page: View available gardens with details, filter, and search functionality. Send invoice for garden requests.
- Services Page: Information on installation and consultation services, renting and selling gardening equipment, and forms to request services with invoice generation.

# Account Management (Accessible to Registered Users)
- User Profile: View and edit profile information and manage email notification preferences.
- Email Notifications: List, read, and manage received email notifications.
- Logout: Log out from the account.

# Main Navigation Bar
- For First-Time Visitors: Home, About, Blogs, Sign Up.
- For Registered Users: Home, About, Blogs, Products, Gardens, Services, Profile, Logout.

# User Journey
- First-Time Visit: Users see the Home, About, Blogs, and Sign-Up pages, with encouragement to sign up.
- Post Sign-Up: Users receive email verification, after which they can access additional features and manage their products, gardens, and services.

# Technology Stack
- Frontend: HTML, CSS, JavaScript (React.js)
- Backend: Django
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)
- Deployment: Docker, Kubernetes

# Installation
## Prerequisites
- Django
- packages
- React 
  
# Steps

1. Clone the repository:
```bash
    git clone https://github.com/Manoty/ECO-AFRIQA.git
    cd freshly_set
```

2. Install dependencies:
```bash
    pip install -r requirements.txt
```

3. Set up environment variables:
   - Create a .env file in the root directory.
   - Add the following variables:
```bash
    python -m venv env
    source env/bin/activate   # On Windows, use `env\Scripts\activate`
```


4. Apply migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

# Directory Structure

```bash
freshly-set/
│
├── freshly_set/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── freshlyapp/templates
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│  
│   ├── views.py
│   ├── migrations/
│   │   └── __init__.py
│   └── tests.py
│
├── manage.py
└── requirements.txt
```


# Contributing
Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

# License
his project is licensed under the MIT License. See the LICENSE file for details.

