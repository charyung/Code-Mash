// React
import * as React from 'react';

// Models
import Header from "./subclasses/header/header";

// Stylesheet
import './stylesheets/App.css';
import Router from "./subclasses/router";
import { BrowserRouter } from "react-router-dom";

const App = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Router/>
		</div>
	</BrowserRouter>
);
/*const About = () => (
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
);*/

export default App;
