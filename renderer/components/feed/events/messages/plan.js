// Packages
import React from 'react'

// Components
import Message from '../message'

export default class Plan extends Message {
  render() {
    const { event } = this.props

    return (
      <span>
        {this.getDisplayName()}
        changed plan to{' '}
        <b>{event.payload.plan}</b>
      </span>
    )
  }
}