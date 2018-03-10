import React, {Component} from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        console.log('child componentwillmount')
    }

    componentDidMount() {
        console.log('child comonentdidmount')
    }

    //can compare previous props and updated props here setstate possible
    componentWillReceiveProps(nextProps) {
        console.log('child componentwillreceiveprops')
        // console.log(nextProps)
    }
    // even though props has been changed,
    //  this component does not render because of shouldcomponentupdate
    // setstate is not possible
    // default return true(which allows rerender)
    shouldComponentUpdate(nextProps,nextState) {
        return this.props !== nextProps
    }
    changeState = () => {
        this.setState({count:10})
    }
    //you cant do setstate here. it will lead you to inifinite loop
    componentWillUpdate(nextProps,nextState) {
        console.log(nextProps)
    }
    componentWillUnmount() {
        console.log('child componentwillunmount')
    }

    render() {
        console.log('child render')
        return(
            <div>{this.props.count}
            </div>
        )
    }

}
export default Test;