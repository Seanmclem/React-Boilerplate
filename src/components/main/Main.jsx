import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import { Home } from '../../pages/home/Home'
import { Another } from '../../pages/another/Another'

export const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/another' component={Another} />
            <Route component={NotFound} />
        </Switch>
    </div>
)
