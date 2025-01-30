import './index.css';
import { VERSION_DETAILS } from '../../data/data';

export default function VersionsComponent() {

    return (
        <div className='versionDataContainer'>
            {
                VERSION_DETAILS.map(data => {
                    return (
                        <div className='versionRow'>
                            <div className='versionOverview'>
                                <h3>v{data.version}</h3>
                                <small>{data.date}</small>
                            </div>
                            {/* **** */}
                            <div className='versionColum'>
                                {
                                    data.added.length > 0 &&
                                    <div>
                                        <h2>Added</h2>
                                        <ul>
                                            {
                                                data.added.map(entry => {
                                                    return (
                                                        <li>
                                                            {
                                                                entry !== "" &&
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="addedIcon" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                                </svg>
                                                            }
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                                {/* ************************ */}
                                {
                                    data.fixed.length > 0 &&
                                    <div>
                                        <h2>Fixed</h2>
                                        <ul>
                                            {
                                                data.fixed.map(entry => {
                                                    return (
                                                        <li>
                                                            {
                                                                entry !== "" &&
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fixedIcon" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                                </svg>
                                                            }
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                                {/* *********************** */}
                                {
                                    data.changed.length > 0 &&
                                    <div>
                                        <h2>Changed</h2>
                                        <ul>
                                            {
                                                data.changed.map(entry => {
                                                    return (
                                                        <li>
                                                            {
                                                                entry !== "" &&
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="changedIcon" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                                </svg>
                                                            }
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
