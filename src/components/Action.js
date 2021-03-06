import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="btn-big" 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
        What should I do?
        </button>
    </div>
);

export default Action;