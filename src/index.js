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

  changeContent = (tabname,e) => {
    this.setState({
      toggle: tabname
    });
    //console.log(option);
  };
  render() {
  	let option;
  	if(this.state.toggle == "termloan"){
       option = <TermLoan />
    }
    else{
       option = <CreditCard />
    }
    return (
      <div className="lending-health-card__StyledCard-sc-9ftaap-0 jDVoTD">
        <div className="lending-health-card__HeightController-sc-9ftaap-3 juOckN">
          <div className="lending-health-card__CardBody-sc-9ftaap-5 jRRaNO">
            <section className="lending-health-card__Grid-sc-9ftaap-2 eGLyDO">
              <div className="tab-menu__TabGroup-prdu2l-0 liCisV">
                <div
                  className="tab__StyledTab-sc-6n7uxs-1 iylyVK"
                  icon="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-light.svg"
                  tabname="creditcard"
                  onClick={()=>this.changeContent("creditcard")}
                >
                  <img
                    className="tab__Icon-sc-6n7uxs-2 cEpdSu"
                    src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-light.svg"
                  />
                  <span className="tab__Text-sc-6n7uxs-0 dUGzqi">Credit card</span>
                </div>
                <div
                  className="tab__StyledTab-sc-6n7uxs-1 dkSLxl"
                  icon="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-dark.svg"
                  tabname="termloan"
                  onClick={()=>this.changeContent("termloan")}
                >
                  <img
                    className="tab__Icon-sc-6n7uxs-2 cEpdSu"
                    src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-dark.svg"
                  />
                  <span className="tab__Text-sc-6n7uxs-0 dUGzqi">Term loan</span>
                </div>
              </div>
              {option}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById("root"));
registerServiceWorker();
