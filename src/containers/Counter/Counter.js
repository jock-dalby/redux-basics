import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFromCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.results.map((result, i) => (
                        <li key={i} onClick={() => this.props.onDeleteResult()}>{result}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

/**
 * CONNECT
 * - connect is a function that returns an hoc, to be used on the component export.
 * - This allows us to pass some configuration to connect to customise the hoc for this given container.
 * - connect receives 2 arguments:
 *  - 1. Which slice of state do we want for this container.
 *  - 2. Which actions do we want to dispatch for this container.
 * - If do not need to dispatch any actions just pass one argument
 * - If do not need access to state, just pass null as first argument
 * */

const mapStateToProps = state => {
    return {
        counter: state.counter,
        results: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.Increment),
        onDecrementCounter: () => dispatch(actions.Decrement),
        onAddToCounter: () => dispatch({ type: 'ADD_TO', payload: 5}),
        onSubtractFromCounter: () => dispatch( {type: 'SUBTRACT_FROM', payload: 5}),
        onStoreResult: () => dispatch( {type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch( {type: 'DELETE_RESULT', payload: 5}),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);