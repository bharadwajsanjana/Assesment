# -*- coding: utf-8 -*-
"""
Created on Mon Dec 26 20:30:30 2022

@author: Bharadwaj
"""

from flask import Flask
from flask_cors import CORS
from datetime import timedelta

app = Flask(__name__)
app.secret_key = "secret key"
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=10)
CORS(app)