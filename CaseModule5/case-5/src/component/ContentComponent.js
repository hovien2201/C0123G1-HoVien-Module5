import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'

export function ContentComponent() {
    return (
        <>
            <div className="container">
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="container">
                        <div className="d-flex col-xl-12">
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://kksapahotel.com/uploads/images/VQK_2153%20(1).jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href="edit.html"
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="#">PHÒNG SUITE HƯỚNG BIỂN</a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href="edit.html"
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            srcSet="
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg 370w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-300x194.jpg 300w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg 768w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-871x563.jpg 871w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-145x94.jpg  145w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature.jpg         900w
              "
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="#">PHÒNG SUITE HƯỚNG BIỂN</a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href="#"
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="container">
                        <div className="d-flex col-xl-12">
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://kksapahotel.com/uploads/images/VQK_2153%20(1).jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            srcSet="
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg 370w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-300x194.jpg 300w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg 768w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-871x563.jpg 871w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-145x94.jpg  145w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature.jpg         900w
              "
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="#">PHÒNG SUITE HƯỚNG BIỂN</a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href="#"
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="container">
                        <div className="d-flex col-xl-12">
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://kksapahotel.com/uploads/images/VQK_2153%20(1).jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href="edit.html"
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            srcSet="
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg 370w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-300x194.jpg 300w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg 768w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-871x563.jpg 871w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-145x94.jpg  145w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature.jpg         900w
              "
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="#">PHÒNG SUITE HƯỚNG BIỂN</a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href="#"
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="container">
                        <div className="d-flex col-xl-12">
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://kksapahotel.com/uploads/images/VQK_2153%20(1).jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="https://book-directonline.com/properties/furamaresortdanangdirect?"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        PHÒNG SUITE HƯỚNG BIỂN
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href=""
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-3">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            srcSet="
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg 370w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-300x194.jpg 300w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg 768w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-871x563.jpg 871w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-145x94.jpg  145w,
                https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature.jpg         900w
              "
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary room-qview"
                                                target="_blank"
                                            >
                                                ĐẶT PHÒNG
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="room-type">
                                                    <a href="#">PHÒNG SUITE HƯỚNG BIỂN</a>
                                                </h3>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <div className="room-card-attr">
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="2 Khách"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-two-man" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Giường King"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-double-size-bed" />
                                                    </span>
                                                    <span
                                                        data-toggle="popover"
                                                        data-trigger="hover"
                                                        data-placement="top"
                                                        data-content="Riêng Biệt"
                                                        data-original-title=""
                                                        title=""
                                                    >
                                                        <i className="icon-bathtub" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="room-size mt-0">
                                            Diện Tích Phòng: 85.8 m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-auto ml-auto">
                                                <a
                                                    href="#"
                                                    className="room-information"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <i className="icon-information" />
                                                    Xem Thêm
                                                </a>
                                                <div className="popover-content d-none">
                                                    <ul>
                                                        <li>Thang Máy Riêng</li>
                                                        <li>Truy Cập Internet Miễn Phí</li>
                                                        <li>Toàn Cảnh Hướng Biển</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a
                                                href=""
                                                className="btn btn-primary col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-danger col-sm-5"
                                                style={{ marginLeft: "5%" }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Flat Pagination Round</h4>
                                    <p className="card-description">Flat pagination round Example</p>
                                    <nav>
                                        <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    <i className="fa fa-angle-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#" data-abc="true">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    <i className="fa fa-angle-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" style={{ justifyContent: "flex-start" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>

    )
}