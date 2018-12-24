
window.onload = function() {
    // Get all code and pre elements
    var elements = document.querySelectorAll('code,pre');
    
    // Cycle through each code element
    for (var i = 0; i < elements.length; i++) {
    
        // Load language from class
        var lang = elements[i].getAttribute("class");
        
        // Remove 'language-' if lang is not empty
        if (lang != null ) {
          lang = lang.substr(lang.length - (lang.length-9));
        }
        
        // Create 'short-lang' parameter for element
        elements[i].setAttribute("short-lang", lang);
        
    }
}
