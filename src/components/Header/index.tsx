import './index.css';

export default function HeaderComponent() {
    return (
        <header>
            <div className='bradContainer'>
                <div className='brandName'>
                    <span>DUTRA changelog</span>
                    <small>By <a href="https://www.diva-software.com/" target="_blank">DivaSoftware</a></small>
                </div>
            </div>
            <p className='changelogDescription'>
                The official <strong>DUTRA</strong> space where we share the latest product changelogs, offering insights into new features, improvements, and bug fixes.
            </p>
        </header>
    )
}


