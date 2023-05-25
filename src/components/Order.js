import React, {Component} from 'react';
import { CiCircleRemove } from "react-icons/ci";

export class Order extends Component {
    render() {

        return (
            <div className="item">
                <img id="photo" src={"./img/" + this.props.item.img} />
                <h4 id="title">{this.props.item.title}</h4>
                <p id="artic">{this.props.item.artic}</p>
                <b id="price">{this.props.item.price} p.</b>
                <CiCircleRemove className="delete-item" onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
    );

    }
}

export default Order;