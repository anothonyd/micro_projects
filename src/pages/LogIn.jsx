
const LogIn = () => {
  return (
    <div className="absolute flex w-full h-full left-0 top-16 flex-col lg:flex-row bg-login-signup-bg bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full">

      </div>
      <div className="w-full h-full px-5 backdrop-blur-2xl ">
        <form class="flex flex-col mt-20 lg:mx-14" action="" method="POST">
          <div className="relative flex flex-col lg:flex-row">
            <input id="email" className="peer" name="email" type="text" placeholder="john@doe.com" />
            <label for="email">Email address</label>
          </div>
          <div class="mt-10 relative">
            <input type="password" className="peer" name="password" placeholder="Password" />
            <label for="password" >Password</label>
          </div>

          <input type="sumbit" value="Sign in" class="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
        </form>
      </div>
    </div>
  )
}

export default LogIn