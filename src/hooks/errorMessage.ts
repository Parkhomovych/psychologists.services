import toast from "react-hot-toast";


const errorMessage = (error: any) => {
    switch (error) {
        case 'auth/email-already-in-use':
            toast.error('Email already in use')
            break;
        case 'auth/weak-password':
            toast.error('Weak password')
            break;
        case "auth/invalid-email":
            toast.error('Invalid email')
            break;
        case "auth/invalid-credential":
            toast.error('Wrong email or password')
            break;
        default:
            console.log(error);
            break;

    }

}

export default errorMessage

// const router = useRouter();
// async function handleReg(e: FormData) {
//   const data = await registration(e);
//   if (data === "success") router.push("/psychologists");

//   if (data === "auth/email-already-in-use") {
//     toast.error("Email already in use");
//   }
//   if (data === "auth/weak-password") {
//     toast.error("Weak password");
//   }
//   if (data === "auth/invalid-email") {
//     toast.error("Email is not valid");
//   }
// }