import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'
import Cart from './Components/Cart/Cart'

function App() {

  return (
    <>
      <header>
        <h1 className='border-2 font-bold text-xl my-6 md:my-8 md:text-3xl  text-center'>Course Registration</h1>
      </header>
      <main className='flex max-w-screen-xl mx-auto gap-6 border-2 flex-col-reverse lg:flex-row'>
        <AllCourses ></AllCourses>
        <Cart ></Cart>
      </main>
    </>
  )
}

export default App
