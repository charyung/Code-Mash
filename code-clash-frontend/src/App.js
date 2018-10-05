import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
		</div>
	</Router>
);

const Home = () => (
    <div>
		<div className="headerWrapper">
			<div className="headerClass">
				<h1> Code Clash </h1>
				<Link to="/about">About</Link>
				<Link to="/topics">Topics</Link>
			</div>
		</div>
        <h2>Home</h2>
    </div>
);

const About = () => (
	<div>
		<div className="headerWrapper">
			<div className="headerClass">
				<h1> Code Clash </h1>
				<Link to="/">Home</Link>
				<Link to="/topics">Topics</Link>
			</div>
		</div>
		<h2>About</h2>
	</div>
);

const Topics = ({ match }) => (
	<div>
		<div className="headerWrapper">
			<div className="headerClass">
				<h1> Code Clash </h1>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
		  exact
		  path={match.url}
		  render={() => <h3>Please select a topic.</h3>}
		/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
);

export default Header;