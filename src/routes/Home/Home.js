import React from 'react'
import classNames from 'classnames'
import Sidebar from '../../components/Sidebar/Sidebar'
import FlightRiskOverview from './components/FlightRiskOverview'
import FlightRiskDetail from './components/FlightRiskDetail'
import Factors from './components/Factors'
import Header from '../../components/Header/Header'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: true,
    }
  }

  toggleSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar })
  }

  render() {
    return (
      <div className="container">
        <Sidebar sidebar={this.state.sidebar} />
        <div
          className={classNames('content', {
            close: this.state.sidebar,
          })}
        >
          <Header toggleSidebar={this.toggleSidebar} />
          <div className="main-content">
            <FlightRiskOverview />
            <FlightRiskDetail />
            <Factors />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
