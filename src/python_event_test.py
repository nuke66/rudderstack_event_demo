# pip install rudder-sdk-python

import os
import rudderstack.analytics as rudder_analytics
from dotenv import load_dotenv

load_dotenv()

# RudderStack Write Key and Dataplane URL for the JS source we setup in RudderStack

rudder_analytics.write_key = os.getenv("REACT_APP_RUDDERSTACK_WRITE_KEY")
rudder_analytics.dataPlaneUrl = os.getenv("REACT_APP_RUDDERSTACK_DATAPLANE_URL")

def on_error(error, events):
    print("Error response:", error)

rudder_analytics.on_error = on_error

rudder_analytics.track('sxh@notread.com', 'bp_add_ach_start', {
    'bp_variant': 'SAH',
    'care_type': 'CHSP'
})  

