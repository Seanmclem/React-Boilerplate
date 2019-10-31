import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import { Home } from '../../pages/home/Home'

export const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
        </Switch>
    </div>
)
