import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {_getList, _createItem, _deleteItem} from '../../../actions/actionCreator';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      chat: '',
    };
    this.createItem = this.createItem.bind(this);
    this.getList = this.getList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  getList() {
    this.props.dispatch(_getList());
  }

  createItem() {
    let name = this.state.name
      , chat = this.state.chat;
    this.props.dispatch(_createItem(name, chat));
    this.setState({
      name: '',
      chat: ''
    });
  }

  deleteItem(e) {
    let id = e.target.value;
    console.log(id);
    this.props.dispatch(_deleteItem(id));
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({
        name: event.target.value
      });
    } else this.setState({
        chat: event.target.value
    });
  }

  enterSubmit(e) {
    if(e.keyCode === 13) this.createItem();
  }

  componentDidMount() {
      this.getList();
  }

  render() {
    return (
      <div className="well">
        <h4> Database practice</h4>
        <div className="r2-form form-inline">
            <input className="inputbox form-control"
                  type="text" name="name"
                  placeholder="이름"
                  value={this.state.name}
                  onChange={this.handleChange}
                  onKeyDown={(e) => this.enterSubmit(e)}/>

            <input className="inputbox form-control"
                  type="text" name="chat"
                  placeholder="메세지"
                  value={this.state.chat}
                  onChange={this.handleChange}
                  onKeyDown={(e) => this.enterSubmit(e)}/>
            <button className="btn btn-primary btn-sm" onClick={this.createItem}> 입력하기 </button>
        </div>
        <div className="r2_cnt"> Total Count : {this.props.count} </div>
        <ul className="r2_list">
          { this.props.items ? this.props.items.map(item => (
            <li key={item.id}>
              <div className="listItem">
                {item.name} : {item.content}
              </div>
              <button className="btn btn-xs btn-danger" onClick={e => this.deleteItem(e)} value={item.id}>
                x
              </button></li>
          )) : ''}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  dispatch: PropTypes.func,
  count: PropTypes.number
};

const mapStateToProps = (state) => {
  const {items, count} = state.list;
  return {items, count};
};

List = connect(mapStateToProps)(List); //eslint-disable-line

export default List;
