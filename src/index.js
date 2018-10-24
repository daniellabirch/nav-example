import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreditCard from "./creditcard";
import TermLoan from "./termloan";
import registerServiceWorker from "./registerServiceWorker";

type State = {
  toggle: string
};

class Content extends React.Component<{}, State> {
  state = {
    toggle: null
  };

  changeContent = e => {
    this.setState({
      toggle: "creditcard"
    });
    console.log(this.state);
  };
  render() {
    return (
      <div class="lending-health-card__StyledCard-sc-9ftaap-0 jDVoTD">
        <div class="lending-health-card__HeightController-sc-9ftaap-3 juOckN">
          <div class="lending-health-card__CardBody-sc-9ftaap-5 jRRaNO">
            <section class="lending-health-card__Grid-sc-9ftaap-2 eGLyDO">
              <div class="tab-menu__TabGroup-prdu2l-0 liCisV">
                <div
                  class="tab__StyledTab-sc-6n7uxs-1 iylyVK"
                  icon="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-light.svg"
                  onClick={this.changeContent}
                >
                  <img
                    class="tab__Icon-sc-6n7uxs-2 cEpdSu"
                    src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-light.svg"
                  />
                  <span class="tab__Text-sc-6n7uxs-0 dUGzqi">Credit card</span>
                </div>
                <div
                  class="tab__StyledTab-sc-6n7uxs-1 dkSLxl"
                  icon="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-dark.svg"
                  onClick={this.changeContent}
                >
                  <img
                    class="tab__Icon-sc-6n7uxs-2 cEpdSu"
                    src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-dark.svg"
                  />
                  <span class="tab__Text-sc-6n7uxs-0 dUGzqi">Term loan</span>
                </div>
              </div>
              <CreditCard />
              {/* <TermLoan /> */}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById("root"));
registerServiceWorker();
