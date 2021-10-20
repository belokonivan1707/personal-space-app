// class MyComponent extends React.Component {
//   shouldComponentUpdate(nextProps) {
//     return nextProps.value !== this.props.value;
//   }
//   render() {
//     return <div>{'My Component ' + this.props.value}</div>;
//   }
// }

// React.memo(function MyComponent(props) {
//   return <div>{'My Component ' + props.value}</div>;
// });

// const Button = React.memo(props => {
//   // your component
// });

// export default React.memo(ArticlesPage);
// React.memo is a higher order component that memoizes the result of a function component

// seEffect(() => {
//   let componentMounted = true;
//   const fetchData = async () => {
//     //you async action is here
//     if (componentMounted) {
//       setData(response?.data);
//     }
//   };
//   fetchData();
//   return () => {
//     componentMounted = false;
//   };
// }, []);
