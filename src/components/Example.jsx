import { useNavigation } from "react-router-dom";


export const useAppNavigation = () => {
    const navigation = useNavigation(); // ✅ React Router v6 ke liye correct approach
    return navigation;
};


export default useAppNavigation;