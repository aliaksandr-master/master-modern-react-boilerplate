import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import urlPageLogin from "./urls/urlPageLogin";


const title = 'My Minimal React Webpack Babel Setup';

const RedDiv = styled.div`
    background: red;
    display: block;
    float: right;
   
    &:hover {
        background: green;    
    }
`;

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Home = () => <h2>Home</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>

        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to={urlPageLogin()}>Login</Link>
            </li>
        </ul>
    </nav>
);

render(
    <Router>
        <div>
            <RedDiv>{title}</RedDiv>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/users/" component={Users} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>,
    document.getElementById('app')
);

module.hot.accept();
