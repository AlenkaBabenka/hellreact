import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import {BsFillPlusSquareFill} from "react-icons/bs";
import Admin from "./components/Admin";

class App extends React.Component {

    state = {
        showAdminPanel: false
    }

    showAdmin = () => {
        this.setState({
            showAdminPanel: true
        })
    }

    hideAdmin = () => {
        this.setState({
            showAdminPanel: false
        })
    }

    constructor(props) {
        super(props)
        this.state= {
            orders: JSON.parse(localStorage.getItem("order")) || [],
            currentItems: [],
            items: JSON.parse(localStorage.getItem('adminItems')) || JSON.parse(localStorage.getItem('items')),
            showFullItem: false,
            fullItem: {}
        }
        const allItems = [
            {
                id: 1,
                title: 'HELLA PAIN LONGSLEEVE RED',
                img: 'longsleeve_red.jpg',
                artic: 'painlongred-1',
                desc: '-Материал: 80% вискоза 15% полиэстер 5% эластан',
                size: '-Размеры: s,m,l,xl',
                category: 'longsleeve',
                price: '2990'
            },
            {
                id: 2,
                title: 'HELLA PAIN LONGSLEEVE BALCK',
                img: 'longsleeve_black.jpg',
                artic: 'painlongblack-1',
                desc: '-Материал: 80% вискоза 15% полиэстер 5% эластан',
                size: '-Размеры: s,m,l,xl',
                category: 'longsleeve',
                price: '2990'
            },
            {
                id: 3,
                title: 'JERSEY CLASSIC',
                img: 'jersey_classic.jpg',
                artic: 'jerseyclassic-1',
                desc: '-Материал: Coolmax',
                size: '-Размеры: s,m,l,xl',
                category: 'jersey',
                price: '2390'
            },
            {
                id: 4,
                title: 'JERSEY REALTREE',
                img: 'jersey_realtree.jpg',
                artic: 'rtcamo-1',
                desc: '-Материал: Coolmax',
                size: '-Размеры: s,m,l,xl',
                category: 'jersey',
                price: '2390'
            },
            {
                id: 5,
                title: 'JERSEY WHITE',
                img: 'jersey_white.jpg',
                artic: 'jerseywhite-1',
                desc: '-Материал: Coolmax',
                size: '-Размеры: s,m,l,xl',
                category: 'jersey',
                price: '2390'
            },
            {
                id: 6,
                title: 'SILK SCARF REALTREE',
                img: 'scarf_realtree.jpg',
                artic: 'realtreescarf',
                desc: '-Материал: армани шелк',
                size: '-Размеры: 60х60см',
                category: 'scarf',
                price: '2190'
            },
            {
                id: 7,
                title: 'PINK CAMO SCARF',
                img: 'scarf_pinkcamo.jpg',
                artic: 'pinkcamo',
                desc: '-Материал: армани шелк',
                size: '-Размеры: 60х60см',
                category: 'scarf',
                price: '2190'
            },
            {
                id: 8,
                title: 'CHIRAQ CAP',
                img: 'cap_chiraq.jpg',
                artic: 'chiraq',
                desc: '-Материал: синтетика',
                size: '-Размеры: one size',
                category: 'cap',
                price: '1690'
            },
            {
                id: 9,
                title: 'BRACELET SOCKS',
                img: 'socks.jpg',
                artic: 'socks-1',
                desc: '-Материал: как у найка',
                size: '-Размеры: one size',
                category: 'socks',
                price: '700'
            },
            {
                id: 10,
                title: 'BRACELET SOCKS 2 PAIR',
                img: 'socks_2pair.jpg',
                artic: 'socks-2',
                desc: '-Материал: как у найка',
                size: '-Размеры: one size',
                category: 'socks',
                price: '1200'
            }
        ]
        localStorage.setItem('items', JSON.stringify(allItems))
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    addNewItem = (adminItem) => {
        const temp = [...this.state.items]
        temp.push(adminItem)

        this.setState({
            items: temp
        })
        localStorage.setItem('adminItems', JSON.stringify(temp))
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Categories chooseCategry={this.chooseCategory} />
                <Items onShowitem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
                {this.state.showFullItem && <ShowFullItem onShowitem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
                <div className="foot-adm">
                <BsFillPlusSquareFill className="plus-btn" onClick={this.showAdmin}/>
                {
                    this.state.showAdminPanel ? <Admin hideAdmin = {this.hideAdmin} items = {this.state.items} addNewItem = {this.addNewItem}/>
                        : null
                }
                </div>
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })
    }
}

export default App;