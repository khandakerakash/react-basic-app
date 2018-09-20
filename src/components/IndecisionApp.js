import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'



export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        optionSelected: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (removeToOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => removeToOption !== option) 
        }));
    };

    handleClearOptionSelected = () => {
        this.setState(() => ({optionSelected: undefined}));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        
        this.setState(() => ({
            optionSelected: option
        }));
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Please enter the valid option item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already is exist!';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    };


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }

        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('Component will unmount...!')
    }

    render () {
        const subtitle = 'Put your life in the hands of a computer';
    
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal 
                        optionSelected = {this.state.optionSelected}
                        handleClearOptionSelected = {this.handleClearOptionSelected}
                    />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

