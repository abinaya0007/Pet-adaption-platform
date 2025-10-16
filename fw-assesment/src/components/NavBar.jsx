function NavBar (){
  const navContent = [
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Contact",link:"/contact"},
    {name:"Cart",link:"/cart"},
    
    
  ];
  return (
    <div className="flex px-10 justify-between items-center bg-blue-200
    py-3 fixed w-full">
      <h1>Title</h1>
    
     <div className="flex gap-5 justify-between items-center">
      {navContent.map((navLink)=> (
        <p className="cursor-pointor">{navLink.name}</p>
      ))}
     </div>
   </div>
  )
} 
export default NavBar;