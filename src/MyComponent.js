// function MyComponent({ name, age }) {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }
// MyComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// };
function MyComponent({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}
