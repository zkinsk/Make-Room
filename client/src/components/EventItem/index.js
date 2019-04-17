import TimeRange from "../TimeRange";
import React, {Component} from "react";
import "./style.css"

class EventItem extends Component {
  render() {
    return (
      <div className="event-item">
        <a href={"/event/" + this.props.id}><h3 className="card-title">{this.props.name}</h3></a>
        <p><TimeRange startTime={this.props.startTime} endTime={this.props.endTime} /></p>
        <p className="card-text">{this.props.placeName}</p>
        <p className="card-text">{this.props.address}</p>
      </div>
    );
  }
}

export default EventItem;