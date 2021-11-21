const USERS_REST_API_URL = 'http://localhost:8080/produto';

class ProductService{
    getProducts(){
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new ProductService();