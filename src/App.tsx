import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/sign-up/partner/:partnerName/code/:partnerCode"
          Component={() => <SignUp />}
        />

        <Route path="/sign-up/:inviteCode" Component={() => <SignUp />} />

        <Route
          path="/success"
          Component={() => (
            <div className="container">
              Thanks, you will receive an email shortly to complete your signup.
            </div>
          )}
        />

        <Route
          path="/"
          Component={() => (
            <div className="container">
              <h1>Onsi Frontend Interview</h1>
            </div>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
