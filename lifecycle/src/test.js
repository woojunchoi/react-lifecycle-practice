import React, {Component} from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return(
            <div>yo</div>
        )
    }

}
export default Test;