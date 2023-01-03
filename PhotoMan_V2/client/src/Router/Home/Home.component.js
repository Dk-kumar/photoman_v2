import React, { Component } from "react";
import BannerSliderContainer from "../../Pages/BannerSlider/BannerSlider.container";

class Home extends Component {
  renderBannerSlider() {
    return <BannerSliderContainer />;
  }

  render() {
    return <>{this.renderBannerSlider()}</>;
  }
}

export default Home;
