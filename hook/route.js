import useAuth from "./auth"
import { useRouter } from "next/router";
import LogIn from "../comps/login";

export function withPublic(Component){
    return function WithPublic(props){
        const auth = useAuth();
        const router = useRouter();
        if(auth.user){
            router.replace("/dash");
            <h1>Loading</h1>
        }
        return <Component auth={auth} {...props} />
    };
}

