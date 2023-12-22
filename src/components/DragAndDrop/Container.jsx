import { memo, useState } from 'react'

import { Dustbin } from './Dustbin.jsx'
import { Box } from './Box.jsx'
import useAllData from '../../hooks/useAllData.jsx'
import InputToodo from './InputToodo.jsx'
import useAxios from '../../hooks/useAxios.jsx'
export const Container = memo(function Container() {
  const { isPending, error, course, refetch } = useAllData()

  const axiosData = useAxios()
  const [updateName, setUpdateName] = useState('')
  const [updateId, setUpdateId] = useState(0)
  const [updateIndex, setUpdateIndex] = useState(0)

  const handelUpdate = (item, i) => {
    setUpdateName(item.name)
    setUpdateId(item?._id)
    setUpdateIndex(i)
    document.getElementById('my_modal_3').showModal()
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    const text = e.target.update.value;
    axiosData.put(`/updateTodo/${updateId}`, { text })
      .then(res => {
        refetch()
        e.target.reset()
        document.getElementById('my_modal_3').close()
      })
  }

  return (
    <div>
      <InputToodo></InputToodo>
      <div className='flex items-start gap-6 lg:flex-row flex-col'>

        <div className='flex-1 flex w-full' style={{ overflow: 'hidden', clear: 'both' }}>
          {
            course?.length > 0 && <div className='w-full'>
              {
                course?.map((item, i) => {
                  return <Box name={item?.name} toodo={item} key={i} index={i} handelUpdate={handelUpdate} />
                })
              }
            </div>
          }
        </div>
        <div className='flex-1 w-full' style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">{updateIndex}!</h3>
          <form onSubmit={handelSubmit}>
            <textarea name='update' className="textarea textarea-bordered w-full" defaultValue={updateName} placeholder="Bio"></textarea>
            <button type='submit' className='bg-primary w-full py-1 text-white text-sm rounded-md'>Update Now</button>
          </form>
        </div>
      </dialog>

    </div>
  )
})