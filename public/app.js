

const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks', {
        headers: { 'Authorization': `Bearer YOUR_JWT_TOKEN` }
      });
      const tasks = await response.json();
      console.log(tasks);
    };
    
    fetchTasks();
    