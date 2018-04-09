import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper';
import Button from '../elements/Button';
import '../styles/LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <div className="landing-header">
                    <div className="landing-header-logo">
                        <img src="./fluxnotes_logo_color.png" alt="Flux Notes" className="landing-header-logo-image" />
                        <span className="landing-header-title">Flux Notes</span>
                        <span className="landing-header-trademark">™</span>
                    </div>
                </div>

                <div className="landing-tagline">
                    <div className="landing-tagline-title">
                        Capture and view structured real-world clinical care data.
                    </div>

                    <div className="landing-tagline-text">
                        Flux Notes™ is a proof-of-concept prototype that defines a method for capturing structured
                        data through the authoring of clinical notes.
                    </div>
                </div>

                <div className="landing-mission">
                    <strong>Align clinician incentives</strong> and <strong>reduce burden</strong> while significantly
                    improving the capture of structured clinical treatment data.
                </div>

                <div className="divider divider-short"></div>

                <div className="landing-capabilities">
                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            {this.RegimenAnalysisIcon()}
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Embrace the narrative approach
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Embrace the clinician-preferred narrative approach to capturing structured treatment
                                data during encounters using an evolving, flexible, and assistive method.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            {this.UtilizationIcon()}
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Incentivize collection of data
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Provide clinicians with the key information they need when they need it and in a
                                format that works best for them in order to incentivize collection of data.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            {this.ProviderBurdenIcon()}
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Lower clinician burden
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Allow clinicians to visualize the right information at the right time in the right
                                format based on structured data while reducing duplicate entry of information.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider divider-short"></div>

                <div className="landing-products">
                    <div className="landing-products-full">
                        <Paper className="landing-products-interaction">
                            <a href="/demo2" id="link-to-full">
                                <div className="landing-products-image">
                                    <img src="./landing/Fluxnotes_full_animation.gif" alt="Flux Notes Full" />
                                </div>

                                <div className="landing-products-link">
                                    <span>Flux Notes™</span>
                                    <FontAwesome name="arrow-right" />
                                </div>
                            </a>
                        </Paper>

                        <div className="landing-products-description">
                            <div className="landing-products-title-mobile">
                                Flux Notes™
                                <span>Viewable on desktop</span>
                            </div>

                            <div className="landing-products-summary">
                                Flux Notes™ is a concept demonstration that allows information capture via extensible
                                structured phrases driven by the Standard Health Record (SHR).

                                <div className="landing-products-summary-divider"></div>
                            </div>

                            <div className="landing-products-text">
                                <p>
                                    The clinician is able to type, dictate, and insert templates.
                                </p>

                                <p>
                                    Allows the review of patient record summaries that are condition-, domain-, task-,
                                    and role-specific.
                                </p>

                                <p>
                                    Adoption of the Flux Notes™ approach may include Electronic Health Record
                                    (EHR) adoption using structure-phrases either directly, through Flux Notes™, or
                                    through an optional or standard extensional application.
                                </p>

                                <p>
                                    A Flux Notes™ Lite version helps clinicians capture data to drive clinical endpoints, such as
                                    disease status and toxicity. This information is stored in a structured data format
                                    that can be easily analyzed and shared across multiple clinical care sites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-clinical-trial-banner">
                    <div className="landing-clinical-trial-banner-title">
                        Real World Data Capture for Clinical Trial Endpoints
                    </div>

                    <div className="landing-clinical-trial-banner-text">
                        Enable clinical research by prospectively gathering real world clinical treatment data of the
                        highest quality.
                    </div>
                </div>

                <div className="landing-clinical-trials">
                    <div className="landing-clinical-trials-section patina">
                        <Button raised href="/patina" className="landing-clinical-trials-button" id="link-to-patina">
                            Flux Notes™ for PATINA
                        </Button>

                        <div className="landing-clinical-trials-description">
                            The PATINA trial is a phase 3 trial that is exploring the effect of adding palbociclib, an
                            investigational medicine, into standard treatments for HR+/HER2+ metastatic breast cancer.
                        </div>
                    </div>
                </div>

                <div className="divider divider-long"></div>

                <div className="landing-get-involved">
                    <div className="landing-get-involved-info">
                        <div className="landing-get-involved-info-title">Get involved</div>

                        <div className="landing-get-involved-info-description">
                            Support the collection of high quality real-world data (RWD) to enable clinical oncology
                            research. Contact us to learn more about the project, or about piloting Flux Notes™ in a
                            clinical setting.
                        </div>
                    </div>

                    <div className="landing-get-involved-contact">
                        <div className="name">Andre Quina</div>
                        <div className="title">Principal Investigator</div>
                        <div className="email">aquina@mitre.org</div>
                    </div>

                    <div className="landing-get-involved-contact">
                        <div className="name">Mark Fairweather</div>
                        <div className="title">Surgical oncology fellow</div>
                        <div className="email">mfairweather@partners.org</div>
                    </div>
                </div>

                <div className="landing-initiatives-banner">Initiatives</div>

                <div className="landing-initiatives">
                    <div className="landing-initiatives-item shr">
                        <a href="http://standardhealthrecord.org/" alt="SHR Site" className="landing-initiatives-logo">
                            <img src="./logos/SHR.png" alt="SHR Logo" className="shr-logo" />
                        </a>

                        <div className="landing-initiatives-description">
                            <p>
                                This tool is one of multiple prototypes in development by MITRE with the
                                end goal of providing complete, accurate, and computable records to inform the best
                                care for each individual.
                            </p>

                            <p>
                                This application leverages
                                the <a href="http://standardhealthrecord.org/" alt="SHR Site">Standard Health Record (SHR)</a> format
                                for capturing data.
                            </p>
                        </div>
                    </div>

                    <div className="landing-initiatives-item icare">
                        <a href="http://icaredata.org/" alt="ICARE Site" className="landing-initiatives-logo">
                            <img src="./logos/ICARE.png" alt="ICARE Logo" className="icare-logo"/>
                            <span>ICAREdata Study</span>
                        </a>

                        <div className="landing-initiatives-description">
                            <p>
                                Flux Notes™ supports the ICAREdata study capture of treatment data during the authoring
                                of clinical notes. The goal of the ICAREdata study is to support the collection of high
                                quality real-world data (RWD) in a way that enables clinical oncology research.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="landing-partners-banner">Partner Organizations</div>

                <div className="landing-partners">
                    <a href="https://www.allianceforclinicaltrialsinoncology.org/" alt="Alliance Site" target="_blank">
                        <img src="./logos/Alliance.png" alt="Alliance Logo" className="landing-partners-logo alliance" />
                    </a>

                    <a href="https://www.asco.org/" alt="ASCO Site" target="_blank">
                        <img src="./logos/ASCO.png" alt="ASCO Logo" className="landing-partners-logo asco" />
                    </a>

                    <a href="https://www.mitre.org/" alt="MITRE Site" target="_blank">
                        <img src="./logos/MITRE.png" alt="MITRE Logo" className="landing-partners-logo mitre" />
                    </a>

                    <a href="http://www.dana-farber.org/" alt="Dana Farber Site" target="_blank">
                        <img src="./logos/DanaFarber.png" alt="Dana Farber Logo" className="landing-partners-logo danafarber" />
                    </a>

                    <a href="http://www.brighamandwomens.org/" alt="BWH Site" target="_blank">
                        <img src="./logos/BWH.png" alt="BWH Logo" className="landing-partners-logo bwh" />
                    </a>
                </div>
            </div>
        )
    }

    EfficacyResearchIcon() {
        return (
            <svg viewBox="0 0 48 53" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-147.000000, -496.000000)">
                        <g transform="translate(148.000000, 496.000000)">
                            <rect fill="#D2E1E8" x="4.59375" y="20.2377296" width="38.2045898" height="27.7490234" rx="2"></rect>
                            <path d="M7.85837527,3.72986666 C7.85837527,7.92157213 13.6153291,12.0460418 14.9377001,12.7422358 C16.1063668,12.0917666 22.0480745,7.76632378 22.0480745,3.72986666 C22.0480745,1.68058844 20.3713923,0.00390625 18.3221141,0.00390625 C16.8317299,0.00390625 15.461697,0.873297013 14.8717532,2.14633349 C14.2818095,0.873297013 13.0747198,0.00390625 11.5843357,0.00390625 C9.50400779,0.00390625 7.85837527,1.68058844 7.85837527,3.72986666 Z" fill="#00547E" opacity="0.9"></path>
                            <path d="M0.50390625,40.5136085 L27.5039062,18.5136085" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <path d="M4.29052734,46.6386085 L38.8447266,19.0228858" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <path d="M10.3764648,51.1688819 L44.9306641,23.5531593"  stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <path d="M9.20361329,16.8798194 L27.5649945,36.4505665" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <path d="M19.284668,16.7225928 L33.8447268,32.022886" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <path d="M25.2890625,40.3158546 L34.8447268,51.022886" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                            <polygon fill="#00547E" opacity="0.3" points="17.9851074 27.6161475 21.5231934 31.4528175 4.99584961 44.6862159 5.29199219 38.004087"></polygon>
                            <polygon fill="#00547E" opacity="0.3" points="26.2241211 39.8258643 42.4865723 26.8771339 42.1296387 46.6547218 32.4001465 46.7372413"></polygon>
                            <rect stroke="#00547E" strokeWidth="1.5" opacity="0.9" x="4.54492188" y="20.9877296" width="38.1357422" height="26.2490234" rx="2"></rect>
                            <path d="M14.8447266,15.514585 L14.8447266,33.0381233"stroke="#00547E" strokeWidth="2" opacity="0.9" strokeLinecap="round" strokeDasharray="3,5"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    RareDiseasesIcon() {
        return(
            <svg viewBox="0 0 55 54" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-373.000000, -494.000000)">
                        <g transform="translate(373.500000, 495.350000)">
                            <rect fill="#C8DAE3" x="1.23591982" y="2.10937956" width="50.3039834" height="47.4266003"></rect>
                            <path d="M1.48686705,14.7967921 L51.4274212,14.7967921" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M2.42129891,27.0588186 L51.4274212,27.0588186" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M1.45521289,2.5347657 L51.4274212,2.5347657" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M1.48064384,39.2393791 L52.8913056,39.2393791"  stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M12.7382881,2.64939596 L12.7382881,49.6505161" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M25.9641639,2.64694579 L25.9641639,49.6525572" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <path d="M38.6446783,2.6497843 L38.6446783,51.1702532" stroke="#FFFFFF" strokeWidth="2.6334" strokeLinecap="square"></path>
                            <rect fill="#FFFFFF" x="25.8690265" y="14.6584077" width="12.768" height="11.97"></rect>
                            <path d="M26.8678888,19.0277524 C26.8678888,22.2307616 31.2669516,25.3823938 32.2774154,25.9143768 C33.170429,25.4173336 37.710668,22.1121316 37.710668,19.0277524 C37.710668,17.4618367 36.4294644,16.1806331 34.8635487,16.1806331 C33.724701,16.1806331 32.6778173,16.8449609 32.2270234,17.8177267 C31.7762296,16.8449609 30.8538558,16.1806331 29.715008,16.1806331 C28.1253664,16.1806331 26.8678888,17.4618367 26.8678888,19.0277524 Z" fill="#00547E" opacity="0.9"></path>
                            <circle stroke="#00547E" strokeWidth="3.325" opacity="0.9" cx="32.540899" cy="20.3479328" r="19.8425676"></circle>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    RegimenAnalysisIcon() {
        return (
            <svg viewBox="0 0 52 51" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-584.000000, -498.000000)">
                        <g transform="translate(584.000000, 492.000000)">
                            <polygon stroke="#00547E" strokeWidth="1.5" fill="#FFFFFF" strokeLinejoin="round" transform="translate(26.112661, 41.326419) rotate(-240.000000) translate(-26.112661, -41.326419) " points="13.845083 19.6984897 38.4222315 34.0842319 38.2386377 62.9543491 13.8030909 48.2063022"></polygon>
                            <polygon stroke="#00547E" strokeWidth="1.5" fill="#FFFFFF" strokeLinejoin="round" transform="translate(26.331958, 31.371390) rotate(-240.000000) translate(-26.331958, -31.371390) " points="14.0643804 9.74346027 38.6415288 24.1292025 38.4579351 52.9993196 14.0223882 38.2512728"></polygon>
                            <polygon stroke="#00547E" strokeWidth="1.5" fill="#FFFFFF" strokeLinejoin="round" transform="translate(25.881215, 21.474365) rotate(-240.000000) translate(-25.881215, -21.474365) " points="13.6136373 -0.153564243 38.1907858 14.2321779 38.007192 43.1022951 13.5716451 28.3542483"></polygon>
                            <polyline stroke="#00547E" strokeWidth="1.5" strokeDasharray="3" points="9.5189766 26.7181084 26.6888985 17.2791435 42.3475899 26.3855889"></polyline>
                            <polygon fill="#A5C3D2" opacity="0.5" points="11.1367744 26.443084 26.67425 17.8670342 41.4307198 26.3713066 25.9760078 35.1543877"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    MarketSurveillanceIcon() {
        return (
            <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg">
                <defs><circle id="path-1" cx="22.467" cy="22.85025" r="22.174125"></circle></defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-807.000000, -495.000000)">
                        <g transform="translate(806.503906, 497.103906)">
                            <rect fill="#00547E" opacity="0.9" transform="translate(11.203227, 45.539507) rotate(45.000000) translate(-11.203227, -45.539507) " x="8.37479981" y="32.5241791" width="5.65685425" height="26.0306567" rx="2.82842712"></rect>
                            <g transform="translate(13.139609, 0.003125)">
                                <g transform="translate(0.001250, 0.066500)">
                                    <g transform="translate(0.382500, 0.000000)">
                                        <mask id="mask-2" fill="white"><use xlinkHref="#path-1"></use></mask>
                                        <g mask="url(#mask-2)">
                                            <g transform="translate(-12.288000, -4.608000)">
                                                <rect stroke="none" fill="#99BBCB" fillRule="evenodd" opacity="0.536175272" x="10.85145" y="5.376" width="48.4128563" height="46.08" rx="2.5344"></rect>
                                                <path d="M0.708985813,21.3561341 L59.1560528,21.356134" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M0.708985813,33.2601341 L59.1560528,33.260134" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M0.708985813,9.8361341 L59.1560528,9.83613403" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M4.51310772,44.8007177 L60.564904,45.1608747" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M21.9213984,8.064 L21.9213984,44.4951155" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M34.6500609,1.152 L34.6500609,52.608" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                                <path d="M46.8538642,5.7579806 L46.8538642,48.768" stroke="#FFFFFF" strokeWidth="2.5344" fill="none" strokeLinecap="square"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <circle stroke="#00547E" strokeWidth="4" opacity="0.9" cx="22.948875" cy="22.85025" r="22.174125"></circle>
                                    <rect fill="#FFFFFF" x="22.653" y="16.896" width="12.288" height="11.52"></rect>
                                    <path d="M23.6143111,21.1010836 C23.6143111,24.1836789 27.8479957,27.2168288 28.8204721,27.7288124 C29.6799138,27.250455 34.0494671,24.0695087 34.0494671,21.1010836 C34.0494671,19.594037 32.816429,18.3609989 31.3093824,18.3609989 C30.2133485,18.3609989 29.2058213,19.000352 28.7719745,19.9365476 C28.3381278,19.000352 27.4504297,18.3609989 26.3543958,18.3609989 C24.8245152,18.3609989 23.6143111,19.594037 23.6143111,21.1010836 Z" fill="#00547E"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    UtilizationIcon() {
        return (
            <svg viewBox="0 0 63 59" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1061.000000, -499.000000)">
                        <g transform="translate(1062.150000, 500.350000)">
                            <polyline fill="#D2E1E8" points="60.8727786 40.3632288 30.5821344 57.6114882 0.09140625 39.7481725 30.6794418 22.8717473 60.8727786 40.3632288"></polyline>
                            <polygon strokeOpacity="0.8" stroke="#555555" strokeWidth="1.65" fill="#FFFFFF" strokeLinejoin="round" points="30.5821344 47.3627688 0.09140625 29.499453 30.6794418 12.6230278 60.8727786 30.1145094"></polygon>
                            <polygon stroke="#185B7D" strokeWidth="1.65" fill="#FFFFFF" strokeLinejoin="round" points="29.399421 4.91805969 38.3096109 0 46.7719217 4.87689794 37.9091938 9.91368269"></polygon>
                            <path d="M37.6753721,17.0622219 L7.84812002,33.6673828" stroke="#99BBCB" strokeWidth="1.1"></path>
                            <path d="M44.8724605,21.3910103 L15.5415673,38.035318" stroke="#99BBCB" strokeWidth="1.1"></path>
                            <path d="M52.2446035,25.6514719 L22.9137102,42.2957796" stroke="#99BBCB" strokeWidth="1.1"></path>
                            <path d="M23.529862,16.9445389 L53.0385598,33.9447548" stroke="#99BBCB" strokeWidth="1.1" strokeLinecap="square"></path>
                            <path d="M16.5410059,20.9750699 L45.9173215,38.111254" stroke="#99BBCB" strokeWidth="1.1" strokeLinecap="square"></path>
                            <path d="M8.48275313,25.2500442 L37.8590687,42.3862283" stroke="#99BBCB" strokeWidth="1.1" strokeLinecap="square"></path>
                            <polygon fillOpacity="0.4" fill="#00547E" points="31.7359042 29.3546809 37.982804 25.8374365 44.4431735 29.5407299 38.2212264 33.0651038"></polygon>
                            <polygon stroke="#00547E" strokeWidth="1.65" opacity="0.8" strokeLinejoin="round" points="30.5821344 47.2456789 0.09140625 29.3823631 30.6794418 12.505938 60.8727786 29.9974195"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    ProviderBurdenIcon() {
        return (
            <svg width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Group 14</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-Copy-4" transform="translate(-901.000000, -900.000000)">
                        <g id="Group-14" transform="translate(901.000000, 900.000000)">
                            <rect id="Rectangle-9" fillOpacity="0.3" fill="#00547E" x="7.14218927" y="0.929931641" width="38.352802" height="38.352802" rx="1"></rect>
                            <rect id="Rectangle-9-Copy" fillOpacity="0.5" fill="#136187" x="11.3430281" y="6.4290749" width="38.9007556" height="38.9007556" rx="1"></rect>
                            <rect id="Rectangle-9-Copy-2" fillOpacity="0.25" fill="#00547E" x="0.986685034" y="9.79425637" width="40.2523745" height="40.2523745" rx="1"></rect>
                            <path d="M11.2990931,10.1552734 L40.6216672,10.1552734 C41.1790287,10.1552734 41.6308594,10.6109663 41.6308594,11.1538963 L41.6308594,39.1662318 L11.2990931,39.1662318 L11.2990931,10.1552734 Z" id="Rectangle-10" fill="#00547E" opacity="0.430095616"></path>
                            <path d="M16.4226114,21.278744 C16.4226114,27.1368454 24.4682195,32.9009817 26.3162938,33.873945 C27.9495594,32.9648843 36.2533696,26.9198787 36.2533696,21.278744 C36.2533696,18.4147832 33.9101291,16.0715427 31.0461683,16.0715427 C28.9632878,16.0715427 27.0486037,17.2865563 26.2241301,19.0656834 C25.3996566,17.2865563 23.7126932,16.0715427 21.6298127,16.0715427 C18.7224586,16.0715427 16.4226114,18.4147832 16.4226114,21.278744 Z" id="Shape-Copy-20" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}
