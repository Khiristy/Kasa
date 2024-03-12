import kasafooterlogo from "../assets/kasafooterlogo.svg";



function Footer () {
    return (
    <div className="footer">
        <img src={kasafooterlogo} alt="" className="footer_logo" />
        <h3 className="footer_copyright">© 2020 Kasa. All rights reserved</h3>
    </div>
    )
}

export default Footer