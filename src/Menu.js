import User from "./user";
import AddUser from "./AddUser";
import Users from "./Users";
import EditUser from "./editUser";
import Home from "./home";
import { Link, NavLink, Route, Switch } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/user">User</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/adduser">Add user</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/edituser">Edit User</NavLink>
          </li>
          <li>
                <NavLink activeClassName="active" to="/users">See all users</NavLink>
              </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/adduser">
          <AddUser />  
          </Route>
          <Route path="/edituser">
          <EditUser />
        </Route>
          <Route path="/users">
          <Users />
          </Route>
      </Switch>
    </div>
  );
}
