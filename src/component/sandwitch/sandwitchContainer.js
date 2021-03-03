import buySandwitch from "./sandwitchAction";
import { connect } from "react-redux";
import { React } from 'react';

import Count from "../count";
import Button from "../button";
import Image from "../image";

const sandwitchContainer = (props) => {
    let button
    (props.noOfSandwitches===0)?button=<Button btnStyle='red-button' btnAction={props.buySandwitch} btnLabel='Buy Sandwitch' />:button=<Button btnStyle='green-button' btnAction={props.buySandwitch} btnLabel='Buy Sandwitch' />
    return (
        <div>
            <table style={{ width: '100%' }}>
                <tr>
                    <td><Image source='/sandwitch.png' alter='cake' style='cake-img' /></td>
                    <td><Count count={props.noOfSandwitches} /></td>
                    <td>{button}</td>
                </tr>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfSandwitches: state.sandwitchReducer.noOfSandwitches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buySandwitch: () => dispatch(buySandwitch())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(sandwitchContainer)