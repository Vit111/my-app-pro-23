import './App.scss';
import React from 'react';
import Input from './components/input';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.createTask = this.createTask.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  deleteUser(id) {
    this.setState({
      list: this.state.list.filter((el) => el.id !== id)
    })
  }

  createTask(value) {
    const task = {
      id: Date.now(),
      value
    }
    this.setState({
      list: [...this.state.list, task]
    })
  }

  editTask(value) {
    console.log(value)
    this.setState({
      list : this.state.list.map((el) => {
        if (el.id === value.id) {
          return value
        }
        return el
      })
      })
    }
  render() {
        return (
          <div className='container'>
            <Input onCreate={this.createTask} />
            <List list={this.state.list} onEdit={this.editTask} onDelete={this.deleteUser} />
          </div>
        )
      }
    }

export default App;

// editTask(value) {
//   const users = {
//     id: Date.now(),
//     value
//   }
//   let lists = this.state.list
//   console.log(lists)
//   lists = users
//   console.log(users)
//   this.setState({
//     list : this.state.list.map((el) => {
//       if (el.id === users.id) {
//         return value
//       }
//       return el
//     })
//     })
//   }