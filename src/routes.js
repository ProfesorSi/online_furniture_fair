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
        path: '/izlagaci',
        name: 'Exhibitors',
        component: ExhibitorsView
    },
    {
        path: '/partners',
        name: 'Partners',
        component: PartnersView
    },
    {
        path: '/:category', /* ovdje ce biti dodat parametar koji ce oznacavati koja je kategorija */
        name: 'CategoryView',
        component: CategoryView,
        props: true

    },
    {
        path: '/proizvod/:id',
        name: 'ProductDetailView',
        component: ProductDetailView,
        props: true
    }, 
    {
        path: '/izlagac/:id',
        name: 'ExhibitorDetailView',
        component: ExhibitorDetailView,
        props: true
    },
    {
        path: '/proizvodi/:exhibitor',
        name: 'ExhibitorProductsView',
        component: ExhibitorProductsView,
        props: true
    },
    {
        path: '/partner/:id',
        name: 'PartnerDetailView',
        component: PartnerDetailView
    }
]
