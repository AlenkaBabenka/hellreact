import React, { useState } from "react"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import Order from "./Order";
import {CSSTransition} from "react-transition-group";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))

    localStorage.setItem('order', JSON.stringify(props.orders))

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}  />
            ))}
            <p className="summa">Сумма: {summa} р.</p>
        </div>
    )
}
const showNothing = () => {
    localStorage.setItem('order', JSON.stringify([]))
    return (
        <div className="empty">
            <h4>Сумка пуста. Добавьте в корзину хотя бы один товар</h4>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className="logo">HELLA</span>
                <HiOutlineShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`bag-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <CSSTransition in={cartOpen} timeout={300} classNames='alert' unmountOnExit>
                    <div className="anim">
                    <div className="shop-cart">
                        <div className="bag-tag">Сумка</div>
                        <div className="shop-cart-in">
                            {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                        </div>
                        <div className="information">
                            <form>
                                <input id="fio" type="text" placeholder="ФИО" required/>
                                <input id="addres" type="text" placeholder="Адрес" required/>
                                <input id="phone" type="text" placeholder="+7 (999) 123-45-67" required/>
                                <input id="email" type="text" placeholder="example@mail.ru" required/>
                                <input id="promo" type="text" placeholder="Промокод" />
                                <button className="add-to-cart" type="submit">Перейти к оплате</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    </CSSTransition>
                )}
            </div>
        </header>
    )
}
