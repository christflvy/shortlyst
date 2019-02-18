import React from 'react'
import classNames from 'classnames'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  toggle = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div className="header">
        <button className="toggle" onClick={this.props.toggleSidebar}>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="menu-wrapper relative">
          <div
            className={classNames('menu', { open: this.state.open })}
            onClick={this.toggle}
          >
            <img
              src={require('../../assets/images/profile.jpg')}
              className="menu-img"
              alt="Profile"
            />
            <div className="name">Dodo Maildrop</div>
            <i className="fa fa-angle-down" />
          </div>
          <ul className={classNames('menu-list', { open: this.state.open })}>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">
                <span>Logout</span>
                <i className="fa fa-sign-out with-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
