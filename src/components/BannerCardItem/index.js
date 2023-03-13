// Write your code here.

import './index.css'

const BannerCard = props => {
  const {eachItem} = props
  const {headerText, description, className} = eachItem

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button1">Show More</button>
    </li>
  )
}

export default BannerCard
