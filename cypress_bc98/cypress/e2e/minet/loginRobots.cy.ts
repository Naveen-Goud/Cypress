 /// <reference types="cypress" />

import cypress = require("cypress");
import { LoginPageDepandence, LoginPageRobotEyes, LoginPageRobotHands } from "../../robots/minetApp/LoginPage.cy";
import { Dependencies,  } from "../../robots/minetApp/Robot";
import { DashboardPageBaseEyes, DashboardPageDepandence, DashboardPageHands } from "../../robots/minetApp/Dashboard.cy";
import { AllAssetsEyes, AllAssetsHands } from "../../robots/minetApp/AllAssets.cy";
import { DetailsPageEyes, DetailsPageHands } from "../../robots/minetApp/DetailsPage.cy";
import { SellPageEyes, SellPageHands } from "../../robots/minetApp/Sellpage.cy";
import { BuyPageEyes, BuyPageHands } from "../../robots/minetApp/BuyPage.cy";

const loginEyes= new LoginPageRobotEyes();
const loginHands=new LoginPageRobotHands();
const dependencies=new Dependencies();
const loginPage=new LoginPageDepandence();
const dashboardPageDepandence=new DashboardPageDepandence();
const dashboardPageBaseEyes=new DashboardPageBaseEyes();
const allAssetsEyes=new AllAssetsEyes();
const allAssetsHands=new AllAssetsHands();
const detailsPageEyes=new DetailsPageEyes();
const detailsPageHands=new DetailsPageHands();
const sellPageEyes=new SellPageEyes();
const sellPageHands=new SellPageHands();
const buyPageEyes=new BuyPageEyes();
const buyPageHands=new BuyPageHands();
 
 describe('minet tesing', () => {  
    it("test from login page",()=>{
      loginPage.visitLoginPage()
      loginEyes.AssertTitle()
      loginHands.EnterEmail("email","shaikshakeelgr@gmail.com")
      loginHands.EnterPassword("password","shaik123@")
      loginHands.ClickOnSignup()
       cy.wait(2000)
 
      dashboardPageBaseEyes.AssertTitle()
      dashboardPageBaseEyes.AssertTitles()
      dashboardPageBaseEyes.AssertButtons
      dashboardPageBaseEyes.AssertTitles()
 
      allAssetsEyes.AssertHeaders()
      cy.wait(1000)
      allAssetsHands.AssertButton()
      allAssetsEyes.AssertElements()
      allAssetsHands.AssertWacthList()
      cy.wait(1000)
      allAssetsEyes.AssertWatchlistElements()
      allAssetsHands.AssertClickonElement()

 
      detailsPageEyes.AssertTitle()
      detailsPageEyes.AssertButtons()
      detailsPageEyes.AssertCorelationElements()
      detailsPageHands.AssertSellButton();
      cy.wait(1000);

      sellPageEyes.AssertTitle()
      sellPageEyes.AssertElements()
      sellPageHands.AssertSelectElement()
      cy.wait(1000)
      sellPageEyes.DataChangeAfterSelecting()
      sellPageHands.AssertSellNow()
      cy.wait(1000)
      sellPageEyes.AssertCheckoutPage()
      sellPageHands.AssertCheckUsd()
      sellPageEyes.AssertWatchData()
//the return to dashboard to implement the buy functionality
      sellPageHands.AssertDashboardIcon()

      cy.wait(2000)
      allAssetsEyes.AssertHeaders()
      cy.wait(1000)
      allAssetsHands.AssertButton()
      allAssetsEyes.AssertElements()
      allAssetsHands.AssertWacthList()
      cy.wait(1000) 
      allAssetsEyes.AssertWatchlistElements()
      allAssetsHands.AssertClickonElement()
      cy.wait(1000)
      sellPageHands.clickElementByText("BUY")
       buyPageEyes.AssertHeaders()
       buyPageHands.AssertSelectElement()
       buyPageEyes.DataChangeAfterSelecting()
       buyPageHands.AssertBuyNow()
       cy.wait(1000)
       buyPageEyes.AssertCheckoutPage()
      buyPageHands.AssertCheckUsd()
      buyPageEyes.AssertWatchData()


      sellPageHands.AssertDashboardIcon()
  

    })
})