import React, { useEffect } from 'react';
import * as rudderstackEvents from './rudderstackEvents';

function SecondPage() {
  useEffect(() => {
    console.log('useEffect called');
    rudderstackEvents.page();
  }, []);

  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the second page of the application.</p>
    </div>
  );
}

export default SecondPage;