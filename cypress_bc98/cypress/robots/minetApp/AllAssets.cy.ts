import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();


export class AllAssetsEyes extends BaseEyes{

    AssertHeaders(){
    baseRobotEyes.getByText("Discover Assets")

    }

    AssertTitle(){
        baseRobotEyes.getByText("Trade")
    }

    AssertElements(){
        baseRobotEyes.getByText("Bitcoin")
        baseRobotEyes.getByText("Ethereum")
    }

    AssertWatchlistElements(){
        baseRobotEyes.getByText("Bitcoin")
    }
     
     
}

export class AllAssetsHands extends BaseHands{
    AssertButton(){
        baseRobotHands.clickOnDataTestId("discover-assets")
    }

    AssertWacthList(){
        baseRobotHands.clickElementByText("Watchlist")
    }

    AssertDashboardButton(){
        baseRobotHands.clickElementByText("dashboard icon")
    }

    AssertClickonElement(){
        baseRobotHands.clickOnDataId("1")
    }
}