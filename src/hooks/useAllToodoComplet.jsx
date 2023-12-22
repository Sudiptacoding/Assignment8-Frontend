import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllToodoComplet = () => {
    const axiosData = useAxios();
    const { isPending, error, data: completeToodo, refetch } = useQuery({
        queryKey: ['toodocomplet'],
        queryFn: () =>
            axiosData.get(`/dragtoodo`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, completeToodo, refetch }
};

export default useAllToodoComplet;