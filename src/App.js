import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddSchedule from "./components/AddSchedule";
import Schedules from "./components/Schedules";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const onDelete = (schedule) => {
    setSchedules(schedules.filter((e) => {
      return e !== schedule;
    }));
  }

  const addSchedule = (title, datetime, desc) => {
    let srno;
    schedules.length === 0 ? srno = 0 :
      srno = schedules[schedules.length - 1].srno + 1;
    const mySchedule = {
      srno: srno,
      title: title,
      datetime: datetime,
      desc: desc
    }
    setSchedules([...schedules, mySchedule]);
  }

  const [schedules, setSchedules] = useState([]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AddSchedule addSchedule={addSchedule} />
          <Schedules schedules={schedules} onDelete={onDelete} />
        </Route>
        <Route exact path="*">
          <h1 className="text-center">Page not found.</h1>
          <h3 className="text-center"><Link to="/">Go Back.</Link></h3>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
