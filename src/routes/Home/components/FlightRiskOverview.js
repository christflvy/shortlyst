import React from 'react'
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class FlightRiskOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content-box small-content-box mr-15">
        <div className="content-box-header">
          <div className="flight-risk-title">
            <div className="pretitle mb-5">Flight Risk</div>
            <div className="pretitle-desc">Overview</div>
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper-title text-right mb-5">Filter by</div>
            <input
              type="text"
              className="input"
              value="Sales & Business"
              style={{ maxWidth: 120 }}
            />
          </div>
        </div>
        <div className="content-box-inside">
          <PieChart
            data={[['Low', 70], ['High', 7], ['Medium', 3]]}
            colors={['#26ba9a', '#db514f', '#f1ac4f']}
            legend="right"
            height="100%"
          />
        </div>
      </div>
    )
  }
}

export default FlightRiskOverview
