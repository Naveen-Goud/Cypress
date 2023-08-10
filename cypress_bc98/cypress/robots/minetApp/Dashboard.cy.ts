import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();

export class DashboardPageDepandence extends Dependencies{
    visitDashboardPage(){
     this.accessUrl("http://bc98fe.bootcamp64.tk/dashboard" );
 }
}


export class DashboardPageBaseEyes extends BaseEyes{
    AssertTitle(){
        baseRobotEyes.seesDomContainText("h6","Dashboard")    
    } 

    AssertButtons(){
        baseRobotEyes.seesDomVisible("SELL")
        baseRobotEyes.seesDomVisible("BUY")
    }

    AssertTitles(){
        baseRobotEyes.getByText("Watchlist")  
        baseRobotEyes.getByText("My Portfolio Value")   
         
    } 
    

}


export class DashboardPageHands extends BaseHands{

}
