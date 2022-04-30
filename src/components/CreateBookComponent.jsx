import React, { Component } from 'react';
import BookService from '../services/BookService';

class CreateBookComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'',
            author:'',
            availability:''

        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAuthorHandler=this.changeAuthorHandler.bind(this);
        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

    saveOrUpdateBook = (e) => {
        e.preventDefault();
        
        let book = {name: this.state.name, author: this.state.author, availability: this.state.availability};
        console.log('book => ' + JSON.stringify(book));

        BookService.createBook(book).then(res =>{
            this.props.history.push('/Books');
        })
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changeAvailabilityHandler= (event) => {
        this.setState({availability: event.target.value});
    }

    cancel(){
        this.context.history.push('/Books');
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'>Add Book</h3>
                            <form>
                                <div className='form-group'>
                                    <label> name </label>
                                    <input placeholder="name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> author </label>
                                    <input placeholder="author" name="author" className="form-control" 
                                        value={this.state.author} onChange={this.changeAuthorHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> availability </label>
                                    <input placeholder="availability" name="availability" className="form-control" 
                                        value={this.state.availability} onChange={this.changeAvailabilityHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
                                <button className="btn btn-danger" onClick={()=>window.open("http://localhost:3000/Books", "_self")} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
                <h1>Book Form</h1>
            </div>
        );
    }
}

export default CreateBookComponent;