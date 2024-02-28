from flask import Blueprint, request, jsonify, redirect, url_for
import numpy as np
import sentenceTagging as st
import sys

views = Blueprint(__name__, "views")

# Here we do our initilization for sentence tagging
try:
    wordsAndTags, tags, corpus = st.processfile()
except:
    print("Loading the data into the program failed", file=sys.stderr)

table = st.createTransitionProbTable(corpus, tags)

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
        a = None
        b = None
        try:
            a = np.array(data.get('a', []))
            b = np.array(data.get('b', []))
        except:
            return jsonify({"c" : [[]]}), 400

        try:
            c = np.dot(a, b)
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]}), 400
        

@views.route("/add", methods=['POST'])
def add():
    if request.method == 'POST':
        data = request.json
        a = None
        b = None
        try:
            a = np.array(data.get('a', []))
            b = np.array(data.get('b', []))
        except:
            return jsonify({"c" : [[]]}), 400

        try:
            if len(a) != len(b) or len(a[0]) != len(b[0]):
                return {"c" : [[]]}, 400
            c = a + b
            
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]}), 400

        
@views.route("/subtract", methods=['POST'])
def subtract():
    if request.method == 'POST':
        data = request.json
        a = None
        b = None
        try:
            a = np.array(data.get('a', []))
            b = np.array(data.get('b', []))
        except:
            return jsonify({"c" : [[]]}), 400

        try:
            if a.shape != b.shape:
                return {"c" : [[]]}, 400
            c = a - b

            
            return jsonify({"c": c.tolist()})
        except:
            return jsonify({"c" : [[]]}), 400

@views.route("/sentence-tag", methods=['POST'])
def sentenceTag():
    if request.method == 'POST':
        data = request.json
        sentence = data.get('sentence', '')
        sentence = sentence.lower()
        path = st.viterbi(sentence, wordsAndTags, tags, table)
        return jsonify(path)
