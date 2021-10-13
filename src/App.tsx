import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Start = lazy(() => import('./views/Start'));
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Skills = lazy(() => import('./views/Skills'));
const Articles = lazy(() => import('./views/Articles'));

function App() {
    return (
        <Suspense fallback={<div></div>}>
            <BrowserRouter>
                <div className="App">
                        <Switch>
                            <Route exact path="/" component={Start} />
                            <Route exact path="/portfolio">
                                <Navbar/>
                                <div>
                                    <Home />
                                    <About />
                                    <Skills />
                                    <Articles />
                                </div>
                                <Footer></Footer>
                            </Route>
                        </Switch>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
