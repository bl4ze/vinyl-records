import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import { Container, Row, Col } from 'react-bootstrap';
import { createEditRecord } from "../actions/records";
import CreateEditRecordComponent from '../components/CreateEditRecord/CreateEditRecord';
import { createSelector } from 'reselect';
import {getRecordFromStateOrEmpty } from '../services/records.utility';

class CreateEditRecord extends Component {

    render() {
        return (
            <CreateEditRecordComponent {...this.props} />
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        username: state.user.username,
        record: getRecordFromStateOrEmpty(state.records, ownProps.match.params.id)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createOrEditRecord: (payload) => dispatch(createEditRecord(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditRecord);