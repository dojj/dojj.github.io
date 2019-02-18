//
// Generate random email address for user
//
var email = generateEmail();

function generateEmail() {
  var num = Math.floor(Math.random() * 10000) + 1;
  var str = 'tester' + num + '@test.com';

  return str;
}

$("a").click(function send_statement(verbId, verb, objectId, name, description) {
  var conf = {
    'endpoint': 'https://trial-lrs.yetanalytics.io/xapi/',
    'auth': 'Basic ' + toBase64('50cc53246413e358199c6e9f6bf29d87:7d8ce34719292198bf7f43e54976b448')
  };

  ADL.XAPIWrapper.changeConfig(conf);

  var clickurl = $(this).attr('href');
  var clicktext = $(this).text();

  // define the xapi statement being sent
  var statement = {
    'actor': {
      'mbox': 'mailto:' + email,
      'name': 'mailto:' + email,
      'objectType': 'Agent'
    },
    'verb': {
       'id': verbId,
      'display': {'en-US': verb}
    },
    'object': {
      'id': objectId,
      'definition': {
        'name': {
          'en-US': name
        },
        'description': {
          'en-US': description
        }
      },
      'objectType': 'Activity'
    }
  }; // end statement definition

  // Dispatch the statement to the LRS
  var result = ADL.XAPIWrapper.sendStatement(statement);
});

/*

function send_statement(verbId, verb, objectId, name, description) {
  var conf = {
    'endpoint': 'https://trial-lrs.yetanalytics.io/xapi/',
    'auth': 'Basic ' + toBase64('50cc53246413e358199c6e9f6bf29d87:7d8ce34719292198bf7f43e54976b448')
  };

  ADL.XAPIWrapper.changeConfig(conf);

  // define the xapi statement being sent
  var statement = {
    'actor': {
      'mbox': 'mailto:' + email,
      'name': 'mailto:' + email,
      'objectType': 'Agent'
    },
    'verb': {
       'id': verbId,
      'display': {'en-US': verb}
    },
    'object': {
      'id': objectId,
      'definition': {
        'name': {
          'en-US': name
        },
        'description': {
          'en-US': description
        }
      },
      'objectType': 'Activity'
    }
  }; // end statement definition

  // Dispatch the statement to the LRS
  var result = ADL.XAPIWrapper.sendStatement(statement);
}

*/ 

/*

$("a").click(function() {

  // $(this).attr("href") is the URL to capture
  
  var myverb = USE WHATEVER VERB MAKES SENSE SUCH AS
  "http://id.tincanapi.com/verb/focused" 
  
  var clickurl = $(this).attr('href');
  var clicktext = $(this).text();
  
  // Create your own xAPI statement as JSON
  // these are just suggestions
  // The type you can set based on what kind of resource this is: link, file, download, tab, etc.
  
  var jsonstatement = {
    'actor': {
      'mbox': 'mailto:' + email,
      'name': 'mailto:' + email,
      'objectType': 'Agent'
    },

    "verb": {
      "id": myverb,
       "display": { "en-US": verb_display }
    }, 
  
     
    "object": {
      "id":  clickurl,
      "objectType": "Activity",
      "definition": {
            "name": { "en-US": clicktext},
            "type":  "http://adlnet.gov/expapi/activities/link"
  
              
                  
      }
    },
          
    
      
    };
    sendStatement(jsonstatement);

  });

*/