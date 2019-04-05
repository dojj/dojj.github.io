function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Vefn6XkljE":
        Script1();
        break;
  }
}

function Script1()
{
  send_statement('http://adlnet.gov/expapi/verbs/experienced', 'experienced', 'http://example.com/note', 'note', 'in the notecard interaction'); 
}

