import React, {Component} from "react";
import { CiCircleRemove } from "react-icons/ci";

export class Admin extends Component {

    state = {
        title: '',
        img: '',
        artic: '',
        desc: '',
        size: '',
        category: '',
        price: ''
    }

    handelItemTitle = e => {
        this.setState({
            title: e.target.value
        })
    }
    handelItemArtic = e => {
        this.setState({
            artic: e.target.value
        })
    }
    handelItemDesc = e => {
        this.setState({
            desc: e.target.value
        })
    }
    handelItemSize = e => {
        this.setState({
            size: e.target.value
        })
    }
    handelItemCategory = e => {
        this.setState({
            category: e.target.value
        })
    }
    handelItemPrice = e => {
        this.setState({
            price: e.target.value
        })
    }
    handelItemImg = e => {
        this.setState({
            img: e.target.value
        })
    }

    createItem = () =>{
        const adminItem = {
            id: this.props.items.length + 1,
            title: this.state.title,
            img: this.state.img,
            artic: this.state.artic,
            desc: '-Материал: ' + this.state.desc,
            size: '-Размер: ' + this.state.size,
            category: this.state.category,
            price: this.state.price
        }
        console.log(this.props.items)
        this.props.addNewItem(adminItem)
        console.log(adminItem)
    }

    render() {
        const hideAdmin = this.props.hideAdmin
        return (
            <div className="add-new-good">
                <div className="top-pan">
                    <div className="pan-name">ADMIN PANEL</div>
                    <CiCircleRemove className="close" onClick={hideAdmin}/>
                </div>
                <input
                    type="text"
                    name="itemTitle"
                    placeholder="Название"
                    value={this.state.title}
                    onChange={this.handelItemTitle}
                />
                <input
                    type="text"
                    name="itemArtic"
                    placeholder="Артикул"
                    value={this.state.artic}
                    onChange={this.handelItemArtic}
                />
                <input
                    type="text"
                    name="itemDesc"
                    placeholder="Описание"
                    value={this.state.desc}
                    onChange={this.handelItemDesc}
                />
                <input
                    type="text"
                    name="itemSize"
                    placeholder="Размер"
                    value={this.state.size}
                    onChange={this.handelItemSize}
                />
                <input
                    type="text"
                    name="itemCategory"
                    placeholder="Категория"
                    value={this.state.category}
                    onChange={this.handelItemCategory}
                />
                <input
                    type="text"
                    name="itemPrice"
                    placeholder="Цена"
                    value={this.state.price}
                    onChange={this.handelItemPrice}
                />
                <input
                    type="text"
                    name="itemImg"
                    placeholder="Полное название картинки"
                    value={this.state.img}
                    onChange={this.handelItemImg}
                />
                <button type="button" className="add-to-cart" onClick={this.createItem}>Добавить</button>
            </div>
        )
    }
}

export default Admin