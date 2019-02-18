import React from 'react'

const Bar = props => {
  return (
    <div className="bar-wrapper">
      <div className="bar-text">
        {props.title + ' - '}
        <span>{props.desc}</span>
      </div>
      <div className="bar" style={{ width: props.width + '%' }}>
        <div
          className="bar-fill"
          style={{
            width: props.percent + '%',
            backgroundColor: props.background,
          }}
        >
          <div className="bar-fill-text">{props.percent + '%'}</div>
        </div>
      </div>
    </div>
  )
}

export default Bar
