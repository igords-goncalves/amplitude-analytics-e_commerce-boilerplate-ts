import { useNavigate } from 'react-router';
export const useNavigateProduct = () => {
    const navigate = useNavigate();

    const handleNavigateToProduct = (productId: string) => {
        navigate(`/product?id=${encodeURIComponent(productId)}`);
    };

    return { handleNavigateToProduct };
}