import React from 'react'
import { useState } from 'react'

import "./Description.sass"
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { useMemo } from 'react'

const navList = ["Mô tả sản phảm", "Chính sách bảo mật", "Chính sách đổi trả"]
const Description = ({ detail }) => {
    const [show, setShow] = useState(0)
    const [showAll, setShowAll] = useState(false)

    const detailStyle = useMemo(() => {
        if (showAll) {
            return {
                height: "auto",
                overflow: "unset",
            }
        }
        return {
            height: "300px",
            overflow: "hidden"
        }
    }, [showAll])

    return (
        <div className='desc mt-5'>
            <ul className="d-flex">
                {navList.map((nav, index) => {
                    if (show === index) {
                        return <li className='desc-nav desc-nav-active'>
                            {nav}
                        </li>
                    }
                    else {
                        return <li className='desc-nav' onClick={() => setShow(index)}>
                            {nav}
                        </li>
                    }
                })}
            </ul>
            <div className='desc-detail' style={{ background: "#FbFbFb" }}>
                {
                    show === 0 && <div>
                        <div className={`p-3 ${showAll ? "" : "pb-0"}`} style={{ ...detailStyle }} dangerouslySetInnerHTML={{ __html: detail }}></div>
                        {!showAll &&
                            <div className='desc-span-blur'></div>
                        }
                        <div className='desc-span d-flex'>
                            <button className='desc-btn' onClick={() => setShowAll(!showAll)}>
                                <span>{showAll ? <>Thu gọn <BsFillCaretUpFill /></> : <>Xem thêm <BsFillCaretDownFill /></>}</span>
                            </button>
                        </div>
                    </div>
                }
                {
                    show === 1 && <p className='p-3'>
                        Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.

                        Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý khách sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.

                        Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng.

                        Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.
                    </p>
                }
                {
                    show === 2 && <p className='p-3'>
                        <strong>1. Điều kiện đổi trả: <br /></strong>
                        Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:
                        <ul>
                            <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                            <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                            <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                        </ul>
                        Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
                        <br />
                        <strong>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả: <br /></strong>
                        <ul>
                            <li><strong>Thời gian thông báo đổi trả:</strong> trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                            <li><strong>Thời gian gửi chuyển trả sản phẩm:</strong> trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                            <li><strong>Địa điểm đổi trả sản phẩm:</strong> Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
                            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
                        </ul>
                    </p>
                }
            </div>
        </div>
    )
}

export default Description