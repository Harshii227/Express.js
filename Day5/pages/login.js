export default function login() {
  return `<form action="/submit" method="post">
    <input type = "text" placeholder = "username"/>
    <input type = "password" placeholder = "password"/>
    <button> Login </button>
    </form> 
    <a href = "/">Home page</a>`
    
}