import { buyCake } from '../redux/cakeAction'
import React from 'react'
import { connect } from 'react-redux'


import Count from "./count";
import Button from "./button";
import Image from "./image";

const cakeContainer = (props) => {
  let button
  (props.noOfCakes === 0) ? button = <Button btnStyle='red-button' btnAction={props.buyCake} btnLabel='Buy Cake' /> : button = <Button btnStyle='green-button' btnAction={props.buyCake} btnLabel='Buy Cake' />
  return (
    <div>
      <table style={{ width: '100%' }}>
        <tr>
          <td><Image source='/cake.png' alter='cake' style='cake-img' /></td>
          <td><Count count={props.noOfCakes} /></td>
          <td>{button}</td>
        </tr>
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfCakes: state.cakeReducer.noOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cakeContainer)