import { BaseEyes, BaseHands } from "../BaseRobot"; 
import { Dependencies, RobotEyes, RobotHands } from "./Robot";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();


export class LoginPageDepandence extends Dependencies{
       visitLoginPage(){
        this.accessUrl(Cypress.env("host_url") );
    }
}

export class LoginPageRobotEyes extends BaseEyes{
    AssertTitle(){
        baseRobotEyes.seesDomContainText("h4","Login To Minet")    
    } 
}

export class LoginPageRobotHands extends BaseHands{

    EnterEmail(type:string,text:string){
        baseRobotHands.enterTextIntoFieldByType(type,text)
    }
    EnterPassword(type:string,text:string){   
        baseRobotHands.enterTextIntoFieldByType(type,text)
    }
    
    ClickOnSignup(){
        baseRobotHands.clickOnDomElement("button")
    }
}