import React from "react";
import marked from "marked";
import "./Previewer.css";

const Previewer = React.createClass({

    getInitialState() {
        return {
            'parsed': '',
            'raw': '' +
            'Heading\n=======\n\nSub-heading\n-----------\n \n' +
            '### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\n' +
            'Leave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\n' +
            'Numbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n' +
            'The rain---not the reign---in\nSpain.\n\n ' +
            '*[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
                     dangerouslySetInnerHTML={{__html: parsed}}/>

            </div>
        );
    }
});

export default Previewer;
