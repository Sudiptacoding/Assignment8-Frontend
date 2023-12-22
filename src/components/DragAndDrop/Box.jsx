import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useAxios from '../../hooks/useAxios';
import moment from 'moment';
import useAllToodoComplet from '../../hooks/useAllToodoComplet';
import useAllData from '../../hooks/useAllData';
import { useState } from 'react';
import Swal from 'sweetalert2';

const style = {
  cursor: 'move',
  float: 'left',
}
export const Box = function Box({ name, toodo, index, handelUpdate }) {
  const axiosData = useAxios()
  const { refetch } = useAllToodoComplet();
  const { refetch: relode } = useAllData();



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
        axiosData.delete(`/toodo/${id}`)
          .then(res => {
            relode()
            Swal.fire({
              title: "Deleted!",
              text: "Your Toodo has been deleted.",
              icon: "success"
            });
          })

      }
    });
  }

  // console.log(updateTodo)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        const text = item?.name;
        const time = moment().format('LTS')
        const data = { text, time }
        console.log(item.name, toodo)
        axiosData.delete(`/draktoodo/${toodo?._id}`)
          .then(res => {
            console.log(res.data)
            relode()
          })

        axiosData.post(`/draktoodo`, data)
          .then(res => {
            console.log(res.data)
            refetch()
          })
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div className='flex items-center justify-center '>
      <div className='w-3/4 pr-10 text-center flex items-center mb-1 rounded-md justify-between gap-3  flex-row-reverse border  transition-all duration-500 transform 
               hover:bg-indigo-400
  
              hover:border-yellow-500
               hover:opacity-50
               hover:shadow-md
               hover:scale-105' ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
        <div className='flex items-center gap-3'><span onClick={() => handelUpdate(toodo, index + 1)}><CiEdit /></span> <span onClick={() => handelDelete(toodo?._id)}><MdDelete /></span></div>
        <div class="flex flex-wrap gap-4 justify-center text-lg font-serif ">
          <a class=" flex-grow text-black border-l-8 border-green-500  rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
          >
            <span className='hover:text-white dark:text-white'> {name}</span>
            <div class="text-gray-500 font-thin text-sm dark:text-white text-left">
              <span>Topics: {index + 1}</span>
            </div>
          </a>
        </div>


      </div>

    </div>
  )
}