import axios from "axios";

const BOOKS_API_BASE_URL = "http://localhost:8080/api/v1/Books";


class BookService {

    getBooks(){
        return axios.get(BOOKS_API_BASE_URL);
    }

    createBook(book){
        return axios.post(BOOKS_API_BASE_URL, book);
    }

}

export default new BookService()