import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
    viewPort() {
        cy.viewport(1920, 1080);
      }
      
      wait() {
        cy.wait(1000);
      }
 
}

export class RobotEyes extends BaseEyes{
    seesLoginPage(){
        this.seesDomVisible("login")
    }  
    
    readByDataTesId(id:string){
        cy.get(`[data-testid="${id}"]`).should('be.visible')

    }
}

export class RobotHands extends BaseHands{
    enterTextIntoFieldByType(type: string, text: string) {
        cy.get(`input[type="${type}"]`).type(text);
      }  
    enterTextIntoFieldById(id:string,text:string){
        cy.get(`#${id}`).type(text);
    }
  clickOnDataTestId(id: string) {
    cy.get(`[data-testid="${id}"]`).click();
    return this;
  }
  clickOnDataId(id: string) {
    cy.get(`[data-id="${id}"]`).click();
    return this;
  }
  

}