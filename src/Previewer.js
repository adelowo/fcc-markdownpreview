import React from "react";
import marked from "marked";
import "./Previewer.css";

const Previewer = React.createClass({

    getInitialState() {
        return {
            'parsed': '',
            'raw': 'blah blah'
        }
    },

    componentDidMount(){
        this.setState({parsed: this.parse(this.state.raw)});
    },

    parse(content){
        return marked(content);
    },

    handleInputChange(event) {
        let data = event.target.value;
        let parsedContent = this.parse(data);

        this.sync(data, parsedContent);
    },

    sync(rawValue, parsedValue){
        this.setState({raw: rawValue, parsed: parsedValue});
    },

    render() {
        let raw = this.state.raw;
        let parsed = this.state.parsed;

        return (
            <div className="row">
                <div className="large-6 columns">
                    <textarea onChange={this.handleInputChange} value={raw}/>
                </div>

                <div className="large-6 columns"
                     dangerouslySetInnerHTML={{__html: parsed}} />

            </div>
        );
    }
});

export default Previewer;
