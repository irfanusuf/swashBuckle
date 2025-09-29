import type { Admin, Circle, MyCar, Negate, Rectangle, Username } from "./assets/types/Types"



function App() {

  
  const x = 3      // type infer 

  const isAdmin: Admin = false
  const username: Username = "gjhgcjahsg"


  const myRectangle: Rectangle = {

    length: 3,
    breadth: 2,
  }

  function add (a : number, b :number ): number{
      return a + b
  }

  add(3 , 6)


  const myFunction : Negate = (a : number) =>{
  if(a > 0){
    return  -a
  } else{
    return a
  }

  }



  myFunction(-5)


  const Mycircle: Circle = {
    radius: 0,
  }





  return (
    <>
      <h1> Hello World this is react RTK in typescript </h1>
    </>
  )
}

export default App
