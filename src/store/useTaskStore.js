import { create } from "zustand";

const useTaskStore = create((set, get) => ({
    tasks: {}, // { projectId: [tasks] }

    // Add a task to a specific project
    addTask: (projectId, task) => {
        console.log("Adding task to project:", projectId, task);
        const tasks = get().tasks;
        const projectTasks = tasks[projectId] || [];
        set({
            tasks: {
                ...tasks,
                [projectId]: [...projectTasks, task],
            },
        });
    },

    // Delete a task from a specific project
    deleteTask: (projectId, taskId) => {
        const tasks = get().tasks;
        const projectTasks = tasks[projectId] || [];
        set({
            tasks: {
                ...tasks,
                [projectId]: projectTasks.filter((task) => task.id !== taskId),
            },
        });
    },

    //updating tasks
    updateTask: (projectId, taskId, updatedTask) => {
        set((state) => {
          const current = state.tasks[projectId] || [];
          return {
            tasks: {
              ...state.tasks,
              [projectId]: current.map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
              ),
            },
          };
        });
      },

    // Get tasks for a specific project
    getTasks: (projectId) => {
        return get().tasks[projectId] || [];
    },
}));

export default useTaskStore;