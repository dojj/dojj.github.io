//
// Generate random email address for user
//
var email = generateEmail();

function generateEmail() {
  var num = Math.floor(Math.random() * 10000) + 1;
  var str = 'tester' + num + '@test.com';

  return str;
}


function send_statement(verbId, verb, objectId, name, description) {
  var conf = {
    'endpoint': 'https://joongjae.waxlrs.com/TCAPI/',
    'auth': 'Basic ' + toBase64('VkpIkb7YGaSxMQImksGO:BpdXOyPDTEHe6QtKNq8C')
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
