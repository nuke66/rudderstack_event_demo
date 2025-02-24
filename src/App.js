import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SecondPage from './SecondPage';
import * as rudderstackEvents from './rudderstackEvents';
import { RudderAnalytics } from '@rudderstack/analytics-js';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current location:', location);

  useEffect(() => {
    console.log('useEffect triggered'); // Debugging line

    // Comment out the analytics setup for now
    if (window.rudderanalytics && !Array.isArray(window.rudderanalytics)) {
      return;
    }

    const analytics = new RudderAnalytics();

    analytics.load(
      process.env.REACT_APP_RUDDERSTACK_WRITE_KEY,
      process.env.REACT_APP_RUDDERSTACK_DATAPLANE_URL
    );

    analytics.ready(() => {
      console.log('Analytics ready'); // Debugging line
      toast.info('Rudderstack Analytics is running');
    });

    return () => {
      console.log('Cleanup on unmount'); // Debugging line
    };
  }, []); // Ensure this effect only runs once on mount

  useEffect(() => {
    if (location.pathname === '/') {
      rudderstackEvents.page(); // Fire the page event when navigating back to the home route
    }
  }, [location.pathname]); // Runs when the location pathname changes


  return (
    <div>
      <ToastContainer />

        <div className='App'>
          <header className='App-header'>
            <h1>RudderStack Events Demo</h1>
            <nav>
              <Link to="/">Home</Link> | <Link to="/second-page">Second Page</Link>
            </nav>
            <Routes>
              <Route path="/" element={
                <>
                  <h2>Standard Events</h2>
                  <div className='card'>
                    <button onClick={rudderstackEvents.page}>page</button>
                    <button onClick={rudderstackEvents.identify}>identify</button>
                    <button onClick={rudderstackEvents.track}>track</button>
                    <button onClick={rudderstackEvents.group}>group</button>
                    <button onClick={rudderstackEvents.alias}>alias</button>
                  </div>
                  <h2>Wayfinder</h2>
                  <div className='card'>
                    <button onClick={rudderstackEvents.wayfinder_start}>start</button>
                    <button onClick={rudderstackEvents.wayfinder_next}>next</button>
                    <button onClick={rudderstackEvents.wayfinder_back}>back</button>
                    <button onClick={rudderstackEvents.wayfinder_complete}>complete</button>
                    <button onClick={() => rudderstackEvents.abandon_tool('wayfinder')}>abandon</button>
                  </div>
                  <h2>Make A Referral</h2>
                  <div className='card'>
                    <button onClick={rudderstackEvents.mar_start}>start</button>
                    <button onClick={rudderstackEvents.mar_next}>next</button>
                    <button onClick={rudderstackEvents.mar_back}>back</button>
                    <button onClick={rudderstackEvents.mar_menu_stepper}>menu stepper</button>
                    <button onClick={rudderstackEvents.mar_complete}>complete</button>
                    <button onClick={() => rudderstackEvents.abandon_tool('mar')}>abandon</button>
                  </div>
                  <h2>EOL</h2>
                  <div className='card'>
                    <button onClick={rudderstackEvents.eol_start}>start</button>
                    <button onClick={rudderstackEvents.eol_next}>next</button>
                    <button onClick={rudderstackEvents.eol_complete}>complete</button>
                  </div>
                </>
              } />
              <Route path="/second-page" element={<SecondPage />} />
            </Routes>
          </header>
        </div>

    </div>
  );
}

export default App;
