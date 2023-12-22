import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import useAllToodoComplet from '../../hooks/useAllToodoComplet'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import useAxios from '../../hooks/useAxios'
import Swal from 'sweetalert2'

const style = {
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = () => {

  const { completeToodo, refetch } = useAllToodoComplet()
  const axiosData = useAxios()

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosData.delete(`/toodoComplet/${id}`)
          .then(res => {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your Toodo has been deleted.",
              icon: "success"
            });
          })

      }
    });
  }


  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div className='w-full text-2xl rounded-md' ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {isActive ? 'Release to drop' : 'Drag your complete toodo here'}
      <div className='pt-10'>
        {
          completeToodo?.length > 0 && <div className='cursor-pointer'>
            {
              completeToodo?.map((item, i) => {
                return <div>
                  <div className='flex items-center justify-center hover:text-white'>
                    <div className='w-3/4 pr-10 text-center flex items-center mb-1 rounded-md justify-between gap-3  flex-row-reverse border  transition-all duration-500 transform 
               hover:bg-indigo-400
  
              hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-105' >
                      <div className='flex items-center gap-3'><span ></span> <span onClick={() => handelDelete(item._id)}><MdDelete /></span></div>
                      <div class="flex flex-wrap gap-4 justify-center text-lg font-serif hover:text-white ">
                        <a class=" text-left flex-grow text-black border-l-8 border-green-500  rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                        >
                          <span className='hover:text-white dark:text-white text-white text-left'> {item?.text}</span>
                          <div class=" font-thin text-sm dark:text-white text-left text-white">
                            <span>Time: {item?.time}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        }
      </div>
    </div>
  )
}