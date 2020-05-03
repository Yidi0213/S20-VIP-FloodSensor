import React,{Component} from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <h5>{text}</h5>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.718433,
      lng: -95.400461
    },
    zoom: 17
  };
  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event);
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "enter your key here"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
          center = {[29.718433,-95.400461]}
        //   options={function (maps) {
        //     return {
        //       styles: [{ stylers: [{ 'saturation': 30 }, { 'gamma': 0.8 }, { 'lightness': 1 }, { 'visibility': 'on' }] }]
        //     }
        //   }}
        >
          <AnyReactComponent
            lat={29.720798}
            lng={-95.401524}
            text="Sensor 1"
          />
          {/* <h1 center = {[29.718433,-95.400461]}>qwe qwe</h1> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;