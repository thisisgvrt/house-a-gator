from app import app

from app.api.about import about_page

app.register_blueprint(about_page, url_prefix='/api/about')

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"