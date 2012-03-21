// ==UserScript==
// @name                                          Grooveshark ADS Remover
// @description                                  Remove ADS From Grooveshark
// @include                                       http://grooveshark.com/*
// @include                                       http://*.grooveshark.com/*
// @require										https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js
// @author                                        G3ck0
// @version                                       1.2
// @license                                       Unknown
// @namespace                                 htttp://www.nowhere.com
// ==/UserScript==
//

function logWrapper(msg, isOn){
	if(isOn){
		console.log(msg)
	}else{
		//DoNothing
	}
}

function removeAds(){

	var logIsActive = false;
	
	var elementsToBeRemoved = [
		"capitalSidebar",
		"searchCapitalWrapper_728",
		"searchCapitalWrapper_300",
            "searchCapital_300",
		"musicCapitalWrapper_160",
		"exploreCapitalWrapper_728",
		"exploreCapitalWrapper_300",
		"notifications",
		"commCapitalWrapper_300",
            "capitalView_728",
		"theme_home"
	];
	
	var firstPage = "page_wrapper";
				
	for(var i=0;i<elementsToBeRemoved.length;i++){
		var element = document.getElementById(elementsToBeRemoved[i]);
		
		if(element != null){
			var elementParent = element.parentNode
			elementParent.removeChild(element)
			logWrapper("content has been removed: "+ elementsToBeRemoved[i], logIsActive)
		}else{
			logWrapper("content has NOT been removed: "+ elementsToBeRemoved[i], logIsActive)
		}
	}
	
	modMainPage(logIsActive)
	autoClick(logIsActive)
}

function modMainPage(logIsActive){
	var mainPageName = "page"
	var mainPage = document.getElementById(mainPageName);
	var searchFieldName = "searchBar"
	var searchField = document.getElementById(searchFieldName);
	
	
	if(mainPage != null){
		mainPage.style.backgroundColor="#FFFFFF"
		logWrapper("main page has been modded", logIsActive)
	}else{
		logWrapper("main page has NOT been modded", logIsActive)
	}
	
	if(searchField != null){
		searchField.style.backgroundColor="#DBDBDB"
		logWrapper("main page has been modded", logIsActive)
	}else{
		logWrapper("main page has NOT been modded", logIsActive)
	}
}

function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
    var oCurrent;
    var oAttribute;
    for(var i=0; i<arrElements.length; i++){
        oCurrent = arrElements[i];
        oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
        if(typeof oAttribute == "string" && oAttribute.length > 0){
            if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
                arrReturnElements.push(oCurrent);
            }
        }
    }
    return arrReturnElements;
}

function autoClick(logIsActive){
	var button = $('p[data-translate-text="POPUP_INTERACTION_HERE"]')
	if(button != null){
		//this should NOT work cause the click method works FOR the listeners which have subscribed using jquery
		button.click()
	}
	
}

function jqueryTest(){
	if (jQuery) {  
    // jQuery is loaded 
		return true
	} else {
    // jQuery is not loaded
		return false
	}
}


window.setInterval(function(){
      removeAds()
}, 5000)