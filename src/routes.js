import CategoriesMenu from './components/CategoriesMenu.vue';
import CategoryView from './Views/CategoryView.vue';
import ProductDetailView from './Views/ProductDetailView.vue';
import PartnerDetailView from './Views/PartnerDetailView.vue';
import PartnersView from './Views/PartnersView.vue';

import ExhibitorDetailView from './Views/ExhibitorDetailView.vue';
import ExhibitorsView from './Views/ExhibitorsView.vue';
import ExhibitorProductsView from './Views/ExhibitorProductsView';


export const routes = [
    {
        path: '/',
        name: 'CategoriesMenu',
        component: CategoriesMenu
    },
    {
        path: '/:id', /* ovdje ce biti dodat parametar koji ce oznacavati koja je kategorija */
        name: 'CategoryView',
        component: CategoryView,
        props: true

    },
    {
        path: '/product/:id',
        name: 'ProductDetailView',
        component: ProductDetailView,
        props: true
    }, 
    {
        path: '/exhibitors',
        name: 'Exhibitors',
        component: ExhibitorsView
    },
    {
        path: '/exhibitor/:id',
        name: 'ExhibitorDetailView',
        component: ExhibitorDetailView,
        props: true
    },
    {
        path: '/izlagac/:exhibitor',
        name: 'ExhibitorProductsView',
        component: ExhibitorProductsView,
        props: true
    },
    {
        path: '/partners',
        name: 'Partners',
        component: PartnersView
    },
    {
        path: '/partner/:id',
        name: 'PartnerDetailView',
        component: PartnerDetailView
    }
]
