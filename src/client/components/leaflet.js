import React,{Component} from 'react'
import { Map, Popup, TileLayer,Polyline,CircleMarker,Marker} from 'react-leaflet-universal'

class GIS extends Component {
    constructor(props){
      super(props);
    }
    renderMarker(el){
      let temp=new Array();
      for(let i=0;i<el.pos.length;i++){
        temp.push(
        <CircleMarker center={el.pos[i]} radius={10} onClick={()=>{alert("Hello")}}>
          <Marker position={el.pos[i]}>
          <Popup position={el.pos[i]}>
            <center>{el.name}</center>
            <br/>{el.time[i]}
          </Popup>
          </Marker>
        </CircleMarker>)
      }
      return temp;
    }
    renderLines(el){
      return (
        <div>
      <Polyline positions={el.pos} />
      </div>)
    }
    render(){
      return(
        <div className="card z-depth-3 solar-blue">
        <div className="card-content">
        <span className="card-title">{this.props.data.name}</span>
        <Map center={[9.563172, 76.565652]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {this.props.data.persons.map(el=>this.renderMarker(el))}
        {this.props.data.persons.map(el=>this.renderLines(el))}
      </Map>
      </div>
      </div>
    )
    }
}

export default GIS;