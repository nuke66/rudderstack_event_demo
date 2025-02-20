import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { RudderAnalytics } from '@rudderstack/analytics-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    if (window.rudderanalytics && !Array.isArray(window.rudderanalytics)) {
      return;
    }

    const analytics = new RudderAnalytics();

    // This is where you add the write key and the dataplane url from the JS source we created in RudderStack
    analytics.load(
      process.env.REACT_APP_RUDDERSTACK_WRITE_KEY,
      process.env.REACT_APP_RUDDERSTACK_DATAPLANE_URL
    );

    analytics.ready(() => {
      toast.info('Rudderstack Analytics is running');
    });
  }, []);

  /* * * RUDDERSTACK EVENTS * * */
  const page = () => {
    window.rudderanalytics?.page(
      'Cart',
      'Cart Viewed',
      {
        path: '/best-seller/1',
        referrer: 'https://www.google.com/search?q=estore+bestseller',
        search: 'estore bestseller',
        title: 'The best sellers offered by EStore',
        url: 'https://www.estore.com/best-seller/1',
      },
      () => {
        toast.info('Page event');
      },
    );
  };
  const identify = () => {
    window.rudderanalytics?.identify(
      'sample-user-123',
      {
        firstName: 'Alex',
        lastName: 'Keener',
        email: 'alex@example.com',
        phone: '+1-202-555-0146',
      },
      () => {
        toast.info('identify event');
      },
    );
  };
  const track = () => {
    window.rudderanalytics?.track(
      'Order Completed',
      {
        revenue: 30,
        currency: 'USD',
        user_actual_id: 12345,
      },
      () => {
        toast.info('track event');
      },
    );
  };
  const alias = () => {
    window.rudderanalytics?.alias('alias-user-id', () => {
      toast.info('alias event');
    });
  };
  const group = () => {
    window.rudderanalytics?.group(
      'sample_group_id',
      {
        name: 'Apple Inc.',
        location: 'USA',
      },
      () => {
        toast.info('group event');
      },
    );
  };

  /* * * WAYFINDER EVENTS * * */
  const wayfinder_start = () => {
    window.rudderanalytics?.track(
      'wayfinder_start',
      {
        option_selected: "I'm looking into aged care for myself",
        attempt: 1
      },
      () => {
        toast.success('wayfinder_start event');
      },
    );
  };

  const wayfinder_next = () => { 
    window.rudderanalytics?.track(
      'wayfinder_next',
      {
        'option_selected': "I'm looking into aged care for myself",
        'active_question': 'What do you need help with',
        'previous_question': 'Tool start',
        'next_question': 'Were you assessed before 14th September 2024?',
        'attempt': 1,
        'updated': 'True'
      },
      () => {
        toast.success('wayfinder_next event');
      },
    );
  };


  const wayfinder_back = () => { 
    window.rudderanalytics?.track(
      'wayfinder_back',
      {
        'active_question': 'What services are you currently receiving?',
        'previous_question': 'What do you need help with',
        'next_question': 'Were you assessed before 14th September 2024?'
      },
      () => {
        toast.success('wayfinder_back event');
      },
    );
  };

  const wayfinder_complete = () => { 
    window.rudderanalytics?.track(
      'wayfinder_complete',
      {
        'cohort': 'Older Australian'
      },
      () => {
        toast.success('wayfinder_completed event');
      }
    );
  };

  /* * * ABANDON TOOL EVENT * * */

  const abandon_tool = (tool) => {
    window.rudderanalytics?.track(
      'abandon_tool',
      {
        'active_question': 'What do you need help with?',
        'interaction_type': 'Close overlay',
        'tool': tool
      },
      () => {
        toast.success(`abandon_tool (${tool}) event`);  
      }
    );
  };

  /* * * MAKE A REFERRAL EVENTS * * */

  const mar_start = () => {
    window.rudderanalytics?.track(
      'mar_start',
      {
        'cohort': 'Hospital professional/admin',
        'attempt': 1
      },
      () => {
        toast.success('mar_start event');
      }
    );
  };

  const mar_next = () => {
    window.rudderanalytics?.track(
      'mar_next',
      {
        'active_question': 'Reason for referral',
        'previous_question': 'Hospital discharge', 
        'next_question': 'Recommendation', 
        'attempt': '1',
        'updated': 'True',
        'time_to_complete': 60
      },
      () => {
        toast.success('mar_next event');
      }
    );
  };

  const mar_back = () => {
    window.rudderanalytics?.track(
      'mar_back',
      {
        'active_question': 'Your details',
        'previous_question': 'Tool start',
        'next_question': 'Patient Details'
      },
      () => {
        toast.success('mar_back event');
      }
    );
  };

  const mar_menu_stepper = () => {
    window.rudderanalytics?.track(
      'mar_menu_stepper',
      {
        'active_section': 'Reason for referral', 
        'option_selected': 'Patient Details'
      },
      () => {
        toast.success('mar_menu_stepper event');
      }
    );
  };

  const mar_complete = () => {
    window.rudderanalytics?.track(
      'mar_complete',
      {	
        'user_type': 'New',
        'age': '69',
        'gender': 'Male', 
        'atsi': 'No - Neither',
        'cohort': 'GP', 
        'refferal_reason': 'Hospital discharge', 
        'accept_recommendation': 'False', 
        'alternative_recommendation': 'Comprehensive', 
        'patient_concern_interaction': 'false', 
        'patient_function_interaction': 'false'
      },
      () => {
        toast.success('mar_complete event');
      }
    );
  };

  /* * * EOL EVENTS * * */

  const eol_start = () => {
    window.rudderanalytics?.track(
      'eol_start',
      {
        'option_selected': 'End-of-life care',
        'attempt': 1
      },
      () => {
        toast.success('eol_start event'); 
      }
    );
  };

  const eol_next = () => {
    window.rudderanalytics?.track(      
      'eol_next',
      {
        'option_selected': 'End-of-Life Pathway Form'
      },
      () => {
        toast.success('eol_next event'); 
      }
    );
  };

  const eol_complete = () => {
    window.rudderanalytics?.track(
      'eol_complete',
      {},
      () => {
        toast.success('eol_complete event'); 
      }
    );
  };

  return (
    <div className='App'>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className='App-header'>
        <h1>RudderStack Events Demo</h1>
        <h2>Standard Events</h2>
        <div className='card'>
          <button onClick={page}>page</button>
          <button onClick={identify}>identify</button>
          <button onClick={track}>track</button>
          <button onClick={group}>group</button>
          <button onClick={alias}>alias</button>
        </div>
        <h2>Wayfinder</h2>
        <div className='card'>
          <button onClick={wayfinder_start}>start</button>
          <button onClick={wayfinder_next}>next</button>
          <button onClick={wayfinder_back}>back</button>
          <button onClick={wayfinder_complete}>complete</button>
          <button onClick={() => abandon_tool('wayfinder')}>abandon</button>
        </div>
        <h2>Make A Referral</h2>
        <div className='card'>
          <button onClick={mar_start}>start</button>
          <button onClick={mar_next}>next</button>
          <button onClick={mar_back}>back</button>
          <button onClick={mar_menu_stepper}>menu stepper</button>
          <button onClick={mar_complete}>complete</button>
          <button onClick={() => abandon_tool('mar')}>abandon</button>
        </div>
        <h2>EOL</h2>
        <div className='card'>
          <button onClick={eol_start}>start</button>
          <button onClick={eol_next}>next</button>
          <button onClick={eol_complete}>complete</button>
        </div>
      </header>
    </div>
  );
}

export default App;
