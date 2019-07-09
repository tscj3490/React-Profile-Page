import React, { PureComponent } from 'react';
import './style.css'
class ClientDetail extends PureComponent {

    render() {
        let {client} = this.props

        return (
            <div className="col-md-4">
                <div className="user-image">
                    <img src={client.image} className="img-thumbnail full-image"></img>
                </div>
                <div className="row-flex">
                    <div className="attr-key">Name</div>
                    <div className="attr-value">{client.name}</div>
                </div>
                <div className="row-flex">
                    <div className="attr-key">Email</div>
                    <div className="attr-value">{client.email}</div>
                </div>
                <div className="row-flex">
                    <div className="attr-key">Phone</div>
                    <div className="attr-value">{client.phone}</div>
                </div>
                <div className="row-flex">
                    <div className="attr-key">Company</div>
                    <div className="attr-value">{client.company}</div>
                </div>
                <div className="row-flex">
                    <div className="attr-key">Job Title</div>
                    <div className="attr-value">{client.job}</div>
                </div>
            </div>
        );
    }
}

export default ClientDetail;