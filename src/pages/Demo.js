import React, { Component } from 'react'
import NewWindow from 'react-new-window'
export class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
     Demo = () => (
        <NewWindow>
          <h1>Hi 👋</h1>
        </NewWindow>
      )
    render() {
        return (
            <div>
                {this.Demo()}
            </div>
        )
    }
}

export default Demo
