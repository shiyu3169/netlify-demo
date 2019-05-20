const getword = async () => {
  const res = await fetch('/getword');
  const word = await res.text();

  document.querySelector('#random-word').textContent = word;
};

const getUsers = async () => {
  const res = await fetch('/api/users');
  const users = await res.json();

  users.forEach(user => {
    const li = document.createElement('li');
    const text = document.createTextNode(user.name);
    li.appendChild(text);
    document.querySelector('#users').appendChild(li);
  });
};

getword();
getUsers();
