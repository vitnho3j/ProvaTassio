import React from "react";
import UserService from '../services/testeServices';

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){

        UserService.getUsers().then((response) =>{
            this.setState({users: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className="text-center"> Lista de Produtos </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Product Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                product =>
                                    <tr key = {product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent