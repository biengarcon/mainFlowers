import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProductInfo from "./ProductPage";
import {Home} from "./Home"




export default function App() {
    return(
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/product/:id'><ProductInfo/></Route>
                    <Route path='/'><Home/></Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

