// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  //
  // { guid: 2,
  //   firstName: "Dwight",
  //   lastName: "Schrute" },
  //
  // { guid: 3,
  //   firstName: "Jim",
  //   lastName: "Halpert" },
  //
  // { guid: 4,
  //   firstName: "Pam",
  //   lastName: "Beesly" },
  //
  // { guid: 5,
  //   firstName: "Ryan",
  //   lastName: "Howard" }

  { guid: "task=1"
  , description: "Build my first sproutcore app"
  , isDone: false}
  , { guid: "task=2"
  , description: "Buy some milk"
  , isDone: false}
  , { guid: "task=3"
  , description: "Next, the world"
  , isDone: false}
];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');