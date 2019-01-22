import React,{Component} from 'react';
import { saveTemplates } from './../actions/saveTemplates';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { connect } from 'react-redux';

if(process.browser){
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/htmlmixed/htmlmixed');
    require('codemirror/mode/css/css');
    require('codemirror/theme/material.css')
}

class TemplatePage extends Component{
    constructor(props){
        super(props);
        this.refHtml=React.createRef();
        this.refCss=React.createRef();
        this.refJs=React.createRef();
        this.state={
            codeHTML:"",
            codeCSS:"",
            codeJS:""
        }
        this.sendCode=this.sendCode.bind(this);
    }
    sendCode(){
        const template=`<!DOCTYPE html>
        <html lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${this.props.match.params.name}</title>
        <style>${this.refCss.current.editor.getValue()}</style>
        </head>
        <body>${this.refHtml.current.editor.getValue()}</body>
        <script>${this.refJs.current.editor.getValue()}</script>
        </html>`
        this.props.saveTemplates(this.props.match.params.name,this.props.match.params.id,template,()=>{
            this.props.history.push('/channel');
        });
    }
    render(){
        const option=(mode)=>{
            return({
                theme: 'material',
                mode,
                lineNumbers: true
            })
        }
        return( 
            <div>
            <div className="card">
            <div className='card-content'>
            <span className="card-title">HTML</span>
             <CodeMirror value={this.state.codeHTML} options={option('htmlmixed')}
            onBeforeChange={(editor, data, value) => {
              this.setState({codeHTML:value});
            }} ref={this.refHtml}/>
            </div>
            </div>

            <div className="card">
            <div className='card-content'>
            <span className="card-title">CSS</span>
            <CodeMirror value={this.state.codeCSS} options={option('css')}
            onBeforeChange={(editor, data, value) => {
              this.setState({codeCSS:value});
            }} ref={this.refCss}/>
            </div>
            </div>
            
            <div className="card">
            <div className='card-content'>
            <span className="card-title">JS</span>
            <CodeMirror value={this.state.codeJS} options={option('javascript')}
            onBeforeChange={(editor, data, value) => {
              this.setState({codeJS:value});
            }} ref={this.refJs}/>
            </div>
            </div>
            <div className='center'>
            <button onClick={this.sendCode} className='btn green'>Save</button>
            </div>
            </div>)
    }
};

export default ({
    component:connect(null,{saveTemplates})(TemplatePage)
});