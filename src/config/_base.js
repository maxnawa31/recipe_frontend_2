import { env } from './config';

const BASE_URLS = {
    development: {
        base: 'https://local.recipe.com:5000',
        redirect: 'https://local.recipe.com:3000'
    }
}


export default BASE_URLS[env]