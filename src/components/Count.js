import React from 'react';
import { connect } from 'react-redux';

const Count = ({count}) => {
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);