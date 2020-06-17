# Backend

We are using Python(3.8) and [Pipfile](https://pipenv-fork.readthedocs.io/en/latest/) for package management.

Instructions for installation of Pipfile are found [here](https://pipenv-fork.readthedocs.io/en/latest/install.html#installing-pipenv)

Then dependencies for the app can be installed by running

`pipenv install`

**For developers**

Please run any installation of packages using `pipenv install {package-name}` instead of `pip install {package-name}`. This will capture the installed packages during the installation of package.

The web application can be run once the dependencies are installed. 

- Change the working directory to `{repo-location}\application\Backend`
- Activate pipenv shell with `pipenv shell`
- Export environment flag for flask app 
    - For Mac or linux - `export FLASK_APP=server.py`
    - For Windows - `set FLASK_APP=server.py`
- The following commands are available
    - `flask run` for running the application