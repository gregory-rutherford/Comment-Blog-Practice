import React from "react";
import Calendar from "react-calendar";

class PostBox extends React.Component {

    state = {
        posts: [],
        title: "",
        body: "",
        date: new Date()
    }

    onChange = date => this.setState({ date })

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("wow you made a post... that dont impress me much OH OH OH")
    }

    render()
    {
        return(
            <div>
                <form>
                    <input type="text" placeholder="Title"></input>
                    <Calendar  
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    <input type="text" placeholder="Body"></input>
                    <button onSubmit={this.handleSubmit}>Post!</button>
                    <p>{props.username}</p>
                </form>
            </div>
        )
    }
}

export default PostBox;