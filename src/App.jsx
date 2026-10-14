import React, { Suspense, lazy } from "react";
import "./App.css";

const StudentDashboard = lazy(
() => import("./StudentDashboard")
);

function App() {
return (
    <div className="container">
    <h1>React Suspense Example</h1>

    <Suspense
        fallback={<h2 className="loading">Loading Dashboard...</h2>}
    >
        <StudentDashboard />
    </Suspense>
    </div>
);
}

export default App;
