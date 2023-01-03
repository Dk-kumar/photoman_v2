import React, { Component } from "react";
import RecentStorysContainer from "../../Router/RecentStorys/RecentStorys.conyainer";
import { mediaURL } from "../../Utils/EndPoints";
import "./Collections.style.scss";

class Collections extends Component {
  renderHeading() {
    return (
      <div className="Heading-Wrapper">
        <div className="Text-Wrapper">
          <div className="Line" />
          <div className="Text-Container">
            <p className="Small-Text">Browse</p>
            <p className="Big-Text">By Collection</p>
          </div>
          <div className="Line" />
        </div>
      </div>
    );
  }

  renderCollections() {
    const {
      collections: { collectionList },
    } = this.props;

    return (
      <>
        {this.renderHeading()}
        <div className="Card-Container">
          {collectionList.map((res) => {
            return (
              <div className="Collections-Card" key={res.id}>
                <img
                  src={`${mediaURL}${res.attributes.image.data.attributes.url}`}
                  alt="name"
                  className="Image"
                />
                <p className="Title">{res.attributes.name}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="Collections-Wrapper">{this.renderCollections()}</div>
        <RecentStorysContainer />
      </>
    );
  }
}

export default Collections;
