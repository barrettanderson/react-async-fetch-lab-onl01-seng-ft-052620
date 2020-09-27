// create your App component here
import React from 'react'

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(spaceObject => {
            console.log(spaceObject)
            let spaceData = spaceObject.people.map(data => [data.name, data.craft])
            console.log(spaceData)
            this.setState({
                peopleInSpace: spaceData
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.people}
            </div>
        )
    }
}

export default App
