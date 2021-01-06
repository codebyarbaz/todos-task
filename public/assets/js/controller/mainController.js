app.controller("mainController", [
  "$scope",
  "$timeout",
  "mainFactory",
  function ($scope, $timeout, mainFactory) {
    $scope.allTasks = [];
    $scope.getTasks = function () {
      mainFactory.getRequest(`/api/v1/tasks`, null).then(
        (data) => {
          if (data && data.success === true) {
            $scope.allTasks = data.data;
            $scope.allTasks_ = data.data;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    };

    $scope.markComplete = function (taskId, index) {
      $scope.allTasks[index].CTA = "Wait..";
      mainFactory.putRequest(`/api/v1/tasks/${taskId}`, null, null).then(
        (data) => {
          if (data && data.success === true) {
            $scope.allTasks[index].status = "completed";
            $scope.allTasks[index].CTA = "Completed";
          }
        },
        (err) => {
          console.log(err);
        }
      );
    };

    $scope.deleteTask = function (taskId, index) {
      $scope.allTasks[index].CTA_2 = "Deleting..";
      mainFactory.deleteRequest(`/api/v1/tasks/${taskId}`, null).then(
        (data) => {
          if (data && data.success === true) {
            $scope.allTasks.splice(index, 1);
            $scope.allTasks_ = [...$scope.allTasks];
          }
        },
        (err) => {
          console.log(err);
        }
      );
    };

    $scope.addTaskMsg = "";
    $scope.addTask = function (isValid) {
      if (isValid) {
        $scope.addTaskMsg = "";

        mainFactory
          .postRequest(
            `/api/v1/tasks`,
            {
              name: $scope.taskName,
            },
            null
          )
          .then(
            (data) => {
              $scope.addTaskMsg = data.msg;
              if (data && data.success === true) {
                $scope.allTasks.unshift({
                  ...data.data,
                  CTA: "Mark Complete",
                  CTA_2: "Delete",
                });
                $scope.formSubmitted = false;
                $scope.taskName = "";
                $scope.addTaskForm.$setPristine();

                $scope.allTasks_ = [...$scope.allTasks];

                $timeout(() => {
                  $scope.addTaskMsg = "";
                }, 2500);
              }
            },
            (err) => {
              console.log(err);
              $scope.addTaskMsg = "Something went wrong";
            }
          );
      } else {
        $scope.formSubmitted = true;
      }
    };

    $scope.filterTasks = "";
    $scope.onFilterChange = function (filter) {
      if (filter && filter === "all") {
        $scope.allTasks = [...$scope.allTasks_];
      } else if (filter && filter === "pending") {
        const tasks = [...$scope.allTasks_];
        const pendingTasks = tasks.filter((task) => task.status === "pending");
        $scope.allTasks = pendingTasks;
      } else if (filter && filter === "completed") {
        const tasks = [...$scope.allTasks_];
        const pendingTasks = tasks.filter(
          (task) => task.status === "completed"
        );
        $scope.allTasks = pendingTasks;
      } else {
        $scope.allTasks = [...$scope.allTasks_];
      }
    };
  },
]);
