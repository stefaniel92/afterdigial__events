import React from 'react'
import './Button.css'

export default function Button({link, text}) {
  return (
    <a className="eventListing__button" href={link}>{text}</a>
  )
}
