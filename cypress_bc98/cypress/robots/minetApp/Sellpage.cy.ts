import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();


export class SellPageEyes extends BaseEyes{
    
    AssertTitle(){
        baseRobotEyes.getByText("Checkout")
    }
    
    AssertElements(){
        baseRobotEyes.getByText("Bitcoin")
        baseRobotEyes.getByText("Dogecoin")
        baseRobotEyes.getByText("Ethereum")
        baseRobotEyes.getByText("Tether")

    }

    DataChangeAfterSelecting(){
        baseRobotEyes.getByText("Ethereum wallet")
         
    }

    AssertCheckoutPage(){
        baseRobotEyes.getByText("Sell is completed, please check your balance in your Rupee coin")
        baseRobotEyes.getByText("SELL CRYPTO")
    }

    AssertWatchData(){
        baseRobotEyes.getByText("USD Coin")
        baseRobotEyes.getByText("Total balance")
        baseRobotEyes.readByDataTesId("transaction-card")
        baseRobotEyes.getByText("CASH")
        baseRobotEyes.getByText("WITHDRAWAL")
    }
}
export class SellPageHands extends BaseHands{
    
    AssertSelectElement(){
        baseRobotHands.clickOnDataTestId("4");
    }

    AssertSellNow(){
        baseRobotHands.clickElementByText("SELL NOW")
    }

    AssertCheckUsd(){
        baseRobotHands.clickElementByText("GO TO USD COIN")
    }
    
    AssertDashboardIcon(){
         
          baseRobotHands.clickonImgsBySrcPattern(".*\\bdashboard\\.svg$")
    }
}