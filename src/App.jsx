import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'
import Cart from './Components/Cart/Cart'

function App() {
  const handleSelectCourse = (name,price,credit) => {
    console.log(name);
    console.log(price);
    console.log(credit);
  }

  return (
    <>
      <header>
        <h1 className=' font-bold text-xl my-6 md:my-8 md:text-3xl  text-center'>Course Registration</h1>
      </header>
      <main className='flex max-w-screen-xl mx-auto gap-6 flex-col-reverse lg:flex-row'>
        <AllCourses  handleSelectCourse={handleSelectCourse}></AllCourses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
