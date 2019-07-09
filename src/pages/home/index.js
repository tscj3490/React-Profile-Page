import React, { PureComponent } from 'react';
import './style.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../reducers/action';
import Clients from '../../components/clients'
import ClientDetail from '../../components/clientdetail'

class HomeC extends PureComponent {
    render() {
        let {clients, selectedClient} = this.props.webapp
        console.log('clients, selectedClient', clients, selectedClient)
        return (
            <div className="App">
                <div className="title">Clients</div>
                <div className="row">
                    <Clients clients={clients}/>
                    {selectedClient && <ClientDetail client={selectedClient}/>}
                </div>
            </div>
        )
    }
}
  
const mapStateToProps = ({ webapp }) => ({ webapp });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeC);;