import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../reducers/action';
import './style.css'
class Clients extends PureComponent {
    selectClient(client, e) {
        e.stopPropagation()
        e.preventDefault()
        this.props.actions.selectClient(client)
    }
    search(e) {
        this.props.actions.search(e.target.value)
    }
    render() {
        let {clients} = this.props

        return (
            <div className="col-md-8">
                <div className="row search-form">
                    <div className="col-md-8">
                        <input type="text" ref={(ref)=>{this.searchEl=ref}} className="form-control" placeholder="Search name or job title" onChange={this.search.bind(this)}/>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Job Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index)=>{
                            return (
                                <tr key={index} onClick={this.selectClient.bind(this, client)}>
                                    <td><img src={client.image} className="img-thumbnail avatar-thumbnail"/></td>
                                    <td>{client.name}</td>
                                    <td>{client.job}</td>
                                </tr>
                            )
                        })}
                        {clients.length == 0 && <tr><td colSpan="3">No matched result</td></tr>}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ webapp }) => ({ webapp });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);