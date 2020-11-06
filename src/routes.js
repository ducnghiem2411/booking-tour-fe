import React from 'react'
import Country from './components/Admin/Components/Country/Country'
import Place from './components/Admin/Components/Place/Place'
import Tour from './components/Admin/Components/Tour/Tour'
import Modal from './components/Admin/Modal/Modal'



const routes = [
    {
        path : '/admin/country',
        exact : true,
        main : () => <Country/>
    },
    {
        path : '/admin/place',
        exact : false,
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
        main : ({history}) => <Modal history={history}/>
    },
    // {
    //     path : '/product/:id/edit',
    //     exact : false,
    //     main : ({match, history}) => <ProductActionPage match={match} history={history}/>
    // },
    // {
    //     path : '',
    //     exact : false,
    //     main : () => <NotFoundPage/>
    // }


]

export default routes