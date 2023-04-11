import React, { useCallback, useRef, useState } from 'react'
import SearchBar from './SearchBar'
import AddUserModal from './AddUserModal'
import fetchdata from '../../../Module/fetchdata'
import TableRow from './TableRow'
import TooManyUserMessage from './TooManyUserMessage'
import ReactLoading from 'react-loading';
import { memo } from 'react'
import { errorToast, infoToast, successToast } from '../../../Module/ToastModule'
import { baseUrl } from '../../../Module/Data'


function UserDetail() {

  const [searchDetail, setSearchDetail] = useState([]);
  const addUserModal = useRef()
  const tooManyUserMessage = useRef()
  const loader = useRef()
  // search the user from db
  const search = useCallback(async (d) => {

    if (d.length < 4) {
      setSearchDetail([])
      tooManyUserMessage.current.style.display = 'flex'
      infoToast("search term length must be more than 3 character")
      return;
    }
    setSearchDetail([])

    tooManyUserMessage.current.style.display = 'none'
    loader.current.style.display = 'flex'
    const body = JSON.stringify({ "term": d })
      const data =  await fetchdata(body, baseUrl+'/admin/user/getUserDetail');
      loader.current.style.display = 'none'

       console.log(data)
      if (data.error) {
        errorToast(data.error)
        errorToast(data.error)
        tooManyUserMessage.current.style.display = 'flex'
      } else {
        if(data.data.length){
          tooManyUserMessage.current.style.display = 'none'
          setSearchDetail(data.data)

        }else{
          infoToast('No data found ?')
          tooManyUserMessage.current.style.display = 'flex'

        }

      }


  }, [])


  const deleteUser = useCallback(async (_id) => {
    const body = JSON.stringify({ "_id": _id })
      const data = await fetchdata(body, baseUrl+'/admin/user/deleteUser');
      if (data.success) {
        successToast('deleted successfully')
        setSearchDetail(data => {
          if (data.length == 1) {
            return [];
          }
          else {
            return (data.filter(d => {
              return d._id != _id
            }))
          }
        })
      } else {
        errorToast(data.error)
      }
   
  }, [])


  const controlAddUserModal = useCallback((action, d) => {
    if (action) {
      // open the modal
      addUserModal.current.style.display = 'block'
    } else {
      addUserModal.current.style.display = 'none'
    }
  }, [])


  const edit = useCallback(d => {
    setSearchDetail((val) => {
      var b = [...val]
      var index = b.findIndex(i => {
        return i._id == d._id
      })
      b[index] = d
      return (b)
    })
  }, [])


  console.log("user detail rerender")
  return (

      <div className='w-100 h-100' style={{overflowY:"scroll"}}>

        <div ref={addUserModal} style={{ display: "none" }}>
          <AddUserModal controlAddUserModal={controlAddUserModal}  />

        </div>

        <div className=" bg-light mb-3 " >
          <div className="row d-flex justify-content-center w-100  ">
            <h3 className=' text-center fw-bold mt-3 mb-3 fs-2 '>User Detail Page</h3>

            <SearchBar search={search} />
          </div>
          <div className='d-flex justify-content-end me-5 mt-2'>
            <button className="btn btn-success fw-bold text-light" onClick={controlAddUserModal} >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>   Add User
            </button>
          </div>
        </div>
        <div className=" px-1" >
          <table className=" table-bordered border-dark table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">S_Id</th>
                <th scope="col">Profile</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                searchDetail.length > 0 ?

                  searchDetail.map(d => {
                    return (
                      <TableRow edit={edit} key={d._id} detail={d} deleteUser={deleteUser} />
                    )

                  })

                  :
                  ""
              }




            </tbody>
          </table>


          <div className='text-dark  justify-content-center mt-5' ref={tooManyUserMessage} style={{ display: "flex" }}>
            <TooManyUserMessage />
          </div>
          <div className=' align-items-center flex-column  mt-5' ref={loader} style={{ display: "none" }}>
            <ReactLoading type={'spokes'} color={'black'} height={60} width={60} />
            <span className='fs-5 mt-2 m-o p-0 fw-bold'>Loading</span>
          </div>


        </div>


      </div>



  )
}

export default memo(UserDetail)