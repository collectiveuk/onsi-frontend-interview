import SignUp from "./components/SignUp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
              <Link to="/sign-up/example_code">
                Example 'Invite Code' sign up
              </Link>
              <Link to="/sign-up/partner/food_and_co/code/example_code">
                Example 'Partner Code' sign up
              </Link>
            </div>
          )}
        />

        <Route path="*" Component={() => <div>404, page not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
