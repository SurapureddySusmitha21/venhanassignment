import React from 'react';
import DiagramFlow from './components/DiagramFlow';
import Sidebar from './components/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';
import { DiagramProvider } from './context/DiagramContext';  

function App() {
  return (
    <DiagramProvider> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <ErrorBoundary>
              <Sidebar />
            </ErrorBoundary>
          </div>
          <div className="col-md-9 col-12">
          <h1 style={{ textAlign: 'center', margin: 'auto', display: 'block' ,padding: '10px 0',fontSize:"19px"}}>
                      Diagram Flow
          </h1>
            <DiagramFlow />
          </div>
        </div>
      </div>
    </DiagramProvider>
  );
}

export default App;