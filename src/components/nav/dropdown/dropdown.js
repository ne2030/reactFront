import React, {Component, PropTypes} from 'react';

class Dropdown extends Component {
  render() {
    const contents = this.props.contents;
    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Dropdown <span className="caret"></span></a>
        <ul className="dropdown-menu">
          { contents.map((content, index)=> {
              return content === 'divider' ? (<li key={index} role="seperator" className="divider"></li>)
              : (<li key={index}><a>{content}</a></li>);
          })}
        </ul>
      </li>
    );
  }
}

Dropdown.propTypes = {
  contents: PropTypes.array.isRequired
};

export default Dropdown;
