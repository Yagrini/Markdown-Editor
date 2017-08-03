import React  from 'react';
import { render } from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {content:'[****GUIDE****](https://blog.wax-o.com/2014/04/tutoriel-un-guide-pour-bien-commencer-avec-markdown/)\n' +
        'Heading\n' +
        '=======\n' +
        '\n' +
        'Sub-heading\n' +
        '-----------\n' +
        ' \n' +
        '### Title 3 #\n' +
        '####  Title 4\n' +
        ' \n' +
        'Paragraphs are separated\n' +
        'by a blank line.\n' +
        '\n' +
        'Texte _dont_ certains __éléments__ sont formatés **pour _être_** en *italique*, en **bold** ou ~~barrés~~.\n' +
        '\n' +
        'Text attributes *italic*, **bold**, \n' +
        '`monospace`, ~~strikethrough~~ .\n' +
        '\n' +
        'Shopping list:\n' +
        '\n' +
        '  * apples\n' +
        '  * oranges\n' +
        '  * pears\n' +
        '\n' +
        'Numbered list:\n' +
        '\n' +
        '  1. apples\n' +
        '  2. oranges\n' +
        '  3. pears\n' +
        '\n' +
        '\n' +
        '1. Item\n' +
        '1234. Item\n' +
        '3. Item\n' +
        '4. Item\n' +
        '\n' +
        'The rain---not the reign---in\n' +
        'Spain.\n' +
        '\n' +
        '> All children are artists. The problem is how to remain an artist once he grows up.'};
    }
    change(arg){
        this.setState({content : arg});
    }
    rawMarkup(){

        var rawMarkup = marked(this.state.content, {sanitize: true})
        return {
            __html: rawMarkup
        }
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center" id="title">
                        ReactJS Markdown Editor
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div id="h3">Markdown :</div>
                        <textarea onChange={event => this.change(event.target.value)} defaultValue={this.state.content}  className="markdown"></textarea>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div id="h3">Preview :</div>
                        <div id="preview" dangerouslySetInnerHTML={this.rawMarkup()}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>,document.getElementById('app'));