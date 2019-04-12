import React, {Component} from 'react'

class Toggle extends Component {
  constructor() {
    super()
    this.state = {
      isToggle: false,
    }
  }

  toggle = () => {
    this.setState(state=>({isToggle:!state.isToggle}))
  }

  render () {
    return this.props.children({ isToggle:this.state.isToggle, toggle:this.toggle })
  }
}

export default Toggle
