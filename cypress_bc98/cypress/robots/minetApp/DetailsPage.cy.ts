import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();


export class DetailsPageEyes extends BaseEyes{
    AssertButtons(){
        baseRobotEyes.getByText("SELL")
        baseRobotEyes.getByText("BUY")
    }
    AssertTitle(){
        baseRobotEyes.getByText("Trade")
        baseRobotEyes.getByText("Wallet")
        baseRobotEyes.getByText("Overview")
    }

    AssertCorelationElements(){
        baseRobotEyes.getByText("Bitcoin")
        baseRobotEyes.getByText("Etherium")
    }

}

export class DetailsPageHands extends BaseHands{

    AssertSellButton(){
        baseRobotHands.clickElementByText("SELL")
    }
}