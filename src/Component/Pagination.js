
import { useSelector } from 'react-redux';
import  {setCurrentPage} from "../redux/features/post/postsSlice"
import { useDispatch } from 'react-redux';
const Pagination = () => {
    const dispatch = useDispatch();
    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
      };
    const {currentPage ,totalPages} = useSelector((state)=>state.posts)
    if (totalPages === null) {
        return null;
      }
  
      const pageButtons = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : 'btn_pagination'}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
  
      return <div>{pageButtons}</div>;
}

export default Pagination