import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask import render_template

#################################################
# Database Setup
#################################################
engine = engine = create_engine('postgresql://postgres:postgres@localhost:5432/police_violence_db')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Encounter = Base.classes.fatal_encounter

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    
    return render_template("index.html")


@app.route("/data")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    
    results = session.query(Encounter.State, Encounter.Age, Encounter.Gender, Encounter.Race, Encounter.Year, Encounter.Mental_Illness, Encounter.Latitude, Encounter.Longitude).all()
    session.close()

    # Convert list of tuples into normal list
    all_encounters = []
    for state, age, gender, race, year, illness, lat, lon in results:
        encounter_dict={}
        encounter_dict["state"]= state
        encounter_dict["age"]= age
        encounter_dict["gender"]= gender
        encounter_dict["race"]= race
        encounter_dict["year"]= year
        encounter_dict["illness"]= illness
        all_encounters.append(encounter_dict)


    return jsonify(all_encounters)


if __name__ == '__main__':
    app.run(debug=True)