import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <div className="landing-header">
                    <div className="landing-header-logo">
                        <img src="./fluxnotes_logo_color.png" alt="Flux Notes" className="landing-header-logo-image" />
                        <span className="landing-header-title">Flux Notes</span>
                    </div>
                </div>

                <div className="landing-tagline">
                    <div className="landing-tagline-title">
                        Capture and view structured real-world clinical care data.
                    </div>

                    <div className="landing-tagline-text">
                        Flux Notes is an open source, standard health record based application that will expand the
                        availability of structured high quality, longitudinal and computable health records data to
                        support clinical oncology research.
                    </div>
                </div>

                <div className="landing-mission">
                    <strong>Increase the data pool</strong> by establishing large scale, prospective collection and
                    integration of high quality clinical data across multiple clinical care sites to augment data
                    collected from clinical trials.
                </div>

                <div className="divider divider-short"></div>

                <div className="landing-capabilities">
                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_efficacy_research.svg" alt="Efficacy Research Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Inform data-driven patient care
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Understand the efficacy and safety of approved therapeutic agents in populations not
                                adequately addressed by randomized clinical trials.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_rare_diseases.svg" alt="Rare Diseases Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Drive rare disease research
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Enable research and develop effective treatments for patients with rare tumors or uncommon
                                disease subtypes.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_regimen_analysis.svg" alt="Regimen Analysis Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Inform therapeutics development
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Understand the natural history and response to therapy for diseases where multiple sequential
                                therapeutic regimens are employed.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_market_surveillance.svg" alt="Market Surveillance Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Inform regulatory decision-making
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Achieve efficient and accurate post-market surveillance of FDA-approved therapeutics.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_utilization.svg" alt="Utilization Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Optimize utilization
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Provide data for use in optimizing cancer care resource utilization.
                            </div>
                        </div>
                    </div>

                    <div className="landing-capabilities-card">
                        <div className="landing-capabilities-card-icon">
                            <img src="./landing/icon_provider_burden.svg" alt="Provider Burden Icon" />
                        </div>

                        <div className="landing-capabilities-card-description">
                            <div className="landing-capabilities-card-description-title">
                                Lower provider burden
                            </div>

                            <div className="landing-capabilities-card-description-text">
                                Reduce provider burden for collecting and viewing patient data.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider divider-short"></div>

                <div className="landing-products">
                    <div className="landing-products-lite">
                        <Paper className="landing-products-interaction">
                            <a href="/patina" id="link-to-patina">
                                <div className="landing-products-image">
                                    <img src="./landing/img_fluxnotes_lite.jpg" alt="Flux Notes Lite" />
                                </div>

                                <div className="landing-products-link">
                                    <span>Flux Notes Lite</span>
                                    <FontAwesome name="arrow-right" />
                                </div>
                            </a>
                        </Paper>

                        <div className="landing-products-description">
                            <div className="landing-products-title-mobile">
                                Flux Notes Lite
                                <span>Viewable on desktop</span>
                            </div>

                            <div className="landing-products-summary">
                                Flux Notes Lite helps clinicians capture data to drive clinical endpoints, such as
                                disease status and toxicity. This information is stored in a structured data format
                                that can be easily analyzed and shared across multiple clinical care sites.

                                <div className="landing-products-summary-divider"></div>
                            </div>

                            <div className="landing-products-text">
                                <p>
                                    Provides an easy mechanism for clinicians to generate data such as disease status
                                    and toxicity information via an interface.
                                </p>

                                <p>
                                    Allows clinicians to copy the resulting structured shorthand phrase and paste it
                                    into their EHR notes entry.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="landing-products-full">
                        <Paper className="landing-products-interaction">
                            <a href="/patient" id="link-to-full">
                                <div className="landing-products-image">
                                    <img src="./landing/Fluxnotes_full_animation.gif" alt="Flux Notes Full" />
                                </div>

                                <div className="landing-products-link">
                                    <span>Flux Notes Full</span>
                                    <FontAwesome name="arrow-right" />
                                </div>
                            </a>
                        </Paper>

                        <div className="landing-products-description">
                            <div className="landing-products-title-mobile">
                                Flux Notes Full
                                <span>Viewable on desktop</span>
                            </div>

                            <div className="landing-products-summary">
                                Flux Notes Full allows information capture via extensible structured phrases driven by
                                the Standard Health Record (SHR).

                                <div className="landing-products-summary-divider"></div>
                            </div>

                            <div className="landing-products-text">
                                <p>
                                    The clinician will be able to type, dictate, and insert templates.
                                </p>

                                <p>
                                    Allows the review of patient record summaries that are condition, domain, task,
                                    and role-specific.
                                </p>

                                <p>
                                    The approch of Flux Notes Full will be to deploy it at hospitals and integrate
                                    bi-directionally with existing EHRs.
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
                        <Button raised href="/patina" className="landing-clinical-trials-button">
                            Flux Notes for PATINA
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
                            research. Contact us to learn more about the project, or about piloting Flux Notes in a
                            clinical setting. Help grow Flux Notes by committing to
                            the <a href="https://github.com/standardhealth/flux" alt="Flux Notes Repository">repository</a> today.
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
                        <div className="landing-initiatives-logo">
                            <img src="./logos/SHR.png" alt="SHR Logo" className="shr-logo" />
                        </div>

                        <div className="landing-initiatives-description">
                            <p>
                                This tool is one of multiple open source prototypes in development by MITRE with the
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
                        <div className="landing-initiatives-logo">
                            <img src="./logos/ICARE.png" alt="ICARE Logo" className="icare-logo"/>
                            <span>ICAREdata Study</span>
                        </div>

                        <div className="landing-initiatives-description">
                            <p>
                                Flux Notes supports the ICAREdata study capture of treatment data during the authoring
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
}

export default LandingPage;
