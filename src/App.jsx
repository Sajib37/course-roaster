import { useState } from "react";
import "./App.css";
import AllCourses from "./Components/AllCourses/AllCourses";
import Cart from "./Components/Cart/Cart";
let remainingCredit = 20;
function App() {
  
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleSelectCourse = (course) => {
    const isExist = selectCourse.find(item => item.id == course.id)
    let totalPrice = course.price;
    let totalCredit = course.credit;
    
        if (isExist) {
          alert("this course already added");
        }
        else {
          selectCourse.forEach(course => {
            totalPrice += course.price;
            totalCredit += course.credit;
            
          })
          if (totalCredit > 20) {
            alert("credit is greter than 20")
          }
          else {
            let remainingCredit = 20-totalCredit;
            setTotalPrice(totalPrice);
            setTotalCredit(totalCredit);
            setRemainingCredit(remainingCredit)
            const newSelectCourse = [...selectCourse, course];
            setSelectCourse(newSelectCourse);
          }
          
        }
    };
    return (
        <>
            <header>
                <h1 className=" font-bold text-xl my-6 md:my-8 md:text-3xl  text-center">
                    Course Registration
                </h1>
            </header>
            <main className="flex max-w-screen-xl mx-auto gap-6 flex-col-reverse lg:flex-row">
                <AllCourses
                    handleSelectCourse={handleSelectCourse}
                ></AllCourses>
                <Cart selectCourse={selectCourse} totalPrice={totalPrice} totalCredit={totalCredit} remainingCredit={remainingCredit}></Cart>
            </main>
        </>
    );
}

export default App;
