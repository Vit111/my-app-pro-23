import React, { Component } from 'react';
import Input from './input';
class Listitem extends Component {
    constructor() {
        super();
        this.state = {
            editForm: false
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(value) {
        this.props.onEdit({
            ...this.props.item,
            value
        })
    }
    render() {
        const { item } = this.props;
        return (
            <div className='list'>
                <div className="liststyle">
                <button type='submit' className='edit' onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }}>EDIT</button>
                <li className='items' data-set="new">{item.value}</li>
                <button type='submit' className='submit' onClick={() => this.props.onDelete(item.id)}>DELETE</button>
                </div>

                {this.state.editForm && <Input onCreate={this.onChange} />}
            </div>
        )
    }
}
export default Listitem;
// import React, { Component } from 'react';

// class Listitem extends Component {
//     constructor() {
//         super();
//         this.state = {
//             editForm: false
//         }
//         this.removeTask = this.removeTask.bind(this)
//         // this.editTask = this.editTask.bind(this)
//     }
//     removeTask(event) {
//         if (event.target.className === 'submit') {
//             const del = event.target.closest('.submit');
//             del.parentElement.remove();
//         }
//     }
//     editTask(event) {
//         this.setState({
//             editForm: !this.state.editForm
//         });
//     }
//     render() {
//         const { item } = this.props;
//         return (
//             <div className='ddd'>
//                 <button type='submit' className='edit' onClick={this.editTask}>EDIT</button>
//                 <li className='items' data-set="new">{item.value}</li>
//                 <button type='submit' className='submit' onClick={this.removeTask}>DELETE</button>
//             </div>
//         )
//     }
// }
// export default Listitem;
// removeTask(event) {
//     if (event.target.className === 'submit') {
//         const del = event.target.closest('.submit');
//         del.parentElement.remove();
//     }
// }
// editTask(event) {
//     if (event.target.className === 'edit') {
//         const edit = event.target.closest('.edit');
//         edit.parentElement.remove();
//     }
//     this.setState({
//         value: event.target.value
//     });
// }