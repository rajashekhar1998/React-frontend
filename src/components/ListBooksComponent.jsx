import React, { Component } from 'react';
import BookService from '../services/BookService'

class ListBooksComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { books: [] };
        this.addBook = this.addBook.bind(this);
    }
    
    componentDidMount(){
        BookService.getBooks().then((res) => {
            this.setState({ books: res.data});
        });
    }

    addBook(){
        this.props.history.push("/add-Books");
    }

    
    render() {
        return (
            <div>
                <h2 className="text-center">Books List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={ () => window.open("/add-Books") }> Add Book</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thread>
                            <tr>
                                <th> Book Name</th>
                                <th> Book Author</th>
                                <th> Book Id</th>
                                <th> Book Availability</th>
                            </tr>
                        </thread>

                        <body>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key ={book.id}>
                                        <th>{book.name}</th>
                                        <th>{book.author}</th>
                                        <th>{book.id}</th>
                                        <th>{book.availability}</th>

                                    </tr>
                                    
                                )
                            }


                        </body>
                    </table>
                </div>




            </div>
        );
    }
}

export default ListBooksComponent;