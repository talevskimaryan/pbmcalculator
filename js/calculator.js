//CALCULATOR ONE
document.getElementById("bodylocation").style.display = "none";
document.getElementById("tissuetype").style.display = "none";
document.getElementById("treatmentpurpose").style.display = "none";
document.getElementById("injurytype").style.display = "none";
document.getElementById("levelofpain").style.display = "none";
document.getElementById("skincolortype").style.display = "none"

var genderValue = genderSelection();
var bodyLocationValue = bodyLocationSelection();
var tissueTypeValue = tissueTypeSelection();
var treatmentPurposeValue = purposeSelection();
var injuryTypeValue = injurySelection();
var painLevelValue = painSelection();
var skinColorValue = colorSelection();
var powerLevel = 0;
var treatmentTime = 0;
var spotSize = 4.91;
var treatmentDose, treatmentTime, powerDensity;


function resetBodyLocation() {
  var bodyLocation = document.getElementsByName("selectedbodylocation");
  for (var i = 0; i < bodyLocation.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio3");
    checkingElements[i].classList.remove("selected");
  }
  bodyLocationValue = undefined;
}

function resetTissueType() {
  var tissueType = document.getElementsByName("selectedtissuetype");
  for (var i = 0; i < tissueType.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio4");
    checkingElements[i].classList.remove("selected");
  }
  tissueTypeValue = undefined;
}

function resetPurposeSelection() {
  var purposeSelection = document.getElementsByName("selectedtreatmentpurpose");
  for (var i = 0; i < purposeSelection.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio5");
    checkingElements[i].classList.remove("selected");
  }
  treatmentPurposeValue = undefined;
}

function resetInjurySelection() {
  var injurySelection = document.getElementsByName("selectedinjurytype");
  for (var i = 0; i < injurySelection.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio6");
    checkingElements[i].classList.remove("selected");
  }
  injuryTypeValue = undefined;
}

function resetPainSelection() {
  var painSelection = document.getElementsByName("selectedpainlevel");
  for (var i = 0; i < painSelection.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio7");
    checkingElements[i].classList.remove("selected");
  }
  painLevelValue = undefined;
}

function resetColorSelection() {
  var colorSelection = document.getElementsByName("skincolortype");
  for (var i = 0; i < colorSelection.length; i++) {
    var checkingElements = document.querySelectorAll(".customradio8");
    checkingElements[i].classList.remove("selected");
  }
  skinColorValue = undefined;
}


function genderSelection() {
  var gender = document.getElementsByName("selectedgender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
      var checkingElements = document.querySelectorAll(".customradio");
      checkingElements[i].classList.add("selected");
      document.getElementById("bodylocation").style.display = "inherit";
      document.getElementById("tissuetype").style.display = "none";
      document.getElementById("treatmentpurpose").style.display = "none";
      document.getElementById("injurytype").style.display = "none";
      document.getElementById("levelofpain").style.display = "none";
      document.getElementById("skincolortype").style.display = "none";
      resetBodyLocation();
      resetTissueType();
      resetPurposeSelection();
      resetInjurySelection();
      resetPainSelection();
      resetColorSelection();
      calculateTimeDose();
    } else {
      var checkingElements = document.querySelectorAll(".customradio");
      checkingElements[i].classList.remove("selected");
    }
  } 
  return genderValue;
}

