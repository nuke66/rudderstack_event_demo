import os
import rudderstack.analytics as rudder_analytics
from dotenv import load_dotenv

load_dotenv()

# RudderStack Write Key and Dataplane URL for the JS source we setup in RudderStack

rudder_analytics.write_key = os.getenv("REACT_APP_RUDDERSTACK_PYTHON_WRITE_KEY")
rudder_analytics.dataPlaneUrl = os.getenv("REACT_APP_RUDDERSTACK_DATAPLANE_URL")

def on_error(error, events):
    print("Error response:", error)

rudder_analytics.on_error = on_error

rudder_analytics.identify('1hKOmRA4GRlm', {
    'email': 'bob@example.com',
    'name': 'Bob Smith',
    'friends': 2
})  

