import { Component} from 'react'
import QrReader from 'react-qr-scanner'
import ScanValue from './scanned_value'

class Reader extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: null,
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result:data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
    console.log(this.state.result)

    const setResult = ()=>{
        if(this.state.result){
            return this.state.result.text
        }
        return null;
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          <ScanValue value={setResult()}/>
        {/* <p>{this.state.result?.text?this.state.result.text:null}</p> */}
      </div>
    )
  }
}
export default Reader;