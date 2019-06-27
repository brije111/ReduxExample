import React, { Component } from 'react';

class PostForm extends Component {

constructor(props){
    super(props);
    this.state = {
        title:"",
        body:""
    };
    this.onChange = this.onChange.bind(this);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <form>
                    <div>
                        <label>Title :</label>
                        <br />
                        <input name="title" value={this.state.title} onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Body :</label>
                        <br />
                        <textarea name = "body" value={this.state.body} onChange={this.onChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;