import CategoriesMenu from './components/CategoriesMenu.vue';
import CategoryView from './Views/CategoryView.vue';
import ProductDetailView from './Views/ProductDetailView.vue';
import PartnerDetailView from './Views/PartnerDetailView.vue';
import PartnersView from './Views/PartnersView.vue';


export const routes = [
    {
        path: '/',
        name: 'CategoriesMenu',
        component: CategoriesMenu
    },
    {
        path: '/categories/:id', /* ovdje ce biti dodat parametar koji ce oznacavati koja je kategorija */
        name: 'CategoryView',
        component: CategoryView

    },
    {
        path: '/product/:id',
        name: 'ProductDetailView',
        component: ProductDetailView
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
