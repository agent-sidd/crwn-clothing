import logo from './logo.svg';
import './App.styles.scss';
import Directory from './components/directory/directory.component';
const App = ()=> {
  const categories = [
    {
    id:1,
    title : "Hats",
    image:"https://unsplash.com/photos/PH8GUKG-Do0/download?force=true&w=640",
    subtitle:"Men's Colllection"
    },
    {
      id:2,
      title : "Sunglasses",
      image:"https://unsplash.com/photos/dPw0N01onxE/download?force=true&w=640",
      subtitle:"Men's Colllection"
      },
    {
      id:3,
      title : "Sneakers",
      image:"https://unsplash.com/photos/164_6wVEHfI/download?force=true&w=640",
      subtitle:"Men's Colllection"

    },
    {
      id:4,
      title : "Jackets",
      image:"https://unsplash.com/photos/SJ5rJAl6mpA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzZ8fGphY2tldHxlbnwwfDB8fHwxNjcyMzkzMjIx&force=true&w=640",
      subtitle:"Men's Colllection"
    },
    {
      id:5,
      title : "Watches",
      image:"https://unsplash.com/photos/Ae3OHpJfngc/download?force=true&w=640",
      subtitle:"Men's Colllection"
    },
     {
      id:6,
      title : "SmartPhone",
      image:"https://unsplash.com/photos/44zXCbDd2WQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzR8fHNtYXJ0cGhvbmV8ZW58MHwwfHx8MTY3MjQyMTE2Nw&force=true&w=640",
      subtitle:"Men's Colllection"
    }
    // {
    //   id:,
    //   title : "",
    //   image:"",
    //   subtitle:"Men's Colllection"
    // }
    // {
    //   id:,
    //   title : "",
    //   image:"",
    //   subtitle:"Men's Colllection"
    // }
  ]
  return (
    <Directory categories = {categories}/>
  );
}
export default App;