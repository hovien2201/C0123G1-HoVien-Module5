export function EditServiceComponent() {
    return (
        <div className="container boxed" style={{ marginTop: 100, width: 800 }}>
            <h2 style={{ textAlign: "center", marginTop: 20 }}>Edit Service</h2>
            <div
                id="form"
                className="form"
                style={{ marginLeft: "10%", marginRight: "10%" }}
            >
                <form action="#" method="POST" noValidate="novalidate">
                    <div className="input-group input-group-sm mg" style={{ marginTop: 30 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name Service </span>
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
                            <span className="input-group-text">Usable area </span>
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
                            <span className="input-group-text">Rental costs </span>
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
                            <span className="input-group-text">Maximum number of people </span>
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
                            <span className="input-group-text">Rental type </span>
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
                            <span className="input-group-text">Room standard </span>
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
                            <span className="input-group-text"> Number of floors </span>
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
                            <span className="input-group-text"> Pool Acreage </span>
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
                            <span className="input-group-text"> Free service included </span>
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