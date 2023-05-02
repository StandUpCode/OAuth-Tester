import { generateAuthGitlabRequest } from "../utils/auth/gitlab";
import { generateAuthGithubRequest } from "../utils/auth/github";
import { generateAuthRequest } from "../utils/auth/line"
import googleSignIn from "../utils/auth/google";
import appleSignIn from "../utils/auth/apple";
import facebookSignIn from "../utils/auth/facebook";
import microsoftSignIn from "../utils/auth/microsoft";



const Index = () => {




  return (
    <>
      <div className='flex w-screen h-screen bg-[#621EEB]'>
        <div className="flex w-full h-full">

          <div className='flex flex-col items-center justify-center w-full h-full space-y-5'>
            <h1 className="text-6xl font-semibold my-10 text-white"> OAuth Tester</h1>
            <button
              onClick={() => {
                const lineLoginUrl = generateAuthRequest("login");
                if (lineLoginUrl) {
                  window.location.href = lineLoginUrl;
                }

              }}
              className="flex p-2 h-14 bg-[#07c655] w-72 text-white text-center justify-center items-center  rounded-md shadow-md"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png" className="w-8 mx-2" />
              Login with LINE</button>
            <button
              onClick={() => {
                googleSignIn();
              }}
              className="flex p-2 h-14 bg-white w-72 text-black text-center  justify-center items-center  rounded-md shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" className="w-6 mx-2" />Login with Google</button>
            <button
              onClick={() => {
                const lineLoginUrl = generateAuthGithubRequest("login");
                if (lineLoginUrl) {
                  window.location.href = lineLoginUrl;
                }

              }}
              className="flex p-2 h-14 bg-black w-72 text-white text-center justify-center items-center  rounded-md shadow-md">
              <img src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" className="w-12 mx-2" />Login with Github</button>
            <button
              onClick={() => {
                microsoftSignIn()
              }}
              className="flex p-2 h-14 bg-white w-72 text-black text-center justify-center items-center  rounded-md shadow-md"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" className="w-8 mx-2" />
              Login with Microsoft</button>
            <button
              onClick={() => {
                const lineLoginUrl = generateAuthGitlabRequest("login");
                if (lineLoginUrl) {
                  window.location.href = lineLoginUrl;
                }
              }}
              className="flex p-2 h-14 bg-[#7C43EF] w-72 text-white text-center justify-center items-center  rounded-md shadow-md"><img src="https://cdn.worldvectorlogo.com/logos/gitlab.svg" className="w-8 mx-2" />
              Login with GitLab</button>

            <button
              onClick={() => {
                facebookSignIn();

              }}
              className="flex p-2 h-14 bg-white w-72 text-black text-center justify-center items-center  rounded-md shadow-md"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" className="w-8 mx-2" />
              Login with Facebook</button>

            <button
              onClick={() => {
                appleSignIn()
              }}

              className="flex p-2 h-14 bg-white w-72 text-black text-center  justify-center items-center  rounded-md shadow-md">
              <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" className="w-12 mx-2" />Login with Apple</button>
            <p className="text-red-500 w-64"> To Use Apple Sign In on web need apple developer account cost 99$/yrs</p>

            <div>
              <p className="text-white">This Open Source Example Code Sponsored by <a href="https://standupcode.tech">Standupcode Co.,Ltd.</a> with <a href="https://opensource.org/license/mit/">MIT License</a></p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Index;
