import React, { Component } from 'react'
import Listitem from './Listitem';

class List extends Component {
    render() {
        return (
            <ul className='list'>
                {
                    this.props.list.map((item) => {
                        console.log(item)
                        return <Listitem  onEdit={this.props.onEdit} onDelete ={this.props.onDelete} key={item.id} item={item} />
                    })
                }
            </ul>
        )
    }
}


export default List;