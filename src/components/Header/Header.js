import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="eventListing__header">
        <img src='/skyway-logo.png' alt="Skyway" />

        <div className="eventListing__header-right">
          <a href="#" className="eventListing__sign-in">Sign in</a>
          <a href="#" className="eventListing__basket">Basket</a>
        </div>
    </header>
  )
}
