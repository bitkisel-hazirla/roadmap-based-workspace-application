export const handleTasks = async () => {
  const data = await fetch('/tasks');
  const tables = await data.json();
  return tables.content;
};

export const createTask = async (submission) => {
  await fetch('/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: [JSON.stringify(submission)]
  });
};

export const editTask = async (id, submission) => {
  await fetch(`/task/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: [JSON.stringify(submission)]
  });
};

export const deleteTask = async (id, submission) => {
  await fetch(`/task/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: [JSON.stringify(submission)]
  });
};
