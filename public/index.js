/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [
        {text: 'Take out the garbage', completed: false},
        {text: 'Make the bed', completed: false},
        {text: 'Mow the lawn', completed: false}
      ]
    };
  },
  created: function() {},
  methods: {
    removeCompletedTasks: function() {
      // get all the tasks
      // filter out the incomplete ones

      var incompleteTasks = [];
      for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === false) {
          // shovel into the incomplete tasks array
          incompleteTasks.push(this.tasks[i]);
        }
      }
      this.tasks = incompleteTasks;
    },
    numberOfIncompletedTasks: function() {
      // count the number of tasks that are incomplete
      // get all the tasks
      // this.tasks
      // figure out which ones are incomplete
      var counter = 0;
      for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === false) {
          counter++;
        }
      }
      // count em
      return counter;

    },
    toggleCompleted: function(theTask) {
      theTask.completed = !theTask.completed;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