function bodyLocationSelection() {
  var bodyLocation = document.getElementsByName("selectedbodylocation");
  for (var i = 0; i < bodyLocation.length; i++) {
    if (bodyLocation[i].checked) {
      bodyLocationValue = bodyLocation[i].value;
      var checkingElements = document.querySelectorAll(".customradio3");
      checkingElements[i].classList.add("selected");
      document.getElementById("tissuetype").style.display = "inherit";
      document.getElementById("treatmentpurpose").style.display = "none";
      document.getElementById("injurytype").style.display = "none";
      document.getElementById("levelofpain").style.display = "none";
      document.getElementById("skincolortype").style.display = "none";
      resetTissueType();
      resetPurposeSelection();
      resetInjurySelection();
      resetPainSelection();
      resetColorSelection();
      calculateTimeDose();

      if (bodyLocationValue == "foot" || bodyLocationValue == "ankle" || bodyLocationValue == "lowerleg" || bodyLocationValue == "thigh" || bodyLocationValue == "sacrum" || bodyLocationValue == "thoracicspine" || bodyLocationValue == "elbowforearm" ) {
        document.getElementById("cartilage").style.display = "none";
      } else {
        document.getElementById("cartilage").style.display = "inherit";
      }

      if (bodyLocationValue == "lowerleg" || bodyLocationValue == "knee" || bodyLocationValue == "hippelvis" || bodyLocationValue == "sacrum" || bodyLocationValue == "lumbarspine" || bodyLocationValue == "thoracicspine" || bodyLocationValue == "cervicalspine" || bodyLocationValue == "elbowforearm") {
        document.getElementById("connectivetissue").style.display = "none";
      } else {
        document.getElementById("connectivetissue").style.display = "inherit";
      }

      if (bodyLocationValue == "lowerleg" || bodyLocationValue == "thigh" || bodyLocationValue == "thoracicspine") {
        document.getElementById("ligament").style.display = "none";
      } else {
        document.getElementById("ligament").style.display = "inherit";
      }

      if (bodyLocationValue == "ankle" || bodyLocationValue == "sacrum") {
        document.getElementById("muscle").style.display = "none";
      } else {
        document.getElementById("muscle").style.display = "inherit";
      }

      if (bodyLocationValue == "thigh" || bodyLocationValue == "ankle" || bodyLocationValue == "hippelvis" || bodyLocationValue == "sacrum" || bodyLocationValue == "shoulder") {
        document.getElementById("nerve").style.display = "none";
      } else {
        document.getElementById("nerve").style.display = "inherit";
      }

      if (bodyLocationValue == "sacrum" || bodyLocationValue == "lumbarspine" || bodyLocationValue == "thoracicspine" || bodyLocationValue == "cervicalspine") {
        document.getElementById("tendon").style.display = "none";
      } else {
        document.getElementById("tendon").style.display = "inherit";
      }

    } else {
      var checkingElements = document.querySelectorAll(".customradio3");
      checkingElements[i].classList.remove("selected");
    }
  }
  return bodyLocationValue;
}

function tissueTypeSelection() {
  var tissueType = document.getElementsByName("selectedtissuetype");
  for (var i = 0; i < tissueType.length; i++) {
    if (tissueType[i].checked) {
      tissueTypeValue = tissueType[i].value;
      var checkingElements = document.querySelectorAll(".customradio4");
      checkingElements[i].classList.add("selected");
      document.getElementById("treatmentpurpose").style.display = "inherit";
      document.getElementById("injurytype").style.display = "none";
      document.getElementById("levelofpain").style.display = "none";
      document.getElementById("skincolortype").style.display = "none";
      resetPurposeSelection();
      resetInjurySelection();
      resetPainSelection();
      resetColorSelection();
      calculateTimeDose();

      if(tissueTypeValue != "muscle") {
        document.getElementById("boostperformance").style.display = "none";
      } else {
        document.getElementById("boostperformance").style.display = "inherit";
      }

    } else {
      var checkingElements = document.querySelectorAll(".customradio4");
      checkingElements[i].classList.remove("selected");
    }
  }
  return tissueTypeValue;
}

function purposeSelection() {
  var treatmentPurpose = document.getElementsByName("selectedtreatmentpurpose");
  for (var i = 0; i < treatmentPurpose.length; i++) {
    if (treatmentPurpose[i].checked) {
      treatmentPurposeValue = treatmentPurpose[i].value;
      var checkingElements = document.querySelectorAll(".customradio5");
      checkingElements[i].classList.add("selected");
      resetInjurySelection();
      resetPainSelection();
      resetColorSelection();
      calculateTimeDose();

      if (treatmentPurposeValue == "boostperformance") {
        document.getElementById("injurytype").style.display = "none";
        document.getElementById("levelofpain").style.display = "none";
        document.getElementById("skincolortype").style.display = "inherit";
      } else {
        document.getElementById("injurytype").style.display = "inherit";
        document.getElementById("levelofpain").style.display = "none";
        document.getElementById("skincolortype").style.display = "none";
      }

    }
    else {
      var checkingElements = document.querySelectorAll(".customradio5");
      checkingElements[i].classList.remove("selected");
    }
  }
  return treatmentPurposeValue;
}


function injurySelection() {
  var injuryType = document.getElementsByName("selectedinjurytype");
  for (var i = 0; i < injuryType.length; i++) {
    if (injuryType[i].checked) {
      injuryTypeValue = injuryType[i].value;
      var checkingElements = document.querySelectorAll(".customradio6");
      checkingElements[i].classList.add("selected");
      document.getElementById("levelofpain").style.display = "inherit";
      document.getElementById("skincolortype").style.display = "none";
      resetPainSelection();
      resetColorSelection();
      calculateTimeDose();
    }
    else {
      var checkingElements = document.querySelectorAll(".customradio6");
      checkingElements[i].classList.remove("selected");
    }
  }
  return injuryTypeValue;
}

