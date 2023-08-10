import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();

export class BuyPageEyes extends BaseEyes{
    AssertHeaders(){
        baseRobotEyes.getByText("Checkout")
        baseRobotEyes.getByText("Buy Crypto")


    }
     DataChangeAfterSelecting(){
        baseRobotEyes.getByText("Ethereum wallet")
         
    }
    AssertCheckoutPage(){
        baseRobotEyes.getByText("Purchase is completed, please check your balance in your crypto wallet")
        baseRobotEyes.getByText("BUY CRYPTO")
    }
    AssertWatchData(){
        const textsToCheck = [
            "USD Coin",
            "Total balance",
            "CASH DEPOSIT",
            "WITHDRAWAL"
        ];

        textsToCheck.forEach(text => {
            this.baseRobotEyes.getByText(text);
        });

        this.baseRobotEyes.readByDataTestId("transaction-card");
    }
}

export class BuyPageHands extends BaseHands{
    AssertSelectElement(){
        baseRobotHands.clickOnDataTestId("4");
    }
    AssertBuyNow(){
        baseRobotHands.clickElementByText("BUY NOW")
    }
    AssertCheckUsd(){
        baseRobotHands.clickElementByText("GO TO USD COIN")
    }
}
