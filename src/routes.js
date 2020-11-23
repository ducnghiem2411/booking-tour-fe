import React from 'react'
import Country from './components/Admin/Components/Country/Country'
import Dashboard from './components/Admin/Components/Dashboard/Dashboard'
import Place from './components/Admin/Components/Place/Place'
import Tour from './components/Admin/Components/Tour/Tour'
import ModalCountry from './components/Admin/ModalCountry/ModalCountry'
import ModalPlace from './components/Admin/ModalPlace/ModalPlace'
import ModalTour from './components/Admin/ModalTour/ModalTour'
import Detail from './components/User/Detail.js/Detail'
import Login from './components/User/Login/Login'




const routes = [
    
    {
        path : '/admin/country',
        exact : true,
        main : ({history,match}) => <Country history={history} match={match}/>
    },
    {
        path : '/admin/dashboard',
        exact : true,
        main : ({history,match}) => <Dashboard history={history} match={match}/>
    },
    {
        path : '/admin/place',
        exact : true,
        main : () => <Place/>
    },
    {
        path : '/admin/tour',
        exact : true,
        main : () => <Tour/>
    },
    {
        path : '/admin/country/add',
        exact : false,
        main : ({match, history}) => <ModalCountry match={match} history={history}/>
    },
    {
        path : '/admin/country/:id/edit',
        exact : false,
        main : ({match, history}) => <ModalCountry match={match} history={history}/>
    },
    {
        path : '/admin/place/add',
        exact : false,
        main : ({match, history}) => <ModalPlace match={match} history={history}/>
    },
    {
        path : '/admin/place/:id/edit',
        exact : false,
        main : ({match, history}) => <ModalPlace match={match} history={history}/>
    },
    {
        path : '/admin/tour/add',
        exact : false,
        main : ({match, history}) => <ModalTour match={match} history={history}/>
    },
    {
        path : '/admin/tour/:id/edit',
        exact : false,
        main : ({match, history}) => <ModalTour match={match} history={history}/>
    },
    {
        path : '/login',
        exact : true,
        main : ({match, history}) => <Login match={match} history={history}/>
    },
    {
        path : '/detail/:id',
        exact : true,
        main : ({match, history}) => <Detail match={match} history={history}/>
    },


]

export default routes