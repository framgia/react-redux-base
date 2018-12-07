import React from 'react'
import { bindActionCreators } from 'redux'
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'

class NavPath extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { data } = this.props
    const bread = data.menus.map((item)=>{
      return (
        <Breadcrumb.Item key={'bc-'+item.key}>{item.name}</Breadcrumb.Item>
      )
    })
    return (
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item key='bc-0'>ProjectX</Breadcrumb.Item>
        {bread}
      </Breadcrumb>
    )
  }
}

export default NavPath
