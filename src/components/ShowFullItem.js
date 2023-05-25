import React, {Component} from 'react';
import { CiCircleRemove } from "react-icons/ci";

export class ShowFullItem extends Component {
    render() {
        return (
            <div className="full-item">
                <div className="fully">
                    <img src={"./img/" + this.props.item.img} />
                    <div className="tov-info">
                        <CiCircleRemove className="close" onClick={() => this.props.onShowitem(this.props.item)} />
                    <h4>{this.props.item.title}</h4>
                    <p> Артикул: {this.props.item.artic}</p>
                        <b>{this.props.item.price} p.</b>
                        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>В сумку</div>
                    <p>{this.props.item.desc}</p>
                    <p>{this.props.item.size}</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;