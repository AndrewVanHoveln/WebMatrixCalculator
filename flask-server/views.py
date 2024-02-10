from flask import Blueprint, request, jsonify, redirect, url_for
import numpy as np

views = Blueprint(__name__, "views")

@views.route("/home")
def home():
    return "home page"

@views.route("/")
def go_to_home():
    return redirect(url_for("views.home"))

@views.route("/multiply", methods=['POST'])
def multiply():
    if request.method == 'POST':
        data = request.json
        a = np.array(data.get('a', []))
        b = np.array(data.get('b', []))

        try:
            c = np.dot(a, b)
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]})
        

@views.route("/add", methods=['POST'])
def add():
    if request.method == 'POST':
        data = request.json
        a = np.array(data.get('a', []))
        b = np.array(data.get('b', []))

        try:
            if len(a) != len(b) or len(a[0]) != len(b[0]):
                return {"c" : [[]]}
            c = a + b
            
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]})

        
@views.route("/subtract", methods=['POST'])
def subtract():
    if request.method == 'POST':
        data = request.json
        a = np.array(data.get('a', []))
        b = np.array(data.get('b', []))

        try:
            if len(a) != len(b) or len(a[0]) != len(b[0]):
                return {"c" : [[]]}
            c = a - b
            
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]})
