import { Link } from "react-router-dom";
import { FaColumns, FaBookOpen } from "react-icons/fa";

const SideNav = () => {
    return (
        
            
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <FaColumns className="icon" style={{display:"inline-block"}} />
                                <div className="sb-nav-link-icon"></div>
                                학습자 관리
                                <div className="sb-sidenav-collapse-arrow"></div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    
                                    <Link className="nav-link" to="learner">학습자 관리</Link>
                                    <Link className="nav-link" to="learner">출석 현황 관리</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <FaBookOpen className="icon"style={{display:"inline-block"}} />
                                <div className="sb-nav-link-icon"></div>
                                강의자 관리
                                <div className="sb-sidenav-collapse-arrow"></div>
                            </Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="teacher">강의자 관리</Link>
                                    <Link className="nav-link" to="Lecture-contract">강의 계약서 관리</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Admin
                    </div>
                </nav>
            </div>
            
        
    )

}
export default SideNav