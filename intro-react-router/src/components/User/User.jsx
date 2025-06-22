const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "20px",
    backgroundColor: "gray",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default User;
