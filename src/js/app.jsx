var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function() {
    return (
      <div className="Inbox">
        This is Inbox.
      </div>
    );
  }
});

var Calendar = React.createClass({
  render: function() {
    return (
      <div className="Calendar">
        This is Calendar.
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="Dashboard">
        This is Dashboard.
      </div>
    );
  }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});