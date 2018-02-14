import React, {Component, Fragment} from 'react'
import Films from './Films'
import People from './People'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

class App extends Component {
    Loading() {
        return
        <div>
            <Link to = "./Films">Click to visit films</Link>
            <Link to = "./People">Click to visit film cast</Link>
        </div>
        }
        render() {
            return (
                    <BrowserRouter>
                        <Fragment>
                            <div>
                                 {this.conclusion()}
                            </div>
                                <Switch>
                                    <Route exact path = './Films' Component = {Films} />
                                    <Route exact path = './People' Component = {People} />
                                </Switch>
                        </Fragment>
                    </BrowserRouter>   
            )
        }
    }




export default App