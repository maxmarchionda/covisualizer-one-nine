from prep import create_global_datasets
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
project_id = 'covisualizeronenine'
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': project_id,
})

db = firestore.client()
batch = db.batch()


def data_prep(event, context):
    """Triggered from a message on a Cloud Pub/Sub topic.
    Args:
         event (dict): Event payload.
         context (google.cloud.functions.Conexittext): Metadata for the event.
    """
    # cols = ['Confirmed', 'Deaths', 'Recovered', 'Active', 'Incident_Rate']
    df_countries_cases, df_continents_cases = create_global_datasets()
    print('Created global datasets')
    for index, row in df_continents_cases.iterrows():
        payload = {
            u'Continent': index,
            u'Confirmed': row['Confirmed'],
            u'Deaths': row['Deaths'],
            u'Recovered': row['Recovered'],
            u'Active': row['Active'],
            u'Incident_Rate': row['Incident_Rate']
        }
        # db.collection(u'continentSummary').document(index).set(payload)
        continent_ref = db.collection(u'countrySummary').document(index)
        batch.set(continent_ref, payload)
    for index, row in df_countries_cases.iterrows():
        payload = {
            u'Country': index,
            u'Confirmed': row['Confirmed'],
            u'Deaths': row['Deaths'],
            u'Recovered': row['Recovered'],
            u'Active': row['Active'],
            u'Incident_Rate': row['Incident_Rate']
        }
        country_ref = db.collection(u'countrySummary').document(index)
        batch.set(country_ref, payload)
    batch.commit()
    print('Wrote global datasets to firestore')


if __name__ == "__main__":
    data_prep({'data': 'test'}, 'something')
