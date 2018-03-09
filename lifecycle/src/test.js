import React, {Component} from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        console.log(nextProps)
    }
    // even though props has been changed, this component does not render because of shouldcomponentupdate
    shouldComponentUpdate(nextProps,nextState) {
        return this.props === nextProps
    }

    render() {
        return(
            <div>{this.props.count}</div>
        )
    }

}
export default Test;