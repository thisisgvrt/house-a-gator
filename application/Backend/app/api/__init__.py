from app import app

from app.api.about import about_page
from app.api.listing import listing_page
from app.api.media import media_page

app.register_blueprint(about_page, url_prefix='/api/about')
app.register_blueprint(media_page, url_prefix='/api/media')
app.register_blueprint(listing_page, url_prefix='/api/listings')

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"