import React, { Fragment } from 'react'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'

const Logo = props => {
  return (
    <Fragment>
      <MediaQuery query="(max-width: 1025px)">
        <img
          src={require('../../assets/images/logo.png')}
          alt="Shortlyst Logo"
          className="logo"
        />
      </MediaQuery>

      <MediaQuery query="(min-width: 1025px)">
        {props.open ? (
          <img
            src={require('../../assets/images/logo-width.png')}
            className="logo-width"
            alt="Shortlyst Logo"
          />
        ) : (
          <img
            src={require('../../assets/images/logo.png')}
            className="logo"
            alt="Shortlyst Logo"
          />
        )}
      </MediaQuery>
    </Fragment>
  )
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        className={classNames('sidebar', {
          open: this.props.sidebar,
        })}
      >
        <Logo open={this.props.sidebar} />
        <div className="user">
          <img
            src={require('../../assets/images/profile.jpg')}
            className="user-img"
            alt="Profile"
          />
          <div className="user-details">
            <div className="welcome">Welcome,</div>
            <div className="name">Dodo Maildrop</div>
          </div>
        </div>
        <ul className="menu">
          <li className="title">General</li>
          <li className="menu-list active">
            <i className="fa fa-home fa-fw" />
            <span>Flight Risk</span>
          </li>
          <li className="menu-list">
            <i className="fa fa-users fa-small fa-fw" />
            <span>My Team</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
