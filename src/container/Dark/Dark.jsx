import React from 'react'
import { SocialMedia } from '../../components';
import './Dark.scss';

function Dark(props) {
  return (
    <div className="form-check form-switch end" style={{backgroundColor: props.mode==="light"? "var(--primary-color)": "hsl(240deg 73% 19%)"}}>
      <SocialMedia/>
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={props.toggleSwitch}
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    Dark Mode
  </label>
</div>

  )
}

export default Dark