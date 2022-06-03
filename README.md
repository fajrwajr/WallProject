# WallProject
To run the frontend, run this command
1. cd into the directory my-app
2. Run npm install --save axios react-router-dom redux redux-devtools-extension react-redux redux-thunk

On the backend, open a new terminal
1.To activate the virtual enviorment, run source venv/Scripts/activate
2. pip install django djangorestframework djangorestframework-simplejwt djoser psycopg2 psycopg2-binary
3. pip install python-decouple
4. pip install django-dotenv
5. pip install django-cors-headers
6. pip install django-sendgrid-v5
To create the database
1. Click a new terminal
2. Run the command psql, to get into psql shell
3. To create the database, run the command, CREATE DATABASE auth_system OWNER gitpod; if you want a different database name be sure to change it in settings.py in the auth_system folder.
On the my-app directory, where your .env file is the url might have changed make sure you paste the correct one
On .env in auth_system 
1. Add your sendgrid api key
To use Django-Admin 
Run python manage.py createsuperuser
And enter the crendentials asked
