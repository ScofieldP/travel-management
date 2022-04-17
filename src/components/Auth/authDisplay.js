import React,{useState ,useContext } from "react";
import Axios from "axios";
import Modal from 'react-modal';

import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext";
import { NavDropdown } from 'react-bootstrap';
import { Table,Button } from 'reactstrap';
import ErrorMessage from '../misc/ErrorMessage';
import './authDisplay.css';
function AuthDisPlay() {
    
    const {user} = useContext(UserContext);
    const [openEditPassword, setOpenEditPassword] = useState(false);
    const [createPassword,setCreatePassword] = useState("");
	const [createPasswordVerify,setCreatePasswordVerify] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const [createEmail,setCreateEmail] = useState("");
    const history = useHistory();

    async function logOut(){
    await Axios.get("http://localhost:5000/staff/logOut");
    history.push("/"); 
    }


    const customStyles = {
		content: {
		  top: '50%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		},
	  };

      async function saveEmployees(e) {
		e.preventDefault();

		const employeeData = {
			email: createEmail ? createEmail: undefined,
			password: createPassword ? createPassword: undefined,
			newPassword: createPasswordVerify ? createPasswordVerify: undefined,
		}

        try {
            if(window.confirm('Bạn có muốn đổi mật khẩu?')){
                await Axios.put("http://localhost:5000/staff/change/password",employeeData);
            }          

        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
		closeEmployee()
	}

	function closeEmployee(){
        setCreateEmail("");
        setCreatePassword("");
        setCreatePasswordVerify("");
        setOpenEditPassword(false);
	}

    async function resetPassword(){
        if(window.confirm('Mật khẩu mới của bạn là: 123456. Đề nghị thay đổi mật khẩu để đảm bảo an toàn')){
            await Axios.put("http://localhost:5000/staff/reset/password");
        }
    }

    return <div className ="auth-display">
    {
        user ===null ?(
            <div className = "auth">
                <a href='/login' className='login'>Đăng Nhập</a>
            </div>
        ):( 
            user && (<>
                
                {/* <div className = "auth">
                <h5 className="title-nameUser">Xin chào, {user}</h5>
                <a href='/' onClick={logOut} className='sign logout'>Log out</a>
                </div> */}
                <NavDropdown
                id="nav-dropdown-dark-example"
                title= {"Xin Chào, "+ user}
                menuVariant="dark"
                >
                    <NavDropdown.Item href="/">
                        Trang chủ
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logOut} href="/">Đăng Xuất</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4"
                    onClick={() => setOpenEditPassword(true)}
                    >
                        Đổi Mật Khẩu
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={resetPassword}>Quên Mật Khẩu</NavDropdown.Item>
                </NavDropdown>
                <Modal
                    isOpen={openEditPassword && user}
                    style={customStyles}
                    onRequestClose={!openEditPassword}
                    contentLabel="Example Modal">
                        <form onSubmit={saveEmployees}>
                            <Table borderless>
                                {errorMessage && (
                                    <ErrorMessage
                                    message={errorMessage}
                                    clear={() => setErrorMessage(null)}
                                    />
                                )}
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor ='editor-nameOfRoom'>Email</label>                   
                                        </th>
                                        <td>
                                            <input id = 'editor-nameOfRoom' 
                                            type = 'text' 
                                            value={createEmail}
                                            onChange={(e) => setCreateEmail(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor ='editor-password'>Mật khẩu hiện tại</label>
                                        </th>
                                        <td>
                                            <input id = 'editor-password' 
                                            type = 'password' 
                                            value={createPassword}
                                            onChange={(e) => setCreatePassword(e.target.value)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor ='editor-passwordVery'>Mật khẩu mới</label>
                                        </th>
                                        <td>
                                            <input id = 'editor-passwordVery' 
                                            type = 'password'
                                            value={createPasswordVerify}
                                            onChange={(e) => setCreatePasswordVerify(e.target.value)}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Button
                                type="submit"
                                color="success"
                                outline>
                                Cập Nhập
                            </Button>
                            <Button
                                color="danger"
                                outline
                                type="button" onClick={closeEmployee}>
                                Thoát
                            </Button>
                    </form>
				</Modal>
            </>               
    ))}
    </div>;
};

export default AuthDisPlay;