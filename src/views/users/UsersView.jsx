import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersAllUsers } from '../../app/redux/actions/usersActions';
import { loadingSelector, usersSelector } from '../../app/redux/selectors/usersSelector';
import { UsersList } from '../../components/users/UsersList';

//https://react-redux.js.org/using-react-redux/connect-mapstate

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    users: usersSelector(state),
})

const mapActionsToProps = dispatch => ({
    loadUsers: () => dispatch(getUsersAllUsers())
})

export class UsersView extends Component {

    componentDidMount(){
        this.props.loadUsers();
    }

    render(){
         return(
            <div>
                Pagina de Usuarios
                { this.props.loading && "Cargando Usuarios"}
                { this.props.users.length > 0 && <UsersList users={this.props.users}/>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(UsersView)