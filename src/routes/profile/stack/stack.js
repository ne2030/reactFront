import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { _getStack, _createStack } from '../../../actions/actionCreator';
import update from 'react-addons-update';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        skill: '',
        type: '',
        description: '',
        mastery: undefined
      }
    };
    this.getStack = this.getStack.bind(this);
    this.createStack = this.createStack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  getStack() {
    this.props.dispatch(_getStack());
  }

  createStack() {
    this.props.dispatch(_createStack(this.state.form));
    this.setState({
      form: {
        skill: '',
        type: '',
        description: '',
        mastery: ''
      }
    });
  }

  handleChange(e) {
    let value = e.target.value;
    switch(e.target.name) {
      case 'skill':
        this.setState({ form: update(this.state.form, {
          skill: {$set: value}
        })});
        break;
      case 'type':
        this.setState({ form: update(this.state.form, {
          type: {$set: value}
        })});
        break;
      case 'description':
        this.setState({ form: update(this.state.form, {
          description: {$set: value}
        })});
        break;
      case 'mastery':
        if(isNaN(value)) {break;}
        this.setState({ form: update(this.state.form, {
          mastery: {$set: value}
        })});
        break;
      default:
        return;
    }
  }

  enterSubmit(e) {
    if(e.keyCode === 13) this.createStack();
  }

  componentDidMount() {
    let addStack = document.getElementById('add_stack');
    addStack.addEventListener('click', () =>
      document.getElementById('stack_form').classList.toggle('hidden'));
    this.getStack();
  }

  render() {
    let input_set = ["skill", "type", "description", "mastery"];
    return (
      <div className="well">
        <h4 style={{display:'inline-block'}}> Stack list</h4>
        <button className="btn btn-warning btn-xs" id="add_stack"> 추가 </button>
        <div className="form-inline hidden" id="stack_form">
          {input_set.map((e, index) => (
            <input key={`${index}input`} name={e} onChange={this.handleChange}
              onKeyDown={e => this.enterSubmit(e)} value={this.state.form[e]}
              className="input-box form-control" placeholder={e}/>
          ))}
          <button className="btn btn-primary btn-sm" onClick={this.createStack}>
            등록
          </button>
        </div>

        <table className="table stack_list">
          <thead>
            <tr>
              <th> Skill </th>
              <th> type </th>
              <th> Description </th>
            </tr>
          </thead>
          <tbody>
            { this.props.items ? this.props.items.map(item =>
              (
                <tr key={item.id}>
                  <td> {item.skill} </td>
                  <td> {item.type} </td>
                  <td> {item.description} </td>
                </tr>)) : ''}
          </tbody>
        </table>
      </div>
    );
  }
}

Stack.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array
};

const mapStateToProps = (state) => {
  const {items} = state.stack;
  return {items};
};

Stack = connect(mapStateToProps)(Stack); //eslint-disable-line

export default Stack;
