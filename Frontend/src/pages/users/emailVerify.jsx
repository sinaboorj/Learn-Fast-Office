import { useContext, useEffect, useState } from 'react'
import '../../css/emailVerify.css'
import success from '/sysImage/success.png'
import error from '/sysImage/warningSmall.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(true)
    const [validationMsg, setValidationMsg] = useState('')
    const [validStatusMsg, setValidStatusMsg] = useState(false)
    const { userID, token } = useParams();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:5500/api/${userID}/mail-verification/${token}`//localhost:متغيير 
                const result = await axios.put(url)
                if (result.data.verifyStatue) {     // تاييد ايميل 
                    setValidStatusMsg(true)
                    setValidationMsg(result.data.msg)
                    setValidUrl(true)
                } else {                          // ايميل قبلا تاييد شده است     
                    setValidStatusMsg(false)
                    setValidationMsg(result.data.msg)
                    setValidUrl(true)
                }
            } catch (error) {                      // خطاي تاييد ايميل يا خطاي لينك
                setValidUrl(false)
                setValidationMsg(`' Invalivd Link ' or ' Interner Error '`)
            }
            setIsLoading(false)
        }
        verifyEmailUrl()
    }, [userID, token])

    return (
        <>
            {isLoading && (
                <div className='contaner-verify'>
                    <h4 style={{ color: '#b7b2b2', textAlign: 'center' }}>Waiting... <img src="/sysImage/loading.gif" width={100} height={100} alt="Loading user" /></h4>
                </div>
            )
            }
            {
                validUrl && !isLoading &&
                (
                    <div className='contaner-verify'>
                        <img src={success} alt="Verify-img" className='verification-img' />
                        <h5 style={{ color: validStatusMsg ? '#b7b2b2' : 'red', textAlign: 'center' }}>{validationMsg}</h5>
                        <Link to={'/api/login:signup'} className='verifylogin'>
                            Login
                        </Link>
                    </div>
                )}
            {!validUrl && !isLoading && (
                <div className='contaner-verify'>
                    <img src={error} alt="Verify-img" className='verification-img' />
                    <h5 style={{ color: '#b7b2b2', textAlign: 'center' }}>Verification Error</h5>
                    <h6 style={{ color: '#b7b2b2' }}>{validationMsg}</h6>
                </div>
            )
                        
            }
        </>
    )
}
export default EmailVerify
