import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Hooks'
import Conteudo01 from '../../views/contents/UseState'
import Conteudo02 from '../../views/contents/UseEffect'
import Conteudo03 from '../../views/contents/UseContext'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="/UseEffect">
                <UseEffect />
            </Route>
            <Route path="/UseContext">
                <UseContext />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>            
        </Switch>
    </main>
)
export default Content
