import { useNavigate } from "react-router";

export const useNavigateCategory = () => {
    const navigate = useNavigate();

    const handleNavigateToCategory = (category: string) => {
        navigate(`/category?name=${encodeURIComponent(category)}`);
    };

    return { handleNavigateToCategory };
};
