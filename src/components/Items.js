import React, {Component} from 'react'
import Item from "./Item"
import Admin from "./Admin";
import { BsFillPlusSquareFill } from "react-icons/bs";


export class Items extends Component {



    render() {
        return (
            <main>
                <div className="items">
                {this.props.items.map(el => (
                    <Item onShowItem={this.props.onShowitem} key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}


                </div>
            </main>
        );
    }
}

export default Items