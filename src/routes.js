import CategoriesMenu from './components/CategoriesMenu.vue';
import CategoryView from './Views/CategoryView.vue';
import ProductDetailView from './Views/ProductDetailView.vue';
import PartnerDetailView from './Views/PartnerDetailView.vue';


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
        path: '/partner/:id',
        name: 'PartnerDetailView',
        component: PartnerDetailView
    }
]
