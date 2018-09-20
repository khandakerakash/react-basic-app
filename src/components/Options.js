import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h1 className="widget-header__title">Your options</h1>
            <button 
                className="btn btn--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>

        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option, index) => 
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption = {props.handleDeleteOption}
                />
            )
        }
    </div>
);

export default Options;