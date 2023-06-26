
export function CreateServiceComponent() {
    return (
        <div className="container boxed" style={{ marginTop: 100, width: 800 }}>
            <h2 style={{ textAlign: "center", marginTop: 20 }}>Add Service</h2>
            <div
                id="form"
                className="form"
                style={{ marginLeft: "10%", marginRight: "10%" }}
            >
                <form action="#" method="POST" noValidate="novalidate">
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Type of service
                                <span style={{ color: "red" }}>*</span>
                            </span>
                        </div>
                        <select className="form-select">
                            <option>Vilaa</option>
                            <option>House</option>
                            <option>Room</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm mg" style={{ marginTop: 30 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Name Service
                                <span style={{ color: "red" }}>(All)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Usable area
                                <span style={{ color: "red" }}>(All)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Rental costs
                                <span style={{ color: "red" }}>(All)</span>
                            </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Maximum number of people
                                <span style={{ color: "red" }}>(All)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Rental type
                                <span style={{ color: "red" }}>(All)</span>
                            </span>
                        </div>
                        <select className="form-select">
                            <option>Year</option>
                            <option>Month</option>
                            <option>Day</option>
                            <option>Hour</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Room standard
                                <span style={{ color: "red" }}>(Villa &amp; House)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            required=""
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Description of other amenities
                                <span style={{ color: "red" }}>(Villa &amp; House)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Number of floors
                                <span style={{ color: "red" }}>(Villa &amp; House)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Pool Acreage
                                <span style={{ color: "red" }}>(Villa)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="input-group input-group-sm mg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Free service included
                                <span style={{ color: "red" }}>(Room)</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-success"
                        style={{ marginLeft: "45%" }}
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>

    )
}