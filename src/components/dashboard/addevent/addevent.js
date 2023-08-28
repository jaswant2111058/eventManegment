import { useState, useEffect } from "react"
import "./addevent.css"
import axios from "axios"



const AddEvent = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const [imgurl, setImgurl] = useState([])
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const baseURL = "http://localhost:5000"

    async function upload() {
        setIsLoading(true)
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile.files[0]);
        await axios.post(`${baseURL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${user.token}`
            }
        }).then((res, err) => {
            if (err) {
                window.alert(err)
                setIsLoading(false)
            }
            else {
                setImgurl([...imgurl, res.data])
                setIsLoading(false)
            }
        })
    }

    useEffect(() => {
        let filledData = JSON.parse(localStorage.getItem("incomplete"))
        for (let key in filledData) {
            if (filledData.hasOwnProperty(key)) {
                document.querySelector(`.${key}`).value = filledData[key]
            }
        }
    }, [])

    function handleChange(e) {
        let data = formData
        data[e.target.name] = e.target.value
        setFormData(data)
        localStorage.setItem("incomplete", JSON.stringify(formData))
        console.log(formData)
    }
    let imgpreview = imgurl.map((id) => {
        return (
            <>
                <img className="priview" src={baseURL + `/img/${id}`} alt="img" />
            </>
        )
    })


    async function finalSubmit() {

        let data = {
            name: formData.name,
            venue: formData.venue,
            seats: {
                front: formData.front,
                middel: formData.middel,
                back: formData.back,
                normal: formData.normal,
                primium: formData.primium,
            },
            price: {
                front: formData.pricefront,
                middel: formData.pricemiddel,
                back: formData.priceback,
                normal: formData.pricenormal,
                primium: formData.priceprimium,
            },
            user_id: user.userid,
            title: formData.title,
            content: formData.content
        }
        await axios.post(`${baseURL}/addevent`, data, {
            headers: {
                'Content-Type': '"application/json',
                'Authorization': `${user.token}`
            }
        }).then((res, err) => {
            if (err) {
                window.alert(err)
                setIsLoading(false)
            }
            else {
                window.alert(res.data.msg)
                localStorage.removeItem("incomplete")
            }
        })

    }

    return (
        <>
        <div className="mainwraper">
            <h2>EVENT DETAIL</h2>
            <div className="mainadd"> 
                <div className="upperhalf">
                    <div className="detail">
                        <p>Name Of Event</p>
                        <input className="name"
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            required
                        />

                        <p>Date</p>
                        <input className="date"
                            name="date"
                            type="date"
                            onChange={handleChange}
                            required
                        />

                        <p>Time</p>
                        <input className="time"
                            name="time"
                            type="time"
                            placeholder="Enter the time"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="upperhalf2">
                        <p>Title</p>
                        <input className="title"
                            name="title"
                            type="string"
                            placeholder="Enter the Title"
                            onChange={handleChange}
                            required
                        />
                        <p>Content</p>
                        <textarea className="content"
                            name="content"
                            type="string"
                            placeholder="Enter the content"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lowerhalf">
                        <p>Enter Seat Details</p>

                        <div className="definetag">

                            <table>
                                <tr>
                                    <td className="td">Seat Type</td>
                                    <td className="td">Total Avilable</td>
                                    <td className="td">price</td>
                                </tr>
                                <tr>
                                    <td className="td">Front</td>
                                    <td className="td">
                                        <input className="fronts"
                                        name="fronts"
                                        type="text"
                                        placeholder="Available fronts seats"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                    <td className="td">
                                        <input className="pricefronts"
                                        name="pricefronts"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>    
                                </tr>
                                <tr>
                                    <td className="td">middel</td>
                                    <td className="td">
                                        <input className="middel"
                                        name="middel"
                                        type="string"
                                        placeholder="Enter the middel"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                    <td className="td">
                                        <input className="pricemiddel"
                                        name="pricemiddel"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Back</td>
                                    <td className="td">
                                        <input className="back"
                                        name="back"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                    <td className="td">
                                        <input className="priceback"
                                        name="priceback"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Normal</td>
                                    <td className="td">
                                        <input className="normal"
                                        name="normal"
                                        type="string"
                                        placeholder="Enter the normal"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                    <td className="td">
                                        <input className="pricenormal"
                                        name="pricenormal"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">primium</td>
                                    <td className="td">
                                        <input className="primium"
                                        name="primium"
                                        type="string"
                                        placeholder="Enter the primium"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                    <td className="td">
                                        <input className="priceprimium"
                                        name="priceprimium"
                                        type="string"
                                        placeholder="Enter the back"
                                        onChange={handleChange}
                                        required
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>


                </div>
                <div className="upperhalf3">
                    <p>Upload Images </p>
                    <input className="file"
                        id="file"
                        name="image"
                        type="file"
                        accept="image/*"
                        placeholder="Enter the content"
                        required
                    />
                    <button className="imgUploadBtn" onClick={upload}>Upload </button>
                    
                    <p>Image Preview</p>
                    <div className="imgpreview">

                        {imgpreview}
                    </div>
                </div>
               
            </div>
            <button className="submitBtn" onClick={finalSubmit}>Submit</button>
            
        </div>
        </>
    )

}
export default AddEvent
