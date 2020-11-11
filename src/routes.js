import React from 'react'
import Country from './components/Admin/Components/Country/Country'
import Place from './components/Admin/Components/Place/Place'
import Tour from './components/Admin/Components/Tour/Tour'
import ModalCountry from './components/Admin/ModalCountry/ModalCountry'
import ModalPlace from './components/Admin/ModalPlace/ModalPlace'



const routes = [
    {
        path : '/admin/country',
        exact : true,
        main : ({history}) => <Country history={history}/>
    },
    {
        path : '/admin/place',
        exact : true,
        main : () => <Place/>
    },
    {
        path : '/admin/tour',
        exact : false,
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
    // {
    //     path : '',
    //     exact : false,
    //     main : () => <NotFoundPage/>
    // }


]

export default routes