var totalBarVal = 1 // Total Bar Value (Global Variable)

function addLi() {
    document.getElementsByClassName("active")[0].removeAttribute("class"); // Remove "active" Class from previous Element

    // Check, Update, and Lmit Total Bar Value
    totalBarVal = totalBarVal + 1
    if (totalBarVal === 9) {
        var attr = document.createAttribute("style");
        attr.value = "display: none;";  
        document.getElementById("add").setAttributeNode(attr)
        document.getElementById("max").removeAttribute("style")
    }

    // Create New Element (Note: listEL = List element, elValue = Element Value, & linkEl = Link Element)
    var listEl = document.createElement("Li");
    var elValue = document.createTextNode(totalBarVal); // Add Value of New Element
    listEl.appendChild(elValue);

    // Add Attributes to New Element
    var element = document.getElementById("barList");
    var classAttr = document.createAttribute("class");       // Create & Add "class" attribute
    classAttr.value = "active";    
    listEl.setAttributeNode(classAttr);
    var idAttr = document.createAttribute("id");       // Create & Add "id" attribute
    idAttr.value = "bar" + totalBarVal.toString();    
    listEl.setAttributeNode(idAttr);
    var onclickAttr = document.createAttribute("onclick");       // Create & Add "onclick" attribute
    onclickAttr.value = "refreshActive('bar" + totalBarVal.toString() + "')";   
    listEl.setAttributeNode(onclickAttr); 

    // Wrap new Element in <a> and create it
    var linkEl = document.createElement("a");
    linkEl.appendChild(listEl);
    element.appendChild(linkEl);
}
function refreshActive(val) {
    document.getElementsByClassName("active")[0].removeAttribute("class"); // Remove "active" Class from previous Element
    var active = document.createAttribute("class"); // Create a "class" attribute
    active.value = "active"; // Add "active" Class to "class" attribute
    document.getElementById(val).setAttributeNode(active); // Add "active" Class to current Element 
}