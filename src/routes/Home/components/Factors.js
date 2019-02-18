import React from 'react'
import ReactChartkick from 'react-chartkick'
import Chart from 'chart.js'
import Bar from '../../../components/Bar/Bar'

ReactChartkick.addAdapter(Chart)

class Factors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content-box large-content-box mt-15">
        <div className="content-box-header">
          <div className="pretitle">
            Flight Risk{' '}
            <span className="pretitle-desc">affecting flight risk</span>
          </div>
        </div>
        <div className="content-box-inside">
          <div className="flight-detail-wrapper">
            <Bar
              title="disloyalty"
              desc="The percentage of employee disloyalty in this company is quite low"
              percent="14"
              background="#26ba9a"
              width="54"
            />
            <Bar
              title="boredom"
              desc="The percentage of employee boredom in this company is quite low"
              percent="21"
              background="#26ba9a"
              width="54"
            />
            <Bar
              title="dissatisfaction"
              desc="The percentage of employee dissatisfaction in this company is quite high"
              percent="82"
              background="#db514f"
              width="54"
            />
            <Bar
              title="aggresiveness"
              desc="The percentage of employee aggresiveness in this company is on average"
              percent="31"
              background="#f1ac4f"
              width="54"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Factors
