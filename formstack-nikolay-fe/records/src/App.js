import React from 'react';
import logo from './record-logo.png';
import './App.css';
import Layout from './components/layout';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import RecordsContainer from './containers/Records';
import LoginContainer from './containers/Login';
import CreateEditRecord from './containers/CreateEditRecord';
import RecordDetails from './containers/RecordDetails';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component = {LoginContainer}/>
                <Route path="/records" component = {RecordsContainer}/>
                <Route key="create" path="/add-record" component = {CreateEditRecord}/>
                <Route key="edit" path="/edit/:id"  component = {CreateEditRecord}/>
                <Route path="/record-details/:id" component = {RecordDetails}/>
            </Switch>
        </Layout>
    );
}

export default App;
