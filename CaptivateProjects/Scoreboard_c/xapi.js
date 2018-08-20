var score = 0;

//
// Generate random email address for user
//
var email = generateEmail();

function generateEmail() {
  var num = Math.floor(Math.random() * 10000) + 1;
  var str = 'tester' + num + '@test.com';

  return str;
}

var points = generatePoints();

function generatePoints() {
  var pt = Math.floor(Math.random() * 10000) + 1;
  var strg = pt;

  return strg;
}


var conf = {
  'endpoint': 'https://trial-lrs.yetanalytics.io/xapi/',
  'auth': 'Basic ' + toBase64('50cc53246413e358199c6e9f6bf29d87:7d8ce34719292198bf7f43e54976b448')
};

ADL.XAPIWrapper.changeConfig(conf);

// function send_statement(verbId, verb, objectId, name, description, score, success) {
function send_statement(verbId, verb, objectId, name, description, points, success) {
  var userName = window.cpAPIInterface.getVariableValue("user_name");

  // define the xapi statement being sent
  var statement = {
    'actor': {
      'mbox': 'mailto:' + email,
      'name': userName,
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
    },
    'result': {
      'score': {
        // 'scaled': 1,
        // 'min': 0,
        // 'max': 100,
        // 'raw': score
        'raw': points
      },
      'success': success
    }
  }; // end statement definition

  // Dispatch the statement to the LRS
  var result = ADL.XAPIWrapper.sendStatement(statement);
}

function getScores() {
  var params = ADL.XAPIWrapper.searchParams(); 

  // Enter the ID for the statements that you would like to pull 
  // params['verb'] = 'http://example.com/xapi/answered';
  params['verb'] = 'http://example.com/xapi/generated';
  var answered = ADL.XAPIWrapper.getStatements(params);

  var stmts = answered.statements;

  var topscores = stmts.sort(function(a, b) { return a.result.score.raw < b.result.score.raw ? 1 : -1; }).slice(0, 5);

  var leaderboard = "";

  for (var i = 0; i < topscores.length; i++) {
 
  var cleanName = JSON.stringify(topscores[i].actor.name);
  var nameLength = cleanName.length;
  cleanName = cleanName.slice(1,nameLength-1);
  var point = JSON.stringify(topscores[i].result.score.raw);

  leaderboard += cleanName + " scored " + JSON.stringify(topscores[i].result.score.raw) + "<br />";
  }

  // var name0 = JSON.stringify(topscores[0].actor.name);
  // var score0 = JSON.stringify(topscores[0].result.score.raw);

  // window.cpAPIInterface.setVariableValue("name0", name0);
  // window.cpAPIInterface.setVariableValue("score0", score0);

  window.cpAPIInterface.setVariableValue("name0", topscores[0].actor.name);
  window.cpAPIInterface.setVariableValue("score0", topscores[0].result.score.raw);
  window.cpAPIInterface.setVariableValue("name1", topscores[1].actor.name);
  window.cpAPIInterface.setVariableValue("score1", topscores[1].result.score.raw);
  window.cpAPIInterface.setVariableValue("name2", topscores[2].actor.name);
  window.cpAPIInterface.setVariableValue("score2", topscores[2].result.score.raw);
  window.cpAPIInterface.setVariableValue("name3", topscores[3].actor.name);
  window.cpAPIInterface.setVariableValue("score3", topscores[3].result.score.raw);
  window.cpAPIInterface.setVariableValue("name4", topscores[4].actor.name);
  window.cpAPIInterface.setVariableValue("score4", topscores[4].result.score.raw);

  window.cpAPIInterface.setVariableValue("scores",leaderboard);

}