from flask import Blueprint, render_template, session, jsonify
from flask_login import login_required, current_user

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return jsonify({'message': 'Hello, World!'})
    


@main.route('/profile')
@login_required
def profile():
    if 'email' in session:
        email = session['email']
        return jsonify({'message': 'You are logged in'})
    
    return jsonify('message', 'Welcome!')