# WallProject
To run the frontend, run this command
1. cd into the directory my-app
2. Run npm install --save axios react-router-dom redux redux-devtools-extension react-redux redux-thunk

On the backend, open a new terminal
<br>
1.To activate the virtual enviorment, run source venv/Scripts/activate.
<br>
2. pip install django djangorestframework djangorestframework-simplejwt djoser psycopg2 psycopg2-binary
<br>
4. pip install python-decouple
<br>
6. pip install django-dotenv
<br>
8. pip install django-cors-headers
<br>
10. pip install django-sendgrid-v5
<br>
To create the database
1. Make a new bash
2. Run the command psql, to get into psql shell
3. Run the command, CREATE DATABASE auth_system OWNER gitpod; if you want a different database name be sure to change it in settings.py in the auth_system folder.
<br>
On the my-app directory, where your .env file is the url might have changed make sure you paste the correct one
<br>
On .env in auth_system 
<br>
1. Add your sendgrid api key
<br>
To use Django-Admin 
<br>
1. Run python manage.py createsuperuser
<br>
And enter the crendentials asked
