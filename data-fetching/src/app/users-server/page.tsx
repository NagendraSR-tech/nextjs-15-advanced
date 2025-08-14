type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
        </li>
      ))}
    </ul>
  );
}
