import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {
    const capitalize=(word)=>{
const lower=word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
   <div style={{height:'60px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>}
  </div>
  )
}
// always write type of show alert with small letters to match the color of alert by default e.g,danger,success etc
// cls=cumalative layout shift it should be minimum in your website (seo factor),i will set default height of my alert container so that it will not shift my website layout 