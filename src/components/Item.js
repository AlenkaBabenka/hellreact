import React, {Component} from 'react';

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h4 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.title}</h4>
                <b>{this.props.item.price} p.</b>
                <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>В сумку</div>
            </div>
        );
    }
}

export default Item;