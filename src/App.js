import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
