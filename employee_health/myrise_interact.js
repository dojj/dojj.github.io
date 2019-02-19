var tincan = new TinCan({url: window.location.href});

function sendStatement(statement) {
    var conf = {
        'endpoint': 'https://trial-lrs.yetanalytics.io/xapi/',
        'auth': 'Basic ' + toBase64('50cc53246413e358199c6e9f6bf29d87:7d8ce34719292198bf7f43e54976b448')
    };

    ADL.XAPIWrapper.changeConfig(conf);

    $("a").click(function() {

        // $(this).attr("href") is the URL to capture
        
        // var myverb = 
        // "http://id.tincanapi.com/verb/focused" 
        
        var clickurl = $(this).attr('href');
        var clicktext = $(this).text();
        
        // Create your own xAPI statement as JSON
        // these are just suggestions
        // The type you can set based on what kind of resource this is: link, file, download, tab, etc.
        
        var jsonstatement = {
            "verb": {
                "id": "focused",
               "display": { "en-US": verb_display }
                 }, 
        
             
            "object": {
                "id":  clickurl,
                "objectType": "Activity",
                "definition": {
                      "name": { "en-US": clicktext},
                      "type":  "http://adlnet.gov/expapi/activities/link"
        
                            
                                    
                    }},
                        
	 	tincan.sendStatement(statement);
                
            };
            var result = ADL.XAPIWrapper.sendStatement(jsonstatement);
        
          
        });

}




//--------------------------------------------------ON LOAD---------------------------------------------------------------------





$( document ).ready(function() {


alert("loaded");

// end of onload
});




//--------------------------------------------------------------ON PAGE CHANGE --------------------------------------------------

$(window).on('hashchange', function(e){
	

alert("page change");

});
