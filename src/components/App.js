import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import UserChat from '../containers/UserChatConteiner'
import AdminChat from '../containers/AdminChatConteiner'
import Footer from './Footer/Footer'

import store from '../store/store'

import './App.css'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
            <div className="wrap">
                <Header/>
                <Route exact path="/" component={props => <UserChat />} />
                <Route path="/admin" component={props => <AdminChat/> } />
                <Footer/>
            
            </div>
            </Router>
            </Provider>
        )
    }
}

export default App