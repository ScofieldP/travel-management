import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import { Table,Button } from 'reactstrap';
import ErrorMessage from '../misc/ErrorMessage';

function GuestPost({getGuests,setGuestEditorOpen,editGuestData}) {

    
	const [name,setName] = useState("");
	const [phoneNumber,setPhoneNumber] = useState("");
	const [address,setAddress] = useState("");
	const [IDCard,setIDCard] = useState();
    const [errorMessage,setErrorMessage] = useState(null);

    useEffect(() =>{
        if(editGuestData){
            setName(editGuestData.name ? editGuestData.name: "");
            setPhoneNumber(editGuestData.phoneNumber ? editGuestData.phoneNumber: "");
            setAddress(editGuestData.address ? editGuestData.address: "");
            setIDCard(editGuestData.IDCard ? editGuestData.IDCard: "");
        }
     },[editGuestData])

    async function saveRoom(e) {
		e.preventDefault();

		const guestData = {
			name: name ? name: undefined,
			phoneNumber: phoneNumber ? phoneNumber: undefined,
			address: address ? address: undefined,
			IDCard: IDCard ? IDCard : undefined,
		}

        try {
            await Axios.put(`http://localhost:5000/customer/${editGuestData._id}`,guestData);
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }

		getGuests();
		closeGuest()
	}

	function closeGuest(){
	    setName("");
	    setPhoneNumber("");
		setAddress("");
		setIDCard(false);
        setGuestEditorOpen(false);
	}

   return <div onClick={()=>setErrorMessage(null)} className= "employee-post">
        <div className='titleModal'>
        <h2>Thông tin khách hàng </h2>
       </div>
       <form onSubmit={saveRoom}>
        <Table borderless>
            {errorMessage && (
                <ErrorMessage
                message={errorMessage}
            
                />
            )}
            <tbody>
                <tr>
                    <th scope="row">
                        <label htmlFor ='number'>Họ và Tên</label>         
                    </th>
                    <td>
                        <input className='formInput' id = 'number' 
                        type = 'text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{marginLeft:"5px"}}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor ='floor'>SĐT</label>
                    </th>
                    <td>
                        <input className='formInput' id = 'floor' 
                        type = 'text' 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{marginLeft:"5px"}}
                        />
                    </td>
                </tr>
            
                <tr>
                    <th scope="row">
                        <label htmlFor ='price'>Địa Chỉ</label>                   
                    </th>
                    <td>
                        <input className='formInput' id = 'price' 
                        type = 'text' 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{marginLeft:"5px"}}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor ='price'>CMND/CCCD</label>                   
                    </th>
                    <td>
                        <input className='formInput' id = 'price' 
                        type = 'text' 
                        value={IDCard}
                        onChange={(e) => setIDCard(e.target.value)}
                        style={{marginLeft:"5px"}}
                        />
                    </td>
                </tr>             
            </tbody>
        </Table>

        <div className='btn-confirm'>       
         <Button
            type="submit"
            color="success"
            outline>
            Cập nhập
         </Button>
         <Button
            color="danger"
            outline
            type="button" onClick={closeGuest}>
            Thoát
         </Button>
         </div>
      </form>
   </div>;
};

export default GuestPost;