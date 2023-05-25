import React, {Component} from 'react';

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:
                [
                {
                    key: 'all',
                    name: 'ВСЕ'
                },
                {
                    key: 'longsleeve',
                    name: 'ЛОНГСЛИВЫ'
                },
                {
                    key: 'jersey',
                    name: 'ШОРТЫ'
                },
                {
                    key: 'scarf',
                    name: 'ПЛАТКИ'
                },
                {
                    key: 'cap',
                    name: 'КЕПКИ'
                },
                {
                    key: 'socks',
                    name: 'НОСКИ'
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategry(el.key)} >{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;