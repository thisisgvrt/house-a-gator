#!/bin/sh

docker exec devops_webapp_1 bash -c "export FLASK_APP=server.py && pipenv run flask create-db && pipenv run flask populate-users --num_users 10 && pipenv run flask populate-listings --num_listings 16"