import React, {Component} from 'react'

const withToggle = (ParamsComponent, field) => (
  class Ccomponent extends Component {
    constructor () {
      super()
      this.state = {
        [field]: false
      }
    }

    render () {
      const Cprops = {
        [`is${field}Toggle`]: this.state[field],
        [`toggle${field}`]: () => {
          this.setState(state=>({[field]:!state[field]}))
        }
      }
      return <ParamsComponent {...Cprops} {...this.props}/>
    }
  }
)

export default withToggle