function painSelection() {
  var painLevel = document.getElementsByName("selectedpainlevel");
  for (var i = 0; i < painLevel.length; i++) {
    if (painLevel[i].checked) {
      painLevelValue = painLevel[i].value;
      var checkingElements = document.querySelectorAll(".customradio7");
      checkingElements[i].classList.add("selected");
      document.getElementById("skincolortype").style.display = "inherit";
      resetColorSelection();
      calculateTimeDose();
    }
    else {
      var checkingElements = document.querySelectorAll(".customradio7");
      checkingElements[i].classList.remove("selected");
    }
  }
  return painLevelValue;
}

function colorSelection() {
  var skinColor = document.getElementsByName("skincolortype");
  for (var i = 0; i < skinColor.length; i++) {
    if (skinColor[i].checked) {
      skinColorValue = skinColor[i].value;
      var checkingElements = document.querySelectorAll(".customradio8");
      checkingElements[i].classList.add("selected");
    }
    else {
      var checkingElements = document.querySelectorAll(".customradio8");
      checkingElements[i].classList.remove("selected");
    }
  }
  return skinColorValue;
}



function calculateTimeDose() {

  if (injuryTypeValue == "acute" && painLevelValue == "low") {
    if (treatmentPurposeValue == "contusionresolution" || treatmentPurposeValue == "healing") {
      treatmentTime = 20;
    } else {
      treatmentTime = 30;
    }
  } else if (injuryTypeValue == "acute" && painLevelValue == "medium") {
      if (treatmentPurposeValue == "contusionresolution" || treatmentPurposeValue == "healing") {
        treatmentTime = 30;
      } else {
        treatmentTime = 40;
      }
  } else if (injuryTypeValue== "acute" && painLevelValue == "high") {
      if (treatmentPurposeValue == "contusionresolution" || treatmentPurposeValue == "healing") {
        treatmentTime = 40;
      } else {
        treatmentTime = 50;
      }
  } else if (injuryTypeValue == "chronic" && painLevelValue == "low") {
    treatmentTime = 60;
  } else if (injuryTypeValue == "chronic" && painLevelValue == "medium") {
    treatmentTime = 75;
  } else if (injuryTypeValue == "chronic" && painLevelValue == "high") {
    treatmentTime = 95;
  } 


  if (treatmentPurposeValue == "contusionresolution" && skinColorValue == "light") {
    powerLevel = 1;
  } else if (treatmentPurposeValue == "healing" && skinColorValue == "light") {
    powerLevel = 1.5;
  } else if (treatmentPurposeValue == "recoverypostgame" && skinColorValue == "light") {
    powerLevel = 2;
  } else if (treatmentPurposeValue == "recoverypregame" && skinColorValue == "light") {
    powerLevel = 3.0;
  } else if (treatmentPurposeValue == "boostperformance" && skinColorValue == "light") {
    powerLevel = 2.5;
  } else if (treatmentPurposeValue == "painrelief" && skinColorValue == "light") {
    powerLevel = 3;
  } else if (treatmentPurposeValue == "contusionresolution" && skinColorValue == "dark") {
    powerLevel = 0.5;
  } else if (treatmentPurposeValue == "healing" && skinColorValue == "dark") {
    powerLevel = 1;
  } else if (treatmentPurposeValue == "recoverypostgame" && skinColorValue == "dark") {
    powerLevel = 1.5;
  } else if (treatmentPurposeValue == "recoverypregame" && skinColorValue == "dark") {
    powerLevel = 2.5;
  } else if (treatmentPurposeValue == "boostperformance" && skinColorValue == "dark") {
    powerLevel = 2.0;
  } else if (treatmentPurposeValue == "painrelief" && skinColorValue == "dark") {
    powerLevel = 2.5;
  }
  
  
  powerDensity = powerLevel / spotSize;
  treatmentDose = Math.round(treatmentTime * powerDensity);

  if (powerLevel != 0 && treatmentTime != 0 && genderValue != undefined && bodyLocationValue != undefined && tissueTypeValue != undefined && treatmentPurposeValue != undefined && injuryTypeValue != undefined && painLevelValue != undefined && skinColorValue != undefined) {
    document.getElementById("calculatedtime1").innerHTML = treatmentTime + " seconds @ " + powerLevel + "W";
    document.getElementById("calculateddose1").innerHTML = treatmentDose + " J/cm²";
  } else if (tissueTypeValue == "muscle" && skinColorValue == "light") {
    document.getElementById("calculatedtime1").innerHTML = "75 seconds @ 2.5W";
    document.getElementById("calculateddose1").innerHTML = "38 J/cm²";
  } else if (tissueTypeValue == "muscle" && skinColorValue == "dark") {
    document.getElementById("calculatedtime1").innerHTML = "75 seconds @ 2.0W";
    document.getElementById("calculateddose1").innerHTML = "30 J/cm²";
  } else {
    document.getElementById("calculatedtime1").innerHTML = "/";
    document.getElementById("calculateddose1").innerHTML = "/";
  }
}