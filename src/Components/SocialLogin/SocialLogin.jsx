import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
          googleSignIn() 
          .then(result => {
            console.log(result.user)
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post("/users", userInfo)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
          })
    }
    return (
        <>
            <div className="divider">or</div>
            <div className="w-full mb-4">
                <button onClick={() => handleGoogleSignIn(googleSignIn)} className="flex justify-center items-center border-2 gap-4 border-primary py-2 px-6 rounded-xl w-full"><img className="w-10 h-10" src="https://i.ibb.co/bzw5Pdb/download-6.jpg" alt="" /><span className="text-xl font-semibold">Continue with Google</span></button>
            </div>
        </>
    );
};

export default SocialLogin;