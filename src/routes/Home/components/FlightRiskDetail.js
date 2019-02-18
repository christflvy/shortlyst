import React from 'react'
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class FlightRiskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content-box big-content-box">
        <div className="content-box-header">
          <div className="pretitle">
            Flight Risk
            <span className="pretitle-desc"> Detail</span>
          </div>
          <div className="input-wrapper input-wrapper-inline">
            <div className="input-wrapper-title">Group by</div>
            <input
              type="text"
              className="input input-inline"
              value="Job Function"
            />
          </div>
        </div>
        <div className="content-box-inside">
          <div className="flight-detail-wrapper">
            <div className="wrapper">
              <ColumnChart
                data={{
                  Information: 0.24,
                  Operations: 0.23,
                  Marketing: 0.15,
                  Sales: 0.13,
                  Design: 0.06,
                  'Data Science': 0.06,
                  Finance: 0.04,
                  Product: 0.04,
                  Human: 0.03,
                  Administrative: 0.02,
                }}
                colors={['#fe6287']}
                legend
                label="Attrition Score"
              />
            </div>
            <button className="btn btn-all-employee">View all employees</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightRiskDetail
